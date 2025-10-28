import React, { useState } from 'react';
import NetherlandsAddressInput from './NetherlandsAddressInput';

/**
 * Демонстрационный компонент для тестирования валидации адреса Нидерландов
 */
export const AddressValidationDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    postalCode: '',
    street: '',
    city: '',
    houseNumber: ''
  });
  
  const [validation, setValidation] = useState({
    isValid: false,
    errors: [] as string[]
  });

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleValidationChange = (isValid: boolean, errors: string[]) => {
    setValidation({ isValid, errors });
  };

  const showExamples = !formData.postalCode && !formData.street && !formData.city && !formData.houseNumber;

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '20px auto', 
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <h2 style={{ color: '#e2f5ff', marginBottom: '20px' }}>
        Тест валидации адреса Нидерландов
      </h2>
      
      <p style={{ color: '#a0c4d4', marginBottom: '20px' }}>
        Введите почтовый код в формате 1234 AB, и система автоматически найдет и заполнит улицу и город.
      </p>

      <NetherlandsAddressInput
        postalCode={formData.postalCode}
        street={formData.street}
        city={formData.city}
        houseNumber={formData.houseNumber}
        onPostalCodeChange={(value) => handleFieldChange('postalCode', value)}
        onStreetChange={(value) => handleFieldChange('street', value)}
        onCityChange={(value) => handleFieldChange('city', value)}
        onHouseNumberChange={(value) => handleFieldChange('houseNumber', value)}
        onValidationChange={handleValidationChange}
        required={true}
      />

      <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}>
        <h3 style={{ color: '#e2f5ff', marginBottom: '10px' }}>Состояние валидации:</h3>
        <p style={{ color: validation.isValid ? '#4ade80' : '#ef4444', fontWeight: 'bold' }}>
          {validation.isValid ? '✓ Адрес валиден' : '✗ Адрес невалиден'}
        </p>
        
        {validation.errors.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ color: '#ef4444', fontWeight: 'bold' }}>Ошибки:</p>
            <ul style={{ color: '#ef4444', margin: '5px 0', paddingLeft: '20px' }}>
              {validation.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginTop: '15px' }}>
          <h4 style={{ color: '#e2f5ff', marginBottom: '8px' }}>Введенные данные:</h4>
          <pre style={{ 
            color: '#a0c4d4', 
            background: 'rgba(0, 0, 0, 0.3)', 
            padding: '10px', 
            borderRadius: '4px',
            fontSize: '14px',
            overflow: 'auto'
          }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>

      {showExamples && (
        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '4px', border: '1px solid rgba(74, 222, 128, 0.3)' }}>
          <h4 style={{ color: '#4ade80', marginBottom: '8px' }}>Примеры почтовых кодов для тестирования:</h4>
          <ul style={{ color: '#a0c4d4', margin: '5px 0', paddingLeft: '20px' }}>
            <li><strong>1012 JS</strong> - Амстердам (Damrak)</li>
            <li><strong>3011 AD</strong> - Роттердам (Coolsingel)</li>
            <li><strong>2511 CS</strong> - Гаага (Plein)</li>
            <li><strong>5611 AB</strong> - Эйндховен (Stratumseind)</li>
            <li><strong>9712 CP</strong> - Гронинген (Grote Markt)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddressValidationDemo;
