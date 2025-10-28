import React, { useState, useEffect, useCallback } from 'react';
import { findAddressByPostalCode } from '../data/netherlandsPostalCodesSimple';

interface AddressData {
  street: string;
  city: string;
  province: string;
}

interface PostalCodeValidatorProps {
  postalCode: string;
  onAddressFound: (address: AddressData) => void;
  onValidationChange: (isValid: boolean, errors: string[]) => void;
}

export const NetherlandsPostalCodeValidator: React.FC<PostalCodeValidatorProps> = ({
  postalCode,
  onAddressFound,
  onValidationChange
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Валидация формата почтового кода Нидерландов (4 цифры + 2 буквы)
  const validatePostalCodeFormat = (code: string): boolean => {
    const netherlandsPostalCodeRegex = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i;
    return netherlandsPostalCodeRegex.test(code);
  };

  // Функция для поиска адреса по почтовому коду
  const lookupAddressByPostalCode = async (code: string): Promise<AddressData | null> => {
    try {
      // Сначала проверяем локальную базу данных
      const localResult = findAddressByPostalCode(code);
      console.log('Поиск кода:', code, 'Результат:', localResult);
      if (localResult) {
        return {
          street: localResult.street,
          city: localResult.city,
          province: localResult.province
        };
      }
      
      // Если не найдено в локальной базе, пробуем API с несколькими вариантами запроса
      const cleanCode = code.replace(/\s/g, '');
      
      // Пробуем разные варианты поиска
      const searchQueries = [
        `${cleanCode}, Netherlands`,
        `${cleanCode}, NL`,
        `postcode ${cleanCode}, Netherlands`,
        `${cleanCode} Netherlands`
      ];
      
      for (const query of searchQueries) {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=nl&limit=3&addressdetails=1`,
            {
              headers: {
                'User-Agent': 'SushiApp/1.0'
              }
            }
          );
          
          if (response.ok) {
            const data = await response.json();
            
            if (data && data.length > 0) {
              // Ищем наиболее подходящий результат
              const bestResult = data.find((result: any) => {
                const address = result.address;
                return address && (address.city || address.town || address.village || address.municipality);
              }) || data[0];
              
              const address = bestResult.address;
              
              if (address && (address.city || address.town || address.village || address.municipality)) {
                return {
                  street: address.road || address.pedestrian || address.footway || address.house_number || '',
                  city: address.city || address.town || address.village || address.municipality || '',
                  province: address.state || address.province || ''
                };
              }
            }
          }
        } catch (apiError) {
          console.warn(`API запрос не удался для "${query}":`, apiError);
          continue;
        }
      }
      
      return null;
    } catch (error) {
      console.error('Ошибка при поиске адреса:', error);
      return null;
    }
  };

  // Основная функция валидации
  const validatePostalCode = useCallback(async (code: string) => {
    const newErrors: string[] = [];
    
    if (!code) {
      newErrors.push('Почтовый код обязателен для заполнения');
      onValidationChange(false, newErrors);
      return;
    }

    if (!validatePostalCodeFormat(code)) {
      newErrors.push('Почтовый код должен быть в формате 1234 AB (4 цифры + 2 буквы)');
      onValidationChange(false, newErrors);
      return;
    }

    setIsLoading(true);
    setErrors([]);

    try {
      const addressData = await lookupAddressByPostalCode(code);
      
      if (addressData && addressData.street && addressData.city) {
        onAddressFound(addressData);
        onValidationChange(true, []);
      } else {
        newErrors.push('Адрес не найден для данного почтового кода. Попробуйте другой код или введите адрес вручную.');
        newErrors.push('💡 Совет: Попробуйте коды из примеров: 1012 JS (Амстердам), 3011 AD (Роттердам), 2511 CS (Гаага)');
        onValidationChange(false, newErrors);
      }
    } catch (error) {
      newErrors.push('Ошибка при поиске адреса. Попробуйте еще раз.');
      onValidationChange(false, newErrors);
    } finally {
      setIsLoading(false);
      setErrors(newErrors);
    }
  }, [onAddressFound, onValidationChange]);

  // Автоматическая валидация при изменении почтового кода
  useEffect(() => {
    if (postalCode && postalCode.length >= 6) {
      const timeoutId = setTimeout(() => {
        validatePostalCode(postalCode);
      }, 1000); // Задержка 1 секунда для избежания частых запросов

      return () => clearTimeout(timeoutId);
    }
  }, [postalCode, validatePostalCode]);

  return (
    <div className="postal-code-validator">
      {isLoading && (
        <div className="validation-loading">
          <span>Поиск адреса...</span>
        </div>
      )}
      {errors.length > 0 && (
        <div className="validation-errors">
          {errors.map((error, index) => (
            <div key={index} className="error-message">
              {error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NetherlandsPostalCodeValidator;
