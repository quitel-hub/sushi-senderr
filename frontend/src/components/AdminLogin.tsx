
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- Определение API_URL ---
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface AdminLoginProps {
  onLogin: (isAuthenticated: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { t } = useTranslation();
  
  const [step, setStep] = useState<'login' | 'verify'>('login');
  const [formData, setFormData] = useState({
    email: '',
    accessCode: '',
    password: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value.trim());
    if (error) setError('');
  };

  const clearAuth = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoginTime');
    console.log('Auth cleared');
    onLogin(false);
  };

  // --- ОБРАБОТЧИК ШАГА 1 ---
  const handleSubmitCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    console.log('AdminLogin: Отправка данных на /api/owner/login...'); // <-- ЛОГ 1

    try {
      const response = await fetch(`${API_URL}/api/owner/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      console.log('AdminLogin: Получен ответ от /api/owner/login:', data); // <-- ЛОГ 2

      if (response.ok && data.success && data.status === 'pending_verification') {
        // Успех, переходим к шагу 2
        console.log('AdminLogin: Шаг 1 пройден. Переход к верификации.'); // <-- ЛОГ 3
        setStep('verify');
        setMessage(data.message || 'Код отправлен на ваш email.');
      } else {
        // Ошибка
        console.error('AdminLogin: Ошибка на Шаге 1. data.message:', data.message);
        setError(data.message || t('admin.auth.invalidCredentials'));
      }

    } catch (err) {
      console.error('AdminLogin: Ошибка сети или fetch:', err);
      setError(t('admin.auth.loginError'));
    } finally {
      setIsLoading(false);
    }
  };

  // --- ОБРАБОТЧИК ШАГА 2 ---
  const handleSubmitVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    console.log('AdminLogin: Отправка кода на /api/owner/verify-login...');

    try {
      const response = await fetch(`${API_URL}/api/owner/verify-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          code: verificationCode,
        }),
      });

      const data = await response.json();
      
      console.log('AdminLogin: Получен ответ от /api/owner/verify-login:', data);

      if (response.ok && data.success && data.status === 'verified') {
        // ПОЛНЫЙ УСПЕХ!
        console.log('AdminLogin: Шаг 2 пройден. Вход выполнен.');
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        onLogin(true);
      } else {
        // Ошибка верификации
        console.error('AdminLogin: Ошибка на Шаге 2. data.message:', data.message);
        setError(data.message || 'Неверный код верификации.');
      }
    } catch (err) {
      console.error('AdminLogin: Ошибка сети или fetch при верификации:', err);
      setError(t('admin.auth.loginError'));
    } finally {
      setIsLoading(false);
    }
  };


  // --- ВОТ ГЛАВНОЕ ИЗМЕНЕНИЕ ---
  // Если `step` равен 'verify', мы показываем СОВЕРШЕННО ДРУГОЙ КОД
  if (step === 'verify') {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '40px',
        background: 'yellow',
        color: 'black',
        border: '10px solid red',
        zIndex: 9999
      }}>
        <h1 style={{color: 'black', fontSize: '24px'}}>ШАГ 2: ВЕРИФИКАЦИЯ</h1>
        <p style={{color: 'black', fontSize: '18px'}}>Если вы видите этот желтый экран, значит, все работает!</p>
        <p style={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>Сообщение от сервера: {message}</p>
        
        <form onSubmit={handleSubmitVerification} style={{ marginTop: '20px' }}>
          <div>
            <label style={{color: 'black', display: 'block', marginBottom: '5px'}}>
              Код с почты:
            </label>
            <input
              type="text"
              name="verificationCode"
              value={verificationCode}
              onChange={handleCodeChange}
              placeholder="XXXXXX"
              maxLength={6}
              style={{ border: '2px solid black', padding: '10px', fontSize: '16px' }}
            />
          </div>
          
          <button type="submit" disabled={isLoading} style={{ background: 'green', color: 'white', padding: '10px 20px', fontSize: '16px', marginTop: '10px', border: 'none', cursor: 'pointer' }}>
            {isLoading ? 'Проверка...' : 'Войти'}
          </button>
        </form>
        
        {error && <p style={{color: 'red', fontWeight: 'bold', fontSize: '18px'}}>ОШИБКА: {error}</p>}
        
        <button type="button" onClick={() => { setStep('login'); setError(''); setMessage(''); }} style={{ background: 'gray', color: 'white', padding: '10px 20px', fontSize: '16px', marginTop: '30px', border: 'none', cursor: 'pointer' }}>
          Назад
        </button>
      </div>
    );
  }

  // --- Если step === 'login', мы показываем старую форму ---
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        
        {/* --- ШАГ 1: ВВОД КРЕДЕНШИАЛОВ --- */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
            Вход администратора
          </h1>
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
            Введите данные для входа
          </p>
        </div>
        <form onSubmit={handleSubmitCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Введите email"
              required
              autoComplete="email"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
              Код доступа
            </label>
            <input
              type="text"
              name="accessCode"
              value={formData.accessCode}
              onChange={handleInputChange}
              placeholder="Введите код доступа"
              required
              autoComplete="off"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
              Пароль
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Введите пароль"
              required
              autoComplete="current-password"
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.6 : 1
            }}
          >
            {isLoading ? 'Проверка...' : 'Далее'}
          </button>
        </form>

        {/* --- ОТОБРАЖЕНИЕ ОШИБОК --- */}
        {error && (
          <div style={{
            marginTop: '20px',
            padding: '12px',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '4px',
            color: '#c33',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          fontSize: '12px',
          color: '#999'
        }}>
          <p style={{ margin: '0 0 10px 0' }}>
            Только для авторизованных администраторов
          </p> 
          <button 
            type="button" 
            onClick={clearAuth}
            style={{ 
              padding: '5px 10px', 
              fontSize: '12px', 
              background: '#f0f0f0', 
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Очистить аутентификацию (отладка)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
