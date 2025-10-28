const fs = require('fs');
const path = require('path');

// Базовые переводы для панели администратора
const adminTranslations = {
  "admin": {
    "title": "Admin Panel",
    "sync": {
      "autoSync": "🔄 Auto-sync",
      "syncStopped": "⏸️ Sync stopped", 
      "syncNow": "🔄 Sync now",
      "lastSync": "Last sync: {{time}}",
      "error": "Error loading data: {{error}}"
    },
    "stats": {
      "customers": "Customers",
      "sessions": "Sessions", 
      "successful": "Successful",
      "failed": "Failed",
      "synced": "Synced"
    },
    "filters": {
      "search": "🔍 Search all data...",
      "allCountries": "All countries",
      "allStatuses": "All statuses",
      "successful": "Successful",
      "failed": "Failed",
      "clearFilters": "🗑️ Clear filters"
    },
    "tabs": {
      "customers": "👥 Customers ({{filtered}}/{{total}})",
      "sessions": "🔐 Login sessions ({{filtered}}/{{total}})",
      "device": "📱 Current device",
      "broadcast": "📢 Broadcast", 
      "synced": "🔄 Synced data ({{filtered}}/{{total}})"
    },
    "customers": {
      "title": "Customer list",
      "exportCsv": "📊 Export CSV",
      "exportJson": "📄 Export JSON",
      "table": {
        "id": "ID",
        "name": "Name",
        "phone": "Phone",
        "email": "Email",
        "country": "Country",
        "city": "City",
        "address": "Address",
        "birthDate": "Birth date",
        "preferences": "Preferences",
        "feedback": "Feedback",
        "promoCode": "Promo code",
        "registrationDate": "Registration date"
      }
    },
    "sessions": {
      "title": "Login history",
      "table": {
        "loginTime": "Login time",
        "status": "Status",
        "ipAddress": "IP address",
        "location": "Location",
        "browser": "Browser",
        "os": "OS",
        "device": "Device",
        "timezone": "Timezone",
        "isp": "ISP",
        "details": "Details"
      },
      "status": {
        "successful": "Successful",
        "failed": "Failed"
      },
      "details": {
        "title": "Details",
        "region": "Region",
        "countryCode": "Country code",
        "postal": "Postal code",
        "currency": "Currency",
        "languages": "Languages",
        "population": "Country population",
        "capital": "Capital",
        "continent": "Continent",
        "eu": "EU",
        "callingCode": "Calling code",
        "utcOffset": "UTC offset",
        "yes": "Yes",
        "no": "No"
      }
    },
    "device": {
      "title": "Current connection information",
      "location": {
        "title": "🌍 Location",
        "country": "Country",
        "city": "City",
        "region": "Region",
        "address": "Address",
        "ip": "IP",
        "isp": "ISP",
        "coordinates": "Coordinates"
      },
      "device": {
        "title": "💻 Device",
        "type": "Type",
        "model": "Model",
        "browser": "Browser",
        "os": "OS"
      },
      "network": {
        "title": "🌐 Network and time",
        "timezone": "Timezone",
        "utcOffset": "UTC offset",
        "countryCode": "Country code",
        "regionCode": "Region code",
        "postal": "Postal code"
      },
      "economy": {
        "title": "💰 Economy",
        "currency": "Currency",
        "languages": "Languages",
        "population": "Population",
        "area": "Area",
        "capital": "Capital",
        "continent": "Continent",
        "eu": "EU",
        "callingCode": "Calling code"
      }
    },
    "broadcast": {
      "title": "Message broadcast",
      "titleLabel": "Message title:",
      "titlePlaceholder": "Enter title...",
      "bodyLabel": "Message text:",
      "bodyPlaceholder": "Enter message text...",
      "sendButton": "📢 Send to all customers",
      "sending": "Sending...",
      "success": "Message sent successfully!",
      "error": "Error sending message"
    },
    "synced": {
      "title": "Synced form data",
      "description": "Data that users fill in the form is automatically synced every second",
      "noData": "No synced data",
      "status": {
        "draft": "Draft",
        "completed": "Completed"
      },
      "fields": {
        "phone": "Phone",
        "email": "Email",
        "country": "Country",
        "city": "City",
        "birthDate": "Birth date",
        "preferredFood": "Preferred food",
        "feedback": "Feedback"
      }
    }
  }
};

// Специальные переводы для некоторых языков
const specialTranslations = {
  'ru.json': {
    "admin": {
      "title": "Панель администратора",
      "sync": {
        "autoSync": "🔄 Авто-синхронизация",
        "syncStopped": "⏸️ Синхронизация остановлена",
        "syncNow": "🔄 Синхронизировать сейчас",
        "lastSync": "Последняя синхронизация: {{time}}",
        "error": "Ошибка при загрузке данных: {{error}}"
      },
      "stats": {
        "customers": "Клиенты",
        "sessions": "Сессии",
        "successful": "Успешные",
        "failed": "Неудачные",
        "synced": "Синхронизировано"
      },
      "filters": {
        "search": "🔍 Поиск по всем данным...",
        "allCountries": "Все страны",
        "allStatuses": "Все статусы",
        "successful": "Успешные",
        "failed": "Неудачные",
        "clearFilters": "🗑️ Очистить фильтры"
      },
      "tabs": {
        "customers": "👥 Клиенты ({{filtered}}/{{total}})",
        "sessions": "🔐 Сессии входа ({{filtered}}/{{total}})",
        "device": "📱 Текущее устройство",
        "broadcast": "📢 Рассылка",
        "synced": "🔄 Синхронизированные данные ({{filtered}}/{{total}})"
      },
      "customers": {
        "title": "Список клиентов",
        "exportCsv": "📊 Экспорт CSV",
        "exportJson": "📄 Экспорт JSON",
        "table": {
          "id": "ID",
          "name": "Имя",
          "phone": "Телефон",
          "email": "Email",
          "country": "Страна",
          "city": "Город",
          "address": "Адрес",
          "birthDate": "Дата рождения",
          "preferences": "Предпочтения",
          "feedback": "Отзыв",
          "promoCode": "Промокод",
          "registrationDate": "Дата регистрации"
        }
      },
      "sessions": {
        "title": "История входов в систему",
        "table": {
          "loginTime": "Время входа",
          "status": "Статус",
          "ipAddress": "IP адрес",
          "location": "Местоположение",
          "browser": "Браузер",
          "os": "ОС",
          "device": "Устройство",
          "timezone": "Часовой пояс",
          "isp": "ISP",
          "details": "Детали"
        },
        "status": {
          "successful": "Успешно",
          "failed": "Неудачно"
        },
        "details": {
          "title": "Подробности",
          "region": "Регион",
          "countryCode": "Код страны",
          "postal": "Почтовый индекс",
          "currency": "Валюта",
          "languages": "Языки",
          "population": "Население страны",
          "capital": "Столица",
          "continent": "Континент",
          "eu": "ЕС",
          "callingCode": "Телефонный код",
          "utcOffset": "UTC смещение",
          "yes": "Да",
          "no": "Нет"
        }
      },
      "device": {
        "title": "Информация о текущем подключении",
        "location": {
          "title": "🌍 Местоположение",
          "country": "Страна",
          "city": "Город",
          "region": "Регион",
          "address": "Адрес",
          "ip": "IP",
          "isp": "ISP",
          "coordinates": "Координаты"
        },
        "device": {
          "title": "💻 Устройство",
          "type": "Тип",
          "model": "Модель",
          "browser": "Браузер",
          "os": "ОС"
        },
        "network": {
          "title": "🌐 Сеть и время",
          "timezone": "Часовой пояс",
          "utcOffset": "UTC смещение",
          "countryCode": "Код страны",
          "regionCode": "Код региона",
          "postal": "Почтовый индекс"
        },
        "economy": {
          "title": "💰 Экономика",
          "currency": "Валюта",
          "languages": "Языки",
          "population": "Население",
          "area": "Площадь",
          "capital": "Столица",
          "continent": "Континент",
          "eu": "ЕС",
          "callingCode": "Телефонный код"
        }
      },
      "broadcast": {
        "title": "Рассылка сообщений",
        "titleLabel": "Заголовок сообщения:",
        "titlePlaceholder": "Введите заголовок...",
        "bodyLabel": "Текст сообщения:",
        "bodyPlaceholder": "Введите текст сообщения...",
        "sendButton": "📢 Отправить всем клиентам",
        "sending": "Отправка...",
        "success": "Сообщение отправлено успешно!",
        "error": "Ошибка при отправке сообщения"
      },
      "synced": {
        "title": "Синхронизированные данные формы",
        "description": "Данные, которые пользователи заполняют в форме, автоматически синхронизируются каждую секунду",
        "noData": "Нет синхронизированных данных",
        "status": {
          "draft": "Черновик",
          "completed": "Завершено"
        },
        "fields": {
          "phone": "Телефон",
          "email": "Email",
          "country": "Страна",
          "city": "Город",
          "birthDate": "Дата рождения",
          "preferredFood": "Предпочитаемая еда",
          "feedback": "Отзыв"
        }
      }
    }
  }
};

// Функция для добавления переводов в файл
function addAdminTranslations(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Получаем имя файла для проверки специальных переводов
    const fileName = path.basename(filePath);
    
    // Используем специальные переводы если есть, иначе базовые
    const translations = specialTranslations[fileName] || adminTranslations;
    
    // Добавляем переводы
    Object.assign(data, translations);
    
    // Записываем обратно
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`✅ Updated ${fileName}`);
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Основная функция
function main() {
  const localesDir = path.join(__dirname, 'frontend/src/i18n/locales');
  
  if (!fs.existsSync(localesDir)) {
    console.error('❌ Locales directory not found:', localesDir);
    return;
  }
  
  const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'));
  
  console.log(`🔄 Adding admin translations to ${files.length} language files...`);
  
  files.forEach(file => {
    const filePath = path.join(localesDir, file);
    addAdminTranslations(filePath);
  });
  
  console.log('✅ All translations added successfully!');
}

main();
