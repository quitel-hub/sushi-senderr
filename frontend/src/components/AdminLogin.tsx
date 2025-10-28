import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AdminLoginProps {
  onLogin: (isAuthenticated: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    accessCode: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Учетные данные администратора
  const ADMIN_CREDENTIALS = {
    email: 'sushi.master.admin.2024@secure-icon.com',
    accessCode: 'SUSHI-MASTER-2024-X9K7',
    password: 'SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;\',./'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при изменении данных
    if (error) setError('');
  };

  // Функция для очистки localStorage (для отладки)
  const clearAuth = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    console.log('Auth cleared');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Form data:', formData);
      console.log('Expected credentials:', ADMIN_CREDENTIALS);
      
      // Проверяем учетные данные
      const isValidEmail = formData.email === ADMIN_CREDENTIALS.email;
      const isValidAccessCode = formData.accessCode === ADMIN_CREDENTIALS.accessCode;
      const isValidPassword = formData.password === ADMIN_CREDENTIALS.password;

      console.log('Validation results:', { isValidEmail, isValidAccessCode, isValidPassword });

      if (isValidEmail && isValidAccessCode && isValidPassword) {
        // Сохраняем статус аутентификации в localStorage
        localStorage.setItem('adminAuthenticated', 'true');
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        console.log('Login successful, calling onLogin(true)');
        onLogin(true);
      } else {
        console.log('Login failed - invalid credentials');
        setError(t('admin.auth.invalidCredentials'));
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(t('admin.auth.loginError'));
    } finally {
      setIsLoading(false);
    }
  };

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
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#333',
            margin: '0 0 10px 0'
          }}>
            Вход администратора
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '14px',
            margin: 0
          }}>
            Введите данные для входа
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: '600', 
              color: '#333', 
              fontSize: '14px',
              marginBottom: '8px'
            }}>
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
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: '600', 
              color: '#333', 
              fontSize: '14px',
              marginBottom: '8px'
            }}>
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
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontWeight: '600', 
              color: '#333', 
              fontSize: '14px',
              marginBottom: '8px'
            }}>
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
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {error && (
            <div style={{
              padding: '12px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '4px',
              color: '#c33',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

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
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>

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
