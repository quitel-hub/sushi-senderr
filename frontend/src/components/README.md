# Компоненты для ввода телефона и выбора страны

## PhoneCountryInput

Основной компонент для ввода номера телефона с выбором страны. Объединяет в себе `CountrySelector` и `PhoneInput`.

### Использование

```tsx
import PhoneCountryInput from "./components/PhoneCountryInput";

<PhoneCountryInput
  countryCode={countryCode}
  phoneNumber={phoneNumber}
  onCountryChange={(code) => setCountryCode(code)}
  onPhoneChange={(phone) => setPhoneNumber(phone)}
  required={true}
/>
```

### Props

- `countryCode: string` - код страны (ISO 3166-1 alpha-2)
- `phoneNumber: string` - номер телефона
- `onCountryChange: (countryCode: string) => void` - обработчик изменения страны
- `onPhoneChange: (phoneNumber: string) => void` - обработчик изменения телефона
- `className?: string` - дополнительные CSS классы
- `required?: boolean` - обязательное поле

## CountrySelector

Компонент для выбора страны с флагами и поиском.

### Особенности

- Показывает флаги стран
- Поддерживает поиск по названию
- Отображает телефонные коды стран
- Адаптивный дизайн

## PhoneInput

Компонент для ввода номера телефона с валидацией.

### Особенности

- Автоматическая валидация номера
- Поддержка международных форматов
- Визуальная индикация ошибок
- Интеграция с выбранной страной

## Стилизация

Все компоненты используют единый стиль, соответствующий дизайну приложения:

- Полупрозрачный фон с размытием
- Градиентные тени
- Анимации при фокусе
- Адаптивная верстка для мобильных устройств

## Локализация

Компоненты поддерживают многоязычность через react-i18next. Необходимые ключи переводов:

```json
{
  "registration": {
    "placeholders": {
      "country": "Выберите страну",
      "phone": "Введите номер телефона"
    },
    "errors": {
      "phoneInvalid": "Неверный формат номера телефона"
    },
    "success": {
      "phoneValid": "✓ Номер телефона корректен"
    }
  }
}
```
