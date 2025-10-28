import { useState, useEffect } from "react";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import countries from "world-countries";
import { useTranslation } from "react-i18next";

interface SimplePhoneInputProps {
  value: string;
  onChange: (phoneNumber: string) => void;
  countryCode: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const SimplePhoneInput: React.FC<SimplePhoneInputProps> = ({
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
  const [displayValue, setDisplayValue] = useState<string>(value);

  // Получаем код страны для отображения
  const getCountryCallingCode = (countryCode: string): string => {
    const country = countries.find(c => c.cca2 === countryCode);
    if (country && country.idd && country.idd.root) {
      const code = country.idd.root + (country.idd.suffixes && country.idd.suffixes.length > 0 ? country.idd.suffixes[0] : '');
      // Убираем лишние плюсы, оставляем только один
      return code.startsWith('+') ? code : '+' + code;
    }
    return '';
  };

  const currentCallingCode = getCountryCallingCode(countryCode);

  useEffect(() => {
    // Когда код страны изменяется, автоматически обновляем номер
    if (currentCallingCode) {
      if (!value) {
        // Если нет значения, устанавливаем только код страны
        setDisplayValue(currentCallingCode);
        onChange(currentCallingCode);
      } else if (!value.startsWith(currentCallingCode)) {
        // Если есть значение, но оно не начинается с нового кода страны
        // Убираем старый код страны и добавляем новый
        const cleanValue = value.replace(/^\+\d*/, ''); // Убираем старый код страны
        const newValue = currentCallingCode + cleanValue;
        setDisplayValue(newValue);
        onChange(newValue);
      } else {
        setDisplayValue(value);
      }
    }
  }, [countryCode, currentCallingCode]);

  // Валидация номера телефона
  useEffect(() => {
    if (displayValue && displayValue.trim() !== "" && displayValue.length > currentCallingCode.length) {
      try {
        const isValidNumber = isValidPhoneNumber(displayValue);
        setIsValid(isValidNumber);
        
        if (!isValidNumber) {
          setErrorMessage(t("registration.errors.phoneInvalid"));
        } else {
          setErrorMessage("");
        }
      } catch (error) {
        setIsValid(false);
        setErrorMessage(t("registration.errors.phoneInvalid"));
      }
    } else if (displayValue && displayValue.length <= currentCallingCode.length) {
      // Если номер слишком короткий, показываем предупреждение
      setIsValid(false);
      setErrorMessage(t("registration.errors.phoneTooShort"));
    } else {
      setIsValid(null);
      setErrorMessage("");
    }
  }, [displayValue, currentCallingCode, t]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    // Фильтруем только цифры и плюс
    newValue = newValue.replace(/[^0-9+]/g, '');

    // Убираем все дублирующиеся плюсы в начале
    newValue = newValue.replace(/^\+{2,}/, '+');

    // Если новое значение короче кода страны или не начинается с него,
    // сбрасываем его только на код страны. Это предотвращает удаление префикса пользователем
    if (currentCallingCode && (!newValue.startsWith(currentCallingCode) || newValue.length < currentCallingCode.length)) {
      newValue = currentCallingCode;
    }

    setDisplayValue(newValue);
    onChange(newValue); // Передаем полное значение включая код страны в родительский компонент
  };

  // Обработка фокуса - очищаем ошибки при начале ввода
  const handleFocus = () => {
    if (isValid === false) {
      setIsValid(null);
      setErrorMessage("");
    }
  };

  // Обработка нажатий клавиш - разрешаем только цифры, плюс и управляющие клавиши
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 
      'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'
    ];
    
    const isDigit = event.key >= '0' && event.key <= '9';
    const isPlus = event.key === '+';
    const isAllowedKey = allowedKeys.includes(event.key);
    const isCtrlA = event.ctrlKey && event.key === 'a';
    const isCtrlC = event.ctrlKey && event.key === 'c';
    const isCtrlV = event.ctrlKey && event.key === 'v';
    const isCtrlX = event.ctrlKey && event.key === 'x';
    const isCtrlZ = event.ctrlKey && event.key === 'z';
    
    // Разрешаем только цифры, плюс, управляющие клавиши и комбинации Ctrl
    if (!isDigit && !isPlus && !isAllowedKey && !isCtrlA && !isCtrlC && !isCtrlV && !isCtrlX && !isCtrlZ) {
      event.preventDefault();
    }
  };

  // Обработка вставки - фильтруем только цифры и плюс
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    
    // Фильтруем только цифры и плюс
    const filteredText = pastedText.replace(/[^0-9+]/g, '');
    
    if (filteredText) {
      let newValue = displayValue;
      
      // Если вставляем в начало и есть код страны, заменяем только часть после кода
      if (currentCallingCode && newValue.startsWith(currentCallingCode)) {
        const afterCode = newValue.substring(currentCallingCode.length);
        newValue = currentCallingCode + filteredText;
      } else {
        newValue = filteredText;
      }
      
      // Убираем дублирующиеся плюсы
      newValue = newValue.replace(/^\+{2,}/, '+');
      
      setDisplayValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className={`phone-input ${className}`}>
      <input
        id="phoneNumber"
        type="tel"
        className={`form__input ${isValid === false ? 'form__input--error' : ''} ${isValid === true ? 'form__input--success' : ''}`}
        placeholder={currentCallingCode ? `${currentCallingCode} ${t("registration.placeholders.phone")}` : t("registration.placeholders.phone")}
        value={displayValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onFocus={handleFocus}
        required={required}
        inputMode="numeric"
        pattern="[0-9+]*"
        autoComplete="tel"
      />
      {errorMessage && (
        <span className={`form__hint ${isValid === false ? 'form__hint--error' : ''} ${isValid === true ? 'form__hint--success' : ''}`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default SimplePhoneInput;
