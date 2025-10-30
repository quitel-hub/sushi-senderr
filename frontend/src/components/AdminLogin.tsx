// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// interface AdminLoginProps {
//   onLogin: (isAuthenticated: boolean) => void;
// }

// const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Учетные данные администратора
//   const ADMIN_CREDENTIALS = {
//     email: 'sushi.master.admin.2024@secure-icon.com',
//     accessCode: 'SUSHI-MASTER-2024-X9K7',
//     password: 'SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;\',./'
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Очищаем ошибку при изменении данных
//     if (error) setError('');
//   };

//   // Функция для очистки localStorage (для отладки)
//   const clearAuth = () => {
//     localStorage.removeItem('adminAuthenticated');
//     localStorage.removeItem('adminLoginTime');
//     console.log('Auth cleared');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       console.log('Form data:', formData);
//       console.log('Expected credentials:', ADMIN_CREDENTIALS);
      
//       // Проверяем учетные данные
//       const isValidEmail = formData.email === ADMIN_CREDENTIALS.email;
//       const isValidAccessCode = formData.accessCode === ADMIN_CREDENTIALS.accessCode;
//       const isValidPassword = formData.password === ADMIN_CREDENTIALS.password;

//       console.log('Validation results:', { isValidEmail, isValidAccessCode, isValidPassword });

//       if (isValidEmail && isValidAccessCode && isValidPassword) {
//         // Сохраняем статус аутентификации в localStorage
//         localStorage.setItem('adminAuthenticated', 'true');
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
//         console.log('Login successful, calling onLogin(true)');
//         onLogin(true);
//       } else {
//         console.log('Login failed - invalid credentials');
//         setError(t('admin.auth.invalidCredentials'));
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f5f5f5'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '40px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         maxWidth: '400px',
//         width: '100%'
//       }}>
//         <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//           <h1 style={{ 
//             fontSize: '24px', 
//             fontWeight: 'bold', 
//             color: '#333',
//             margin: '0 0 10px 0'
//           }}>
//             Вход администратора
//           </h1>
//           <p style={{ 
//             color: '#666', 
//             fontSize: '14px',
//             margin: 0
//           }}>
//             Введите данные для входа
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//           <div>
//             <label style={{ 
//               display: 'block', 
//               fontWeight: '600', 
//               color: '#333', 
//               fontSize: '14px',
//               marginBottom: '8px'
//             }}>
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Введите email"
//               required
//               autoComplete="email"
//               style={{
//                 width: '100%',
//                 padding: '12px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 fontSize: '16px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>

//           <div>
//             <label style={{ 
//               display: 'block', 
//               fontWeight: '600', 
//               color: '#333', 
//               fontSize: '14px',
//               marginBottom: '8px'
//             }}>
//               Код доступа
//             </label>
//             <input
//               type="text"
//               name="accessCode"
//               value={formData.accessCode}
//               onChange={handleInputChange}
//               placeholder="Введите код доступа"
//               required
//               autoComplete="off"
//               style={{
//                 width: '100%',
//                 padding: '12px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 fontSize: '16px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>

//           <div>
//             <label style={{ 
//               display: 'block', 
//               fontWeight: '600', 
//               color: '#333', 
//               fontSize: '14px',
//               marginBottom: '8px'
//             }}>
//               Пароль
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Введите пароль"
//               required
//               autoComplete="current-password"
//               style={{
//                 width: '100%',
//                 padding: '12px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 fontSize: '16px',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>

//           {error && (
//             <div style={{
//               padding: '12px',
//               backgroundColor: '#fee',
//               border: '1px solid #fcc',
//               borderRadius: '4px',
//               color: '#c33',
//               fontSize: '14px'
//             }}>
//               {error}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isLoading}
//             style={{
//               padding: '12px 24px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: isLoading ? 'not-allowed' : 'pointer',
//               opacity: isLoading ? 0.6 : 1
//             }}
//           >
//             {isLoading ? 'Вход...' : 'Войти'}
//           </button>
//         </form>

//         <div style={{ 
//           marginTop: '20px', 
//           textAlign: 'center',
//           fontSize: '12px',
//           color: '#999'
//         }}>
//           <p style={{ margin: '0 0 10px 0' }}>
//             Только для авторизованных администраторов
//           </p>
//           <button 
//             type="button" 
//             onClick={clearAuth}
//             style={{ 
//               padding: '5px 10px', 
//               fontSize: '12px', 
//               background: '#f0f0f0', 
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Очистить аутентификацию (отладка)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };




// // export default AdminLogin;
// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// // --- НОВОЕ: Определение API_URL ---
// // Используем VITE_API_URL из .env.local или .env, или дефолтный
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// interface AdminLoginProps {
//   onLogin: (isAuthenticated: boolean) => void;
// }

// const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
//   const { t } = useTranslation();
  
//   // --- НОВЫЕ СОСТОЯНИЯ ---
//   const [step, setStep] = useState<'login' | 'verify'>('login');
//   const [formData, setFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
//   const [verificationCode, setVerificationCode] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
  
//   // --- УДАЛЕНЫ: ADMIN_CREDENTIALS (они теперь только на сервере) ---

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (error) setError('');
//   };

//   const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVerificationCode(e.target.value);
//     if (error) setError('');
//   };

//   // Функция для очистки localStorage
//   const clearAuth = () => {
//     // --- ОБНОВЛЕНО: Очищаем токен ---
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminLoginTime');
//     console.log('Auth cleared');
//     onLogin(false); // Также выходим из системы
//   };

//   // --- НОВЫЙ ОБРАБОТЧИК: Шаг 1 (Отправка логина и пароля) ---
//   const handleSubmitCredentials = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setMessage('');

//     try {
//       const response = await fetch(`${API_URL}/api/owner/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok && data.success && data.status === 'pending_verification') {
//         // Успех, переходим к шагу 2
//         setStep('verify');
//         setMessage(data.message || 'Код отправлен на ваш email.');
//       } else {
//         // Ошибка
//         setError(data.message || t('admin.auth.invalidCredentials'));
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- НОВЫЙ ОБРАБОТЧИК: Шаг 2 (Отправка кода верификации) ---
//   const handleSubmitVerification = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await fetch(`${API_URL}/api/owner/verify-login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           code: verificationCode,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success && data.status === 'verified') {
//         // ПОЛНЫЙ УСПЕХ!
//         // Сохраняем токен и время входа
//         localStorage.setItem('adminToken', data.token); // <--- Сохраняем токен
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
//         console.log('Login successful, calling onLogin(true)');
//         onLogin(true);
//       } else {
//         // Ошибка верификации
//         setError(data.message || 'Неверный код верификации.');
//       }
//     } catch (err) {
//       console.error('Verification error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f5f5f5'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '40px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         maxWidth: '400px',
//         width: '100%'
//       }}>
        
//         {/* --- ШАГ 1: ВВОД КРЕДЕНШИАЛОВ --- */}
//         {step === 'login' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Вход администратора
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 Введите данные для входа
//               </p>
//             </div>
//             <form onSubmit={handleSubmitCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Введите email"
//                   required
//                   autoComplete="email"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код доступа
//                 </label>
//                 <input
//                   type="text"
//                   name="accessCode"
//                   value={formData.accessCode}
//                   onChange={handleInputChange}
//                   placeholder="Введите код доступа"
//                   required
//                   autoComplete="off"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Пароль
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Введите пароль"
//                   required
//                   autoComplete="current-password"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Проверка...' : 'Далее'}
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ШАГ 2: ВВОД КОДА ВЕРИФИКАЦИИ --- */}
//         {step === 'verify' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Подтверждение входа
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 {message || 'Мы отправили код на ваш email.'}
//               </p>
//             </div>
//             <form onSubmit={handleSubmitVerification} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код верификации (6 цифр)
//                 </label>
//                 <input
//                   type="text"
//                   name="verificationCode"
//                   value={verificationCode}
//                   onChange={handleCodeChange}
//                   placeholder="XXXXXX"
//                   required
//                   autoComplete="one-time-code"
//                   maxLength={6}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     border: '1px solid #ddd',
//                     borderRadius: '4px',
//                     fontSize: '16px',
//                     textAlign: 'center',
//                     letterSpacing: '0.5em',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#28a745', // Зеленая кнопка
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Вход...' : 'Войти'}
//               </button>
              
//               <button
//                 type="button"
//                 onClick={() => { setStep('login'); setError(''); setMessage(''); }}
//                 disabled={isLoading}
//                 style={{
//                   padding: '10px',
//                   backgroundColor: 'transparent',
//                   color: '#666',
//                   border: 'none',
//                   fontSize: '14px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Назад
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ОТОБРАЖЕНИЕ ОШИБОК --- */}
//         {error && (
//           <div style={{
//             marginTop: '20px',
//             padding: '12px',
//             backgroundColor: '#fee',
//             border: '1px solid #fcc',
//             borderRadius: '4px',
//             color: '#c33',
//             fontSize: '14px',
//             textAlign: 'center'
//           }}>
//             {error}
//           </div>
//         )}

//         <div style={{ 
//           marginTop: '20px', 
//           textAlign: 'center',
//           fontSize: '12px',
//           color: '#999'
//         }}>
//           <p style={{ margin: '0 0 10px 0' }}>
//             Только для авторизованных администраторов
//           </p>
//           <button 
//             type="button" 
//             onClick={clearAuth}
//             style={{ 
//               padding: '5px 10px', 
//               fontSize: '12px', 
//               background: '#f0f0f0', 
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Очистить аутентификацию (отладка)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;







// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// // --- Определение API_URL ---
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// interface AdminLoginProps {
//   onLogin: (isAuthenticated: boolean) => void;
// }

// const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
//   const { t } = useTranslation();
  
//   const [step, setStep] = useState<'login' | 'verify'>('login');
//   const [formData, setFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
//   const [verificationCode, setVerificationCode] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
  

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (error) setError('');
//   };

//   const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVerificationCode(e.target.value.trim()); // Добавлено .trim() для удаления пробелов
//     if (error) setError('');
//   };

//   const clearAuth = () => {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminLoginTime');
//     console.log('Auth cleared');
//     onLogin(false);
//   };

//   // --- ОБНОВЛЕННЫЙ ОБРАБОТЧИК (ШАГ 1) ---
//   const handleSubmitCredentials = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setMessage('');

//     try {
//       const response = await fetch(`${API_URL}/api/owner/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       // --- НОВОЕ: ЛОГИРОВАНИЕ ОТВЕТА СЕРВЕРА ---
//       console.log('Ответ от /api/owner/login:', data);

//       // --- НОВАЯ, БОЛЕЕ НАДЕЖНАЯ ЛОГИКА ПРОВЕРКИ ---
//       if (response.ok && data.success && data.status === 'pending_verification') {
//         // Успех, переходим к шагу 2
//         console.log('Шаг 1 пройден. Переход к верификации.');
//         setStep('verify');
//         setMessage(data.message || 'Код отправлен на ваш email.');
//       } else {
//         // Ошибка
//         console.error('Ошибка на Шаге 1. data.message:', data.message);
//         // Убедимся, что не показываем сообщение об успехе как ошибку
//         if (data.status === 'pending_verification') {
//            setError('Ошибка клиента: что-то пошло не так. Проверьте консоль.');
//         } else {
//            setError(data.message || t('admin.auth.invalidCredentials'));
//         }
//       }
//       // --- КОНЕЦ НОВОЙ ЛОГИКИ ---

//     } catch (err) {
//       console.error('Login error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- ОБНОВЛЕННЫЙ ОБРАБОТЧИК (ШАГ 2) ---
//   const handleSubmitVerification = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await fetch(`${API_URL}/api/owner/verify-login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           code: verificationCode, // уже обрезанный
//         }),
//       });

//       const data = await response.json();
      
//       // --- НОВОЕ: ЛОГИРОВАНИЕ ОТВЕТА СЕРВERA ---
//       console.log('Ответ от /api/owner/verify-login:', data);

//       if (response.ok && data.success && data.status === 'verified') {
//         // ПОЛНЫЙ УСПЕХ!
//         console.log('Шаг 2 пройден. Вход выполнен.');
//         localStorage.setItem('adminToken', data.token);
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
//         onLogin(true);
//       } else {
//         // Ошибка верификации
//         console.error('Ошибка на Шаге 2. data.message:', data.message);
//         setError(data.message || 'Неверный код верификации.');
//       }
//     } catch (err) {
//       console.error('Verification error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f5f5f5'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '40px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         maxWidth: '400px',
//         width: '100%'
//       }}>
        
//         {/* --- ШАГ 1: ВВОД КРЕДЕНШИАЛОВ --- */}
//         {step === 'login' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Вход администратора
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 Введите данные для входа
//               </p>
//             </div>
//             <form onSubmit={handleSubmitCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Введите email"
//                   required
//                   autoComplete="email"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код доступа
//                 </label>
//                 <input
//                   type="text"
//                   name="accessCode"
//                   value={formData.accessCode}
//                   onChange={handleInputChange}
//                   placeholder="Введите код доступа"
//                   required
//                   autoComplete="off"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Пароль
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Введите пароль"
//                   required
//                   autoComplete="current-password"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Проверка...' : 'Далее'}
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ШАГ 2: ВВОД КОДА ВЕРИФИКАЦИИ --- */}
//         {step === 'verify' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Подтверждение входа
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 {message || 'Мы отправили код на ваш email.'}
//               </p>
//             </div>
//             <form onSubmit={handleSubmitVerification} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код верификации (6 цифр)
//                 </label>
//                 <input
//                   type="text"
//                   name="verificationCode"
//                   value={verificationCode}
//                   onChange={handleCodeChange}
//                   placeholder="XXXXXX"
//                   required
//                   autoComplete="one-time-code"
//                   maxLength={6}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     border: '1px solid #ddd',
//                     borderRadius: '4px',
//                     fontSize: '16px',
//                     textAlign: 'center',
//                     letterSpacing: '0.5em',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#28a745', // Зеленая кнопка
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Вход...' : 'Войти'}
//               </button>
              
//               <button
//                 type="button"
//                 onClick={() => { setStep('login'); setError(''); setMessage(''); }}
//                 disabled={isLoading}
//                 style={{
//                   padding: '10px',
//                   backgroundColor: 'transparent',
//                   color: '#666',
//                   border: 'none',
//                   fontSize: '14px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Назад
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ОТОБРАЖЕНИЕ ОШИБОК --- */}
//         {error && (
//           <div style={{
//             marginTop: '20px',
//             padding: '12px',
//             backgroundColor: '#fee',
//             border: '1px solid #fcc',
//             borderRadius: '4px',
//             color: '#c33',
//             fontSize: '14px',
//             textAlign: 'center'
//           }}>
//             {error}
//           </div>
//         )}

//         <div style={{ 
//           marginTop: '20px', 
//           textAlign: 'center',
//           fontSize: '12px',
//           color: '#999'
//         }}>
//           <p style={{ margin: '0 0 10px 0' }}>
//             Только для авторизованных администраторов
//           </p>
//           <button 
//             type="button" 
//             onClick={clearAuth}
//             style={{ 
//               padding: '5px 10px', 
//               fontSize: '12px', 
//               background: '#f0f0f0', 
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Очистить аутентификацию (отладка)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;













// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// // --- Определение API_URL ---
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// interface AdminLoginProps {
//   onLogin: (isAuthenticated: boolean) => void;
// }

// const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
//   const { t } = useTranslation();
  
//   const [step, setStep] = useState<'login' | 'verify'>('login');
//   const [formData, setFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
//   const [verificationCode, setVerificationCode] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
  

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (error) setError('');
//   };

//   const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVerificationCode(e.target.value.trim()); // Добавлено .trim() для удаления пробелов
//     if (error) setError('');
//   };

//   const clearAuth = () => {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminLoginTime');
//     console.log('Auth cleared');
//     onLogin(false);
//   };

//   // --- ОБРАБОТЧИК ШАГА 1 ---
//   const handleSubmitCredentials = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setMessage('');
    
//     // --- УБЕДИТЕСЬ, ЧТО ЭТА СТРОКА ЕСТЬ! ---
//     console.log('AdminLogin: Отправка данных на /api/owner/login...'); 

//     try {
//       const response = await fetch(`${API_URL}/api/owner/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       // --- И ЭТА СТРОКА ТОЖЕ! ---
//       console.log('AdminLogin: Получен ответ от /api/owner/login:', data);

//       if (response.ok && data.success && data.status === 'pending_verification') {
//         // Успех, переходим к шагу 2
//         console.log('AdminLogin: Шаг 1 пройден. Переход к верификации.');
//         setStep('verify');
//         setMessage(data.message || 'Код отправлен на ваш email.');
//       } else {
//         // Ошибка
//         console.error('AdminLogin: Ошибка на Шаге 1. data.message:', data.message);
//         setError(data.message || t('admin.auth.invalidCredentials'));
//       }

//     } catch (err) {
//       console.error('AdminLogin: Ошибка сети или fetch:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- ОБРАБОТЧИК ШАГА 2 ---
//   const handleSubmitVerification = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
    
//     console.log('AdminLogin: Отправка кода на /api/owner/verify-login...');

//     try {
//       const response = await fetch(`${API_URL}/api/owner/verify-login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           code: verificationCode, // уже обрезанный
//         }),
//       });

//       const data = await response.json();
      
//       console.log('AdminLogin: Получен ответ от /api/owner/verify-login:', data);

//       if (response.ok && data.success && data.status === 'verified') {
//         // ПОЛНЫЙ УСПЕХ!
//         console.log('AdminLogin: Шаг 2 пройден. Вход выполнен.');
//         localStorage.setItem('adminToken', data.token);
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
//         onLogin(true);
//       } else {
//         // Ошибка верификации
//         console.error('AdminLogin: Ошибка на Шаге 2. data.message:', data.message);
//         setError(data.message || 'Неверный код верификации.');
//       }
//     } catch (err) {
//       console.error('AdminLogin: Ошибка сети или fetch при верификации:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f5f5f5'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '40px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         maxWidth: '400px',
//         width: '100%'
//       }}>
        
//         {/* --- ШАГ 1: ВВОД КРЕДЕНШИАЛОВ --- */}
//         {step === 'login' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Вход администратора
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 Введите данные для входа
//               </p>
//             </div>
//             <form onSubmit={handleSubmitCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Введите email"
//                   required
//                   autoComplete="email"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код доступа
//                 </label>
//                 <input
//                   type="text"
//                   name="accessCode"
//                   value={formData.accessCode}
//                   onChange={handleInputChange}
//                   placeholder="Введите код доступа"
//                   required
//                   autoComplete="off"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Пароль
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Введите пароль"
//                   required
//                   autoComplete="current-password"
//                   style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', boxSizing: 'border-box' }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Проверка...' : 'Далее'}
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ШАГ 2: ВВОД КОДА ВЕРИФИКАЦИИ --- */}
//         {step === 'verify' && (
//           <>
//             <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//               <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' }}>
//                 Подтверждение входа
//               </h1>
//               <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
//                 {message || 'Мы отправили код на ваш email.'}
//               </p>
//             </div>
//             <form onSubmit={handleSubmitVerification} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <div>
//                 <label style={{ display: 'block', fontWeight: '600', color: '#333', fontSize: '14px', marginBottom: '8px' }}>
//                   Код верификации (6 цифр)
//                 </label>
//                 <input
//                   type="text"
//                   name="verificationCode"
//                   value={verificationCode}
//                   onChange={handleCodeChange}
//                   placeholder="XXXXXX"
//                   required
//                   autoComplete="one-time-code"
//                   maxLength={6}
//                   style={{
//                     width: '100%',
//                     padding: '12px',
//                     border: '1px solid #ddd',
//                     borderRadius: '4px',
//                     fontSize: '16px',
//                     textAlign: 'center',
//                     letterSpacing: '0.5em',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 style={{
//                   padding: '12px 24px',
//                   backgroundColor: '#28a745', // Зеленая кнопка
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   cursor: isLoading ? 'not-allowed' : 'pointer',
//                   opacity: isLoading ? 0.6 : 1
//                 }}
//               >
//                 {isLoading ? 'Вход...' : 'Войти'}
//               </button>
              
//               <button
//                 type="button"
//                 onClick={() => { setStep('login'); setError(''); setMessage(''); }}
//                 disabled={isLoading}
//                 style={{
//                   padding: '10px',
//                   backgroundColor: 'transparent',
//                   color: '#666',
//                   border: 'none',
//                   fontSize: '14px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Назад
//               </button>
//             </form>
//           </>
//         )}

//         {/* --- ОТОБРАЖЕНИЕ ОШИБОК --- */}
//         {error && (
//           <div style={{
//             marginTop: '20px',
//             padding: '12px',
//             backgroundColor: '#fee',
//             border: '1px solid #fcc',
//             borderRadius: '4px',
//             color: '#c33',
//             fontSize: '14px',
//             textAlign: 'center'
//           }}>
//             {error}
//           </div>
//         )}

//         <div style={{ 
//           marginTop: '20px', 
//           textAlign: 'center',
//           fontSize: '12px',
//           color: '#999'
//         }}>
//           <p style={{ margin: '0 0 10px 0' }}>
//             Только для авторизованных администраторов
//           </p>
//           <button 
//             type="button" 
//             onClick={clearAuth}
//             style={{ 
//               padding: '5px 10px', 
//               fontSize: '12px', 
//               background: '#f0f0f0', 
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Очистить аутентификацию (отладка)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;











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
