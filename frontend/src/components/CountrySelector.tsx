import { useState } from "react";
import Select, { type SingleValue } from "react-select";
import countries from "world-countries";

export interface CountryOption {
  value: string;
  label: string;
  flag: string;
  callingCode: string;
}

interface CountrySelectorProps {
  value: string;
  onChange: (countryCode: string) => void;
  placeholder?: string;
  className?: string;
}

// Функция для получения флага страны по коду
const getCountryFlag = (countryCode: string): string => {
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (error) {
    // Если флаг не может быть отображен, возвращаем символ страны
    return countryCode.toUpperCase();
  }
};

// Подготовка данных о странах
const countryOptions: CountryOption[] = countries
  .filter(country => country.idd && country.idd.root)
  .map(country => {
    const code = country.idd.root + (country.idd.suffixes && country.idd.suffixes.length > 0 ? country.idd.suffixes[0] : '');
    return {
      value: country.cca2,
      label: country.name.common,
      flag: getCountryFlag(country.cca2),
      callingCode: code.startsWith('+') ? code : '+' + code
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

const customSelectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: 'none',
    background: `
      radial-gradient(140% 120% at 18% 10%, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0) 74%),
      radial-gradient(140% 140% at 82% 12%, rgba(134, 225, 255, 0.15), rgba(134, 225, 255, 0) 68%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 252, 255, 0.98) 100%)
    `,
    borderRadius: '12px',
    padding: '10px 14px',
    fontSize: '15px',
    color: '#0c2844',
    boxShadow: `
      inset 0 0 0 1px rgba(134, 225, 255, 0.4),
      0 6px 16px rgba(134, 225, 255, 0.15),
      0 3px 8px rgba(4, 44, 90, 0.1)
    `,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(12px)',
    minHeight: '48px',
    '&:hover': {
      boxShadow: `
        inset 0 0 0 2px rgba(134, 225, 255, 0.6),
        0 8px 20px rgba(134, 225, 255, 0.25),
        0 4px 12px rgba(134, 225, 255, 0.4)
      `,
      transform: 'translateY(-2px) scale(1.02)'
    }
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
    gap: '6px'
  }),
  input: (provided: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: '#0c2844'
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: 'rgba(12, 40, 68, 0.7)',
    fontSize: '15px',
    fontWeight: '600'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#0c2844',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }),
  menu: (provided: any) => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(24px)',
    borderRadius: '16px',
    border: '1px solid rgba(134, 225, 255, 0.4)',
    boxShadow: '0 20px 40px rgba(4, 44, 90, 0.25), 0 8px 16px rgba(134, 225, 255, 0.15)',
    overflow: 'hidden',
    zIndex: 1000,
    marginTop: '0px'
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: '4px',
    maxHeight: '300px'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isFocused 
      ? 'rgba(134, 225, 255, 0.25)' 
      : 'transparent',
    color: '#0c2844',
    padding: '8px 12px',
    borderRadius: '6px',
    margin: '1px 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background: 'rgba(134, 225, 255, 0.35)',
      transform: 'translateX(2px) scale(1.01)',
      boxShadow: '0 2px 8px rgba(134, 225, 255, 0.2)'
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

const CountrySelector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
  placeholder = "Выберите страну",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = countryOptions.find(option => option.value === value);

  const handleChange = (selectedOption: SingleValue<CountryOption>) => {
    console.log('CountrySelector: handleChange called with:', selectedOption);
    if (selectedOption) {
      onChange(selectedOption.value);
    } else {
      // Если опция была очищена, устанавливаем значение по умолчанию
      onChange("RU");
    }
  };

  // Функция для фильтрации по названию страны или коду
  const filterOption = (option: any, inputValue: string) => {
    const searchTerm = inputValue.toLowerCase();
    const countryName = option.label.toLowerCase();
    const callingCode = option.callingCode.toLowerCase();
    
    return countryName.includes(searchTerm) || callingCode.includes(searchTerm);
  };

  return (
    <div className={`country-selector ${className}`}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={countryOptions}
        placeholder={placeholder}
        isSearchable
        isClearable={false}
        styles={customSelectStyles}
        filterOption={filterOption}
        formatOptionLabel={(option) => (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '2px 0'
          }}>
            <span style={{ 
              fontSize: '16px',
              lineHeight: '1',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
              minWidth: '20px',
              textAlign: 'center'
            }}>
              {option.flag}
            </span>
            <span style={{ 
              flex: 1,
              fontSize: '14px',
              fontWeight: '600',
              color: '#0c2844'
            }}>
              {option.label}
            </span>
            <span style={{ 
              color: 'rgba(12, 40, 68, 0.7)', 
              fontSize: '11px',
              fontWeight: '600',
              background: 'rgba(134, 225, 255, 0.15)',
              padding: '1px 6px',
              borderRadius: '4px',
              border: '1px solid rgba(134, 225, 255, 0.3)',
              minWidth: '45px',
              textAlign: 'center'
            }}>
              {option.callingCode}
            </span>
          </div>
        )}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => `${option.flag} ${option.callingCode}`}
        onMenuOpen={() => {
          console.log('CountrySelector: Menu opened');
          setIsOpen(true);
        }}
        onMenuClose={() => {
          console.log('CountrySelector: Menu closed');
          setIsOpen(false);
        }}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        noOptionsMessage={() => (
          <div style={{
            padding: '16px',
            textAlign: 'center',
            color: 'rgba(12, 40, 68, 0.8)',
            fontSize: '15px',
            fontWeight: '600'
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>🔍</div>
            <div>Страна не найдена</div>
            <div style={{ 
              fontSize: '13px', 
              fontWeight: '500', 
              marginTop: '4px',
              color: 'rgba(12, 40, 68, 0.6)'
            }}>
              Попробуйте другой поисковый запрос
            </div>
          </div>
        )}
        loadingMessage={() => (
          <div style={{
            padding: '16px',
            textAlign: 'center',
            color: 'rgba(12, 40, 68, 0.8)',
            fontSize: '15px',
            fontWeight: '600'
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>⏳</div>
            <div>Загрузка стран...</div>
          </div>
        )}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default CountrySelector;
