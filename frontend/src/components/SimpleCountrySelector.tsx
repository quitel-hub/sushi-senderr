import { useState, useEffect, useRef } from "react";
import countries from "world-countries";

interface SimpleCountrySelectorProps {
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
    return countryCode.toUpperCase();
  }
};

// Подготовка данных о странах
const countryOptions = countries
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

const SimpleCountrySelector: React.FC<SimpleCountrySelectorProps> = ({
  value,
  onChange,
  placeholder = "Выберите страну",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = countryOptions.find(option => option.value === value);
  
  const filteredOptions = countryOptions.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.callingCode.includes(searchTerm)
  );

  // Функция для подсветки найденного текста
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="search-highlight" style={{ 
          background: 'rgba(134, 225, 255, 0.4)',
          fontWeight: '700',
          color: '#0c2844',
          padding: '2px 4px',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(134, 225, 255, 0.3)',
          border: '1px solid rgba(134, 225, 255, 0.5)'
        }}>
          {part}
        </span>
      ) : part
    );
  };

  const handleOptionClick = (option: typeof countryOptions[0]) => {
    console.log('SimpleCountrySelector: Option clicked:', option);
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleToggle = () => {
    console.log('SimpleCountrySelector: Toggle clicked, isOpen:', isOpen);
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  // Обработчик клика вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`simple-country-selector ${className}`} style={{ position: 'relative', width: '100%' }}>
      <div 
        className="country-selector-trigger"
        onClick={handleToggle}
        style={{
          padding: '12px 16px',
          border: '2px solid rgba(134, 225, 255, 0.4)',
          borderRadius: '14px',
          background: `
            radial-gradient(140% 120% at 18% 10%, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0) 74%),
            radial-gradient(140% 140% at 82% 12%, rgba(134, 225, 255, 0.15), rgba(134, 225, 255, 0) 68%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 252, 255, 0.98) 100%)
          `,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          minHeight: '48px',
          boxShadow: `
            inset 0 0 0 1px rgba(134, 225, 255, 0.3),
            0 6px 16px rgba(134, 225, 255, 0.15),
            0 3px 8px rgba(4, 44, 90, 0.1)
          `,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(12px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          e.currentTarget.style.boxShadow = `
            inset 0 0 0 2px rgba(134, 225, 255, 0.6),
            0 8px 20px rgba(134, 225, 255, 0.25),
            0 4px 12px rgba(134, 225, 255, 0.4)
          `;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = `
            inset 0 0 0 1px rgba(134, 225, 255, 0.3),
            0 6px 16px rgba(134, 225, 255, 0.15),
            0 3px 8px rgba(4, 44, 90, 0.1)
          `;
        }}
      >
        {selectedOption ? (
          <>
            <span style={{ 
              fontSize: '20px',
              lineHeight: '1',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
            }}>
              {selectedOption.flag}
            </span>
            <span style={{ 
              flex: 1,
              fontSize: '15px',
              fontWeight: '600',
              color: '#0c2844'
            }}>
              {selectedOption.label}
            </span>
            <span style={{ 
              color: 'rgba(12, 40, 68, 0.7)', 
              fontSize: '13px',
              fontWeight: '600',
              background: 'rgba(134, 225, 255, 0.1)',
              padding: '2px 8px',
              borderRadius: '6px',
              border: '1px solid rgba(134, 225, 255, 0.2)'
            }}>
              {selectedOption.callingCode}
            </span>
          </>
        ) : (
          <span style={{ 
            color: 'rgba(12, 40, 68, 0.6)',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            {placeholder}
          </span>
        )}
        <span style={{ 
          fontSize: '14px', 
          color: '#0c2844',
          fontWeight: '600',
          transition: 'transform 0.3s ease'
        }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>

      {isOpen && (
        <div 
          className="country-selector-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            borderRadius: '16px',
            border: '1px solid rgba(134, 225, 255, 0.4)',
            boxShadow: '0 20px 40px rgba(4, 44, 90, 0.25), 0 8px 16px rgba(134, 225, 255, 0.15)',
            zIndex: 1000,
            marginTop: '-8px',
            maxHeight: '250px',
            overflowY: 'auto',
            animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'top'
          }}
        >
          <div style={{ 
            padding: '8px',
            background: 'rgba(134, 225, 255, 0.05)',
            borderRadius: '8px',
            margin: '4px',
            border: '1px solid rgba(134, 225, 255, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#0c2844'
              }}>
                🔍 Поиск страны
              </span>
              {searchTerm && (
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgba(12, 40, 68, 0.7)',
                  background: 'rgba(134, 225, 255, 0.2)',
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}>
                  {filteredOptions.length} найдено
                </span>
              )}
            </div>
            <input
              type="text"
              placeholder="Введите название страны или код..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '2px solid rgba(134, 225, 255, 0.6)',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                background: `
                  radial-gradient(140% 120% at 18% 10%, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0) 74%),
                  radial-gradient(140% 140% at 82% 12%, rgba(134, 225, 255, 0.15), rgba(134, 225, 255, 0) 68%),
                  linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 252, 255, 0.98) 100%)
                `,
                boxShadow: `
                  inset 0 0 0 1px rgba(134, 225, 255, 0.4),
                  0 8px 20px rgba(134, 225, 255, 0.2),
                  0 4px 12px rgba(4, 44, 90, 0.1)
                `,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                color: '#0c2844'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(62, 205, 255, 0.8)';
                e.target.style.boxShadow = `
                  inset 0 0 0 2px rgba(62, 205, 255, 0.6),
                  0 12px 24px rgba(62, 205, 255, 0.3),
                  0 6px 16px rgba(62, 205, 255, 0.2)
                `;
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(134, 225, 255, 0.6)';
                e.target.style.boxShadow = `
                  inset 0 0 0 1px rgba(134, 225, 255, 0.4),
                  0 8px 20px rgba(134, 225, 255, 0.2),
                  0 4px 12px rgba(4, 44, 90, 0.1)
                `;
                e.target.style.transform = 'translateY(0) scale(1)';
              }}
            />
          </div>
          <div style={{ padding: '0 4px 4px' }}>
            {searchTerm && (
              <div style={{
                padding: '6px 10px',
                background: 'rgba(134, 225, 255, 0.1)',
                borderRadius: '6px',
                marginBottom: '8px',
                border: '1px solid rgba(134, 225, 255, 0.3)',
                textAlign: 'center'
              }}>
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#0c2844'
                }}>
                  {filteredOptions.length > 0 
                    ? `Найдено ${filteredOptions.length} стран${filteredOptions.length === 1 ? 'а' : ''}`
                    : 'Страны не найдены'
                  }
                </span>
              </div>
            )}
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                style={{
                  padding: '6px 8px',
                  borderRadius: '6px',
                  margin: '2px 0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: '600',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(134, 225, 255, 0.3)',
                  boxShadow: '0 1px 4px rgba(134, 225, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(134, 225, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateX(6px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(134, 225, 255, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(62, 205, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateX(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(134, 225, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(134, 225, 255, 0.3)';
                }}
              >
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
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#0c2844',
                  lineHeight: '1.1'
                }}>
                  {highlightText(option.label, searchTerm)}
                </span>
                <span style={{ 
                  color: 'rgba(12, 40, 68, 0.7)', 
                  fontSize: '11px',
                  fontWeight: '600',
                  background: 'rgba(134, 225, 255, 0.15)',
                  padding: '1px 4px',
                  borderRadius: '3px',
                  border: '1px solid rgba(134, 225, 255, 0.3)',
                  minWidth: '45px',
                  textAlign: 'center'
                }}>
                  {highlightText(option.callingCode, searchTerm)}
                </span>
              </div>
            ))}
            {filteredOptions.length === 0 && searchTerm && (
              <div style={{ 
                padding: '12px 16px', 
                color: 'rgba(12, 40, 68, 0.8)', 
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center',
                background: 'rgba(255, 99, 99, 0.1)',
                borderRadius: '8px',
                margin: '8px 0',
                border: '1px solid rgba(255, 99, 99, 0.3)',
                boxShadow: '0 2px 6px rgba(255, 99, 99, 0.1)'
              }}>
                <div style={{ fontSize: '16px', marginBottom: '4px' }}>🔍</div>
                <div>Страна не найдена</div>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: '500', 
                  marginTop: '2px',
                  color: 'rgba(12, 40, 68, 0.6)'
                }}>
                  Попробуйте другой поисковый запрос
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCountrySelector;
