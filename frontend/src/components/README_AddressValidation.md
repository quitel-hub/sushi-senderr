# Валидация адреса Нидерландов

## Описание

Система автоматической валидации и автозаполнения адресов для Нидерландов с поддержкой почтовых кодов в формате 1234 AB.

## Компоненты

### NetherlandsPostalCodeValidator
Основной компонент для валидации почтового кода и поиска адреса.

**Функции:**
- Валидация формата почтового кода (4 цифры + 2 буквы)
- Автоматический поиск адреса через OpenStreetMap Nominatim API
- Обработка ошибок и состояний загрузки

### NetherlandsAddressInput
Компонент формы для ввода адреса с автозаполнением.

**Поля:**
- `postalCode` - почтовый код (1234 AB)
- `street` - улица (автозаполняется)
- `city` - город (автозаполняется)
- `houseNumber` - номер дома (вводится вручную)

## Использование

```tsx
import NetherlandsAddressInput from './components/NetherlandsAddressInput';

<NetherlandsAddressInput
  postalCode={formState.postalCode}
  street={formState.street}
  city={formState.city}
  houseNumber={formState.houseNumber}
  onPostalCodeChange={(value) => handleInputChange("postalCode", value)}
  onStreetChange={(value) => handleInputChange("street", value)}
  onCityChange={(value) => handleInputChange("city", value)}
  onHouseNumberChange={(value) => handleInputChange("houseNumber", value)}
  onValidationChange={(isValid, errors) => setAddressValidation({ isValid, errors })}
  required={true}
/>
```

## Особенности

1. **Автоматическое форматирование** - почтовый код автоматически форматируется с пробелом
2. **Автозаполнение** - при вводе валидного почтового кода автоматически заполняются поля улицы и города
3. **Валидация в реальном времени** - проверка происходит с задержкой 1 секунда
4. **Обработка ошибок** - показ понятных сообщений об ошибках
5. **Индикация загрузки** - анимированный индикатор во время поиска адреса

## API

Используется OpenStreetMap Nominatim API для поиска адресов:
- Бесплатный сервис
- Поддержка геокодирования для Нидерландов
- Ограничение: 1 запрос в секунду

## Примеры почтовых кодов для тестирования

- **1012 JS** - Амстердам (Damrak)
- **3011 AD** - Роттердам (Coolsingel)  
- **2511 CS** - Гаага (Plein)
- **5611 AB** - Эйндховен (Stratumseind)
- **9712 CP** - Гронинген (Grote Markt)

## Стили

Компоненты используют CSS классы:
- `.netherlands-address-input` - основной контейнер
- `.validation-loading` - индикатор загрузки
- `.error-message` - сообщения об ошибках
- `.address-auto-filled` - подтверждение автозаполнения

## Ограничения

1. API имеет ограничения по частоте запросов
2. Поиск работает только для Нидерландов
3. Требует подключения к интернету
4. Некоторые редкие почтовые коды могут не найтись
