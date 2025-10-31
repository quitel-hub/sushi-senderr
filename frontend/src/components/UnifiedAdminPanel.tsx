// import React, { useState, useEffect, useCallback } from 'react';
// import { useTranslation } from 'react-i18next';

// interface Customer {
//   id: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   email?: string;
//   country?: string;
//   city?: string;
//   street?: string;
//   postalCode?: string;
//   birthDate?: string;
//   preferredFood?: string;
//   feedback?: string;
//   discountCode: string;
//   createdAt: string;
// }

// interface LoginSession {
//   id: string;
//   loginAt: string;
//   isSuccessful: boolean;
//   ipAddress?: string;
//   location?: string;
//   browser?: string;
//   os?: string;
//   device?: string;
//   country?: string;
//   city?: string;
//   timezone?: string;
//   isp?: string;
//   region?: string;
//   deviceType?: string;
//   deviceModel?: string;
//   browserName?: string;
//   browserVersion?: string;
//   osName?: string;
//   osVersion?: string;
//   countryCode?: string;
//   regionCode?: string;
//   postal?: string;
//   currency?: string;
//   currencyName?: string;
//   languages?: string;
//   countryPopulation?: number;
//   countryArea?: number;
//   countryCapital?: string;
//   continent?: string;
//   isEu?: boolean;
//   callingCode?: string;
//   utcOffset?: string;
// }

// interface DeviceInfo {
//   ip: string;
//   country: string;
//   city: string;
//   timezone: string;
//   isp: string;
//   browser: string;
//   os: string;
//   device: string;
// }

// interface SyncedData {
//   customers: Customer[];
//   sessions: LoginSession[];
//   deviceInfo: DeviceInfo;
// }

// interface UnifiedAdminPanelProps {
//   onLogout?: () => void;
// }

// const UnifiedAdminPanel: React.FC<UnifiedAdminPanelProps> = ({ onLogout }) => {
//   const { t } = useTranslation();
//   const BRAND_IMAGE_URL = (typeof window !== 'undefined' && window.localStorage?.getItem('brandImageUrl')) || '/src/assets/sushi-icon-logo.svg';
  
//   // Состояние аутентификации
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   // Состояние формы входа
//   const [formData, setFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
  
//   // Состояние панели администратора
//   const [activeTab, setActiveTab] = useState<'customers' | 'sessions' | 'device' | 'sync'>('customers');
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const [loginSessions, setLoginSessions] = useState<LoginSession[]>([]);
//   const [currentDeviceInfo, setCurrentDeviceInfo] = useState<DeviceInfo | null>(null);
//   const [syncedData, setSyncedData] = useState<SyncedData | null>(null);
//   const [isLoadingData, setIsLoadingData] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCountry, setFilterCountry] = useState('');
//   const [filterDate, setFilterDate] = useState('');
//   const [broadcastMessage, setBroadcastMessage] = useState({ title: '', body: '' });
//   const [isBroadcasting, setIsBroadcasting] = useState(false);
//   const [broadcastChannel, setBroadcastChannel] = useState<'sms' | 'email'>('sms');
//   const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);

//   // Учетные данные администратора
//   const ADMIN_CREDENTIALS = {
//     email: 'sushi.master.admin.2024@secure-icon.com',
//     accessCode: 'SUSHI-MASTER-2024-X9K7',
//     password: 'SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;\',./'
//   };

//   // Проверка аутентификации при загрузке
//   useEffect(() => {
//     const checkAuth = () => {
//       const authStatus = localStorage.getItem('adminAuthenticated');
//       const loginTime = localStorage.getItem('adminLoginTime');

//       if (authStatus === 'true' && loginTime) {
//         const loginDate = new Date(loginTime);
//         const now = new Date();
//         const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

//         // Сессия действительна 24 часа
//         if (hoursDiff < 24) {
//           setIsAuthenticated(true);
//         } else {
//           // Сессия истекла
//           localStorage.removeItem('adminAuthenticated');
//           localStorage.removeItem('adminLoginTime');
//           setIsAuthenticated(false);
//         }
//       } else {
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // Загрузка данных после аутентификации
//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchData();
//     }
//   }, [isAuthenticated]);

//   // Автосинхронизация каждые 1 секунду без визуального мерцания
//   useEffect(() => {
//     if (!isAuthenticated) return;
//     const interval = setInterval(() => {
//       fetchData();
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [isAuthenticated, fetchData]);

//   const fetchData = useCallback(async () => {
//     try {
//       const adminEmail = 'sushi.master.admin.2024@secure-icon.com';
//       const headers = {
//         'x-owner-token': adminEmail
//       };

//       const [customersRes, sessionsRes, deviceRes, syncedRes] = await Promise.all([
//         fetch('/api/customers', { headers }),
//         fetch('/api/owner/login-sessions', { headers }),
//         fetch('/api/owner/current-device', { headers }),
//         fetch('/api/sync/form-data', { headers })
//       ]);

//       if (customersRes.ok) {
//         const customersData = await customersRes.json();
//         setCustomers(customersData);
//       }

//       if (sessionsRes.ok) {
//         const sessionsData = await sessionsRes.json();
//         setLoginSessions(sessionsData);
//       }

//       if (deviceRes.ok) {
//         const deviceData = await deviceRes.json();
//         setCurrentDeviceInfo(deviceData);
//       }

//       if (syncedRes.ok) {
//         const syncedData = await syncedRes.json();
//         setSyncedData(syncedData);
//       }
//     } catch (error) {
//       console.error(t('admin.sync.error', { error: error instanceof Error ? error.message : String(error) }));
//     } finally {
//       setIsLoadingData(false);
//     }
//   }, [t]);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Проверяем учетные данные
//       const isValidEmail = formData.email === ADMIN_CREDENTIALS.email;
//       const isValidAccessCode = formData.accessCode === ADMIN_CREDENTIALS.accessCode;
//       const isValidPassword = formData.password === ADMIN_CREDENTIALS.password;

//       if (isValidEmail && isValidAccessCode && isValidPassword) {
//         // Сохраняем статус аутентификации в localStorage
//         localStorage.setItem('adminAuthenticated', 'true');
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
//         setIsAuthenticated(true);
//       } else {
//         setError(t('admin.auth.invalidCredentials'));
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(t('admin.auth.loginError'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     } else {
//       localStorage.removeItem('adminAuthenticated');
//       localStorage.removeItem('adminLoginTime');
//       setIsAuthenticated(false);
//       setFormData({ email: '', accessCode: '', password: '' });
//       setError('');
//     }
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

//   const handleBroadcast = async () => {
//     if (!broadcastMessage.title.trim() || !broadcastMessage.body.trim()) return;
//     if (selectedRecipients.length === 0) return;

//     setIsBroadcasting(true);
//     try {
//       const adminEmail = 'sushi.master.admin.2024@secure-icon.com';
      
//       // --- НАЧАЛО ИСПРАВЛЕНИЯ ---
      
//       let url: string;
//       let requestBody: string;

//       if (broadcastChannel === 'email') {
//         // Используем НОВЫЙ endpoint и payload для SendGrid (Email)
//         url = '/api/admin/broadcast';
//         requestBody = JSON.stringify({
//           userIds: selectedRecipients, // Payload для SendGrid
//           subject: broadcastMessage.title,
//           htmlContent: broadcastMessage.body
//         });
//       } else {
//         // Оставляем СТАРУЮ логику для SMS
//         url = '/api/owner/broadcast/sms';
//         requestBody = JSON.stringify({ // Payload для SMS
//           title: broadcastMessage.title,
//           body: broadcastMessage.body,
//           recipientIds: selectedRecipients,
//         });
//       }
      
//       // --- КОНЕЦ ИСПРАВЛЕНИЯ ---

//       const response = await fetch(url, { // <--- Используем 'url'
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-owner-token': adminEmail
//         },
//         body: requestBody // <--- Используем 'requestBody'
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setBroadcastMessage({ title: '', body: '' });
//         setSelectedRecipients([]);
//         alert(result.message || t('admin.broadcast.success'));
//       } else {
//         alert(result.message || t('admin.broadcast.error'));
//       }
//     } catch (error) {
//       console.error('Ошибка при отправке:', error);
//       alert(t('admin.broadcast.error'));
//     } finally {
//       setIsBroadcasting(false);
//     }
//   };

//   // Фильтрация данных
//   const filteredCustomers = customers.filter(customer => {
//     const matchesSearch = !searchTerm || 
//       customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.phoneNumber.includes(searchTerm) ||
//       (customer.email && customer.email.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     const matchesCountry = !filterCountry || customer.country === filterCountry;
//     const matchesDate = !filterDate || customer.createdAt.startsWith(filterDate);
    
//     return matchesSearch && matchesCountry && matchesDate;
//   });

//   const filteredSessions = loginSessions.filter(session => {
//     const matchesSearch = !searchTerm || 
//       session.ipAddress?.includes(searchTerm) ||
//       session.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       session.browser?.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesDate = !filterDate || session.loginAt.startsWith(filterDate);
    
//     return matchesSearch && matchesDate;
//   });

//   // Если не аутентифицирован, показываем простую форму входа
//   if (!isAuthenticated) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         backgroundColor: '#f5f5f5'
//       }}>
//         <div style={{
//           backgroundColor: 'white',
//           padding: '40px',
//           borderRadius: '8px',
//           boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//           maxWidth: '400px',
//           width: '100%'
//         }}>
//           <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//             <h2 style={{ 
//               fontSize: '24px', 
//               fontWeight: 'bold', 
//               color: '#333',
//               margin: '0 0 10px 0'
//             }}>
//               Вход администратора
//             </h2>
//             <p style={{ 
//               color: '#666', 
//               fontSize: '14px',
//               margin: 0
//             }}>
//               Введите данные для входа
//             </p>
//           </div>
          
//           <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#333', 
//                 fontSize: '14px',
//                 marginBottom: '8px'
//               }}>
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Введите email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ddd',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#333', 
//                 fontSize: '14px',
//                 marginBottom: '8px'
//               }}>
//                 Код доступа
//               </label>
//               <input
//                 type="text"
//                 name="accessCode"
//                 placeholder="Введите код доступа"
//                 value={formData.accessCode}
//                 onChange={handleInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ddd',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#333', 
//                 fontSize: '14px',
//                 marginBottom: '8px'
//               }}>
//                 Пароль
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Введите пароль"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '1px solid #ddd',
//                   borderRadius: '4px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//             </div>
            
//             {error && (
//               <div style={{
//                 padding: '12px',
//                 backgroundColor: '#fee',
//                 border: '1px solid #fcc',
//                 borderRadius: '4px',
//                 color: '#c33',
//                 fontSize: '14px'
//               }}>
//                 {error}
//               </div>
//             )}
            
//             <button
//               type="submit"
//               disabled={isLoading}
//               style={{
//                 padding: '12px 24px',
//                 backgroundColor: '#007bff',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '16px',
//                 fontWeight: '600',
//                 cursor: isLoading ? 'not-allowed' : 'pointer',
//                 opacity: isLoading ? 0.6 : 1
//               }}
//             >
//               {isLoading ? 'Вход...' : 'Войти'}
//             </button>
//           </form>
          
//           <div style={{ 
//             marginTop: '20px', 
//             textAlign: 'center',
//             fontSize: '12px',
//             color: '#999'
//           }}>
//             Только для авторизованных администраторов
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Если аутентифицирован, показываем панель администратора
//   return (
//     <div className="enhanced-admin-panel">

//       {/* Брендинг шапки */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
//           <div style={{
//             width: 56,
//             height: 56,
//             borderRadius: 12,
//             overflow: 'hidden',
//             boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
//             border: '2px solid rgba(255,255,255,0.35)'
//           }}>
//             <img src={BRAND_IMAGE_URL} alt="Sushi Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//           </div>
//           <div>
//             <div style={{
//               fontSize: 26,
//               fontWeight: 900,
//               letterSpacing: 2,
//               background: 'linear-gradient(90deg,#ff5858 0%,#f857a6 35%,#7b2ff7 70%,#00c6ff 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               textShadow: '0 3px 12px rgba(255, 80, 120, 0.35)'
//             }}>SUSHI ICON</div>
//             <div style={{
//               marginTop: 2,
//               fontSize: 11,
//               letterSpacing: 3,
//               textTransform: 'uppercase',
//               color: 'rgba(255,255,255,0.95)',
//               textShadow: '0 2px 8px rgba(0,0,0,0.3)'
//             }}>THE SUSHI AND ROLLS</div>
//           </div>
//         </div>
//         <h3 style={{ margin: 0, color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>{t('admin.title')}</h3>
//       </div>

//       <div className="admin-tabs" style={{
//         display: 'flex',
//         gap: '15px',
//         marginBottom: '30px',
//         flexWrap: 'wrap',
//         justifyContent: 'center'
//       }}>
//         <button
//           className={`admin-tab ${activeTab === 'customers' ? 'active' : ''}`}
//           onClick={() => setActiveTab('customers')}
//         >
//           👥 Клиенты ({filteredCustomers.length}/{customers.length})
//         </button>
//         <button
//           className={`admin-tab ${activeTab === 'sessions' ? 'active' : ''}`}
//           onClick={() => setActiveTab('sessions')}
//         >
//           🔐 Сессии входа ({filteredSessions.length}/{loginSessions.length})
//         </button>
//         <button
//           className={`admin-tab ${activeTab === 'device' ? 'active' : ''}`}
//           onClick={() => setActiveTab('device')}
//         >
//           💻 Текущее устройство
//         </button>
//         <button
//           className={`admin-tab ${activeTab === 'sync' ? 'active' : ''}`}
//           onClick={() => setActiveTab('sync')}
//         >
//           🔄 Синхронизация
//         </button>
//       </div>

//       <div className="admin-content">
//         {activeTab === 'customers' && (
//           <div>
//             <div className="admin-stats" style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: '20px',
//               marginBottom: '20px'
//             }}>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   👥 Всего клиентов
//                 </h3>
//                 <p style={{ 
//                   color: '#007bff', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {customers.length}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   📈 График активности
//                 </h3>
//                 <div style={{
//                   height: '120px',
//                   background: 'rgba(255,255,255,0.85)',
//                   border: '1px solid rgba(0,0,0,0.08)',
//                   borderRadius: '10px',
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(12, 1fr)',
//                   alignItems: 'end',
//                   gap: '6px',
//                   padding: '10px'
//                 }}>
//                   {Array.from({ length: 12 }).map((_, idx) => {
//                     const now = Date.now();
//                     const slice = customers.filter(c => {
//                       const t = new Date(c.createdAt).getTime();
//                       // 5-минутные интервалов последние 60 минут
//                       const start = now - (60 * 60 * 1000) + idx * (5 * 60 * 1000);
//                       const end = start + (5 * 60 * 1000);
//                       return t >= start && t < end;
//                     }).length;
//                     const height = Math.min(100, slice * 12); // простая шкала
//                     return (
//                       <div key={idx} title={`${slice}`}
//                         style={{
//                           height: `${Math.max(4, height)}%`,
//                           background: 'linear-gradient(180deg, #667eea, #764ba2)',
//                           borderRadius: '6px'
//                         }}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   📅 Регистраций сегодня
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {customers.filter(c => 
//                     new Date(c.createdAt).toDateString() === new Date().toDateString()
//                   ).length}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   🌍 Страны
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {new Set(customers.map(c => c.country).filter(Boolean)).size}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   📧 С email
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {customers.filter(c => c.email).length}
//                 </p>
//               </div>
//             </div>

//             <div className="admin-filters" style={{
//               display: 'flex',
//               gap: '15px',
//               marginBottom: '25px',
//               flexWrap: 'wrap',
//               padding: '25px',
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '15px',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
//             }}>
//               <input
//                 type="text"
//                 placeholder="Поиск по всем данным..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{
//                   padding: '12px 16px',
//                   borderRadius: '25px',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                   background: 'rgba(255, 255, 255, 0.9)',
//                   color: '#333',
//                   fontSize: '14px',
//                   minWidth: '200px',
//                   backdropFilter: 'blur(10px)',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
//                 }}
//               />
//               <select
//                 value={filterCountry}
//                 onChange={(e) => setFilterCountry(e.target.value)}
//                 style={{
//                   padding: '8px 12px',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   background: 'white',
//                   color: '#333',
//                   fontSize: '14px',
//                   minWidth: '150px'
//                 }}
//               >
//                 <option value="">Все страны</option>
//                 {[...new Set(customers.map(c => c.country).filter(Boolean))].map(country => (
//                   <option key={country} value={country}>{country}</option>
//                 ))}
//               </select>
//               <input
//                 type="date"
//                 value={filterDate}
//                 onChange={(e) => setFilterDate(e.target.value)}
//                 style={{
//                   padding: '8px 12px',
//                   borderRadius: '4px',
//                   border: '1px solid #ddd',
//                   background: 'white',
//                   color: '#333',
//                   fontSize: '14px',
//                   minWidth: '150px'
//                 }}
//               />
//             </div>

//             <div className="admin-table-container" style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               borderRadius: '15px',
//               padding: '25px',
//               overflow: 'auto',
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
//             }}>
//               <table className="admin-table" style={{
//                 width: '100%',
//                 borderCollapse: 'collapse',
//                 color: 'rgba(255, 255, 255, 0.9)'
//               }}>
//                 <thead>
//                   <tr>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Имя
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Промокод
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Телефон
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Email
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Страна
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Город
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Улица
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Индекс
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Дата регистрации
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCustomers.map(customer => (
//                     <tr key={customer.id} style={{
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//                     }}>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.firstName} {customer.lastName}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.discountCode}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.phoneNumber}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.email || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.country || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.city || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.street || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {customer.postalCode || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {new Date(customer.createdAt).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === 'sessions' && (
//           <div>
//             <div className="admin-stats" style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: '20px',
//               marginBottom: '30px'
//             }}>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   🔐 Всего сессий
//                 </h3>
//                 <p style={{ 
//                   color: '#007bff', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {loginSessions.length}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   ✅ Успешные
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {loginSessions.filter(s => s.isSuccessful).length}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   ❌ Неудачные
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {loginSessions.filter(s => !s.isSuccessful).length}
//                 </p>
//               </div>
//               <div className="stat-card" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '25px',
//                 textAlign: 'center',
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <h3 style={{ 
//                   color: '#333', 
//                   margin: '0 0 10px 0',
//                   fontSize: '16px',
//                   fontWeight: '600'
//                 }}>
//                   🌍 Страны
//                 </h3>
//                 <p style={{ 
//                   color: '#28a745', 
//                   margin: 0,
//                   fontSize: '32px',
//                   fontWeight: '700'
//                 }}>
//                   {new Set(loginSessions.map(s => s.country).filter(Boolean)).size}
//                 </p>
//               </div>
//             </div>

//             <div className="admin-filters" style={{
//               display: 'flex',
//               gap: '15px',
//               marginBottom: '30px',
//               flexWrap: 'wrap',
//               justifyContent: 'center'
//             }}>
//               <input
//                 type="text"
//                 placeholder="🔍 Поиск по IP, браузеру, локации..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{
//                   padding: '12px 16px',
//                   borderRadius: '25px',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   fontSize: '14px',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '250px'
//                 }}
//               />
//               <input
//                 type="date"
//                 value={filterDate}
//                 onChange={(e) => setFilterDate(e.target.value)}
//                 style={{
//                   padding: '8px 12px',
//                   borderRadius: '20px',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   fontSize: '12px',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '120px'
//                 }}
//               />
//             </div>

//             <div className="admin-table-container" style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               borderRadius: '15px',
//               padding: '25px',
//               overflow: 'auto',
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
//             }}>
//               <table className="admin-table" style={{
//                 width: '100%',
//                 borderCollapse: 'collapse',
//                 color: 'rgba(255, 255, 255, 0.9)'
//               }}>
//                 <thead>
//                   <tr>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Время входа
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       IP адрес
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Локация
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Браузер
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       ОС
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Устройство
//                     </th>
//                     <th style={{
//                       padding: '15px',
//                       textAlign: 'left',
//                       fontWeight: '700',
//                       fontSize: '14px',
//                       color: 'white',
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                       textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//                     }}>
//                       Статус
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredSessions.map(session => (
//                     <tr key={session.id} style={{
//                       borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//                     }}>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {new Date(session.loginAt).toLocaleString()}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {session.ipAddress || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {session.location || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {session.browser || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {session.os || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         {session.device || '-'}
//                       </td>
//                       <td style={{ 
//                         padding: '15px', 
//                         fontSize: '14px', 
//                         color: '#333',
//                         background: 'rgba(255, 255, 255, 0.8)',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         transition: 'background-color 0.2s ease'
//                       }}>
//                         <span style={{
//                           padding: '4px 8px',
//                           borderRadius: '12px',
//                           fontSize: '12px',
//                           fontWeight: '600',
//                           background: session.isSuccessful ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
//                           color: session.isSuccessful ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)',
//                           border: `1px solid ${session.isSuccessful ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.3)'}`
//                         }}>
//                           {session.isSuccessful ? '✅ Успешно' : '❌ Ошибка'}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === 'device' && currentDeviceInfo && (
//           <div>
//             <h3 style={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               fontSize: '24px',
//               fontWeight: '700',
//               marginBottom: '25px',
//               textAlign: 'center',
//               textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }}>
//               💻 Информация о текущем устройстве
//             </h3>
//             <div className="device-info" style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//               gap: '20px'
//             }}>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>🌐 IP адрес:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.ip}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>🏳️ Страна:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.country}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>🏙️ Город:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.city}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>⏰ Часовой пояс:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.timezone}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>📡 Провайдер:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.isp}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>🌐 Браузер:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.browser}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>💻 Операционная система:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.os}
//                 </p>
//               </div>
//               <div className="info-item" style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 backdropFilter: 'blur(10px)'
//               }}>
//                 <strong style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}>📱 Устройство:</strong>
//                 <p style={{ color: 'rgba(255, 255, 255, 0.95)', margin: '8px 0 0 0', fontSize: '18px', fontWeight: '600' }}>
//                   {currentDeviceInfo.device}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'sync' && (
//           <div>
//             <h3 style={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               fontSize: '24px',
//               fontWeight: '700',
//               marginBottom: '25px',
//               textAlign: 'center',
//               textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }}>
//               🔄 Синхронизация и уведомления
//             </h3>
            
//             <div className="sync-controls" style={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginBottom: '40px'
//             }}>
//               <button
//                 onClick={fetchData}
//                 disabled={isLoadingData}
//                 style={{
//                   padding: '12px 24px',
//                   borderRadius: '25px',
//                   border: 'none',
//                   background: isLoadingData ? 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   color: 'white',
//                   fontSize: '14px',
//                   fontWeight: '600',
//                   cursor: isLoadingData ? 'not-allowed' : 'pointer',
//                   transition: 'all 0.3s ease',
//                   opacity: isLoadingData ? 0.6 : 1,
//                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
//                   textShadow: '0 1px 2px rgba(0,0,0,0.2)'
//                 }}
//                 onMouseOver={(e) => {
//                   if (!isLoadingData) {
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (!isLoadingData) {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
//                   }
//                 }}
//               >
//                 {isLoadingData ? '🔄 Синхронизация...' : '🔄 Синхронизировать данные'}
//               </button>
//             </div>

//           <div className="broadcast-section" style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               borderRadius: '15px',
//               padding: '30px',
//               backdropFilter: 'blur(10px)'
//             }}>
//               <h4 style={{
//                 color: 'rgba(255, 255, 255, 0.95)',
//                 fontSize: '20px',
//                 fontWeight: '700',
//                 marginBottom: '20px',
//                 textAlign: 'center',
//                 textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//               }}>
//                 📢 Отправка уведомлений
//               </h4>
//               <div className="broadcast-form" style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '20px'
//               }}>
//               <div>
//                 <label style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600, marginBottom: 8, display: 'block' }}>Канал</label>
//                 <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.95)' }}>
//                   <label>
//                     <input type="radio" name="channel" checked={broadcastChannel==='sms'} onChange={() => setBroadcastChannel('sms')} /> SMS
//                   </label>
//                   <label>
//                     <input type="radio" name="channel" checked={broadcastChannel==='email'} onChange={() => setBroadcastChannel('email')} /> Email
//                   </label>
//                 </div>
//               </div>
//                 <input
//                   type="text"
//                   placeholder="📝 Заголовок уведомления..."
//                   value={broadcastMessage.title}
//                   onChange={(e) => setBroadcastMessage(prev => ({ ...prev, title: e.target.value }))}
//                   style={{
//                     padding: '10px 15px',
//                     borderRadius: '20px',
//                     border: '1px solid rgba(255, 255, 255, 0.3)',
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     color: 'rgba(255, 255, 255, 0.9)',
//                     fontSize: '14px',
//                     backdropFilter: 'blur(10px)',
//                     outline: 'none'
//                   }}
//                 />
//                 <textarea
//                   placeholder="💬 Текст уведомления..."
//                   value={broadcastMessage.body}
//                   onChange={(e) => setBroadcastMessage(prev => ({ ...prev, body: e.target.value }))}
//                   style={{
//                     padding: '10px 15px',
//                     borderRadius: '20px',
//                     border: '1px solid rgba(255, 255, 255, 0.3)',
//                     background: 'rgba(255, 255, 255, 0.1)',
//                     color: 'rgba(255, 255, 255, 0.9)',
//                     fontSize: '14px',
//                     backdropFilter: 'blur(10px)',
//                     outline: 'none',
//                     resize: 'vertical',
//                     minHeight: '80px'
//                   }}
//                   rows={4}
//                 />

//               <div>
//                 <label style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600, marginBottom: 8, display: 'block' }}>Получатели</label>
//                 <div style={{ maxHeight: 240, overflow: 'auto', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: 10, background: 'rgba(255,255,255,0.06)' }}>
//                   {customers.map(c => {
//                     const disabled = (broadcastChannel==='email' && !c.email) || (broadcastChannel==='sms' && !c.phoneNumber);
//                     const checked = selectedRecipients.includes(c.id);
//                     return (
//                       <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 4px', opacity: disabled ? 0.5 : 1, color: 'rgba(255,255,255,0.95)' }}>
//                         <input
//                           type="checkbox"
//                           disabled={disabled}
//                           checked={checked}
//                           onChange={(e) => {
//                             setSelectedRecipients(prev => e.target.checked ? [...prev, c.id] : prev.filter(id => id !== c.id));
//                           }}
//                         />
//                         <span>{c.firstName} {c.lastName} — {broadcastChannel==='email' ? (c.email || '-') : c.phoneNumber}</span>
//                       </label>
//                     );
//                   })}
//                 </div>
//                 <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
//                   <button
//                     onClick={() => setSelectedRecipients(customers.filter(c => (broadcastChannel==='email' ? !!c.email : !!c.phoneNumber)).map(c => c.id))}
//                     style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.12)', color: 'white' }}
//                   >Выбрать всех</button>
//                   <button
//                     onClick={() => setSelectedRecipients([])}
//                     style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.12)', color: 'white' }}
//                   >Очистить</button>
//                 </div>
//               </div>
//               <button
//                   onClick={handleBroadcast}
//                 disabled={isBroadcasting || !broadcastMessage.title.trim() || !broadcastMessage.body.trim() || selectedRecipients.length===0}
//                   style={{
//                     padding: '10px 20px',
//                     borderRadius: '20px',
//                     border: 'none',
//                     background: isBroadcasting || !broadcastMessage.title.trim() || !broadcastMessage.body.trim() 
//                       || selectedRecipients.length===0 ? 'rgba(255, 255, 255, 0.3)' 
//                       : 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
//                     color: '#28a745',
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     cursor: isBroadcasting || !broadcastMessage.title.trim() || !broadcastMessage.body.trim() 
//                       ? 'not-allowed' 
//                       : 'pointer',
//                     boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
//                     textShadow: '0 1px 2px rgba(0,0,0,0.3)',
//                     transition: 'all 0.3s ease',
//                     opacity: isBroadcasting || !broadcastMessage.title.trim() || !broadcastMessage.body.trim() ? 0.6 : 1
//                   }}
//                   onMouseOver={(e) => {
//                     if (!isBroadcasting && broadcastMessage.title.trim() && broadcastMessage.body.trim()) {
//                       e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
//                       e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.6)';
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (!isBroadcasting && broadcastMessage.title.trim() && broadcastMessage.body.trim()) {
//                       e.currentTarget.style.transform = 'translateY(0) scale(1)';
//                       e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
//                     }
//                   }}
//                 >
//                   {isBroadcasting ? '📤 Отправка...' : '📤 Отправить уведомление'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UnifiedAdminPanel;
