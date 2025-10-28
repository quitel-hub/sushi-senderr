import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import sushiIconLogo from "../assets/sushi-icon-logo.svg";

interface ThankYouPageProps {
  customerData: {
    firstName: string;
    lastName: string;
    discountCode: string;
    email?: string;
    phoneNumber: string;
  };
  onClose: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ customerData, onClose }) => {
  const { t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Запускаем анимацию при загрузке
    setIsAnimating(true);
    
    // Показываем промокод через 1 секунду
    setTimeout(() => {
      setShowPromoCode(true);
    }, 1000);
    
    // Показываем инструкции через 2 секунды
    setTimeout(() => {
      setShowInstructions(true);
    }, 2000);
  }, []);

  const handleCopyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText(customerData.discountCode);
      // Можно добавить уведомление о копировании
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const handleShareToInstagram = () => {
    const message = `Привет! Я зарегистрировался в SUSHI ICON и получил скидку 10%! 🍣✨ Мой промокод: ${customerData.discountCode}. Присоединяйся и ты! #SushiIcon #Скидка10%`;
    
    // Открываем Instagram в новом окне
    window.open(`https://www.instagram.com/`, '_blank');
  };

  return (
    <div className="thank-you-overlay">
      <div className="thank-you-container">
        <div className="thank-you-content">
          {/* Анимированный логотип */}
          <div className={`logo-animation ${isAnimating ? 'logo-animation--active' : ''}`}>
            <img src={sushiIconLogo} alt="SUSHI ICON" className="logo-image" />
            <div className="logo-text">
              <h1 className="logo-title">SUSHI ICON</h1>
              <div className="logo-subtitle">THE SUSHI AND ROLLS</div>
            </div>
          </div>

          {/* Сообщение благодарности */}
          <div className={`thank-you-message ${showPromoCode ? 'thank-you-message--visible' : ''}`}>
            <h2 className="thank-you-title">
              Спасибо за регистрацию, {customerData.firstName}! 🎉
            </h2>
            <p className="thank-you-text">
              Добро пожаловать в SUSHI ICON! Мы рады, что вы присоединились к нашему сообществу любителей качественных суши.
            </p>
          </div>

          {/* Промокод */}
          <div className={`promo-code-section ${showPromoCode ? 'promo-code-section--visible' : ''}`}>
            <div className="promo-code-card">
              <h3 className="promo-code-title">🎁 Ваш персональный промокод</h3>
              <div className="promo-code-display">
                <span className="promo-code-value">{customerData.discountCode}</span>
                <button 
                  className="promo-code-copy-btn"
                  onClick={handleCopyPromoCode}
                  title="Скопировать промокод"
                >
                  📋
                </button>
              </div>
              <p className="promo-code-description">
                Используйте этот код для получения <strong>10% скидки</strong> на ваш первый заказ!
              </p>
            </div>
          </div>

          {/* Инструкции */}
          <div className={`instructions-section ${showInstructions ? 'instructions-section--visible' : ''}`}>
            <h3 className="instructions-title">📱 Как получить скидку:</h3>
            <div className="instructions-list">
              <div className="instruction-item">
                <span className="instruction-number">1</span>
                <span className="instruction-text">Скопируйте ваш промокод: <strong>{customerData.discountCode}</strong></span>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">2</span>
                <span className="instruction-text">Напишите нам в Instagram с этим промокодом</span>
              </div>
              <div className="instruction-item">
                <span className="instruction-number">3</span>
                <span className="instruction-text">Получите 10% скидку на ваш заказ! 🍣</span>
              </div>
            </div>
            
            <div className="social-buttons">
              <button 
                className="social-btn social-btn--instagram"
                onClick={handleShareToInstagram}
              >
                📸 Написать в Instagram
              </button>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className={`additional-info ${showInstructions ? 'additional-info--visible' : ''}`}>
            <div className="info-card">
              <h4>📞 Контакты</h4>
              <p>Телефон: <strong>+31 123 456 789</strong></p>
              <p>Email: <strong>info@sushiclub.nl</strong></p>
            </div>
            
            <div className="info-card">
              <h4>📍 Адрес</h4>
              <p>Damrak 1, 1012 LP Amsterdam</p>
              <p>Нидерланды</p>
            </div>
          </div>

          {/* Кнопка закрытия */}
          <button 
            className="close-btn"
            onClick={onClose}
          >
            ✕ Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
