import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  required = false
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<{
    day: number;
    month: number;
    year: number;
  }>(() => {
    if (value) {
      const date = new Date(value);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    }
    const now = new Date();
    return {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear()
    };
  });

  const [currentView, setCurrentView] = useState<'day' | 'month' | 'year'>('day');
  const [hoveredDate, setHoveredDate] = useState<{day: number, month: number, year: number} | null>(null);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Используем нидерландское время (Europe/Amsterdam)
  const getNetherlandsDate = () => {
    const now = new Date();
    return new Date(now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
  };
  
  const netherlandsDate = getNetherlandsDate();
  const currentYear = netherlandsDate.getFullYear();
  const currentMonth = netherlandsDate.getMonth() + 1;
  const currentDay = netherlandsDate.getDate();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = [
    { value: 1, name: t("registration.datePicker.months.january") || "January" },
    { value: 2, name: t("registration.datePicker.months.february") || "February" },
    { value: 3, name: t("registration.datePicker.months.march") || "March" },
    { value: 4, name: t("registration.datePicker.months.april") || "April" },
    { value: 5, name: t("registration.datePicker.months.may") || "May" },
    { value: 6, name: t("registration.datePicker.months.june") || "June" },
    { value: 7, name: t("registration.datePicker.months.july") || "July" },
    { value: 8, name: t("registration.datePicker.months.august") || "August" },
    { value: 9, name: t("registration.datePicker.months.september") || "September" },
    { value: 10, name: t("registration.datePicker.months.october") || "October" },
    { value: 11, name: t("registration.datePicker.months.november") || "November" },
    { value: 12, name: t("registration.datePicker.months.december") || "December" }
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const days = Array.from(
    { length: getDaysInMonth(selectedDate.month, selectedDate.year) },
    (_, i) => i + 1
  );

  useEffect(() => {
    if (value) {
      // Парсим дату в формате YYYY-MM-DD напрямую, избегая проблем с часовыми поясами
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);
        
        const newSelectedDate = {
          day: day,
          month: month,
          year: year
        };
        
        console.log('DatePicker: Синхронизация с внешним значением:', { value, newSelectedDate });
        
        setSelectedDate(newSelectedDate);
        setForceUpdate(prev => prev + 1);
      } else {
        // Fallback к старому методу, если формат не YYYY-MM-DD
        const date = new Date(value);
        const newSelectedDate = {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear()
        };
        
        console.log('DatePicker: Синхронизация с внешним значением (fallback):', { value, newSelectedDate });
        
        setSelectedDate(newSelectedDate);
        setForceUpdate(prev => prev + 1);
      }
    } else {
      // Если значение пустое, сбрасываем к текущей дате
      const now = getNetherlandsDate();
      setSelectedDate({
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear()
      });
      setForceUpdate(prev => prev + 1);
    }
  }, [value]);

  // Закрытие календаря при клике вне компонента и поддержка клавиатуры
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowLeft':
          if (currentView === 'day') {
            const newMonth = selectedDate.month === 1 ? 12 : selectedDate.month - 1;
            const newYear = selectedDate.month === 1 ? selectedDate.year - 1 : selectedDate.year;
            setSelectedDate(prev => ({ ...prev, month: newMonth, year: newYear }));
          }
          break;
        case 'ArrowRight':
          if (currentView === 'day') {
            const newMonth = selectedDate.month === 12 ? 1 : selectedDate.month + 1;
            const newYear = selectedDate.month === 12 ? selectedDate.year + 1 : selectedDate.year;
            if (isMonthSelectable(newMonth, newYear)) {
              setSelectedDate(prev => ({ ...prev, month: newMonth, year: newYear }));
            }
          }
          break;
        case 'ArrowUp':
          if (currentView === 'day') {
            setCurrentView('month');
          } else if (currentView === 'month') {
            setCurrentView('year');
          }
          break;
        case 'ArrowDown':
          if (currentView === 'year') {
            setCurrentView('month');
          } else if (currentView === 'month') {
            setCurrentView('day');
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentView, selectedDate]);

  const handleDateSelect = (day: number, month: number, year: number) => {
    if (!isDaySelectable(day, month, year)) return;
    
    // Создаем дату в локальном часовом поясе, избегая проблем с UTC
    const newDate = new Date(year, month - 1, day, 12, 0, 0, 0); // Устанавливаем полдень для избежания проблем с часовыми поясами
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    console.log('DatePicker: Выбрана дата:', { day, month, year });
    console.log('DatePicker: Созданная дата:', newDate);
    console.log('DatePicker: Отформатированная дата:', formattedDate);
    
    // Обновляем локальное состояние
    setSelectedDate({ day, month, year });
    
    // Вызываем onChange с правильной датой
    onChange(formattedDate);
    
    // Закрываем календарь
    setIsOpen(false);
    
    // Принудительно обновляем отображение
    setForceUpdate(prev => prev + 1);
    
    setTimeout(() => {
      console.log('DatePicker: Синхронизация завершена');
    }, 100);
  };

  const handleYearSelect = (year: number) => {
    if (!isYearSelectable(year)) return;
    setSelectedDate(prev => ({ ...prev, year }));
    setCurrentView('month');
  };

  const handleMonthSelect = (month: number) => {
    if (!isMonthSelectable(month, selectedDate.year)) return;
    setSelectedDate(prev => ({ ...prev, month }));
    setCurrentView('day');
  };

  const formatDisplayDate = () => {
    if (!value) return placeholder || t("registration.datePicker.placeholder");
    
    try {
      // Парсим дату в формате YYYY-MM-DD напрямую, избегая проблем с часовыми поясами
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);
        
        const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
        console.log('DatePicker: Отображение даты:', { value, formattedDate });
        
        return formattedDate;
      }
      
      // Fallback к старому методу, если формат не YYYY-MM-DD
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        console.warn('DatePicker: Неверная дата:', value);
        return placeholder || t("registration.datePicker.placeholder");
      }
      
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      
      const formattedDate = `${day}.${month}.${year}`;
      console.log('DatePicker: Отображение даты (fallback):', { value, formattedDate });
      
      return formattedDate;
    } catch (error) {
      console.error('DatePicker: Ошибка форматирования даты:', error);
      return placeholder || t("registration.datePicker.placeholder");
    }
  };

  const formatSelectedDate = () => {
    if (!value) return {
      day: '',
      month: '',
      year: '',
      fullDate: ''
    };
    
    try {
      // Парсим дату в формате YYYY-MM-DD напрямую, избегая проблем с часовыми поясами
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const day = parseInt(dateParts[2]);
        
        const result = {
          day: day.toString().padStart(2, '0'),
          month: month.toString().padStart(2, '0'),
          year: year.toString(),
          fullDate: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
        };
        
        console.log('DatePicker: Форматирование выбранной даты:', { value, result });
        
        return result;
      }
      
      // Fallback к старому методу, если формат не YYYY-MM-DD
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        console.warn('DatePicker: Неверная дата для formatSelectedDate:', value);
        return {
          day: '',
          month: '',
          year: '',
          fullDate: ''
        };
      }
      
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      
      const result = {
        day: day.toString().padStart(2, '0'),
        month: month.toString().padStart(2, '0'),
        year: year.toString(),
        fullDate: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`
      };
      
      console.log('DatePicker: Форматирование выбранной даты (fallback):', { value, result });
      
      return result;
    } catch (error) {
      console.error('DatePicker: Ошибка форматирования выбранной даты:', error);
      return {
        day: '',
        month: '',
        year: '',
        fullDate: ''
      };
    }
  };

  const getYearRange = (year: number) => {
    const startYear = Math.floor(year / 20) * 20;
    return Array.from({ length: 20 }, (_, i) => startYear + i);
  };

  // Проверка, можно ли выбрать год (используем нидерландское время)
  const isYearSelectable = (year: number) => {
    return year <= currentYear;
  };

  // Проверка, можно ли выбрать месяц (используем нидерландское время)
  const isMonthSelectable = (month: number, year: number) => {
    if (year < currentYear) return true;
    if (year === currentYear) return month <= currentMonth;
    return false;
  };

  // Проверка, можно ли выбрать день (используем нидерландское время)
  const isDaySelectable = (day: number, month: number, year: number) => {
    if (year < currentYear) return true;
    if (year === currentYear && month < currentMonth) return true;
    if (year === currentYear && month === currentMonth) return day <= currentDay;
    return false;
  };

  return (
    <div className={`date-picker ${className}`} ref={containerRef} key={forceUpdate}>
      <div className="date-picker__input-container">
        <div className="date-picker__input-wrapper">
          <input
            type="text"
            className="form__input date-picker__input"
            value={formatDisplayDate()}
            placeholder={placeholder || t("registration.datePicker.placeholder")}
            readOnly
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                setIsOpen(true);
              }
            }}
            required={required}
            key={`input-${forceUpdate}`}
            aria-label={t("registration.datePicker.ariaLabel") || "Выберите дату"}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            role="combobox"
            style={{
              cursor: 'pointer',
              backgroundColor: value ? '#f8f9fa' : '#ffffff',
              borderColor: value ? '#28a745' : '#ced4da',
              fontWeight: value ? '600' : '400',
              color: value ? '#155724' : '#495057',
              transition: 'all 0.3s ease',
              paddingRight: '50px'
            }}
          />
          <div className="date-picker__input-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
        </div>
        {value && (
          <div className="date-picker__selected-info" key={`info-${forceUpdate}`}>
            <div className="date-picker__selected-date">
              <span className="date-picker__selected-icon">✓</span>
              Выбрано: {formatSelectedDate().fullDate}
            </div>
            <div className="date-picker__selected-parts">
              <span className="date-picker__day-part">
                <span className="date-picker__part-label">День</span>
                <span className="date-picker__part-value">{formatSelectedDate().day}</span>
              </span>
              <span className="date-picker__month-part">
                <span className="date-picker__part-label">Месяц</span>
                <span className="date-picker__part-value">{formatSelectedDate().month}</span>
              </span>
              <span className="date-picker__year-part">
                <span className="date-picker__part-label">Год</span>
                <span className="date-picker__part-value">{formatSelectedDate().year}</span>
              </span>
            </div>
          </div>
        )}
      </div>
      
      {isOpen && (
        <div 
          className="date-picker__dropdown"
          role="dialog"
          aria-modal="true"
          aria-label={t("registration.datePicker.dialogLabel") || "Календарь для выбора даты"}
        >
          <div className="date-picker__header">
            <div className="date-picker__title">
              {currentView === 'day' && (
                <div className="date-picker__title-content">
                  <div className="date-picker__title-main">
                    {months[selectedDate.month - 1].name} {selectedDate.year}
                  </div>
                  {value && (
                    <div className="date-picker__title-selected" key={`title-${forceUpdate}`}>
                      Выбрано: {formatSelectedDate().fullDate}
                    </div>
                  )}
                </div>
              )}
              {currentView === 'month' && selectedDate.year}
              {currentView === 'year' && `${Math.floor(selectedDate.year / 20) * 20}-${Math.floor(selectedDate.year / 20) * 20 + 19}`}
            </div>
            <div className="date-picker__controls">
              {currentView === 'day' && (
                <>
                  <button
                    type="button"
                    className="date-picker__nav-btn date-picker__nav-btn--prev"
                    onClick={() => {
                      const newMonth = selectedDate.month === 1 ? 12 : selectedDate.month - 1;
                      const newYear = selectedDate.month === 1 ? selectedDate.year - 1 : selectedDate.year;
                      setSelectedDate(prev => ({ ...prev, month: newMonth, year: newYear }));
                    }}
                    title="Предыдущий месяц"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="date-picker__nav-btn date-picker__nav-btn--next"
                    onClick={() => {
                      const newMonth = selectedDate.month === 12 ? 1 : selectedDate.month + 1;
                      const newYear = selectedDate.month === 12 ? selectedDate.year + 1 : selectedDate.year;
                      if (isMonthSelectable(newMonth, newYear)) {
                        setSelectedDate(prev => ({ ...prev, month: newMonth, year: newYear }));
                      }
                    }}
                    title="Следующий месяц"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </button>
                </>
              )}
              <button
                type="button"
                className="date-picker__nav-btn date-picker__nav-btn--view"
                onClick={() => {
                  if (currentView === 'day') {
                    setCurrentView('month');
                  } else if (currentView === 'month') {
                    setCurrentView('year');
                  }
                }}
                title="Выбрать год/месяц"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </button>
              <button
                type="button"
                className="date-picker__close-btn"
                onClick={() => setIsOpen(false)}
                title="Закрыть"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="date-picker__content">
            {currentView === 'year' && (
              <div className="date-picker__years">
                <div className="date-picker__year-range">
                  {getYearRange(selectedDate.year).map(year => {
                    const isSelectable = isYearSelectable(year);
                    return (
                      <button
                        key={year}
                        type="button"
                        className={`date-picker__year ${selectedDate.year === year ? 'date-picker__year--selected' : ''} ${!isSelectable ? 'date-picker__year--disabled' : ''}`}
                        onClick={() => handleYearSelect(year)}
                        disabled={!isSelectable}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
                <div className="date-picker__year-navigation">
                  <button
                    type="button"
                    className="date-picker__nav-btn"
                    onClick={() => setSelectedDate(prev => ({ ...prev, year: prev.year - 20 }))}
                  >
                    ← {t("registration.datePicker.previousYears", { count: 20 })}
                  </button>
                  <button
                    type="button"
                    className="date-picker__nav-btn"
                    onClick={() => setSelectedDate(prev => ({ ...prev, year: prev.year + 20 }))}
                  >
                    {t("registration.datePicker.nextYears", { count: 20 })} →
                  </button>
                </div>
              </div>
            )}

            {currentView === 'month' && (
              <div className="date-picker__months">
                <div className="date-picker__month-header">
                  <h3 className="date-picker__month-title">Выберите месяц для {selectedDate.year}</h3>
                </div>
                <div className="date-picker__month-grid">
                  {months.map(month => {
                    const isSelectable = isMonthSelectable(month.value, selectedDate.year);
                    return (
                      <button
                        key={month.value}
                        type="button"
                        className={`date-picker__month ${selectedDate.month === month.value ? 'date-picker__month--selected' : ''} ${!isSelectable ? 'date-picker__month--disabled' : ''}`}
                        onClick={() => handleMonthSelect(month.value)}
                        disabled={!isSelectable}
                        title={isSelectable ? `${month.name} ${selectedDate.year}` : 'Недоступно'}
                      >
                        <div className="date-picker__month-number">{month.value}</div>
                        <div className="date-picker__month-name">{month.name}</div>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="date-picker__back-btn"
                  onClick={() => setCurrentView('year')}
                >
                  ← {t("registration.datePicker.backToYears")}
                </button>
              </div>
            )}

            {currentView === 'day' && (
              <div className="date-picker__days">
                {/* Дни недели */}
                <div className="date-picker__weekdays">
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Пн</span>
                    <span className="date-picker__weekday-full">Понедельник</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Вт</span>
                    <span className="date-picker__weekday-full">Вторник</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Ср</span>
                    <span className="date-picker__weekday-full">Среда</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Чт</span>
                    <span className="date-picker__weekday-full">Четверг</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Пт</span>
                    <span className="date-picker__weekday-full">Пятница</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Сб</span>
                    <span className="date-picker__weekday-full">Суббота</span>
                  </div>
                  <div className="date-picker__weekday">
                    <span className="date-picker__weekday-short">Вс</span>
                    <span className="date-picker__weekday-full">Воскресенье</span>
                  </div>
                </div>
                
                <div className="date-picker__days-grid">
                  {/* Пустые ячейки для выравнивания */}
                  {Array.from({ length: new Date(selectedDate.year, selectedDate.month - 1, 1).getDay() || 7 }).map((_, i) => (
                    <div key={`empty-${i}`} className="date-picker__day date-picker__day--empty"></div>
                  ))}
                  
                  {days.map(day => {
                    const isSelectable = isDaySelectable(day, selectedDate.month, selectedDate.year);
                    const isHovered = hoveredDate?.day === day && hoveredDate?.month === selectedDate.month && hoveredDate?.year === selectedDate.year;
                    const isToday = day === currentDay && selectedDate.month === currentMonth && selectedDate.year === currentYear;
                    
                    return (
                      <button
                        key={day}
                        type="button"
                        className={`date-picker__day ${selectedDate.day === day ? 'date-picker__day--selected' : ''} ${!isSelectable ? 'date-picker__day--disabled' : ''} ${isToday ? 'date-picker__day--today' : ''} ${isHovered ? 'date-picker__day--hovered' : ''}`}
                        onClick={() => handleDateSelect(day, selectedDate.month, selectedDate.year)}
                        onMouseEnter={() => setHoveredDate({day, month: selectedDate.month, year: selectedDate.year})}
                        onMouseLeave={() => setHoveredDate(null)}
                        disabled={!isSelectable}
                        title={isSelectable ? `${day} ${months[selectedDate.month - 1].name} ${selectedDate.year}` : 'Недоступно'}
                        aria-label={isSelectable ? `${day} ${months[selectedDate.month - 1].name} ${selectedDate.year}` : 'Недоступно'}
                        aria-pressed={selectedDate.day === day}
                        role="button"
                        tabIndex={isSelectable ? 0 : -1}
                        style={{
                          position: 'relative'
                        }}
                      >
                        <div className="date-picker__day-content">
                          <span className="date-picker__day-number">{day}</span>
                          {isToday && (
                            <span className="date-picker__day-today-indicator">Сегодня</span>
                          )}
                          {selectedDate.day === day && (
                            <div className="date-picker__selected-indicator" key={`indicator-${day}-${forceUpdate}`}>
                              ✓
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                <div className="date-picker__navigation">
                  <button
                    type="button"
                    className="date-picker__back-btn"
                    onClick={() => setCurrentView('month')}
                  >
                    ← {t("registration.datePicker.backToMonths")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
