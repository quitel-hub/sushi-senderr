

// import React, { useState, useCallback, useEffect, useMemo, type FormEvent } from "react";
// import { useTranslation } from "react-i18next";

// import "./App.css";
// import "./i18n/config";
// import { ParticleTextEffect } from "./components/ParticleTextEffect";
// import { LanguageSwitcher } from "./components/LanguageSwitcher";
// import SimpleCountrySelector from "./components/SimpleCountrySelector";
// import SimplePhoneInput from "./components/SimplePhoneInput";
// import DatePicker from "./components/DatePicker";
// import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
// import ThankYouPage from "./components/ThankYouPage";
// import { EnhancedAdminPanel } from './components/EnhancedAdminPanel';
// // Тип Submission больше не нужен в этом файле
// // type Submission = { ... };
// import NetherlandsAddressInput from "./components/NetherlandsAddressInput";
// import AccessDenied from "./components/AccessDenied";

// type RegistrationFormState = {
//   firstName: string;
//   lastName: string;
//   country: string;
//   phoneNumber: string;
//   email: string;
//   birthDate: string;
//   city: string;
//   street: string;
//   postalCode: string;
//   houseNumber: string;
//   preferredFood: string;
//   feedback: string;
//   discountCode: string;
// };

// type StatusState = {
//   type: "success" | "error";
//   message: string;
//   details?: string;
// };

// const defaultFormState: RegistrationFormState = {
//   firstName: "",
//   lastName: "",
//   country: "",
//   phoneNumber: "",
//   email: "",
//   birthDate: "",
//   city: "",
//   street: "",
//   postalCode: "",
//   houseNumber: "",
//   preferredFood: "",
//   feedback: "",
//   discountCode: "",
// };

// export default function App() {
//   const { t } = useTranslation();
//   const [formState, setFormState] = useState<RegistrationFormState>(defaultFormState);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<StatusState | null>(null);
//   const [showThankYou, setShowThankYou] = useState(false);
  
//   // --- УПРАВЛЕНИЕ АДМИНКОЙ ---
//   const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
//   const [adminToken, setAdminToken] = useState<string | null>(null); // Храним токен
//   const [showAdminLogin, setShowAdminLogin] = useState(false);
//   const [showAdminPanel, setShowAdminPanel] = useState(false);
//   const [adminFormData, setAdminFormData] = useState({
//     email: '',
//     accessCode: '',
//     password: ''
//   });
//   const [adminError, setAdminError] = useState('');
//   const [isAdminLoading, setIsAdminLoading] = useState(false);
//   const [showAccessDenied, setShowAccessDenied] = useState(false);
//   // -------------------------
  
//   // Состояние для автосохранения черновиков
//   const [draftId, setDraftId] = useState<string | null>(null);
  
//   // Состояние для валидации адреса
//   const [addressValidation, setAddressValidation] = useState({
//     isValid: false,
//     errors: [] as string[]
//   });

//   // Ошибки полей формы
//   const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof RegistrationFormState, string>>>({});

//   const lettersOnlyRegex = useMemo(() => /^[\p{L}]+(?:[-\s'][\p{L}]+)*$/u, []);
//   const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, []);

//   const generateLocalDiscountCode = () => {
//     const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     let code = "";
//     for (let i = 0; i < 8; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
//     return code;
//   };

//   const validateForm = useCallback(() => {
//     const errors: Partial<Record<keyof RegistrationFormState, string>> = {};

//     if (!formState.firstName || !lettersOnlyRegex.test(formState.firstName.trim())) {
//       errors.firstName = !formState.firstName ? t('registration.validation.firstName.required') : t('registration.validation.firstName.lettersOnly');
//     }
//     if (!formState.lastName || !lettersOnlyRegex.test(formState.lastName.trim())) {
//       errors.lastName = !formState.lastName ? t('registration.validation.lastName.required') : t('registration.validation.lastName.lettersOnly');
//     }
//     if (!formState.country) {
//       errors.country = t('registration.validation.country.required');
//     }
//     // Phone: basic length check based on digits
//     const phoneDigits = (formState.phoneNumber || '').replace(/\D/g, '');
//     if (!phoneDigits || phoneDigits.length < 7 || phoneDigits.length > 15) {
//       errors.phoneNumber = t('registration.validation.phone.length');
//     }
//     if (!formState.email || !emailRegex.test(formState.email)) {
//       errors.email = t('registration.validation.email.invalid');
//     }

//     // Address validation comes from child component
//     if (!addressValidation.isValid) {
//       // Помечаем поля адреса как ошибочные, чтобы подсветить блок адреса
//       if (!formState.postalCode) errors.postalCode = t('registration.validation.postalCode.format');
//       if (!formState.street) errors.street = t('registration.validation.street.required');
//       if (!formState.city) errors.city = t('registration.validation.city.required');
//       if (!formState.houseNumber) errors.houseNumber = t('registration.validation.houseNumber.required');
//     }

//     setFieldErrors(errors);
//     return Object.keys(errors).length === 0;
//   }, [formState, addressValidation.isValid, t, lettersOnlyRegex, emailRegex]);

//   const handleInputChange = useCallback((field: keyof RegistrationFormState, value: string) => {
//     setFormState(prev => ({ ...prev, [field]: value }));
//   }, []);

//   const handleSubmit = useCallback(async (e: FormEvent) => {
//     e.preventDefault();
//     const ok = validateForm();
//     if (!ok) return;
//     setIsSubmitting(true);
//     setStatus(null);

//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formState),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Удаляем черновик после успешной отправки
//         if (draftId) {
//           try {
//             await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
//             setDraftId(null);
//           } catch (error) {
//             console.error('Ошибка удаления черновика:', error);
//           }
//         }

//         setStatus({
//           type: "success",
//           message: t("registration.success.message"),
//           details: data.discountCode ? t("registration.success.discountCode", { code: data.discountCode }) : undefined,
//         });
//         // Показываем ThankYou с промокодом от сервера
//         setShowThankYou(true);
//         setFormState(prev => ({
//           ...defaultFormState,
//           discountCode: data.discountCode || prev.discountCode,
//           firstName: prev.firstName,
//           lastName: prev.lastName,
//           phoneNumber: prev.phoneNumber,
//           email: prev.email,
//         }));
//       } else {
//         // Оффлайн/резервный успех без сетевой ошибки
//         const localCode = generateLocalDiscountCode();
        
//         // Удаляем черновик
//         if (draftId) {
//           try {
//             await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
//             setDraftId(null);
//           } catch (error) {
//             console.error('Ошибка удаления черновика:', error);
//           }
//         }

//         setStatus({
//           type: "success",
//           message: t("registration.success.message"),
//           details: t("registration.success.discountCode", { code: localCode })
//         });
//         setShowThankYou(true);
//         setFormState(prev => ({
//           ...defaultFormState,
//           discountCode: localCode,
//           firstName: prev.firstName,
//           lastName: prev.lastName,
//           phoneNumber: prev.phoneNumber,
//           email: prev.email,
//         }));
//       }
//     } catch {
//       // Оффлайн/резервный успех без показа сетевой ошибки
//       const localCode = generateLocalDiscountCode();
      
//       // Удаляем черновик
//       if (draftId) {
//         try {
//           await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
//           setDraftId(null);
//         } catch (error) {
//           console.error('Ошибка удаления черновика:', error);
//         }
//       }

//       setStatus({
//         type: "success",
//         message: t("registration.success.message"),
//         details: t("registration.success.discountCode", { code: localCode })
//       });
//       setShowThankYou(true);
//       setFormState(prev => ({
//         ...defaultFormState,
//         discountCode: localCode,
//         firstName: prev.firstName,
//         lastName: prev.lastName,
//         phoneNumber: prev.phoneNumber,
//         email: prev.email,
//       }));
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [formState, t, validateForm, draftId]);

//   // ----------------------------------------------------------------
//   // --- ЛОГИКА АДМИН-ПАНЕЛИ (ИСПРАВЛЕНО) ---
//   // ----------------------------------------------------------------

//   // УДАЛЕНА УЯЗВИМОСТЬ: Убраны жестко заданные ADMIN_CREDENTIALS

//   const handleAdminInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAdminFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (adminError) setAdminError('');
//   };

//   // ИСПРАВЛЕНО: Логин теперь происходит на сервере
//   const handleAdminLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsAdminLoading(true);
//     setAdminError('');

//     try {
//       // Отправляем данные на сервер для проверки
//       const response = await fetch("/api/owner/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(adminFormData),
//       });

//       const data = await response.json();

//       if (response.ok && data.success && data.token) {
//         // Успех! Сохраняем ТОКЕН (ID сессии)
//         localStorage.setItem('adminSessionToken', data.token);
//         localStorage.setItem('adminLoginTime', new Date().toISOString());
        
//         setAdminToken(data.token);
//         setIsAdminAuthenticated(true);
//         setShowAdminPanel(true); // Показываем панель
//         setShowAdminLogin(false); // Скрываем форму входа
//       } else {
//         // Ошибка от сервера
//         setAdminError(data.message || 'Ошибка входа');
//         if (response.status === 401) {
//           setShowAccessDenied(true); // Показываем экран "Доступ запрещен"
//         }
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setAdminError('Ошибка сети при попытке входа');
//     } finally {
//       setIsAdminLoading(false);
//     }
//   };

//   // ИСПРАВЛЕНО: Logout очищает токен
//   const handleAdminLogout = () => {
//     localStorage.removeItem('adminSessionToken');
//     localStorage.removeItem('adminLoginTime');
//     // (Удаляем старый флаг, если он был)
//     localStorage.removeItem('adminAuthenticated'); 
    
//     setIsAdminAuthenticated(false);
//     setAdminToken(null);
//     setShowAdminLogin(false);
//     setShowAdminPanel(false);
//     setAdminFormData({ email: '', accessCode: '', password: '' });
//     setAdminError('');
//   };

//   // ИСПРАВЛЕНО: Проверка аутентификации при загрузке
//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem('adminSessionToken');
//       const loginTime = localStorage.getItem('adminLoginTime');

//       if (token && loginTime) {
//         const loginDate = new Date(loginTime);
//         const now = new Date();
//         const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

//         // Сессия действительна 24 часа
//         if (hoursDiff < 24) {
//           setIsAdminAuthenticated(true);
//           setAdminToken(token);
//           // Если мы аутентифицированы, сразу покажем панель
//           setShowAdminPanel(true); 
//         } else {
//           // Сессия истекла
//           handleAdminLogout(); // Используем нашу функцию очистки
//         }
//       } else {
//         setIsAdminAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []); // Пустой массив, выполняется 1 раз при загрузке

//   // УДАЛЕНО: `useEffect` для загрузки /api/submissions.
//   // Эта логика должна быть ВНУТРИ EnhancedAdminPanel.

//   // ----------------------------------------------------------------
//   // --- КОНЕЦ ЛОГИКИ АДМИН-ПАНЕЛИ ---
//   // ----------------------------------------------------------------


//   // Автосохранение черновика формы каждую секунду
//   useEffect(() => {
//     // Не сохраняем черновик, если форма не заполняется или уже показана страница благодарности
//     if (showThankYou || showAdminLogin || showAdminPanel || showAccessDenied) {
//       return;
//     }

//     // Проверяем, есть ли хоть какие-то данные для сохранения
//     const hasData = formState.firstName || formState.lastName || formState.email || 
//                     formState.phoneNumber || formState.country || formState.city;

//     if (!hasData) {
//       return;
//     }

//     const saveDraft = async () => {
//       try {
//         const response = await fetch('/api/form-draft', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             ...formState,
//             draftId: draftId,
//           }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           if (!draftId && data.draftId) {
//             setDraftId(data.draftId);
//           }
//         }
//       } catch (error) {
//         console.error('Ошибка автосохранения черновика:', error);
//       }
//     };

//     // Сохраняем сразу при первом заполнении
//     saveDraft();

//     // Затем каждую секунду
//     const intervalId = setInterval(saveDraft, 1000);

//     return () => clearInterval(intervalId);
//   }, [formState, draftId, showThankYou, showAdminLogin, showAdminPanel, showAccessDenied]);


//   if (showThankYou) {
//     return <ThankYouPage customerData={formState} onClose={() => setShowThankYou(false)} />;
//   }

//   if (showAccessDenied) {
//     return <AccessDenied onBack={() => {
//       setShowAccessDenied(false);
//       setShowAdminLogin(false);
//     }} />;
//   }

//   // --- ЛОГИКА РЕНДЕРИНГА ---
//   // Теперь она стала чище
  
//   const renderContent = () => {
//     if (isAdminAuthenticated && showAdminPanel) {
//       // Если АДМИН: показываем панель
//       return (
//         <EnhancedAdminPanel 
//           // Мы добавим эти props в EnhancedAdminPanel на следующем шаге
//           adminToken={adminToken} 
//           onLogout={handleAdminLogout} 
//         />
//       );
//     }
    
//     if (showAdminLogin) {
//       // Если ПОКАЗ ФОРМЫ ВХОДА: показываем форму входа
//       return (
//         <section className="card card--admin-login" style={{
//           backgroundColor: '#1a1a1a',
//           border: '2px solid #ffffff',
//           borderRadius: '12px',
//           padding: '30px',
//           boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
//         }}>
//           <h2 className="card__title" style={{ 
//             color: '#ffffff', 
//             fontSize: '24px',
//             fontWeight: '700',
//             textShadow: '0 2px 4px rgba(0,0,0,0.5)',
//             marginBottom: '20px'
//           }}>
//             Вход администратора
//           </h2>
//           <p style={{ 
//             textAlign: 'center', 
//             color: '#ffffff', 
//             marginBottom: '30px',
//             fontSize: '16px',
//             textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//           }}>
//             Введите данные для входа в панель администратора
//           </p>
          
//           <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#ffffff', 
//                 fontSize: '16px',
//                 marginBottom: '8px',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//               }}>
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Введите email"
//                 value={adminFormData.email}
//                 onChange={handleAdminInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #ffffff',
//                   borderRadius: '6px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box',
//                   backgroundColor: '#ffffff',
//                   color: '#000000'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#ffffff', 
//                 fontSize: '16px',
//                 marginBottom: '8px',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//               }}>
//                 Код доступа
//               </label>
//               <input
//                 type="text"
//                 name="accessCode"
//                 placeholder="Введите код доступа"
//                 value={adminFormData.accessCode}
//                 onChange={handleAdminInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #ffffff',
//                   borderRadius: '6px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box',
//                   backgroundColor: '#ffffff',
//                   color: '#000000'
//                 }}
//               />
//             </div>
            
//             <div>
//               <label style={{ 
//                 display: 'block', 
//                 fontWeight: '600', 
//                 color: '#ffffff', 
//                 fontSize: '16px',
//                 marginBottom: '8px',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.3)'
//               }}>
//                 Пароль
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Введите пароль"
//                 value={adminFormData.password}
//                 onChange={handleAdminInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '12px',
//                   border: '2px solid #ffffff',
//                   borderRadius: '6px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box',
//                   backgroundColor: '#ffffff',
//                   color: '#000000'
//                 }}
//               />
//             </div>
            
//             {adminError && (
//               <div style={{
//                 padding: '12px',
//                 backgroundColor: '#dc3545',
//                 border: '2px solid #ffffff',
//                 borderRadius: '6px',
//                 color: '#ffffff',
//                 fontSize: '16px',
//                 textShadow: '0 1px 2px rgba(0,0,0,0.3)',
//                 fontWeight: '600'
//               }}>
//                 {adminError}
//               </div>
//             )}
            
//             <div style={{
//               display: 'flex',
//               gap: '15px',
//               justifyContent: 'center',
//               flexWrap: 'wrap'
//             }}>
//               <InteractiveHoverButton 
//                 text={isAdminLoading ? 'Вход...' : 'Войти в панель администратора'}
//                 className="button button--primary"
//                 type="submit"
//                 disabled={isAdminLoading}
//               />
//               <InteractiveHoverButton 
//                 text="← Назад к форме"
//                 className="button button--secondary"
//                 onClick={() => setShowAdminLogin(false)}
//               />
//             </div>
//           </form>
          
//           <div style={{ 
//             marginTop: '10px', 
//             textAlign: 'center',
//             fontSize: '14px',
//             color: '#ffffff',
//             textShadow: '0 1px 2px rgba(0,0,0,0.3)',
//             fontWeight: '500'
//           }}>
//             Только для авторизованных администраторов
//           </div>
//         </section>
//       );
//     }

//     // Во всех остальных случаях (не админ, не логин) показываем ФОРМУ РЕГИСТРАЦИИ
//     return (
//       <>
//         <div className="header__title">
//           <ParticleTextEffect 
//             words={["SUSHI ICON"]} 
//             maxWidth="700px"
//             minHeight="2px"
//             className="particle-text-effect"
//           />
//         </div>
//         <section className="card card--registration">
//           <h2 className="card__title">{t("registration.cardTitle")}</h2>
          
//           {status && (
//             <div className={`status status--${status.type}`}>
//               <p className="status__message">{status.message}</p>
//               {status.details && <p className="status__details">{status.details}</p>}
//             </div>
//           )}

//           <form className="form" onSubmit={handleSubmit}>
//             {/* ... (ВЕСЬ КОД ФОРМЫ РЕГИСТРАЦИИ ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ) ... */}
//             <div className="form__row">
//               <label className="form__label" htmlFor="firstName">
//                 {t("registration.fields.firstName")} *
//               </label>
//               <input
//                 id="firstName"
//                 className="form__input"
//                 type="text"
//                 placeholder={t("registration.placeholders.firstName")}
//                 value={formState.firstName}
//                 onChange={(event) => handleInputChange("firstName", event.target.value)}
//                 required
//               />
//               {fieldErrors.firstName && (
//                 <div className="form__hint form__hint--error">{fieldErrors.firstName}</div>
//               )}
//             </div>

//             <div className="form__row">
//               <label className="form__label" htmlFor="lastName">
//                 {t("registration.fields.lastName")} *
//               </label>
//               <input
//                 id="lastName"
//                 className="form__input"
//                 type="text"
//                 placeholder={t("registration.placeholders.lastName")}
//                 value={formState.lastName}
//                 onChange={(event) => handleInputChange("lastName", event.target.value)}
//                 required
//               />
//               {fieldErrors.lastName && (
//                 <div className="form__hint form__hint--error">{fieldErrors.lastName}</div>
//               )}
//             </div>

//             <div className="form__row">
//               <label className="form__label" htmlFor="country">
//                 {t("registration.fields.country")} *
//               </label>
//               <SimpleCountrySelector
//                 value={formState.country}
//                 onChange={(value) => handleInputChange("country", value)}
//                 placeholder={t("registration.placeholders.country")}
//               />
//               {fieldErrors.country && (
//                 <div className="form__hint form__hint--error">{fieldErrors.country}</div>
//               )}
//             </div>

//             <div className="form__row">
//               <label className="form__label" htmlFor="phoneNumber">
//                 {t("registration.fields.phone")} *
//               </label>
//               <SimplePhoneInput
//                 value={formState.phoneNumber}
//                 onChange={(value) => handleInputChange("phoneNumber", value)}
//                 placeholder={t("registration.placeholders.phone")}
//                 countryCode={formState.country}
//               />
//             </div>

//             <div className="form__row">
//               <label className="form__label" htmlFor="email">
//                 {t("registration.fields.email")} *
//               </label>
//               <input
//                 id="email"
//                 className="form__input"
//                 type="email"
//                 placeholder={t("registration.placeholders.email")}
//                 value={formState.email}
//                 onChange={(event) => handleInputChange("email", event.target.value)}
//                 required
//               />
//               {fieldErrors.email && (
//                 <div className="form__hint form__hint--error">{fieldErrors.email}</div>
//               )}
//             </div>

//             <div className="form__row">
//               <label className="form__label" htmlFor="birthDate">
//                 {t("registration.fields.birthDate")} *
//               </label>
//               <DatePicker
//                 value={formState.birthDate}
//                 onChange={(value) => handleInputChange("birthDate", value)}
//                 placeholder={t("registration.datePicker.placeholder")}
//                 required
//               />
//             </div>

//             <NetherlandsAddressInput
//               postalCode={formState.postalCode}
//               street={formState.street}
//               city={formState.city}
//               houseNumber={formState.houseNumber}
//               onPostalCodeChange={(value) => handleInputChange("postalCode", value)}
//               onStreetChange={(value) => handleInputChange("street", value)}
//               onCityChange={(value) => handleInputChange("city", value)}
//               onHouseNumberChange={(value) => handleInputChange("houseNumber", value)}
//               onValidationChange={(isValid, errors) => setAddressValidation({ isValid, errors })}
//               required={true}
//             />

//             <div className="form__row">
//               <label className="form__label" htmlFor="preferredFood">
//                 {t("registration.fields.preferredFood")} *
//               </label>
//               <textarea
//                 id="preferredFood"
//                 className="form__input form__textarea"
//                 placeholder={t("registration.placeholders.preferredFood")}
//                 value={formState.preferredFood || formState.feedback}
//                 onChange={(event) => {
//                   const v = event.target.value;
//                   handleInputChange("preferredFood", v);
//                   handleInputChange("feedback", v);
//                 }}
//                 rows={4}
//                 required
//               />
//             </div>

//             <div className="form__actions">
//               <InteractiveHoverButton 
//                 text={isSubmitting ? t("registration.actions.submitting") : t("registration.actions.submit")}
//                 className="button button--primary"
//                 type="submit"
//                 disabled={isSubmitting}
//               />
//             </div>
//           </form>
//         </section>
//       </>
//     );
//   };

//   return (
//     <div className="app">
//       <div className="app__content">
//         <header className="app__header">
//           <div className="header__content"></div>
//         </header>
        
//         {/* Кнопка администратора */}
//         <div className="admin-controls">
//           <button 
//             className="admin-toggle-btn"
//             onClick={() => {
//               if (isAdminAuthenticated) {
//                 // Если уже в админке, кнопка просто скрывает/показывает панель
//                 setShowAdminPanel(!showAdminPanel); 
//               } else {
//                 // Если не в админке, кнопка показывает форму входа
//                 setShowAdminLogin(true);
//                 setShowAdminPanel(false);
//               }
//             }}
//             title={isAdminAuthenticated ? "Переключить панель администратора" : "Войти в панель администратора"}
//           >
//             ⚙️
//           </button>
//         </div>
        
//         <LanguageSwitcher />

//         <main className="app__main">
//           <div className="container">
//             {renderContent()}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import React, { useState, useCallback, useEffect, useMemo, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";
import "./i18n/config";
import { ParticleTextEffect } from "./components/ParticleTextEffect";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import SimpleCountrySelector from "./components/SimpleCountrySelector";
import SimplePhoneInput from "./components/SimplePhoneInput";
import DatePicker from "./components/DatePicker";
import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
import ThankYouPage from "./components/ThankYouPage";
import { EnhancedAdminPanel } from './components/EnhancedAdminPanel';
// ... (импорты)
import NetherlandsAddressInput from "./components/NetherlandsAddressInput";
import AccessDenied from "./components/AccessDenied";

// ... (type RegistrationFormState) ...
// ... (type StatusState) ...
// ... (const defaultFormState) ...

type RegistrationFormState = {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  city: string;
  street: string;
  postalCode: string;
  houseNumber: string;
  preferredFood: string;
  feedback: string;
  discountCode: string;
};

type StatusState = {
  type: "success" | "error";
  message: string;
  details?: string;
};

const defaultFormState: RegistrationFormState = {
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  email: "",
  birthDate: "",
  city: "",
  street: "",
  postalCode: "",
  houseNumber: "",
  preferredFood: "",
  feedback: "",
  discountCode: "",
};


export default function App() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<RegistrationFormState>(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // --- УПРАВЛЕНИЕ АДМИНКОЙ ---
  // ... (весь блок админки без изменений) ...
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminToken, setAdminToken] = useState<string | null>(null); // Храним токен
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminFormData, setAdminFormData] = useState({
    email: '',
    accessCode: '',
    password: ''
  });
  const [adminError, setAdminError] = useState('');
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  
  // --- НОВЫЕ СОСТОЯНИЯ ДЛЯ ВЕРИФИКАЦИИ ---
  const [showVerification, setShowVerification] = useState(false);
  const [verificationData, setVerificationData] = useState<{customerId: string, email: string} | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");
  // -----------------------------------
  
  // Состояние для автосохранения черновиков
  const [draftId, setDraftId] = useState<string | null>(null);
  
  // ... (addressValidation, fieldErrors, regexes, generateLocalDiscountCode, validateForm, handleInputChange) ...
  // ... (ОНИ ОСТАЮТСЯ БЕЗ ИЗМЕНЕНИЙ) ...
  const [addressValidation, setAddressValidation] = useState({
    isValid: false,
    errors: [] as string[]
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof RegistrationFormState, string>>>({});
  const lettersOnlyRegex = useMemo(() => /^[\p{L}]+(?:[-\s'][\p{L}]+)*$/u, []);
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, []);
  const generateLocalDiscountCode = () => {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 8; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
    return code;
  };
  const validateForm = useCallback(() => {
    const errors: Partial<Record<keyof RegistrationFormState, string>> = {};

    if (!formState.firstName || !lettersOnlyRegex.test(formState.firstName.trim())) {
      errors.firstName = !formState.firstName ? t('registration.validation.firstName.required') : t('registration.validation.firstName.lettersOnly');
    }
    if (!formState.lastName || !lettersOnlyRegex.test(formState.lastName.trim())) {
      errors.lastName = !formState.lastName ? t('registration.validation.lastName.required') : t('registration.validation.lastName.lettersOnly');
    }
    if (!formState.country) {
      errors.country = t('registration.validation.country.required');
    }
    // Phone: basic length check based on digits
    const phoneDigits = (formState.phoneNumber || '').replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.phoneNumber = t('registration.validation.phone.length');
    }
    if (!formState.email || !emailRegex.test(formState.email)) {
      errors.email = t('registration.validation.email.invalid');
    }

    // Address validation comes from child component
    if (!addressValidation.isValid) {
      // Помечаем поля адреса как ошибочные, чтобы подсветить блок адреса
      if (!formState.postalCode) errors.postalCode = t('registration.validation.postalCode.format');
      if (!formState.street) errors.street = t('registration.validation.street.required');
      if (!formState.city) errors.city = t('registration.validation.city.required');
      if (!formState.houseNumber) errors.houseNumber = t('registration.validation.houseNumber.required');
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formState, addressValidation.isValid, t, lettersOnlyRegex, emailRegex]);
  const handleInputChange = useCallback((field: keyof RegistrationFormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  }, []);

  // --- ИЗМЕНЕНИЕ: handleSubmit ---
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const ok = validateForm();
    if (!ok) return;
    setIsSubmitting(true);
    setStatus(null);
    setFieldErrors({}); // Очищаем старые ошибки

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.status === "pending_verification") {
        // --- НОВЫЙ ПОТОК: ПОКАЗАТЬ ВЕРИФИКАЦИЮ ---
        
        // Удаляем черновик
        if (draftId) {
          try {
            await fetch(`/api/form-draft/${draftId}`, { method: 'DELETE' });
            setDraftId(null);
          } catch (error) {
            console.error('Ошибка удаления черновика:', error);
          }
        }
        
        // Показываем экран верификации
        setVerificationData({ customerId: data.customerId, email: data.email });
        setShowVerification(true);
        // ------------------------------------------

      } else if (response.ok && data.status === "exists") {
        // Пользователь уже существует
        setStatus({
          type: "error", // Используем 'error' для этого случая
          message: t("registration.alreadyRegistered"), // Нужен ключ "Пользователь с этим номером уже зарегистрирован"
          details: data.discountCode ? t("registration.success.discountCode", { code: data.discountCode }) : undefined,
        });
        
      } else {
        // Другие ошибки от сервера (напр. "email_exists" или 400)
        setStatus({
          type: "error",
          message: data.message || t("registration.error.serverError"), // Нужен ключ "Ошибка сервера"
        });
        // Если ошибка валидации (напр. email), отображаем ее
        if (data.errors?.fieldErrors?.email) {
            setFieldErrors(prev => ({ ...prev, email: data.errors.fieldErrors.email[0] }));
        }
      }
    } catch (error) {
      // Ошибка сети
      console.error('Registration submit error:', error);
      setStatus({
        type: "error",
        message: t("registration.error.networkTitle"), // Нужен ключ "Ошибка сети"
        details: t("registration.error.networkDetails") // Нужен ключ "Проверьте соединение"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, t, validateForm, draftId]);
  // ---------------------------------
  
  // --- НОВАЯ ФУНКЦИЯ: handleVerificationSubmit ---
  const handleVerificationSubmit = async (e: FormEvent) => {
   e.preventDefault();
    if (!verificationData) return;
    setIsSubmitting(true); // Используем тот же лоадер
    setVerificationError("");

    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: verificationData.customerId,
          code: verificationCode.trim() // <-- ИСПРАВЛЕНИЕ 1: Добавили .trim() здесь
        })
      });
      
      const data = await response.json();

      if (response.ok && data.success) {
        // УСПЕХ!
        setShowVerification(false);
        setVerificationData(null);
        
        // Готовим данные для страницы "Спасибо"
        setFormState(prev => ({
          ...defaultFormState,
          discountCode: data.discountCode, // Получаем промокод из ответа
          firstName: prev.firstName,
          lastName: prev.lastName,
          phoneNumber: prev.phoneNumber,
          email: prev.email,
        }));
        setShowThankYou(true); // Показываем страницу "Спасибо"
        
      } else {
        // Ошибка (напр. неверный код)
        setVerificationError(data.message || t("registration.validation.invalidCode")); // Нужен ключ "Неверный код"
      }
    } catch (err) {
      // Ошибка сети
      setVerificationError(t("registration.error.networkTitle")); // Нужен ключ "Ошибка сети"
    } finally {
      setIsSubmitting(false);
    }
  };
  // -------------------------------------------

  // ... (ЛОГИКА АДМИН-ПАНЕЛИ остается без изменений) ...
  const handleAdminInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (adminError) setAdminError('');
  };
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdminLoading(true);
    setAdminError('');

    try {
      // Отправляем данные на сервер для проверки
      const response = await fetch("/api/owner/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminFormData),
      });

      const data = await response.json();

      if (response.ok && data.success && data.token) {
        // Успех! Сохраняем ТОКЕН (ID сессии)
        localStorage.setItem('adminSessionToken', data.token);
        localStorage.setItem('adminLoginTime', new Date().toISOString());
        
        setAdminToken(data.token);
        setIsAdminAuthenticated(true);
        setShowAdminPanel(true); // Показываем панель
        setShowAdminLogin(false); // Скрываем форму входа
      } else {
        // Ошибка от сервера
        setAdminError(data.message || 'Ошибка входа');
        if (response.status === 401) {
          setShowAccessDenied(true); // Показываем экран "Доступ запрещен"
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setAdminError('Ошибка сети при попытке входа');
    } finally {
      setIsAdminLoading(false);
    }
  };
  const handleAdminLogout = () => {
    localStorage.removeItem('adminSessionToken');
    localStorage.removeItem('adminLoginTime');
    // (Удаляем старый флаг, если он был)
    localStorage.removeItem('adminAuthenticated'); 
    
    setIsAdminAuthenticated(false);
    setAdminToken(null);
    setShowAdminLogin(false);
    setShowAdminPanel(false);
    setAdminFormData({ email: '', accessCode: '', password: '' });
    setAdminError('');
  };
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminSessionToken');
      const loginTime = localStorage.getItem('adminLoginTime');

      if (token && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

        // Сессия действительна 24 часа
        if (hoursDiff < 24) {
          setIsAdminAuthenticated(true);
          setAdminToken(token);
          // Если мы аутентифицированы, сразу покажем панель
          setShowAdminPanel(true); 
        } else {
          // Сессия истекла
          handleAdminLogout(); // Используем нашу функцию очистки
        }
      } else {
        setIsAdminAuthenticated(false);
      }
    };

    checkAuth();
  }, []); // Пустой массив, выполняется 1 раз при загрузке
  // ... (useEffect для автосохранения остается без изменений) ...
  useEffect(() => {
    // Не сохраняем черновик, если форма не заполняется или уже показана страница благодарности
    if (showThankYou || showAdminLogin || showAdminPanel || showAccessDenied || showVerification) { // --- ДОБАВЛЕНО showVerification
      return;
    }

    // Проверяем, есть ли хоть какие-то данные для сохранения
    const hasData = formState.firstName || formState.lastName || formState.email || 
                    formState.phoneNumber || formState.country || formState.city;

    if (!hasData) {
      return;
    }

    const saveDraft = async () => {
      try {
        const response = await fetch('/api/form-draft', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formState,
            draftId: draftId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (!draftId && data.draftId) {
            setDraftId(data.draftId);
          }
        }
      } catch (error) {
        console.error('Ошибка автосохранения черновика:', error);
      }
    };

    // Сохраняем сразу при первом заполнении
    saveDraft();

    // Затем каждую секунду
    const intervalId = setInterval(saveDraft, 1000);

    return () => clearInterval(intervalId);
  }, [formState, draftId, showThankYou, showAdminLogin, showAdminPanel, showAccessDenied, showVerification]); // --- ДОБАВЛЕНО showVerification


  if (showThankYou) {
    return <ThankYouPage customerData={formState} onClose={() => setShowThankYou(false)} />;
  }

  if (showAccessDenied) {
    return <AccessDenied onBack={() => {
      setShowAccessDenied(false);
      setShowAdminLogin(false);
    }} />;
  }

  // --- ЛОГИКА РЕНДЕРИНГА (ИЗМЕНЕНИЕ) ---
  
  const renderContent = () => {
    if (isAdminAuthenticated && showAdminPanel) {
      // Админ-панель
      return (
        <EnhancedAdminPanel 
          adminToken={adminToken} 
          onLogout={handleAdminLogout} 
        />
      );
    }
    
    // --- НОВЫЙ БЛОК: Экран верификации ---
    if (showVerification && verificationData) {
      return (
        <section className="card card--admin-login" style={{ // Используем стиль карточки админа
          backgroundColor: '#1a1a1a',
          border: '2px solid #ffffff',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}>
          <h2 className="card__title" style={{ 
            color: '#ffffff', 
            fontSize: '24px',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '20px'
          }}>
            {t("registration.verify.title")}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#ffffff', 
            marginBottom: '30px',
            fontSize: '16px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            {t("registration.verify.instructions", { email: verificationData.email })}
          </p>
          
          <form onSubmit={handleVerificationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                color: '#ffffff', 
                fontSize: '16px',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                {t("registration.verify.codeLabel")} *
              </label>
              <input
                type="text"
                name="verificationCode"
                placeholder="123456"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.trim())}
                required
                maxLength={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ffffff',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  textAlign: 'center',
                  letterSpacing: '0.5em'
                }}
              />
            </div>
            
            {verificationError && (
              <div style={{
                padding: '12px',
                backgroundColor: '#dc3545',
                border: '2px solid #ffffff',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                fontWeight: '600'
              }}>
                {verificationError}
              </div>
            )}
            
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <InteractiveHoverButton 
                text={isSubmitting ? t("registration.actions.submitting") : t("registration.verify.submitButton")}
                className="button button--primary"
                type="submit"
                disabled={isSubmitting}
              />
              <InteractiveHoverButton 
                text={t("registration.verify.cancelButton")}
                className="button button--secondary"
                onClick={() => {
                  setShowVerification(false);
                  setVerificationData(null);
                  setVerificationCode("");
                  setVerificationError("");
                  // Возвращаемся к форме
                }}
              />
            </div>
          </form>
        </section>
      );
    }
    // --- КОНЕЦ НОВОГО БЛОКА ---
    
    if (showAdminLogin) {
      // Форма входа админа (без изменений)
      return (
        <section className="card card--admin-login" style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #ffffff',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}>
          {/* ... (весь код формы входа админа) ... */}
           <h2 className="card__title" style={{ 
            color: '#ffffff', 
            fontSize: '24px',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            marginBottom: '20px'
          }}>
            Вход администратора
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#ffffff', 
            marginBottom: '30px',
            fontSize: '16px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Введите данные для входа в панель администратора
          </p>
          
          <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                color: '#ffffff', 
                fontSize: '16px',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Введите email"
                value={adminFormData.email}
                onChange={handleAdminInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ffffff',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              />
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                color: '#ffffff', 
                fontSize: '16px',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Код доступа
              </label>
              <input
                type="text"
                name="accessCode"
                placeholder="Введите код доступа"
                value={adminFormData.accessCode}
                onChange={handleAdminInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ffffff',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              />
            </div>
            
            <div>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                color: '#ffffff', 
                fontSize: '16px',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Пароль
              </label>
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={adminFormData.password}
                onChange={handleAdminInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ffffff',
                  borderRadius: '6px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              />
            </div>
            
            {adminError && (
              <div style={{
                padding: '12px',
                backgroundColor: '#dc3545',
                border: '2px solid #ffffff',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                fontWeight: '600'
              }}>
                {adminError}
              </div>
            )}
            
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <InteractiveHoverButton 
                text={isAdminLoading ? 'Вход...' : 'Войти в панель администратора'}
                className="button button--primary"
                type="submit"
                disabled={isAdminLoading}
              />
              <InteractiveHoverButton 
                text="← Назад к форме"
                className="button button--secondary"
                onClick={() => setShowAdminLogin(false)}
              />
            </div>
          </form>
          
          <div style={{ 
            marginTop: '10px', 
            textAlign: 'center',
            fontSize: '14px',
            color: '#ffffff',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            fontWeight: '500'
          }}>
            Только для авторизованных администраторов
          </div>
        </section>
      );
    }

    // Форма регистрации (без изменений)
    return (
      <>
        <div className="header__title">
          <ParticleTextEffect 
            words={["SUSHI ICON"]} 
            maxWidth="700px"
            minHeight="2px"
            className="particle-text-effect"
          />
        </div>
        <section className="card card--registration">
          <h2 className="card__title">{t("registration.cardTitle")}</h2>
          
          {status && (
            <div className={`status status--${status.type}`}>
              <p className="status__message">{status.message}</p>
              {status.details && <p className="status__details">{status.details}</p>}
            </div>
          )}

          <form className="form" onSubmit={handleSubmit}>
            {/* ... (ВЕСЬ КОД ФОРМЫ РЕГИСТРАЦИИ ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ) ... */}
            <div className="form__row">
              <label className="form__label" htmlFor="firstName">
                {t("registration.fields.firstName")} *
              </label>
              <input
                id="firstName"
                className="form__input"
                type="text"
                placeholder={t("registration.placeholders.firstName")}
                value={formState.firstName}
                onChange={(event) => handleInputChange("firstName", event.target.value)}
                required
              />
              {fieldErrors.firstName && (
                <div className="form__hint form__hint--error">{fieldErrors.firstName}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="lastName">
                {t("registration.fields.lastName")} *
              </label>
              <input
                id="lastName"
                className="form__input"
                type="text"
                placeholder={t("registration.placeholders.lastName")}
                value={formState.lastName}
                onChange={(event) => handleInputChange("lastName", event.target.value)}
                required
              />
              {fieldErrors.lastName && (
                <div className="form__hint form__hint--error">{fieldErrors.lastName}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="country">
                {t("registration.fields.country")} *
              </label>
              <SimpleCountrySelector
                value={formState.country}
                onChange={(value) => handleInputChange("country", value)}
                placeholder={t("registration.placeholders.country")}
              />
              {fieldErrors.country && (
                <div className="form__hint form__hint--error">{fieldErrors.country}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="phoneNumber">
                {t("registration.fields.phone")} *
              </label>
              <SimplePhoneInput
                value={formState.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                placeholder={t("registration.placeholders.phone")}
                countryCode={formState.country}
              />
               {fieldErrors.phoneNumber && (
                <div className="form__hint form__hint--error">{fieldErrors.phoneNumber}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="email">
                {t("registration.fields.email")} *
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                placeholder={t("registration.placeholders.email")}
                value={formState.email}
                onChange={(event) => handleInputChange("email", event.target.value)}
                required
              />
              {fieldErrors.email && (
                <div className="form__hint form__hint--error">{fieldErrors.email}</div>
              )}
            </div>

            <div className="form__row">
              <label className="form__label" htmlFor="birthDate">
                {t("registration.fields.birthDate")} *
              </label>
              <DatePicker
                value={formState.birthDate}
                onChange={(value) => handleInputChange("birthDate", value)}
                placeholder={t("registration.datePicker.placeholder")}
                required
              />
            </div>

            <NetherlandsAddressInput
              postalCode={formState.postalCode}
              street={formState.street}
              city={formState.city}
              houseNumber={formState.houseNumber}
              onPostalCodeChange={(value) => handleInputChange("postalCode", value)}
              onStreetChange={(value) => handleInputChange("street", value)}
              onCityChange={(value) => handleInputChange("city", value)}
              onHouseNumberChange={(value) => handleInputChange("houseNumber", value)}
              onValidationChange={(isValid, errors) => setAddressValidation({ isValid, errors })}
              required={true}
            />

            <div className="form__row">
              <label className="form__label" htmlFor="preferredFood">
                {t("registration.fields.preferredFood")} *
              </label>
              <textarea
                id="preferredFood"
                className="form__input form__textarea"
                placeholder={t("registration.placeholders.preferredFood")}
                value={formState.preferredFood || formState.feedback}
                onChange={(event) => {
                  const v = event.target.value;
                  handleInputChange("preferredFood", v);
                  handleInputChange("feedback", v);
                }}
                rows={4}
                required
              />
            </div>

            <div className="form__actions">
              <InteractiveHoverButton 
                text={isSubmitting ? t("registration.actions.submitting") : t("registration.actions.submit")}
                className="button button--primary"
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </section>
      </>
    );
  };

  return (
    <div className="app">
      <div className="app__content">
        {/* ... (header, admin-controls, LanguageSwitcher) ... */}
        <header className="app__header">
          <div className="header__content"></div>
        </header>
        
        <div className="admin-controls">
          <button 
            className="admin-toggle-btn"
            onClick={() => {
              if (isAdminAuthenticated) {
                setShowAdminPanel(!showAdminPanel); 
              } else {
                setShowAdminLogin(true);
                setShowAdminPanel(false);
              }
            }}
            title={isAdminAuthenticated ? "Переключить панель администратора" : "Войти в панель администратора"}
          >
            ⚙️
          </button>
        </div>
        
        <LanguageSwitcher />

        <main className="app__main">
          <div className="container">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}