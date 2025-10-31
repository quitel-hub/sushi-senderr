import React, { useState, useEffect } from 'react';

interface AddressValidationResult {
  isValid: boolean;
  errors: string[];
}

interface NetherlandsAddressValidatorProps {
  city: string;
  street: string;
  postalCode: string;
  onValidationChange: (result: AddressValidationResult) => void;
}

export const NetherlandsAddressValidator: React.FC<NetherlandsAddressValidatorProps> = ({
  city,
  street,
  postalCode,
  onValidationChange
}) => {
  const [validationResult, setValidationResult] = useState<AddressValidationResult>({
    isValid: false,
    errors: []
  });

  // Валидация почтового кода Нидерландов (формат: 1234 AB)
  const validatePostalCode = (code: string): boolean => {
    const netherlandsPostalCodeRegex = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;
    return netherlandsPostalCodeRegex.test(code);
  };

  // Валидация города (должен содержать только буквы, пробелы, дефисы и апострофы)
  const validateCity = (cityName: string): boolean => {
    const cityRegex = /^[a-zA-Z\s\-']+$/;
    return cityName.length >= 2 && cityRegex.test(cityName);
  };

  // Валидация улицы (должна содержать название и номер)
  const validateStreet = (streetName: string): boolean => {
    const streetRegex = /^[a-zA-Z\s\-']+\s+\d+[a-zA-Z]?$/;
    return streetName.length >= 5 && streetRegex.test(streetName);
  };

  useEffect(() => {
    const errors: string[] = [];

    // Проверка города
    if (city && !validateCity(city)) {
      errors.push('Город должен содержать только буквы и быть не менее 2 символов');
    }

    // Проверка улицы
    if (street && !validateStreet(street)) {
      errors.push('Улица должна содержать название и номер (например: Damrak 1)');
    }

    // Проверка почтового кода
    if (postalCode && !validatePostalCode(postalCode)) {
      errors.push('Почтовый код должен быть в формате 1234 AB');
    }

    // Проверка на пустые поля
    if (!city || !street || !postalCode) {
      errors.push('Все поля адреса обязательны для заполнения');
    }

    const isValid = errors.length === 0 && city && street && postalCode;
    
    const result: AddressValidationResult = {
      isValid: true,
      errors
    };

    setValidationResult(result);
    onValidationChange(result);
  }, [city, street, postalCode, onValidationChange]);

  return null; // Компонент не рендерит UI, только валидирует
};

export default NetherlandsAddressValidator;
