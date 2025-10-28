import { useState, useEffect } from "react";
import PhoneInputLib from "react-phone-number-input";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import countries from "world-countries";
import { useTranslation } from "react-i18next";

interface PhoneInputProps {
  value: string;
  onChange: (phoneNumber: string) => void;
  countryCode: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  placeholder = "Введите номер телефона",
  className = "",
  required = false
}) => {
  const { t } = useTranslation();
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Получаем код страны для react-phone-number-input
  const getCountryForPhoneInput = (countryCode: string) => {
    const country = countries.find(c => c.cca2 === countryCode);
    return country?.cca2 as any;
  };

  // Валидация номера телефона
  useEffect(() => {
    if (value && value.trim() !== "") {
      try {
        const isValidNumber = isValidPhoneNumber(value);
        setIsValid(isValidNumber);
        
        if (!isValidNumber) {
          // Попробуем получить более детальную информацию об ошибке
          try {
            const phoneNumber = parsePhoneNumber(value);
            if (phoneNumber && phoneNumber.country !== countryCode) {
              setErrorMessage(t("registration.errors.phoneInvalid"));
            } else {
              setErrorMessage(t("registration.errors.phoneInvalid"));
            }
          } catch (parseError) {
            setErrorMessage(t("registration.errors.phoneInvalid"));
          }
        } else {
          setErrorMessage("");
        }
      } catch (error) {
        setIsValid(false);
        setErrorMessage(t("registration.errors.phoneInvalid"));
      }
    } else {
      setIsValid(null);
      setErrorMessage("");
    }
  }, [value, countryCode]);

  const handleChange = (phoneNumber: string | undefined) => {
    let formattedNumber = phoneNumber || "";
    
    // Убираем дублирующиеся плюсы
    formattedNumber = formattedNumber.replace(/^\+{2,}/, '+');
    
    // Если пользователь вводит номер с плюсом, оставляем как есть
    // Если вводит без плюса, добавляем код страны
    if (formattedNumber && !formattedNumber.startsWith('+')) {
      // Получаем код страны для выбранной страны
      const country = countries.find(c => c.cca2 === countryCode);
      if (country && country.idd && country.idd.root) {
        const countryCodeValue = country.idd.root + (country.idd.suffixes && country.idd.suffixes.length > 0 ? country.idd.suffixes[0] : '');
        formattedNumber = countryCodeValue + formattedNumber;
      }
    }
    
    onChange(formattedNumber);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: 'none',
      background: `
        radial-gradient(140% 120% at 18% 10%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 74%),
        radial-gradient(140% 140% at 82% 12%, rgba(134, 225, 255, 0.1), rgba(134, 225, 255, 0) 68%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 252, 255, 0.95) 100%)
      `,
      borderRadius: '16px',
      padding: '16px 20px',
      fontSize: '16px',
      color: '#0c2844',
      boxShadow: `
        inset 0 0 0 2px ${isValid === false ? 'rgba(255, 107, 107, 0.5)' : 'rgba(134, 225, 255, 0.3)'},
        0 8px 24px rgba(134, 225, 255, 0.15),
        0 4px 12px rgba(4, 44, 90, 0.1)
      `,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      minHeight: 'auto',
      '&:hover': {
        boxShadow: `
          inset 0 0 0 3px ${isValid === false ? 'rgba(255, 107, 107, 0.7)' : 'rgba(134, 225, 255, 0.6)'},
          0 12px 32px rgba(134, 225, 255, 0.3),
          0 0 20px rgba(134, 225, 255, 0.4),
          0 0 40px rgba(134, 225, 255, 0.2)
        `,
        transform: 'translateY(-2px) scale(1.02)'
      }
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
      gap: '8px'
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      color: '#0c2844',
      fontSize: '16px'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'rgba(12, 40, 68, 0.6)',
      fontSize: '16px'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#0c2844',
      fontSize: '16px'
    }),
    menu: (provided: any) => ({
      ...provided,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(134, 225, 255, 0.3)',
      boxShadow: '0 20px 40px rgba(4, 44, 90, 0.2)',
      overflow: 'hidden',
      zIndex: 1000
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: '8px',
      maxHeight: '300px'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isFocused 
        ? 'rgba(134, 225, 255, 0.2)' 
        : 'transparent',
      color: '#0c2844',
      padding: '12px 16px',
      borderRadius: '12px',
      margin: '2px 0',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      '&:hover': {
        background: 'rgba(134, 225, 255, 0.3)',
        transform: 'translateX(4px)'
      }
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#0c2844',
      padding: '0 8px',
      '&:hover': {
        color: '#0c2844'
      }
    })
  };

  return (
    <div className={`phone-input ${className}`}>
      <PhoneInputLib
        value={value}
        onChange={handleChange}
        country={getCountryForPhoneInput(countryCode)}
        placeholder={placeholder}
        international
        countryCallingCodeEditable={false}
        defaultCountry={getCountryForPhoneInput(countryCode)}
        style={customStyles}
        className="phone-input__field"
      />
      
      {isValid === false && errorMessage && (
        <div className="phone-input__error">
          <span className="error-message">{errorMessage}</span>
        </div>
      )}
      
      {isValid === true && (
        <div className="phone-input__success">
          <span className="success-message">{t("registration.success.phoneValid")}</span>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
