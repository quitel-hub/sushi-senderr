// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { PrismaClient, Prisma } from "./generated/prisma/index.js";
// import { z } from "zod";
// import twilio from "twilio";
// import nodemailer from "nodemailer";
// import crypto from "crypto";
// import { UAParser } from "ua-parser-js";
// import geoip from "geoip-lite";
// import https from "https";
// import http from "http";
// import sgMail from '@sendgrid/mail'; // --- НОВОЕ: Импорт SendGrid (ESM) ---

// dotenv.config();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY); // --- НОВОЕ: Конфигурация SendGrid ---

// const app = express();
// const prisma = new PrismaClient();

// const OWNER_TOKEN = process.env.OWNER_TOKEN;

// const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
//   ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
//   : null;

// // Email транспорт (SMTP)
// const smtpEnabled = !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM);
// const mailTransporter = smtpEnabled
//   ? nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: Number(process.env.SMTP_PORT) === 465,
//       auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
//     })
//   : null;

//   // НОВОЕ MIDDLEWARE ДЛЯ ПРОВЕРКИ ТОКЕНА СЕССИИ АДМИНИСТРАТОРА
// const authenticateSession = async (req, res, next) => {
//   try {
//     const rawOwnerToken = req.headers["x-owner-token"];
//     const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

//     if (!ownerToken) {
//       return res.status(401).json({ message: "Токен не предоставлен." });
//     }

//     // Ищем сессию по ее ID (который мы используем как токен)
//     const session = await prisma.ownerLoginSession.findUnique({
//       where: { id: ownerToken },
//     });

//     // Если сессии нет или она была неудачной
//     if (!session || !session.isSuccessful) {
//       return res.status(401).json({ message: "Неверный токен сессии." });
//     }

//     // ПРОВЕРКА ИСТЕЧЕНИЯ СРОКА ДЕЙСТВИЯ (24 часа)
//     const loginDate = new Date(session.loginAt);
//     const now = new Date();
//     const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

//     if (hoursDiff >= 24) {
//       return res.status(401).json({ message: "Сессия истекла. Пожалуйста, войдите снова." });
//     }

//     // Все в порядке, прикрепляем ID владельца к запросу
//     req.ownerId = session.ownerId;
//     next(); // Передаем управление следующему обработчику
    
//   } catch (error) {
//     console.error("Ошибка в middleware authenticateSession:", error);
//     return res.status(500).json({ message: "Ошибка сервера при проверке токена." });
//   }
// };
// // --- Функции getRealLocationInfo и getDeviceAndLocationInfo остаются без изменений ---
// // (Они уже содержат внутреннюю обработку ошибок и таймауты)

// // Функция для получения реального местоположения через внешние API
// async function getRealLocationInfo(ipAddress) {
//   return new Promise((resolve) => {
//     // Пропускаем localhost и приватные IP
//     if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost' ||
//         ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
//       resolve(null);
//       return;
//     }

//     // Используем ipapi.co для получения детальной информации
//     const options = {
//       hostname: 'ipapi.co',
//       port: 443,
//       path: `/${ipAddress}/json/`,
//       method: 'GET',
//       timeout: 5000
//     };

//     const req = https.request(options, (res) => {
//       let data = '';
      
//       res.on('data', (chunk) => {
//         data += chunk;
//       });
      
//       res.on('end', () => {
//         try {
//           const locationData = JSON.parse(data);
//           console.log('Server: External API response:', locationData);
          
//           if (locationData.error) {
//             console.log('Server: External API error:', locationData.reason);
//             resolve(null);
//             return;
//           }
          
//           resolve({
//             country: locationData.country_name || locationData.country,
//             countryCode: locationData.country_code,
//             region: locationData.region || locationData.region_code,
//             city: locationData.city,
//             latitude: locationData.latitude,
//             longitude: locationData.longitude,
//             timezone: locationData.timezone,
//             isp: locationData.org || locationData.asn,
//             postal: locationData.postal,
//             regionCode: locationData.region_code,
//             countryCode3: locationData.country_code_iso3,
//             currency: locationData.currency,
//             currencyName: locationData.currency_name,
//             languages: locationData.languages,
//             countryPopulation: locationData.country_population,
//             countryArea: locationData.country_area,
//             countryCapital: locationData.country_capital,
//             continent: locationData.continent_code,
//             isEu: locationData.in_eu,
//             callingCode: locationData.country_calling_code,
//             utcOffset: locationData.utc_offset
//           });
//         } catch (error) {
//           console.log('Server: Error parsing external API response:', error);
//           resolve(null);
//         }
//       });
//     });

//     req.on('error', (error) => {
//       console.log('Server: External API request error:', error);
//       resolve(null);
//     });

//     req.on('timeout', () => {
//       console.log('Server: External API request timeout');
//       req.destroy();
//       resolve(null);
//     });

//     req.setTimeout(5000);
//     req.end();
//   });
// }

// // Функция для получения информации об устройстве и местоположении
// async function getDeviceAndLocationInfo(req) {
//   const userAgent = req.get('User-Agent') || '';
  
//   // Улучшенное определение IP адреса
//   let ipAddress = req.ip || 
//     req.connection.remoteAddress || 
//     req.socket.remoteAddress || 
//     (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
//     req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
//     req.headers['x-real-ip'] ||
//     req.headers['x-client-ip'] ||
//     req.headers['cf-connecting-ip'] ||
//     'unknown';
  
//   // Очищаем IPv6 адреса
//   if (ipAddress.startsWith('::ffff:')) {
//     ipAddress = ipAddress.substring(7);
//   }
  
//   console.log('Server: User-Agent:', userAgent);
//   console.log('Server: IP Address:', ipAddress);
//   console.log('Server: Headers:', {
//     'x-forwarded-for': req.headers['x-forwarded-for'],
//     'x-real-ip': req.headers['x-real-ip'],
//     'x-client-ip': req.headers['x-client-ip'],
//     'cf-connecting-ip': req.headers['cf-connecting-ip']
//   });
  
//   // Парсим User-Agent
//   const parser = new UAParser(userAgent);
//   const result = parser.getResult();
  
//   console.log('Server: Parsed UA result:', result);
  
//   // Получаем информацию о местоположении по IP
//   const geo = geoip.lookup(ipAddress);
//   console.log('Server: Geo lookup result:', geo);
  
//   // Дополнительная информация о местоположении
//   if (geo) {
//     console.log('Server: Detailed geo info:', {
//       range: geo.range,
//       country: geo.country,
//       region: geo.region,
//       city: geo.city,
//       ll: geo.ll,
//       metro: geo.metro,
//       area: geo.area,
//       eu: geo.eu,
//       timezone: geo.timezone,
//       city_geoname_id: geo.city_geoname_id,
//       country_geoname_id: geo.country_geoname_id,
//       is_anonymous_proxy: geo.is_anonymous_proxy,
//       is_satellite_provider: geo.is_satellite_provider
//     });
//   }

//   // Получаем дополнительную информацию через внешний API
//   const externalLocation = await getRealLocationInfo(ipAddress);
//   console.log('Server: External location data:', externalLocation);
  
//   // Улучшенное определение браузера Safari
//   let browserName = result.browser.name || 'Unknown';
//   let browserVersion = result.browser.version || '';
  
//   // Специальная обработка для Safari
//   if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
//     browserName = 'Safari';
//     // Извлекаем версию Safari из User-Agent
//     const safariMatch = userAgent.match(/Version\/(\d+\.\d+)/);
//     if (safariMatch) {
//       browserVersion = safariMatch[1];
//     }
//   }
  
//   // Улучшенное определение macOS
//   let osName = result.os.name || 'Unknown';
//   let osVersion = result.os.version || '';
  
//   if (userAgent.includes('Mac OS X')) {
//     osName = 'macOS';
//     // Извлекаем версию macOS из User-Agent
//     const macMatch = userAgent.match(/Mac OS X (\d+[._]\d+[._]?\d*)/);
//     if (macMatch) {
//       osVersion = macMatch[1].replace(/_/g, '.');
//     }
//   }
  
//   // Формируем полное название браузера с версией
//   const fullBrowserName = browserVersion ? `${browserName} ${browserVersion}` : browserName;
  
//   // Формируем полное название ОС с версией
//   const fullOsName = osVersion ? `${osName} ${osVersion}` : osName;
  
//   // Определяем тип устройства более детально
//   let deviceType = result.device.type || 'desktop';
//   let deviceModel = result.device.model || 'Unknown';
  
//   // Специальная обработка для desktop устройств
//   if (deviceType === 'desktop' || !deviceType) {
//     deviceType = 'desktop';
//     if (osName === 'macOS') {
//       deviceModel = 'Mac';
//     } else if (osName.includes('Windows')) {
//       deviceModel = 'PC';
//     } else if (osName.includes('Linux')) {
//       deviceModel = 'Linux PC';
//     }
//   }
  
//   // Обработка localhost IP
//   let locationDetails = 'Unknown';
//   let country = 'Unknown';
//   let city = 'Unknown';
//   let region = 'Unknown';
//   let latitude = null;
//   let longitude = null;
//   let timezone = 'Unknown';
//   let isp = 'Unknown';
  
//   if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
//     // Для localhost показываем реалистичные данные разработки
//     const developmentLocations = [
//       { country: 'Netherlands', city: 'Amsterdam', region: 'North Holland', timezone: 'Europe/Amsterdam', isp: 'DigitalOcean', lat: 52.3676, lng: 4.9041 },
//       { country: 'United States', city: 'San Francisco', region: 'California', timezone: 'America/Los_Angeles', isp: 'AWS', lat: 37.7749, lng: -122.4194 },
//       { country: 'Germany', city: 'Berlin', region: 'Berlin', timezone: 'Europe/Berlin', isp: 'Hetzner', lat: 52.5200, lng: 13.4050 },
//       { country: 'United Kingdom', city: 'London', region: 'England', timezone: 'Europe/London', isp: 'DigitalOcean', lat: 51.5074, lng: -0.1278 },
//       { country: 'Canada', city: 'Toronto', region: 'Ontario', timezone: 'America/Toronto', isp: 'AWS', lat: 43.6532, lng: -79.3832 }
//     ];
    
//     // Выбираем случайное местоположение для демонстрации
//     const randomLocation = developmentLocations[Math.floor(Math.random() * developmentLocations.length)];
    
//     locationDetails = `${randomLocation.city}, ${randomLocation.country}`;
//     country = randomLocation.country;
//     city = randomLocation.city;
//     region = randomLocation.region;
//     latitude = randomLocation.lat;
//     longitude = randomLocation.lng;
//     timezone = randomLocation.timezone;
//     isp = randomLocation.isp;
//   } else if (externalLocation) {
//     // Используем данные из внешнего API (более точные)
//     const addressParts = [];
//     if (externalLocation.city) addressParts.push(externalLocation.city);
//     if (externalLocation.region) addressParts.push(externalLocation.region);
//     if (externalLocation.country) addressParts.push(externalLocation.country);
//     locationDetails = addressParts.join(', ');
    
//     country = externalLocation.country || 'Unknown';
//     city = externalLocation.city || 'Unknown';
//     region = externalLocation.region || 'Unknown';
//     latitude = externalLocation.latitude || null;
//     longitude = externalLocation.longitude || null;
//     timezone = externalLocation.timezone || 'Unknown';
//     isp = externalLocation.isp || 'Unknown';
    
//     console.log('Server: Using external API data:', {
//       ip: ipAddress,
//       country: country,
//       region: region,
//       city: city,
//       coordinates: [latitude, longitude],
//       timezone: timezone,
//       isp: isp,
//       locationDetails: locationDetails
//     });
//   } else if (geo) {
//     // Формируем полную адресу с правильным порядком
//     const addressParts = [];
    
//     // Добавляем город
//     if (geo.city) {
//       addressParts.push(geo.city);
//     }
    
//     // Добавляем регион/область
//     if (geo.region) {
//       addressParts.push(geo.region);
//     }
    
//     // Добавляем страну
//     if (geo.country) {
//       addressParts.push(geo.country);
//     }
    
//     locationDetails = addressParts.join(', ');
    
//     // Устанавливаем основные данные
//     country = geo.country || 'Unknown';
//     city = geo.city || 'Unknown';
//     region = geo.region || 'Unknown';
//     latitude = geo.ll?.[0] || null;
//     longitude = geo.ll?.[1] || null;
//     timezone = geo.timezone || 'Unknown';
    
//     // Определяем ISP на основе доступных данных
//     if (geo.is_anonymous_proxy) {
//       isp = 'Anonymous Proxy';
//     } else if (geo.is_satellite_provider) {
//       isp = 'Satellite Provider';
//     } else if (geo.metro) {
//       isp = `Metro Area: ${geo.metro}`;
//     } else if (geo.area) {
//       isp = `Area: ${geo.area}`;
//     } else {
//       isp = 'Unknown ISP';
//     }
    
//     // Логируем для отладки
//     console.log('Server: Processed geo data:', {
//       ip: ipAddress,
//       country: country,
//       region: region,
//       city: city,
//       coordinates: [latitude, longitude],
//       timezone: timezone,
//       isp: isp,
//       locationDetails: locationDetails,
//       isAnonymousProxy: geo.is_anonymous_proxy,
//       isSatelliteProvider: geo.is_satellite_provider,
//       metro: geo.metro,
//       area: geo.area,
//       eu: geo.eu
//     });
//   } else {
//     // Если geo данные недоступны, попробуем определить по IP другим способом
//     console.log('Server: No geo data available for IP:', ipAddress);
    
//     // Для некоторых IP адресов можем попробовать альтернативные методы
//     if (ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
//       locationDetails = 'Private Network';
//       country = 'Private';
//       city = 'Local Network';
//       region = 'Private';
//       timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
//       isp = 'Private Network';
//     }
//   }
  
//   // Дополнительные поля для localhost
//   let additionalFields = {};
//   if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
//     const locationMap = {
//       'Netherlands': { countryCode: 'NL', regionCode: 'NH', postal: '1012', currency: 'EUR', currencyName: 'Euro', languages: 'nl,en', countryPopulation: 17530000, countryArea: 41543, countryCapital: 'Amsterdam', continent: 'EU', isEu: true, callingCode: '+31', utcOffset: '+01:00' },
//       'United States': { countryCode: 'US', regionCode: 'CA', postal: '94102', currency: 'USD', currencyName: 'US Dollar', languages: 'en', countryPopulation: 331900000, countryArea: 9833517, countryCapital: 'Washington', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-08:00' },
//       'Germany': { countryCode: 'DE', regionCode: 'BE', postal: '10115', currency: 'EUR', currencyName: 'Euro', languages: 'de,en', countryPopulation: 83200000, countryArea: 357022, countryCapital: 'Berlin', continent: 'EU', isEu: true, callingCode: '+49', utcOffset: '+01:00' },
//       'United Kingdom': { countryCode: 'GB', regionCode: 'ENG', postal: 'SW1A 1AA', currency: 'GBP', currencyName: 'British Pound', languages: 'en', countryPopulation: 67000000, countryArea: 242495, countryCapital: 'London', continent: 'EU', isEu: false, callingCode: '+44', utcOffset: '+00:00' },
//       'Canada': { countryCode: 'CA', regionCode: 'ON', postal: 'M5H 2N2', currency: 'CAD', currencyName: 'Canadian Dollar', languages: 'en,fr', countryPopulation: 38000000, countryArea: 9984670, countryCapital: 'Ottawa', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-05:00' }
//     };
//     additionalFields = locationMap[country] || {};
//   }

//   const deviceInfo = {
//     userAgent,
//     ipAddress,
//     browser: fullBrowserName,
//     browserName: browserName,
//     browserVersion: browserVersion,
//     os: fullOsName,
//     osName: osName,
//     osVersion: osVersion,
//     device: `${deviceType} (${deviceModel})`,
//     deviceType: deviceType,
//     deviceModel: deviceModel,
//     country: country,
//     city: city,
//     region: region,
//     latitude: latitude,
//     longitude: longitude,
//     location: locationDetails,
//     timezone: timezone,
//     isp: isp,
//     // Дополнительные данные из внешнего API или localhost
//     countryCode: externalLocation?.countryCode || additionalFields.countryCode,
//     regionCode: externalLocation?.regionCode || additionalFields.regionCode,
//     postal: externalLocation?.postal || additionalFields.postal,
//     currency: externalLocation?.currency || additionalFields.currency,
//     currencyName: externalLocation?.currencyName || additionalFields.currencyName,
//     languages: externalLocation?.languages || additionalFields.languages,
//     countryPopulation: externalLocation?.countryPopulation || additionalFields.countryPopulation,
//     countryArea: externalLocation?.countryArea || additionalFields.countryArea,
//     countryCapital: externalLocation?.countryCapital || additionalFields.countryCapital,
//     continent: externalLocation?.continent || additionalFields.continent,
//     isEu: externalLocation?.isEu || additionalFields.isEu,
//     callingCode: externalLocation?.callingCode || additionalFields.callingCode,
//     utcOffset: externalLocation?.utcOffset || additionalFields.utcOffset,
//   };
  
//   console.log('Server: Final device info:', deviceInfo);
  
//   return deviceInfo;
// }

// // ----------------------------------------------------------------
// // --- НАЧАЛО МАРШРУТОВ API ---
// // ----------------------------------------------------------------

// app.use(cors());
// app.use(express.json());

// const registrationSchema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   country: z.string().length(2),
//   phoneNumber: z.string().min(6).max(20),
//   email: z.string().email(),
//   birthDate: z.string().optional(),
//   city: z.string().optional(),
//   street: z.string().optional(),
//   postalCode: z.string().optional(),
//   houseNumber: z.string().optional(),
//   preferredFood: z.string().optional(),
//   feedback: z.string().optional(),
// });

// async function generateUniqueDiscountCode() {
//   const prefix = "RC10-";
//   for (let i = 0; i < 5; i += 1) {
//     const code = `${prefix}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
//     // ИСПРАВЛЕНИЕ: Добавлен try...catch
//     try {
//       const existing = await prisma.customer.findUnique({ where: { discountCode: code } });
//       if (!existing) {
//         return code;
//       }
//     } catch (error) {
//       console.error("Ошибка при проверке уникальности промокода:", error);
//       // Пробрасываем ошибку, чтобы ее поймал внешний try...catch
//       throw new Error("Ошибка базы данных при генерации промокода.");
//     }
//   }
//   throw new Error("Не удалось сгенерировать уникальный промокод. Попробуйте позже.");
// }

// app.post("/api/register", async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     console.log('Server: Получены данные регистрации:', req.body);
    
//     const data = registrationSchema.parse(req.body);

//     console.log('Server: Дата рождения (строка):', data.birthDate);
    
//     const birthDate = data.birthDate ? new Date(data.birthDate) : undefined;
    
//     console.log('Server: Дата рождения (объект Date):', birthDate);
    
//     if (birthDate && Number.isNaN(birthDate.getTime())) {
//       console.log('Server: Ошибка - некорректный формат даты');
//       return res.status(400).json({ message: "Некорректный формат даты." });
//     }

//     // --- ИЗМЕНЕНИЕ: Логика проверки существующего пользователя ---
//     // Сначала проверяем телефон
//     let existingCustomer = await prisma.customer.findUnique({
//       where: { phoneNumber: data.phoneNumber },
//     });

//     if (existingCustomer) {
//       return res.status(200).json({
//         message: "Вы уже зарегистрированы.",
//         discountCode: existingCustomer.discountCode,
//         status: "exists",
//       });
//     }
    
//     // Проверяем email
//     existingCustomer = await prisma.customer.findFirst({
//         where: { email: data.email }
//     });
    
//     if (existingCustomer) {
//         return res.status(400).json({
//             message: "Этот email уже используется.",
//             status: "email_exists",
//         });
//     }
//     // --- Конец логики проверки ---
//     const discountCode = await generateUniqueDiscountCode();
//     const verificationCode = crypto.randomInt(100000, 999999).toString();
//     const customer = await prisma.customer.create({
//       data: {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         country: data.country,
//         phoneNumber: data.phoneNumber,
//         email: data.email,
//         birthDate,
//         city: data.city,
//         street: data.street,
//         postalCode: data.postalCode,
//         houseNumber: data.houseNumber,
//         preferredFood: data.preferredFood,
//         feedback: data.feedback,
//         discountCode,
//         subscriptions: {
//           create: {},
//         },
//         emailVerificationCode: verificationCode
//       },
//     });
//     if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
//       const msg = {
//         to: customer.email,
//         from: process.env.SENDGRID_FROM_EMAIL, // Убедитесь, что эта переменная есть в .env
//         subject: 'Ваш код верификации Sushi Icon',
//         text: `Ваш код верификации: ${verificationCode}`,
//         html: `<strong>Ваш код верификации: ${verificationCode}</strong>`,
//       };
//       try {
//         await sgMail.send(msg);
//         console.log(`Server: Письмо верификации отправлено на ${customer.email}`);
//       } catch (emailError) {
//         console.error('Server: Ошибка отправки письма верификации:', emailError.response ? emailError.response.body : emailError);
//         // Не блокируем регистрацию, но логируем ошибку
//       }
//     } else {
//       console.log('Server: Пропуск отправки письма верификации - SENDGRID_API_KEY или SENDGRID_FROM_EMAIL не настроены.');
//     }

//     // --- ИЗМЕНЕНИЕ: Отправляем СМС (как и раньше), но меняем ответ ---
//     if (twilioClient && process.env.TWILIO_MESSAGING_SERVICE_SID) {
//       try {
//         const welcomeMessage = `Спасибо за регистрацию в Sushi Icon! Ваш персональный промокод на 10% скидку: ${customer.discountCode}. Пожалуйста, подтвердите ваш email.`;
//         await twilioClient.messages.create({
//           to: customer.phoneNumber,
//           messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
//           body: welcomeMessage,
//         });
//         console.log(`Server: Успешно отправлено приветственное СМС клиенту ${customer.id}`);
//       } catch (smsError) {
//         console.error(`Server: Ошибка отправки приветственного СМС клиенту ${customer.id}:`, smsError.message);
//       }
//     } else {
//       console.log('Server: Пропуск отправки СМС - Twilio Messaging Service не настроен.');
//     }
    

//     return res.status(201).json({
//       status: "pending_verification",
//       message: "Регистрация успешна. Пожалуйста, проверьте ваш email для кода верификации.",
//       customerId: customer.id,
//       email: customer.email
//       // customer: {
//       //   firstName: customer.firstName,
//       //   lastName: customer.lastName,
//       //   email: customer.email,
//       //   phoneNumber: customer.phoneNumber,
//       //   discountCode: customer.discountCode,
//       // }
//     });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//      // --- ИЗМЕНЕНИЕ: Улучшенная обратная связь при ошибке Zod ---
//       const emailError = error.flatten().fieldErrors.email;
//       if (emailError) {
//           return res.status(400).json({ message: "Некорректный email.", errors: error.flatten() });
//       }
//       return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
//     }

//     // P2002 - это ошибка "unique constraint failed", т.е. дубликат
//     if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
//       try {
//         const customer = await prisma.customer.findUnique({
//           where: { phoneNumber: req.body.phoneNumber },
//         });
//         return res.status(200).json({
//           message: "Вы уже зарегистрированы.",
//           discountCode: customer?.discountCode,
//           status: "exists",
//         });
//       } catch (findError) {
//         console.error("Ошибка при поиске дублирующего клиента:", findError);
//         return res.status(500).json({ message: "Ошибка сервера при проверке дубликата." });
//       }
//     }

//     console.error("Необработанная ошибка /api/register:", error);
//     return res.status(500).json({ message: "Ошибка сервера." });
//   }
// });

// const broadcastSchema = z.object({
//   title: z.string().min(1),
//   body: z.string().min(1),
// });

// const targetedBroadcastSchema = z.object({
//   title: z.string().min(1),
//   body: z.string().min(1),
//   recipientIds: z.array(z.string()).min(1),
// });

// // --- НОВОЕ: Схема Zod для SendGrid рассылки ---
// const emailBroadcastSchema = z.object({
//   userIds: z.array(z.string()).min(1, "Нужен хотя бы один ID"),
//   subject: z.string().min(1, "Тема не может быть пустой"),
//   htmlContent: z.string().min(1, "Тело письма не может быть пустым"),
// });
// // -----------------------------------------

// app.post("/api/broadcast", async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const rawOwnerToken = req.headers["x-owner-token"];
//     const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
//     if (!OWNER_TOKEN || ownerToken !== OWNER_TOKEN) {
//       return res.status(401).json({ message: "Нет доступа." });
//     }

//     if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
//       return res.status(500).json({ message: "СМС отправка не настроена." });
//     }

//     const { title, body } = broadcastSchema.parse(req.body);

//     const subscriptions = await prisma.messageSubscription.findMany({
//       where: { subscribed: true },
//       include: {
//         customer: true,
//       },
//     });

//     if (subscriptions.length === 0) {
//       return res.status(200).json({ message: "Нет подписчиков для рассылки." });
//     }

//     const message = await prisma.broadcastMessage.create({
//       data: {
//         title,
//         body,
//       },
//     });

//     const deliveries = await Promise.allSettled(
//       subscriptions.map(async (subscription) => {
//         const to = subscription.customer.phoneNumber;

//         try {
//           const result = await twilioClient.messages.create({
//             to,
//             messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
//             body,
//           });

//           await prisma.messageDelivery.create({
//             data: {
//               messageId: message.id,
//               subscriptionId: subscription.id,
//               phoneNumber: to,
//               status: "SENT",
//               sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
//             },
//           });

//           return { status: "sent", to };
//         } catch (smsError) {
//           await prisma.messageDelivery.create({
//             data: {
//               messageId: message.id,
//               subscriptionId: subscription.id,
//               phoneNumber: to,
//               status: "FAILED",
//               errorMessage: smsError.message,
//             },
//           });

//           return { status: "failed", to, error: smsError.message };
//         }
//       })
//     );

//     const summary = deliveries.reduce(
//       (acc, item) => {
//         if (item.status === "fulfilled") {
//           const value = item.value;
//           if (value.status === "sent") {
//             acc.sent += 1;
//           } else {
//             acc.failed += 1;
//           }
//         } else {
//           acc.failed += 1;
//         }
//         return acc;
//       },
//       { sent: 0, failed: 0 }
//     );

//     return res.status(200).json({
//       message: "Рассылка отправлена.",
//       summary,
//     });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
//     }

//     console.error("Необработанная ошибка /api/broadcast:", error);
//     return res.status(500).json({ message: "Ошибка сервера." });
//   }
// });

// app.get("/api/health", (_req, res) => {
//   res.json({ status: "ok" });
// });

// // ...

// // Схемы валидации для аутентификации владельца
// const ownerLoginSchema = z.object({
//   email: z.string().email(),
//   accessCode: z.string().min(6).max(25),
//   password: z.string().min(6).max(100),
// });

// // ...

// // Жестко заданные данные администратора - максимально сложные для безопасности
// const ADMIN_CREDENTIALS = {
//   email: "sushi.master.admin.2024@secure-icon.com",
//   accessCode: "SUSHI-MASTER-2024-X9K7",
//   password: "SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;',./",
//   name: "Главный администратор"
// };

// // Аутентификация владельца
// // ИСПРАВЛЕНИЕ: Этот маршрут уже имел try...catch, но внутренние catch "глотали" ошибки.
// // Упрощено для проброса ошибок в главный catch.
// // Аутентификация владельца
// app.post("/api/owner/login", async (req, res) => {
//   try {
//     const { email, accessCode, password } = ownerLoginSchema.parse(req.body);

//     // Получаем информацию об устройстве и местоположении
//     const deviceInfo = await getDeviceAndLocationInfo(req);
//     let ownerId = "admin-001"; // ID по умолчанию

//     // Проверяем только жестко заданные данные
//     if (email !== ADMIN_CREDENTIALS.email || 
//         accessCode !== ADMIN_CREDENTIALS.accessCode || 
//         password !== ADMIN_CREDENTIALS.password) {
      
//       // ... (код для логирования неудачной попытки входа - он в порядке) ...
//       let owner;
//       try {
//         owner = await prisma.owner.upsert({
//           where: { email: ADMIN_CREDENTIALS.email },
//           update: {},
//           create: {
//             id: "admin-001",
//             email: ADMIN_CREDENTIALS.email,
//             name: ADMIN_CREDENTIALS.name,
//             accessCode: ADMIN_CREDENTIALS.accessCode,
//             password: ADMIN_CREDENTIALS.password,
//             isEmailVerified: true
//           },
//         });
//         ownerId = owner.id;
//       } catch (ownerError) {
//         console.error("Ошибка при создании/обновлении владельца для неудачной попытки:", ownerError);
//       }

//       // Сохраняем неудачную попытку входа с детальной информацией
//       try {
//         await prisma.ownerLoginSession.create({
//           data: {
//             ownerId: ownerId,
//             isSuccessful: false,
//             loginAt: new Date(),
//             // ... (все остальные поля deviceInfo)
//             deviceInfo: JSON.stringify(deviceInfo),
//             ipAddress: deviceInfo.ipAddress,
//             location: deviceInfo.location,
//             userAgent: deviceInfo.userAgent,
//             browser: deviceInfo.browser,
//             os: deviceInfo.os,
//             device: deviceInfo.device,
//             country: deviceInfo.country,
//             city: deviceInfo.city,
//             latitude: deviceInfo.latitude,
//             longitude: deviceInfo.longitude,
//             timezone: deviceInfo.timezone,
//             isp: deviceInfo.isp,
//             region: deviceInfo.region,
//             deviceType: deviceInfo.deviceType,
//             deviceModel: deviceInfo.deviceModel,
//             browserName: deviceInfo.browserName,
//             browserVersion: deviceInfo.browserVersion,
//             osName: deviceInfo.osName,
//             osVersion: deviceInfo.osVersion,
//             countryCode: deviceInfo.countryCode,
//             regionCode: deviceInfo.regionCode,
//             postal: deviceInfo.postal,
//             currency: deviceInfo.currency,
//             currencyName: deviceInfo.currencyName,
//             languages: deviceInfo.languages,
//             countryPopulation: deviceInfo.countryPopulation,
//             countryArea: deviceInfo.countryArea,
//             countryCapital: deviceInfo.countryCapital,
//             continent: deviceInfo.continent,
//             isEu: deviceInfo.isEu,
//             callingCode: deviceInfo.callingCode,
//             utcOffset: deviceInfo.utcOffset,
//           },
//         });
//       } catch (sessionError) {
//         console.error("Ошибка при сохранении неудачной сессии:", sessionError);
//       }

//       return res.status(401).json({ 
//         message: "Доступ запрещен. Эта страница доступна только администраторам.",
//         success: false 
//       });
//     }

//       // --- УСПЕШНЫЙ ВХОД ---

//       // Создаем или находим владельца в базе данных
//       let owner;
//       try {
//         owner = await prisma.owner.upsert({
//           where: { email: ADMIN_CREDENTIALS.email },
//           update: {
//             lastLogin: new Date(),
//           },
//           create: {
//             id: "admin-001",
//             email: ADMIN_CREDENTIALS.email,
//             name: ADMIN_CREDENTIALS.name,
//             accessCode: ADMIN_CREDENTIALS.accessCode,
//             password: ADMIN_CREDENTIALS.password,
//             lastLogin: new Date(),
//             isEmailVerified: true
//           },
//         });
//         ownerId = owner.id;
//       } catch (ownerError) {
//         console.error("Ошибка при создании/обновлении владельца:", ownerError);
//         // Бросаем ошибку, чтобы ее поймал главный catch
//         throw new Error("Ошибка БД при обновлении владельца."); 
//       }

//       // ----------------------------------------------------------------
//       // --- ИСПРАВЛЕНИЕ ЗДЕСЬ ---
//       // ----------------------------------------------------------------
//       const verificationCode = crypto.randomInt(100000, 999999).toString();
//       // 1. Объявляем `session` *до* блока try
//       try {
//         await prisma.owner.update({
//           where: { id: ownerId },
//           data: { emailVerificationCode: verificationCode }
//         });
//       } catch (dbError) {
//          console.error("Ошибка при сохранении кода верификации админа:", dbError);
//          throw new Error("Ошибка БД при сохранении кода.");
//       }
//       if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
//         const msg = {
//           to: owner.email,
//           from: process.env.SENDGRID_FROM_EMAIL,
//           subject: 'Код входа в Sushi Icon Admin',
//           text: `Ваш код для входа в панель администратора: ${verificationCode}`,
//           html: `<strong>Ваш код для входа в панель администратора: ${verificationCode}</strong>`,
//         };
//         try {
//           await sgMail.send(msg);
//           console.log(`Server: Письмо верификации отправлено админу ${owner.email}`);
//         } catch (emailError) {
//           console.error('Server: Ошибка отправки письма верификации админу:', emailError.response ? emailError.response.body : emailError);
//           // ВАЖНО: Если email не ушел, впускать нельзя
//           throw new Error("Ошибка отправки email.");
//         }
//       } else {
//         console.log('Server: ОШИБКА: SENDGRID не настроен для входа админа.');
//         throw new Error("Сервис email не настроен.");
//       }
//       return res.status(200).json({
//         message: "Учетные данные верны. Код отправлен на ваш email.",
//         success: true,
//         status: "pending_verification"
//       });
      
//       let session; 

//       // Сохраняем успешную сессию входа
//       try {
//         // 2. Присваиваем значение `session` *внутри* блока try
//         session = await prisma.ownerLoginSession.create({
//           data: {
//             ownerId: ownerId,
//             isSuccessful: true,
//             loginAt: new Date(),
//              // ... (все остальные поля deviceInfo)
//             deviceInfo: JSON.stringify(deviceInfo),
//             ipAddress: deviceInfo.ipAddress,
//             location: deviceInfo.location,
//             userAgent: deviceInfo.userAgent,
//             browser: deviceInfo.browser,
//             os: deviceInfo.os,
//             device: deviceInfo.device,
//             country: deviceInfo.country,
//             city: deviceInfo.city,
//             latitude: deviceInfo.latitude,
//             longitude: deviceInfo.longitude,
//             timezone: deviceInfo.timezone,
//             isp: deviceInfo.isp,
//             region: deviceInfo.region,
//             deviceType: deviceInfo.deviceType,
//             deviceModel: deviceInfo.deviceModel,
//             browserName: deviceInfo.browserName,
//             browserVersion: deviceInfo.browserVersion,
//             osName: deviceInfo.osName,
//             osVersion: deviceInfo.osVersion,
//             countryCode: deviceInfo.countryCode,
//             regionCode: deviceInfo.regionCode,
//             postal: deviceInfo.postal,
//             currency: deviceInfo.currency,
//             currencyName: deviceInfo.currencyName,
//             languages: deviceInfo.languages,
//             countryPopulation: deviceInfo.countryPopulation,
//             countryArea: deviceInfo.countryArea,
//             countryCapital: deviceInfo.countryCapital,
//             continent: deviceInfo.continent,
//             isEu: deviceInfo.isEu,
//             callingCode: deviceInfo.callingCode,
//             utcOffset: deviceInfo.utcOffset,
//           },
//         });
//       } catch (sessionError) {
//         console.error("Ошибка при сохранении сессии:", sessionError);
//         throw new Error("Ошибка БД при создании сессии.");
//       }

//       // 3. Проверяем, что сессия создалась
//       if (!session) {
//         throw new Error("Не удалось создать сессию по неизвестной причине.");
//       }

//     // 4. Теперь `session.id` доступен здесь
//     return res.status(200).json({
//       message: "Успешная аутентификация.",
//       success: true,
//       token: session.id, // <--- ТЕПЕРЬ ЭТО РАБОТАЕТ
//       owner: {
//         id: ownerId,
//         email: ADMIN_CREDENTIALS.email,
//         name: ADMIN_CREDENTIALS.name,
//         lastLogin: new Date().toISOString(),
//         createdAt: owner.createdAt, // Используем дату из БД
//       },
//       deviceInfo: deviceInfo, // deviceInfo - это уже готовый объект
//     });
//   // ----------------------------------------------------------------
//   // --- КОНЕЦ ИСПРАВЛЕНИЯ ---
//   // ----------------------------------------------------------------
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ 
//         message: "Некорректные данные.", 
//         errors: error.flatten(),
//         success: false 
//       });
//     }

//     // Это поймает ошибку "ReferenceError" и другие
//     console.error(`Необработанная ошибка /api/owner/login: ${error.message}`);
//     return res.status(500).json({ 
//       message: `Ошибка сервера при аутентификации: ${error.message}`,
//       success: false 
//     });
//   }
// });
// app.post("/api/owner/verify-login", async (req, res) => {
//   try {
//     const { email, code } = ownerVerifySchema.parse(req.body);

//     console.log(`[Admin Verify] Попытка верификации для: ${email}, Код: "${code}"`);

//     // 1. Находим админа по email
//     // (Используем ADMIN_CREDENTIALS.email для доп. безопасности, т.к. админ один)
//     if (email !== ADMIN_CREDENTIALS.email) {
//       console.log(`[Admin Verify] ОШИБКА: Неверный email.`);
//       return res.status(400).json({ success: false, message: "Неверный email." });
//     }

//     const owner = await prisma.owner.findUnique({
//       where: { email: ADMIN_CREDENTIALS.email },
//     });

//     if (!owner) {
//       console.log(`[Admin Verify] ОШИБКА: Админ ${email} не найден в БД.`);
//       return res.status(404).json({ success: false, message: "Администратор не найден." });
//     }

//     // 2. Сравниваем коды
//     console.log(`[Admin Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${owner.emailVerificationCode}")`);

//     if (owner.emailVerificationCode !== code) {
//       console.log(`[Admin Verify] ОШИБКА: Коды не совпадают.`);
//       return res.status(400).json({ success: false, message: "Неверный код верификации." });
//     }
    
//     // 3. УСПЕХ: Коды совпали. Очищаем код и создаем сессию.
//     console.log(`[Admin Verify] УСПЕХ: Коды совпали. Создаем сессию для ${owner.email}.`);
    
//     await prisma.owner.update({
//       where: { id: owner.id },
//       data: {
//         emailVerificationCode: null, // Очищаем код
//         lastLogin: new Date(), // Обновляем время входа
//       },
//     });

//     // 4. Получаем инфо об устройстве
//     const deviceInfo = await getDeviceAndLocationInfo(req);

//     // 5. Создаем сессию (логика из старого /api/owner/login)
//     let session;
//     try {
//       session = await prisma.ownerLoginSession.create({
//         data: {
//           ownerId: owner.id,
//           isSuccessful: true,
//           loginAt: new Date(),
//           // ... (все остальные поля deviceInfo)
//           deviceInfo: JSON.stringify(deviceInfo),
//           ipAddress: deviceInfo.ipAddress,
//           location: deviceInfo.location,
//           userAgent: deviceInfo.userAgent,
//           browser: deviceInfo.browser,
//           os: deviceInfo.os,
//           device: deviceInfo.device,
//           country: deviceInfo.country,
//           city: deviceInfo.city,
//           latitude: deviceInfo.latitude,
//           longitude: deviceInfo.longitude,
//           timezone: deviceInfo.timezone,
//           isp: deviceInfo.isp,
//           region: deviceInfo.region,
//           deviceType: deviceInfo.deviceType,
//           deviceModel: deviceInfo.deviceModel,
//           browserName: deviceInfo.browserName,
//           browserVersion: deviceInfo.browserVersion,
//           osName: deviceInfo.osName,
//           osVersion: deviceInfo.osVersion,
//           countryCode: deviceInfo.countryCode,
//           regionCode: deviceInfo.regionCode,
//           postal: deviceInfo.postal,
//           currency: deviceInfo.currency,
//           currencyName: deviceInfo.currencyName,
//           languages: deviceInfo.languages,
//           countryPopulation: deviceInfo.countryPopulation,
//           countryArea: deviceInfo.countryArea,
//           countryCapital: deviceInfo.countryCapital,
//           continent: deviceInfo.continent,
//           isEu: deviceInfo.isEu,
//           callingCode: deviceInfo.callingCode,
//           utcOffset: deviceInfo.utcOffset,
//         },
//       });
//     } catch (sessionError) {
//       console.error("Ошибка при сохранении сессии:", sessionError);
//       throw new Error("Ошибка БД при создании сессии.");
//     }
    
//     if (!session) {
//       throw new Error("Не удалось создать сессию по неизвестной причине.");
//     }

//     // 6. Отправляем токен
//     return res.status(200).json({
//       message: "Успешная аутентификация.",
//       success: true,
//       status: "verified",
//       token: session.id, // <--- ТОКЕН СЕССИИ
//       owner: {
//         id: owner.id,
//         email: owner.email,
//         name: owner.name,
//         lastLogin: owner.lastLogin,
//         createdAt: owner.createdAt,
//       },
//       deviceInfo: deviceInfo,
//     });

//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.log("[Admin Verify] ОШИБКА: Zod.", error.flatten());
//       return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
//     }
//     console.error("Ошибка в /api/owner/verify-login:", error);
//     return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
//   }
// });
// // --- КОНЕЦ НОВОГО МАРШРУТА ---
// // Получение информации о владельце
// app.get("/api/owner/profile",authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const rawOwnerToken = req.headers["x-owner-token"];
//     const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
//     if (!ownerToken) {
//       return res.status(401).json({ message: "Токен не предоставлен." });
//     }

//     // Для обратной совместимости проверяем старый токен
//     if (OWNER_TOKEN && ownerToken === OWNER_TOKEN) {
//       return res.status(200).json({
//         message: "Аутентификация через старый токен.",
//         owner: { name: "Администратор", email: "admin@example.com" },
//       });
//     }

//     // Проверяем новый токен (email владельца)
//   //  console.log(ownerToken);
//   //  const owner = await prisma.owner.findUnique({
//   //     where: { email: ownerToken },
//   //   });

//   //   if (!owner || !owner.isActive) {
//   //     return res.status(401).json({ message: "Неверный токен или аккаунт заблокирован." });
//   //   }
  
//     // --- ИСПРАВЛЕНИЕ: 'owner' не был определен ---
//     // req.ownerId прикрепляется middleware 'authenticateSession'
//     const owner = await prisma.owner.findUnique({
//       where: { id: req.ownerId }
//     });
    
//     if (!owner) {
//       return res.status(404).json({ message: "Владелец не найден." });
//     }
//     // --- КОНЕЦ ИСПРАВЛЕНИЯ ---

//     return res.status(200).json({
//       message: "Профиль владельца получен.",
//       owner: {
//         id: owner.id,
//         email: owner.email,
//         name: owner.name,
//         lastLogin: owner.lastLogin,
//         createdAt: owner.createdAt,
//       },
//     });
//   } catch (error) {
//     console.error("Необработанная ошибка /api/owner/profile:", error);
//     return res.status(500).json({ message: "Ошибка сервера при получении профиля." });
//   }
// });

// app.get("/api/customers", authenticateSession, async (req, res) => {
//   try {
//     // Аутентификация уже пройдена, просто получаем клиентов
//     const customers = await prisma.customer.findMany({
//       orderBy: { createdAt: "desc" },
//     });

//     res.json(
//       customers.map((customer) => ({
//         id: customer.id,
//         firstName: customer.firstName,
//         lastName: customer.lastName,
//         country: customer.country,
//         phoneNumber: customer.phoneNumber,
//         email: customer.email,
//         birthDate: customer.birthDate,
//         city: customer.city,
//         street: customer.street,
//         postalCode: customer.postalCode,
//         houseNumber: customer.houseNumber,
//         preferredFood: customer.preferredFood,
//         feedback: customer.feedback,
//         discountCode: customer.discountCode,
//         createdAt: customer.createdAt,
//       }))
//     );
//   } catch (error) {
//     console.error("Необработанная ошибка /api/customers:", error.message);
//     return res.status(500).json({ message: "Ошибка сервера при получении клиентов." });
//   }
// });
// // Синхронизация данных анкеты для панели администратора
// app.get("/api/sync/form-data", authenticateSession, async (req, res) => {
//   try {
//     // Аутентификация пройдена
//     const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

//     const synced = customers.map((c) => ({
//       id: c.id,
//       firstName: c.firstName,
//       lastName: c.lastName,
//       country: c.country || "",
//       phoneNumber: c.phoneNumber,
//       email: c.email || "",
//       birthDate: c.birthDate ? new Date(c.birthDate).toISOString() : "",
//       city: c.city || "",
//       street: c.street || "",
//       postalCode: c.postalCode || "",
//       houseNumber: c.houseNumber || "",
//       preferredFood: c.preferredFood || "",
//       feedback: c.feedback || "",
//       discountCode: c.discountCode || "",
//       timestamp: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
//       isDraft: false,
//     }));

//     return res.json(synced);
//   } catch (error) {
//     console.error("Необработанная ошибка /api/sync/form-data:", error.message);
//     return res.status(500).json({ message: "Ошибка сервера при синхронизации формы." });
//   }
// });

// // Сохранение черновика формы в базу данных (автосохранение каждую секунду)
// app.post("/api/form-draft", async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const draftData = req.body;
//     const draftId = draftData.draftId;
    
//     if (draftId) {
//       // Обновляем существующий черновик
//       await prisma.formDraft.update({
//         where: { id: draftId },
//         data: {
//           firstName: draftData.firstName || null,
//           lastName: draftData.lastName || null,
//           phoneNumber: draftData.phoneNumber || null,
//           email: draftData.email || null,
//           birthDate: draftData.birthDate || null,
//           city: draftData.city || null,
//           street: draftData.street || null,
//           postalCode: draftData.postalCode || null,
//           houseNumber: draftData.houseNumber || null,
//           country: draftData.country || null,
//           preferredFood: draftData.preferredFood || null,
//           feedback: draftData.feedback || null,
//         },
//       });
//       return res.json({ success: true, draftId });
//     } else {
//       // Создаем новый черновик
//       const newDraft = await prisma.formDraft.create({
//         data: {
//           firstName: draftData.firstName || null,
//           lastName: draftData.lastName || null,
//           phoneNumber: draftData.phoneNumber || null,
//           email: draftData.email || null,
//           birthDate: draftData.birthDate || null,
//           city: draftData.city || null,
//           street: draftData.street || null,
//           postalCode: draftData.postalCode || null,
//           houseNumber: draftData.houseNumber || null,
//           country: draftData.country || null,
//           preferredFood: draftData.preferredFood || null,
//           feedback: draftData.feedback || null,
//         },
//       });
//       return res.json({ success: true, draftId: newDraft.id });
//     }
//   } catch (error) {
//     console.error('Ошибка сохранения черновика:', error);
//     return res.status(500).json({ message: "Ошибка сохранения черновика." });
//   }
// });

// // Удаление черновика после успешной отправки формы
// app.delete("/api/form-draft/:draftId", async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const { draftId } = req.params;
//     await prisma.formDraft.delete({
//       where: { id: draftId },
//     }).catch(() => {
//       // Игнорируем ошибки, если черновик уже удален
//     });
//     return res.json({ success: true });
//   } catch (error) {
//     console.error('Ошибка удаления черновика:', error);
//     // Не критично, если не удалось удалить, не возвращаем 500
//     return res.status(200).json({ success: false, message: "Ошибка удаления черновика, но это не критично." });
//   }
// });

// // Автоматическая очистка старых черновиков (старше 1 часа)
// setInterval(async () => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
//     await prisma.formDraft.deleteMany({
//       where: {
//         updatedAt: {
//           lt: oneHourAgo,
//         },
//       },
//     });
//   } catch (error) {
//     console.error('Ошибка очистки старых черновиков:', error);
//   }
// }, 5 * 60 * 1000); // Каждые 5 минут

// // Универсальный список заявок для таблицы (публичный рид-онли)
// app.get("/api/submissions", async (_req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

//     const completedRows = customers.map((c) => ({
//       id: c.id,
//       name: `${c.firstName} ${c.lastName}`.trim(),
//       phone: c.phoneNumber,
//       email: c.email || "",
//       country: c.country || "",
//       city: c.city || "",
//       street: c.street || "",
//       postalCode: c.postalCode || "",
//       houseNumber: c.houseNumber || "",
//       birthDate: c.birthDate ? new Date(c.birthDate).toISOString().slice(0, 10) : "",
//       preferences: c.preferredFood || "",
//       feedback: c.feedback || "",
//       promoCode: c.discountCode,
//       registrationDate: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
//       status: "Активный",
//       isDraft: false,
//     }));

//     // Добавляем черновики из базы данных
//     const drafts = await prisma.formDraft.findMany({ orderBy: { updatedAt: "desc" } });
//     const draftRows = drafts.map((draft) => ({
//       id: draft.id,
//       name: `${draft.firstName || ''} ${draft.lastName || ''}`.trim() || 'Заполняется...',
//       phone: draft.phoneNumber || '',
//       email: draft.email || '',
//       country: draft.country || '',
//       city: draft.city || '',
//       street: draft.street || '',
//       postalCode: draft.postalCode || '',
//       houseNumber: draft.houseNumber || '',
//       birthDate: draft.birthDate || '',
//       preferences: draft.preferredFood || draft.feedback || '',
//       feedback: draft.feedback || '',
//       promoCode: 'В процессе...',
//       registrationDate: draft.updatedAt ? new Date(draft.updatedAt).toISOString() : new Date().toISOString(),
//       status: "Заполняется",
//       isDraft: true,
//     }));

//     // Объединяем черновики и завершенные заявки
//     const allRows = [...draftRows, ...completedRows];

//     return res.json(allRows);
//   } catch (error) {
//     console.error("Необработанная ошибка /api/submissions:", error);
//     return res.status(500).json({ message: "Ошибка сервера при получении заявок." });
//   }
// });

// // Получение истории входов администратора
// app.get("/api/owner/login-sessions", authenticateSession, async (req, res) => {
//   try {
//     // Аутентификация пройдена. 
//     // req.ownerId был добавлен в middleware 'authenticateSession'
//     const sessions = await prisma.ownerLoginSession.findMany({
//       where: { ownerId: req.ownerId }, // Используем ID из сессии
//       orderBy: { loginAt: "desc" },
//       take: 50, 
//     });

//     res.json(sessions);
//   } catch (error) {
//     console.error("Необработанная ошибка /api/owner/login-sessions:", error.message);
//     return res.status(500).json({ message: "Ошибка сервера при получении истории входов." });
//   }
// });
// // Получение информации о текущем устройстве
// app.get("/api/owner/current-device", authenticateSession, async (req, res) => {
//   try {
//     // Аутентификация пройдена
//     const deviceInfo = await getDeviceAndLocationInfo(req);
//     res.json(deviceInfo);
//   } catch (error) {
//     console.error("Необработанная ошибка /api/owner/current-device:", error.message);
//     return res.status(500).json({ message: "Ошибка сервера при получении информации об устройстве." });
//   }
// });
// // Экспорт данных в CSV формат для Google Таблиц
// app.get("/api/export/customers", authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     // const rawOwnerToken = req.headers["x-owner-token"];
//     // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
//     // if (!ownerToken) {
//     //   return res.status(401).json({ message: "Токен не предоставлен." });
//     // }

//     // Проверяем, что это авторизованный администратор
//     // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
//     if (!req.ownerId) {
//       return res.status(401).json({ message: "Неверный токен." });
//     }

//     const customers = await prisma.customer.findMany({
//       orderBy: { createdAt: "desc" },
//     });

//     // Создаем CSV заголовки
//     const headers = [
//       "ID",
//       "Имя",
//       "Фамилия", 
//       "Страна",
//       "Телефон",
//       "Email",
//       "Дата рождения",
//       "Город",
//       "Улица",
//       "Номер дома",
//       "Почтовый индекс",
//       "Предпочтения в еде",
//       "Отзыв",
//       "Промокод",
//       "Дата регистрации",
//       "Полный адрес"
//     ];

//     // Создаем CSV строки
//     const csvRows = [headers.join(",")];
    
//     customers.forEach(customer => {
//       // Формируем полный адрес
//       const addressParts = [];
//       if (customer.street) addressParts.push(customer.street);
//       if (customer.houseNumber) addressParts.push(customer.houseNumber);
//       if (customer.city) addressParts.push(customer.city);
//       if (customer.postalCode) addressParts.push(customer.postalCode);
//       if (customer.country) addressParts.push(customer.country);
//       const fullAddress = addressParts.join(', ');
      
//       const row = [
//         customer.id,
//         `"${customer.firstName || ""}"`,
//         `"${customer.lastName || ""}"`,
//         `"${customer.country || ""}"`,
//         `"${customer.phoneNumber || ""}"`,
//         `"${customer.email || ""}"`,
//         `"${customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : ""}"`,
//         `"${customer.city || ""}"`,
//         `"${customer.street || ""}"`,
//         `"${customer.houseNumber || ""}"`,
//         `"${customer.postalCode || ""}"`,
//         `"${customer.preferredFood || ""}"`,
//         `"${customer.feedback || ""}"`,
//         `"${customer.discountCode || ""}"`,
//         `"${new Date(customer.createdAt).toLocaleString('ru-RU')}"`,
//         `"${fullAddress}"`
//       ];
//       csvRows.push(row.join(","));
//     });

//     const csvContent = csvRows.join("\n");
    
//     // Устанавливаем заголовки для скачивания файла
//     res.setHeader('Content-Type', 'text/csv; charset=utf-8');
//     res.setHeader('Content-Disposition', `attachment; filename="sushi_customers_${new Date().toISOString().split('T')[0]}.csv"`);
    
//     // Добавляем BOM для корректного отображения кириллицы в Excel
//     res.write('\uFEFF');
//     res.end(csvContent);

//   } catch (error) {
//     console.error("Необработанная ошибка /api/export/customers:", error);
//     // Не можем отправить 500, если заголовки уже отправлены, но можем залогировать
//     if (!res.headersSent) {
//       return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
//     }
//   }
// });

// // Экспорт данных в Excel формат (JSON для Google Sheets)
// app.get("/api/export/customers/json", authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     // const rawOwnerToken = req.headers["x-owner-token"];
//     // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
//     // if (!ownerToken) {
//     //   return res.status(401).json({ message: "Токен не предоставлен." });
//     // }

//     // Проверяем, что это авторизованный администратор
//     // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
//     if (!req.ownerId) {
//       return res.status(401).json({ message: "Неверный токен." });
//     }

//     const customers = await prisma.customer.findMany({
//       orderBy: { createdAt: "desc" },
//     });

//     // Форматируем данные для Google Sheets
//     const formattedData = customers.map(customer => {
//       // Формируем полный адрес
//       const addressParts = [];
//       if (customer.street) addressParts.push(customer.street);
//       if (customer.houseNumber) addressParts.push(customer.houseNumber);
//       if (customer.city) addressParts.push(customer.city);
//       if (customer.postalCode) addressParts.push(customer.postalCode);
//       if (customer.country) addressParts.push(customer.country);
//       const fullAddress = addressParts.join(', ');
      
//       return {
//         "ID": customer.id,
//         "Имя": customer.firstName || "",
//         "Фамилия": customer.lastName || "",
//         "Страна": customer.country || "",
//         "Телефон": customer.phoneNumber || "",
//         "Email": customer.email || "",
//         "Дата рождения": customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : "",
//         "Город": customer.city || "",
//         "Улица": customer.street || "",
//         "Номер дома": customer.houseNumber || "",
//         "Почтовый индекс": customer.postalCode || "",
//         "Предпочтения в еде": customer.preferredFood || "",
//         "Отзыв": customer.feedback || "",
//         "Промокод": customer.discountCode || "",
//         "Дата регистрации": new Date(customer.createdAt).toLocaleString('ru-RU'),
//         "Полный адрес": fullAddress
//       };
//     });

//     res.json({
//       success: true,
//       data: formattedData,
//       total: customers.length,
//       exportDate: new Date().toISOString()
//     });

//   } catch (error) {
//     console.error("Необработанная ошибка /api/export/customers/json:", error);
//     return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
//   }
// });

// // Таргетированная рассылка по SMS выбранным клиентам
// app.post("/api/owner/broadcast/sms", authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
//     if (!req.ownerId) {
//       return res.status(401).json({ message: "Неверный токен." });
//     }

//     if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
//       return res.status(500).json({ message: "СМС отправка не настроена." });
//     }

//     const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

//     // Создаем запись сообщения (для истории)
//     const message = await prisma.broadcastMessage.create({
//       data: { title, body },
//     });

//     // Получаем подписки для клиентов
//     const customers = await prisma.customer.findMany({
//       where: { id: { in: recipientIds } },
//       select: { id: true, phoneNumber: true },
//     });

//     const subscriptions = await prisma.messageSubscription.findMany({
//       where: { customerId: { in: customers.map(c => c.id) } },
//       select: { id: true, customerId: true },
//     });

//     const subByCustomerId = new Map(subscriptions.map(s => [s.customerId, s.id]));

//     const deliveries = await Promise.allSettled(
//       customers.map(async (c) => {
//         if (!c.phoneNumber) {
//           return { status: "skipped", to: c.id, reason: "no-phone" };
//         }
//         try {
//           const result = await twilioClient.messages.create({
//             to: c.phoneNumber,
//             messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
//             body,
//           });
//           const subscriptionId = subByCustomerId.get(c.id);
//           if (subscriptionId) {
//             await prisma.messageDelivery.create({
//               data: {
//                 messageId: message.id,
//                 subscriptionId,
//                 phoneNumber: c.phoneNumber,
//                 status: "SENT",
//                 sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
//               },
//             });
//           }
//           return { status: "sent", to: c.phoneNumber };
//         } catch (smsError) {
//           const subscriptionId = subByCustomerId.get(c.id);
//           if (subscriptionId) {
//             await prisma.messageDelivery.create({
//               data: {
//                 messageId: message.id,
//                 subscriptionId,
//                 phoneNumber: c.phoneNumber || "",
//                 status: "FAILED",
//                 errorMessage: smsError.message,
//               },
//             });
//           }
//           return { status: "failed", to: c.phoneNumber, error: smsError.message };
//         }
//       })
//     );

//     const summary = deliveries.reduce(
//       (acc, item) => {
//         if (item.status === "fulfilled") {
//           const value = item.value;
//           if (value.status === "sent") acc.sent += 1;
//           else if (value.status === "failed") acc.failed += 1;
//           else acc.skipped += 1;
//         } else {
//           acc.failed += 1;
//         }
//         return acc;
//       },
//       { sent: 0, failed: 0, skipped: 0 }
//     );

//     return res.status(200).json({ message: "Рассылка SMS завершена.", summary });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
//     }
//     console.error("Необработанная ошибка /api/owner/broadcast/sms:", error);
//     return res.status(500).json({ message: "Ошибка сервера при SMS рассылке." });
//   }
// });

// // Таргетированная рассылка по E-mail выбранным клиентам
// app.post("/api/owner/broadcast/email",authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
//     if (!req.ownerId) {
//       return res.status(401).json({ message: "Неверный токен." });
//     }

//     if (!mailTransporter || !smtpEnabled) {
//       return res.status(500).json({ message: "Почтовая отправка не настроена." });
//     }

//     const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

//     const customers = await prisma.customer.findMany({
//       where: { id: { in: recipientIds } },
//       select: { id: true, email: true, firstName: true, lastName: true },
//     });

//     const deliveries = await Promise.allSettled(
//       customers.map(async (c) => {
//         if (!c.email) {
//           return { status: "skipped", to: c.id, reason: "no-email" };
//         }
//         try {
//           await mailTransporter.sendMail({
//             from: process.env.SMTP_FROM,
//             to: c.email,
//             subject: title,
//             text: body, // Используем text, т.к. фронтенд отправляет 'body'
//           });
//           return { status: "sent", to: c.email };
//         } catch (err) {
//           return { status: "failed", to: c.email, error: err.message };
//         }
//       })
//     );

//     const summary = deliveries.reduce(
//       (acc, item) => {
//         if (item.status === "fulfilled") {
//           const value = item.value;
//           if (value.status === "sent") acc.sent += 1;
//           else if (value.status === "failed") acc.failed += 1;
//           else acc.skipped += 1;
//         } else {
//           acc.failed += 1;
//         }
//         return acc;
//       },
//       { sent: 0, failed: 0, skipped: 0 }
//     );

//     return res.status(200).json({ message: "Рассылка Email завершена.", summary });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
//     }
//     console.error("Необработанная ошибка /api/owner/broadcast/email:", error);
//     return res.status(500).json({ message: "Ошибка сервера при Email рассылке." });
//   }
// });

// // ----------------------------------------------------------------
// // --- НОВЫЙ ЭНДПОИНТ ДЛЯ WHATSAPP ---
// // ----------------------------------------------------------------

// // Таргетированная рассылка по WhatsApp выбранным клиентам
// app.post("/api/owner/broadcast/whatsapp", authenticateSession, async (req, res) => {
//   // ИСПРАВЛЕНИЕ: Добавлен try...catch
//   try {
//     // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
//     if (!req.ownerId) {
//       return res.status(401).json({ message: "Неверный токен." });
//     }

//     // Проверяем, что Twilio и номер WhatsApp настроены
//     if (!twilioClient || !process.env.TWILIO_WHATSAPP_FROM_NUMBER) {
//       return res.status(500).json({ message: "WhatsApp отправка не настроена. (TWILIO_WHATSAPP_FROM_NUMBER)" });
//     }

//     const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

//     // (Опционально) Создаем запись сообщения (для истории)
//     // Можно использовать ту же модель BroadcastMessage
//     await prisma.broadcastMessage.create({
//       data: { title: `[WhatsApp] ${title}`, body },
//     });

//     // Получаем клиентов
//     const customers = await prisma.customer.findMany({
//       where: { id: { in: recipientIds } },
//       select: { id: true, phoneNumber: true },
//     });

//     const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM_NUMBER;

//     const deliveries = await Promise.allSettled(
//       customers.map(async (c) => {
//         if (!c.phoneNumber) {
//           return { status: "skipped", to: c.id, reason: "no-phone" };
//         }
        
//         // Номер получателя должен быть в формате E.164 с префиксом whatsapp:
//         const to = `whatsapp:${c.phoneNumber}`;
        
//         try {
//           await twilioClient.messages.create({
//             from: whatsappFrom,
//             to: to,
//             body: body,
//           });
          
//           // (Опционально) Можно добавить логику сохранения в MessageDelivery,
//           // как в SMS-эндпоинте, если нужна детальная история
          
//           return { status: "sent", to: to };
//         } catch (waError) {
//           console.error(`Failed to send WhatsApp to ${to}:`, waError.message);
//           return { status: "failed", to: to, error: waError.message };
//         }
//       })
//     );

//     const summary = deliveries.reduce(
//       (acc, item) => {
//         if (item.status === "fulfilled") {
//           const value = item.value;
//           if (value.status === "sent") acc.sent += 1;
//           else if (value.status === "failed") acc.failed += 1;
//           else acc.skipped += 1;
//         } else {
//           acc.failed += 1;
//         }
//         return acc;
//       },
//       { sent: 0, failed: 0, skipped: 0 }
//     );

//     return res.status(200).json({ message: "Рассылка WhatsApp завершена.", summary });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
//     }
//     console.error("Необработанная ошибка /api/owner/broadcast/whatsapp:", error);
//     return res.status(500).json({ message: "Ошибка сервера при WhatsApp рассылке." });
//   }
// });


// // ----------------------------------------------------------------
// // --- НОВЫЙ ЭНДПОИНТ ДЛЯ EMAIL РАССЫЛКИ (SendGrid) ---
// // ----------------------------------------------------------------
// app.post("/api/admin/broadcast", authenticateSession, async (req, res) => {
//   try {
//     // 1. Валидация данных (используем новую схему)
//     const { userIds, subject, htmlContent } = emailBroadcastSchema.parse(req.body);
    
//     // 2. Получаем email'ы выбранных пользователей
//     // (Модель 'customer', как видно из /api/customers)
//     const customers = await prisma.customer.findMany({
//       where: {
//         id: { in: userIds },
//       },
//       select: {
//         email: true // Выбираем только email
//       }
//     });

//     // Отфильтровываем null/undefined/пустые email
//     const emails = customers.map(c => c.email).filter(Boolean); 

//     if (emails.length === 0) {
//       return res.status(404).json({ message: 'Не найдено пользователей с email среди выбранных ID.' });
//     }

//     // 3. Создаем сообщение для SendGrid
//     // 'from' email должен быть тем, что вы верифицировали в SendGrid
//     const msg = {
//       to: emails, // SendGrid автоматически обработает массив
//       from: process.env.SENDGRID_FROM_EMAIL || 'your-verified-email@yourdomain.com', // УКАЖИТЕ ВАШ EMAIL в .env
//       subject: subject,
//       html: htmlContent, // Используем htmlContent для поддержки HTML
//     };

//     // 4. Отправляем
//     await sgMail.sendMultiple(msg); // Используем sendMultiple для массива

//     res.status(200).json({
//       message: `Email-рассылка успешно отправлена ${emails.length} пользователям.`
//     });

//   } catch (error) {
//     // Обработка ошибки Zod
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({ 
//         message: "Некорректные данные для email рассылки.", 
//         errors: error.flatten() 
//       });
//     }
    
//     // Обработка других ошибок
//     console.error('Ошибка при отправке SendGrid рассылки:', error);
//     if (error.response) {
//         console.error(error.response.body) // Логируем детальный ответ от SendGrid
//     }
//     res.status(500).json({ message: 'Ошибка сервера при отправке email рассылки.' });
//   }
// });

// app.post("/api/verify-email", async (req, res) => {
//   try {
//     // 1. Убедитесь, что .trim() здесь есть (как в прошлый раз)
//     const { customerId, code } = z.object({
//       customerId: z.string(),
//       code: z.string()
//               .trim() // Убираем пробелы
//               .min(6, "Код должен быть 6 цифр")
//               .max(6, "Код должен быть 6 цифр"),
//     }).parse(req.body);
    
//     // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 1) ---
//     console.log(`[Verify] Получен запрос на верификацию. CustomerID: ${customerId}, Код: "${code}"`);

//     const customer = await prisma.customer.findUnique({
//       where: { id: customerId },
//     });

//     if (!customer) {
//       console.log(`[Verify] ОШИБКА: Пользователь ${customerId} не найден.`);
//       return res.status(404).json({ success: false, message: "Пользователь не найден." });
//     }
//     if (customer.isEmailVerified) {
//       console.log(`[Verify] ОШИБКА: Email ${customer.email} уже подтвержден.`);
//       return res.status(400).json({ success: false, message: "Email уже подтвержден." });
//     }
    
//     // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 2) ---
//     console.log(`[Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${customer.emailVerificationCode}")`);

//     if (customer.emailVerificationCode !== code) {
//       console.log(`[Verify] ОШИБКА: Коды не совпадают.`);
//       return res.status(400).json({ success: false, message: "Неверный код верификации." });
//     }

//     // Успех!
//     console.log(`[Verify] УСПЕХ: Коды совпали. Верифицируем пользователя ${customer.email}.`);
//     await prisma.customer.update({
//       where: { id: customerId },
//       data: {
//         isEmailVerified: true,
//         emailVerificationCode: null, // Очищаем код
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Email успешно подтвержден!",
//       discountCode: customer.discountCode,
//     });

//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.log("[Verify] ОШИБКА: Zod. Код не прошел валидацию (не 6 цифр?).", error.flatten());
//       return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
//     }
//     console.error("Ошибка в /api/verify-email:", error);
//     return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
//   }
// });

// // --- КОНЕЦ НОВОГО ЭНДПОИНТА ---

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient, Prisma } from "./generated/prisma/index.js";
import { z } from "zod";
import twilio from "twilio";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { UAParser } from "ua-parser-js";
import geoip from "geoip-lite";
import https from "https";
import http from "http";
import sgMail from '@sendgrid/mail'; // --- НОВОЕ: Импорт SendGrid (ESM) ---

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // --- НОВОЕ: Конфигурация SendGrid ---

const app = express();
const prisma = new PrismaClient();

const OWNER_TOKEN = process.env.OWNER_TOKEN;

const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
  ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  : null;

// Email транспорт (SMTP)
const smtpEnabled = !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM);
const mailTransporter = smtpEnabled
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

  // НОВОЕ MIDDLEWARE ДЛЯ ПРОВЕРКИ ТОКЕНА СЕССИИ АДМИНИСТРАТОРА
const authenticateSession = async (req, res, next) => {
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;

    if (!ownerToken) {
      return res.status(401).json({ message: "Токен не предоставлен." });
    }

    // Ищем сессию по ее ID (который мы используем как токен)
    const session = await prisma.ownerLoginSession.findUnique({
      where: { id: ownerToken },
    });

    // Если сессии нет или она была неудачной
    if (!session || !session.isSuccessful) {
      return res.status(401).json({ message: "Неверный токен сессии." });
    }

    // ПРОВЕРКА ИСТЕЧЕНИЯ СРОКА ДЕЙСТВИЯ (24 часа)
    const loginDate = new Date(session.loginAt);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);

    if (hoursDiff >= 24) {
      return res.status(401).json({ message: "Сессия истекла. Пожалуйста, войдите снова." });
    }

    // Все в порядке, прикрепляем ID владельца к запросу
    req.ownerId = session.ownerId;
    next(); // Передаем управление следующему обработчику
    
  } catch (error) {
    console.error("Ошибка в middleware authenticateSession:", error);
    return res.status(500).json({ message: "Ошибка сервера при проверке токена." });
  }
};
// --- Функции getRealLocationInfo и getDeviceAndLocationInfo остаются без изменений ---
// (Они уже содержат внутреннюю обработку ошибок и таймауты)

// Функция для получения реального местоположения через внешние API
async function getRealLocationInfo(ipAddress) {
  return new Promise((resolve) => {
    // Пропускаем localhost и приватные IP
    if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost' ||
        ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
      resolve(null);
      return;
    }

    // Используем ipapi.co для получения детальной информации
    const options = {
      hostname: 'ipapi.co',
      port: 443,
      path: `/${ipAddress}/json/`,
      method: 'GET',
      timeout: 5000
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const locationData = JSON.parse(data);
          console.log('Server: External API response:', locationData);
          
          if (locationData.error) {
            console.log('Server: External API error:', locationData.reason);
            resolve(null);
            return;
          }
          
          resolve({
            country: locationData.country_name || locationData.country,
            countryCode: locationData.country_code,
            region: locationData.region || locationData.region_code,
            city: locationData.city,
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            timezone: locationData.timezone,
            isp: locationData.org || locationData.asn,
            postal: locationData.postal,
            regionCode: locationData.region_code,
            countryCode3: locationData.country_code_iso3,
            currency: locationData.currency,
            currencyName: locationData.currency_name,
            languages: locationData.languages,
            countryPopulation: locationData.country_population,
            countryArea: locationData.country_area,
            countryCapital: locationData.country_capital,
            continent: locationData.continent_code,
            isEu: locationData.in_eu,
            callingCode: locationData.country_calling_code,
            utcOffset: locationData.utc_offset
          });
        } catch (error) {
          console.log('Server: Error parsing external API response:', error);
          resolve(null);
        }
      });
    });

    req.on('error', (error) => {
      console.log('Server: External API request error:', error);
      resolve(null);
    });

    req.on('timeout', () => {
      console.log('Server: External API request timeout');
      req.destroy();
      resolve(null);
    });

    req.setTimeout(5000);
    req.end();
  });
}

// Функция для получения информации об устройстве и местоположении
async function getDeviceAndLocationInfo(req) {
  const userAgent = req.get('User-Agent') || '';
  
  // Улучшенное определение IP адреса
  let ipAddress = req.ip || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.headers['x-client-ip'] ||
    req.headers['cf-connecting-ip'] ||
    'unknown';
  
  // Очищаем IPv6 адреса
  if (ipAddress.startsWith('::ffff:')) {
    ipAddress = ipAddress.substring(7);
  }
  
  console.log('Server: User-Agent:', userAgent);
  console.log('Server: IP Address:', ipAddress);
  console.log('Server: Headers:', {
    'x-forwarded-for': req.headers['x-forwarded-for'],
    'x-real-ip': req.headers['x-real-ip'],
    'x-client-ip': req.headers['x-client-ip'],
    'cf-connecting-ip': req.headers['cf-connecting-ip']
  });
  
  // Парсим User-Agent
  const parser = new UAParser(userAgent);
  const result = parser.getResult();
  
  console.log('Server: Parsed UA result:', result);
  
  // Получаем информацию о местоположении по IP
  const geo = geoip.lookup(ipAddress);
  console.log('Server: Geo lookup result:', geo);
  
  // Дополнительная информация о местоположении
  if (geo) {
    console.log('Server: Detailed geo info:', {
      range: geo.range,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      ll: geo.ll,
      metro: geo.metro,
      area: geo.area,
      eu: geo.eu,
      timezone: geo.timezone,
      city_geoname_id: geo.city_geoname_id,
      country_geoname_id: geo.country_geoname_id,
      is_anonymous_proxy: geo.is_anonymous_proxy,
      is_satellite_provider: geo.is_satellite_provider
    });
  }

  // Получаем дополнительную информацию через внешний API
  const externalLocation = await getRealLocationInfo(ipAddress);
  console.log('Server: External location data:', externalLocation);
  
  // Улучшенное определение браузера Safari
  let browserName = result.browser.name || 'Unknown';
  let browserVersion = result.browser.version || '';
  
  // Специальная обработка для Safari
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browserName = 'Safari';
    // Извлекаем версию Safari из User-Agent
    const safariMatch = userAgent.match(/Version\/(\d+\.\d+)/);
    if (safariMatch) {
      browserVersion = safariMatch[1];
    }
  }
  
  // Улучшенное определение macOS
  let osName = result.os.name || 'Unknown';
  let osVersion = result.os.version || '';
  
  if (userAgent.includes('Mac OS X')) {
    osName = 'macOS';
    // Извлекаем версию macOS из User-Agent
    const macMatch = userAgent.match(/Mac OS X (\d+[._]\d+[._]?\d*)/);
    if (macMatch) {
      osVersion = macMatch[1].replace(/_/g, '.');
    }
  }
  
  // Формируем полное название браузера с версией
  const fullBrowserName = browserVersion ? `${browserName} ${browserVersion}` : browserName;
  
  // Формируем полное название ОС с версией
  const fullOsName = osVersion ? `${osName} ${osVersion}` : osName;
  
  // Определяем тип устройства более детально
  let deviceType = result.device.type || 'desktop';
  let deviceModel = result.device.model || 'Unknown';
  
  // Специальная обработка для desktop устройств
  if (deviceType === 'desktop' || !deviceType) {
    deviceType = 'desktop';
    if (osName === 'macOS') {
      deviceModel = 'Mac';
    } else if (osName.includes('Windows')) {
      deviceModel = 'PC';
    } else if (osName.includes('Linux')) {
      deviceModel = 'Linux PC';
    }
  }
  
  // Обработка localhost IP
  let locationDetails = 'Unknown';
  let country = 'Unknown';
  let city = 'Unknown';
  let region = 'Unknown';
  let latitude = null;
  let longitude = null;
  let timezone = 'Unknown';
  let isp = 'Unknown';
  
  if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
    // Для localhost показываем реалистичные данные разработки
    const developmentLocations = [
      { country: 'Netherlands', city: 'Amsterdam', region: 'North Holland', timezone: 'Europe/Amsterdam', isp: 'DigitalOcean', lat: 52.3676, lng: 4.9041 },
      { country: 'United States', city: 'San Francisco', region: 'California', timezone: 'America/Los_Angeles', isp: 'AWS', lat: 37.7749, lng: -122.4194 },
      { country: 'Germany', city: 'Berlin', region: 'Berlin', timezone: 'Europe/Berlin', isp: 'Hetzner', lat: 52.5200, lng: 13.4050 },
      { country: 'United Kingdom', city: 'London', region: 'England', timezone: 'Europe/London', isp: 'DigitalOcean', lat: 51.5074, lng: -0.1278 },
      { country: 'Canada', city: 'Toronto', region: 'Ontario', timezone: 'America/Toronto', isp: 'AWS', lat: 43.6532, lng: -79.3832 }
    ];
    
    // Выбираем случайное местоположение для демонстрации
    const randomLocation = developmentLocations[Math.floor(Math.random() * developmentLocations.length)];
    
    locationDetails = `${randomLocation.city}, ${randomLocation.country}`;
    country = randomLocation.country;
    city = randomLocation.city;
    region = randomLocation.region;
    latitude = randomLocation.lat;
    longitude = randomLocation.lng;
    timezone = randomLocation.timezone;
    isp = randomLocation.isp;
  } else if (externalLocation) {
    // Используем данные из внешнего API (более точные)
    const addressParts = [];
    if (externalLocation.city) addressParts.push(externalLocation.city);
    if (externalLocation.region) addressParts.push(externalLocation.region);
    if (externalLocation.country) addressParts.push(externalLocation.country);
    locationDetails = addressParts.join(', ');
    
    country = externalLocation.country || 'Unknown';
    city = externalLocation.city || 'Unknown';
    region = externalLocation.region || 'Unknown';
    latitude = externalLocation.latitude || null;
    longitude = externalLocation.longitude || null;
    timezone = externalLocation.timezone || 'Unknown';
    isp = externalLocation.isp || 'Unknown';
    
    console.log('Server: Using external API data:', {
      ip: ipAddress,
      country: country,
      region: region,
      city: city,
      coordinates: [latitude, longitude],
      timezone: timezone,
      isp: isp,
      locationDetails: locationDetails
    });
  } else if (geo) {
    // Формируем полную адресу с правильным порядком
    const addressParts = [];
    
    // Добавляем город
    if (geo.city) {
      addressParts.push(geo.city);
    }
    
    // Добавляем регион/область
    if (geo.region) {
      addressParts.push(geo.region);
    }
    
    // Добавляем страну
    if (geo.country) {
      addressParts.push(geo.country);
    }
    
    locationDetails = addressParts.join(', ');
    
    // Устанавливаем основные данные
    country = geo.country || 'Unknown';
    city = geo.city || 'Unknown';
    region = geo.region || 'Unknown';
    latitude = geo.ll?.[0] || null;
    longitude = geo.ll?.[1] || null;
    timezone = geo.timezone || 'Unknown';
    
    // Определяем ISP на основе доступных данных
    if (geo.is_anonymous_proxy) {
      isp = 'Anonymous Proxy';
    } else if (geo.is_satellite_provider) {
      isp = 'Satellite Provider';
    } else if (geo.metro) {
      isp = `Metro Area: ${geo.metro}`;
    } else if (geo.area) {
      isp = `Area: ${geo.area}`;
    } else {
      isp = 'Unknown ISP';
    }
    
    // Логируем для отладки
    console.log('Server: Processed geo data:', {
      ip: ipAddress,
      country: country,
      region: region,
      city: city,
      coordinates: [latitude, longitude],
      timezone: timezone,
      isp: isp,
      locationDetails: locationDetails,
      isAnonymousProxy: geo.is_anonymous_proxy,
      isSatelliteProvider: geo.is_satellite_provider,
      metro: geo.metro,
      area: geo.area,
      eu: geo.eu
    });
  } else {
    // Если geo данные недоступны, попробуем определить по IP другим способом
    console.log('Server: No geo data available for IP:', ipAddress);
    
    // Для некоторых IP адресов можем попробовать альтернативные методы
    if (ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.') || ipAddress.startsWith('172.')) {
      locationDetails = 'Private Network';
      country = 'Private';
      city = 'Local Network';
      region = 'Private';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
      isp = 'Private Network';
    }
  }
  
  // Дополнительные поля для localhost
  let additionalFields = {};
  if (ipAddress === '::1' || ipAddress === '127.0.0.1' || ipAddress === 'localhost') {
    const locationMap = {
      'Netherlands': { countryCode: 'NL', regionCode: 'NH', postal: '1012', currency: 'EUR', currencyName: 'Euro', languages: 'nl,en', countryPopulation: 17530000, countryArea: 41543, countryCapital: 'Amsterdam', continent: 'EU', isEu: true, callingCode: '+31', utcOffset: '+01:00' },
      'United States': { countryCode: 'US', regionCode: 'CA', postal: '94102', currency: 'USD', currencyName: 'US Dollar', languages: 'en', countryPopulation: 331900000, countryArea: 9833517, countryCapital: 'Washington', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-08:00' },
      'Germany': { countryCode: 'DE', regionCode: 'BE', postal: '10115', currency: 'EUR', currencyName: 'Euro', languages: 'de,en', countryPopulation: 83200000, countryArea: 357022, countryCapital: 'Berlin', continent: 'EU', isEu: true, callingCode: '+49', utcOffset: '+01:00' },
      'United Kingdom': { countryCode: 'GB', regionCode: 'ENG', postal: 'SW1A 1AA', currency: 'GBP', currencyName: 'British Pound', languages: 'en', countryPopulation: 67000000, countryArea: 242495, countryCapital: 'London', continent: 'EU', isEu: false, callingCode: '+44', utcOffset: '+00:00' },
      'Canada': { countryCode: 'CA', regionCode: 'ON', postal: 'M5H 2N2', currency: 'CAD', currencyName: 'Canadian Dollar', languages: 'en,fr', countryPopulation: 38000000, countryArea: 9984670, countryCapital: 'Ottawa', continent: 'NA', isEu: false, callingCode: '+1', utcOffset: '-05:00' }
    };
    additionalFields = locationMap[country] || {};
  }

  const deviceInfo = {
    userAgent,
    ipAddress,
    browser: fullBrowserName,
    browserName: browserName,
    browserVersion: browserVersion,
    os: fullOsName,
    osName: osName,
    osVersion: osVersion,
    device: `${deviceType} (${deviceModel})`,
    deviceType: deviceType,
    deviceModel: deviceModel,
    country: country,
    city: city,
    region: region,
    latitude: latitude,
    longitude: longitude,
    location: locationDetails,
    timezone: timezone,
    isp: isp,
    // Дополнительные данные из внешнего API или localhost
    countryCode: externalLocation?.countryCode || additionalFields.countryCode,
    regionCode: externalLocation?.regionCode || additionalFields.regionCode,
    postal: externalLocation?.postal || additionalFields.postal,
    currency: externalLocation?.currency || additionalFields.currency,
    currencyName: externalLocation?.currencyName || additionalFields.currencyName,
    languages: externalLocation?.languages || additionalFields.languages,
    countryPopulation: externalLocation?.countryPopulation || additionalFields.countryPopulation,
    countryArea: externalLocation?.countryArea || additionalFields.countryArea,
    countryCapital: externalLocation?.countryCapital || additionalFields.countryCapital,
    continent: externalLocation?.continent || additionalFields.continent,
    isEu: externalLocation?.isEu || additionalFields.isEu,
    callingCode: externalLocation?.callingCode || additionalFields.callingCode,
    utcOffset: externalLocation?.utcOffset || additionalFields.utcOffset,
  };
  
  console.log('Server: Final device info:', deviceInfo);
  
  return deviceInfo;
}

// ----------------------------------------------------------------
// --- НАЧАЛО МАРШРУТОВ API ---
// ----------------------------------------------------------------

app.use(cors());
app.use(express.json());

const registrationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  country: z.string().length(2),
  phoneNumber: z.string().min(6).max(20),
  email: z.string().email(),
  birthDate: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  postalCode: z.string().optional(),
  houseNumber: z.string().optional(),
  preferredFood: z.string().optional(),
  feedback: z.string().optional(),
});

async function generateUniqueDiscountCode() {
  const prefix = "RC10-";
  for (let i = 0; i < 5; i += 1) {
    const code = `${prefix}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    // ИСПРАВЛЕНИЕ: Добавлен try...catch
    try {
      const existing = await prisma.customer.findUnique({ where: { discountCode: code } });
      if (!existing) {
        return code;
      }
    } catch (error) {
      console.error("Ошибка при проверке уникальности промокода:", error);
      // Пробрасываем ошибку, чтобы ее поймал внешний try...catch
      throw new Error("Ошибка базы данных при генерации промокода.");
    }
  }
  throw new Error("Не удалось сгенерировать уникальный промокод. Попробуйте позже.");
}

app.post("/api/register", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    console.log('Server: Получены данные регистрации:', req.body);
    
    const data = registrationSchema.parse(req.body);

    console.log('Server: Дата рождения (строка):', data.birthDate);
    
    const birthDate = data.birthDate ? new Date(data.birthDate) : undefined;
    
    console.log('Server: Дата рождения (объект Date):', birthDate);
    
    if (birthDate && Number.isNaN(birthDate.getTime())) {
      console.log('Server: Ошибка - некорректный формат даты');
      return res.status(400).json({ message: "Некорректный формат даты." });
    }

    // --- ИЗМЕНЕНИЕ: Логика проверки существующего пользователя ---
    // Сначала проверяем телефон
    let existingCustomer = await prisma.customer.findUnique({
      where: { phoneNumber: data.phoneNumber },
    });

    if (existingCustomer) {
      return res.status(200).json({
        message: "Вы уже зарегистрированы.",
        discountCode: existingCustomer.discountCode,
        status: "exists",
      });
    }
    
    // Проверяем email
    existingCustomer = await prisma.customer.findFirst({
        where: { email: data.email }
    });
    
    if (existingCustomer) {
        return res.status(400).json({
            message: "Этот email уже используется.",
            status: "email_exists",
        });
    }
    // --- Конец логики проверки ---
    const discountCode = await generateUniqueDiscountCode();
    const verificationCode = crypto.randomInt(100000, 999999).toString();
    const customer = await prisma.customer.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        phoneNumber: data.phoneNumber,
        email: data.email,
        birthDate,
        city: data.city,
        street: data.street,
        postalCode: data.postalCode,
        houseNumber: data.houseNumber,
        preferredFood: data.preferredFood,
        feedback: data.feedback,
        discountCode,
        subscriptions: {
          create: {},
        },
        emailVerificationCode: verificationCode
      },
    });
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
      const msg = {
        to: customer.email,
        from: process.env.SENDGRID_FROM_EMAIL, // Убедитесь, что эта переменная есть в .env
        subject: 'Ваш код верификации Sushi Icon',
        text: `Ваш код верификации: ${verificationCode}`,
        html: `<strong>Ваш код верификации: ${verificationCode}</strong>`,
      };
      try {
        await sgMail.send(msg);
        console.log(`Server: Письмо верификации отправлено на ${customer.email}`);
      } catch (emailError) {
        console.error('Server: Ошибка отправки письма верификации:', emailError.response ? emailError.response.body : emailError);
        // Не блокируем регистрацию, но логируем ошибку
      }
    } else {
      console.log('Server: Пропуск отправки письма верификации - SENDGRID_API_KEY или SENDGRID_FROM_EMAIL не настроены.');
    }

    // --- ИЗМЕНЕНИЕ: Отправляем СМС (как и раньше), но меняем ответ ---
    if (twilioClient && process.env.TWILIO_MESSAGING_SERVICE_SID) {
      try {
        const welcomeMessage = `Спасибо за регистрацию в Sushi Icon! Ваш персональный промокод на 10% скидку: ${customer.discountCode}. Пожалуйста, подтвердите ваш email.`;
        await twilioClient.messages.create({
          to: customer.phoneNumber,
          messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
          body: welcomeMessage,
        });
        console.log(`Server: Успешно отправлено приветственное СМС клиенту ${customer.id}`);
      } catch (smsError) {
        console.error(`Server: Ошибка отправки приветственного СМС клиенту ${customer.id}:`, smsError.message);
      }
    } else {
      console.log('Server: Пропуск отправки СМС - Twilio Messaging Service не настроен.');
    }
    

    return res.status(201).json({
      status: "pending_verification",
      message: "Регистрация успешна. Пожалуйста, проверьте ваш email для кода верификации.",
      customerId: customer.id,
      email: customer.email
      // customer: {
      //   firstName: customer.firstName,
      //   lastName: customer.lastName,
      //   email: customer.email,
      //   phoneNumber: customer.phoneNumber,
      //   discountCode: customer.discountCode,
      // }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
     // --- ИЗМЕНЕНИЕ: Улучшенная обратная связь при ошибке Zod ---
      const emailError = error.flatten().fieldErrors.email;
      if (emailError) {
          return res.status(400).json({ message: "Некорректный email.", errors: error.flatten() });
      }
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }

    // P2002 - это ошибка "unique constraint failed", т.е. дубликат
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      try {
        const customer = await prisma.customer.findUnique({
          where: { phoneNumber: req.body.phoneNumber },
        });
        return res.status(200).json({
          message: "Вы уже зарегистрированы.",
          discountCode: customer?.discountCode,
          status: "exists",
        });
      } catch (findError) {
        console.error("Ошибка при поиске дублирующего клиента:", findError);
        return res.status(500).json({ message: "Ошибка сервера при проверке дубликата." });
      }
    }

    console.error("Необработанная ошибка /api/register:", error);
    return res.status(500).json({ message: "Ошибка сервера." });
  }
});

const broadcastSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

const targetedBroadcastSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  recipientIds: z.array(z.string()).min(1),
});

// --- НОВОЕ: Схема Zod для SendGrid рассылки ---
const emailBroadcastSchema = z.object({
  userIds: z.array(z.string()).min(1, "Нужен хотя бы один ID"),
  subject: z.string().min(1, "Тема не может быть пустой"),
  htmlContent: z.string().min(1, "Тело письма не может быть пустым"),
});
// -----------------------------------------

app.post("/api/broadcast", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    if (!OWNER_TOKEN || ownerToken !== OWNER_TOKEN) {
      return res.status(401).json({ message: "Нет доступа." });
    }

    if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      return res.status(500).json({ message: "СМС отправка не настроена." });
    }

    const { title, body } = broadcastSchema.parse(req.body);

    const subscriptions = await prisma.messageSubscription.findMany({
      where: { subscribed: true },
      include: {
        customer: true,
      },
    });

    if (subscriptions.length === 0) {
      return res.status(200).json({ message: "Нет подписчиков для рассылки." });
    }

    const message = await prisma.broadcastMessage.create({
      data: {
        title,
        body,
      },
    });

    const deliveries = await Promise.allSettled(
      subscriptions.map(async (subscription) => {
        const to = subscription.customer.phoneNumber;

        try {
          const result = await twilioClient.messages.create({
            to,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body,
          });

          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "SENT",
              sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
            },
          });

          return { status: "sent", to };
        } catch (smsError) {
          await prisma.messageDelivery.create({
            data: {
              messageId: message.id,
              subscriptionId: subscription.id,
              phoneNumber: to,
              status: "FAILED",
              errorMessage: smsError.message,
            },
          });

          return { status: "failed", to, error: smsError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") {
            acc.sent += 1;
          } else {
            acc.failed += 1;
          }
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0 }
    );

    return res.status(200).json({
      message: "Рассылка отправлена.",
      summary,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }

    console.error("Необработанная ошибка /api/broadcast:", error);
    return res.status(500).json({ message: "Ошибка сервера." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ...

// Схемы валидации для аутентификации владельца
const ownerLoginSchema = z.object({
  email: z.string().email(),
  accessCode: z.string().min(6).max(25),
  password: z.string().min(6).max(100),
});

// --- НОВАЯ СХЕМА ВАЛИДАЦИИ ДЛЯ 2-ГО ШАГА ---
const ownerVerifySchema = z.object({
  email: z.string().email(),
  code: z.string().trim().min(6, "Код 6 цифр").max(6, "Код 6 цифр"),
});
// ------------------------------------------

// ...

// Жестко заданные данные администратора - максимально сложные для безопасности
const ADMIN_CREDENTIALS = {
  email: "sushi.master.admin.2024@secure-icon.com",
  accessCode: "SUSHI-MASTER-2024-X9K7",
  password: "SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;',./",
  name: "Главный администратор"
};

// Аутентификация владельца
// ИСПРАВЛЕНИЕ: Этот маршрут уже имел try...catch, но внутренние catch "глотали" ошибки.
// Упрощено для проброса ошибок в главный catch.
// Аутентификация владельца (ШАГ 1: ПРОВЕРКА КРЕДЕНШИАЛОВ И ОТПРАВКА КОДА)
app.post("/api/owner/login", async (req, res) => {
  try {
    const { email, accessCode, password } = ownerLoginSchema.parse(req.body);

    // Получаем информацию об устройстве и местоположении
    const deviceInfo = await getDeviceAndLocationInfo(req);
    let ownerId = "admin-001"; // ID по умолчанию

    // Проверяем только жестко заданные данные
    if (email !== ADMIN_CREDENTIALS.email || 
        accessCode !== ADMIN_CREDENTIALS.accessCode || 
        password !== ADMIN_CREDENTIALS.password) {
      
      // ... (код для логирования неудачной попытки входа - он в порядке) ...
      let owner;
      try {
        owner = await prisma.owner.upsert({
          where: { email: ADMIN_CREDENTIALS.email },
          update: {},
          create: {
            id: "admin-001",
            email: ADMIN_CREDENTIALS.email,
            name: ADMIN_CREDENTIALS.name,
            accessCode: ADMIN_CREDENTIALS.accessCode,
            password: ADMIN_CREDENTIALS.password,
            isEmailVerified: true // --- ВАЖНО: Хардкод-админ всегда верифицирован
          },
        });
        ownerId = owner.id;
      } catch (ownerError) {
        console.error("Ошибка при создании/обновлении владельца для неудачной попытки:", ownerError);
      }

      // Сохраняем неудачную попытку входа с детальной информацией
      try {
        await prisma.ownerLoginSession.create({
          data: {
            ownerId: ownerId,
            isSuccessful: false,
            loginAt: new Date(),
            // ... (все остальные поля deviceInfo)
            deviceInfo: JSON.stringify(deviceInfo),
            ipAddress: deviceInfo.ipAddress,
            location: deviceInfo.location,
            userAgent: deviceInfo.userAgent,
            browser: deviceInfo.browser,
            os: deviceInfo.os,
            device: deviceInfo.device,
            country: deviceInfo.country,
            city: deviceInfo.city,
            latitude: deviceInfo.latitude,
            longitude: deviceInfo.longitude,
            timezone: deviceInfo.timezone,
            isp: deviceInfo.isp,
            region: deviceInfo.region,
            deviceType: deviceInfo.deviceType,
            deviceModel: deviceInfo.deviceModel,
            browserName: deviceInfo.browserName,
            browserVersion: deviceInfo.browserVersion,
            osName: deviceInfo.osName,
            osVersion: deviceInfo.osVersion,
            countryCode: deviceInfo.countryCode,
            regionCode: deviceInfo.regionCode,
            postal: deviceInfo.postal,
            currency: deviceInfo.currency,
            currencyName: deviceInfo.currencyName,
            languages: deviceInfo.languages,
            countryPopulation: deviceInfo.countryPopulation,
            countryArea: deviceInfo.countryArea,
            countryCapital: deviceInfo.countryCapital,
            continent: deviceInfo.continent,
            isEu: deviceInfo.isEu,
            callingCode: deviceInfo.callingCode,
            utcOffset: deviceInfo.utcOffset,
          },
        });
      } catch (sessionError) {
        console.error("Ошибка при сохранении неудачной сессии:", sessionError);
      }

      return res.status(401).json({ 
        message: "Доступ запрещен. Эта страница доступна только администраторам.",
        success: false 
      });
    }

      // --- УСПЕШНЫЙ ВХОД (ШАГ 1) ---

      // Создаем или находим владельца в базе данных
      let owner;
      try {
        owner = await prisma.owner.upsert({
          where: { email: ADMIN_CREDENTIALS.email },
          update: {
            // не обновляем lastLogin здесь, только после верификации
          },
          create: {
            id: "admin-001",
            email: ADMIN_CREDENTIALS.email,
            name: ADMIN_CREDENTIALS.name,
            accessCode: ADMIN_CREDENTIALS.accessCode,
            password: ADMIN_CREDENTIALS.password,
            isEmailVerified: true // --- ВАЖНО: Хардкод-админ всегда верифицирован
          },
        });
        ownerId = owner.id;
      } catch (ownerError) {
        console.error("Ошибка при создании/обновлении владельца:", ownerError);
        // Бросаем ошибку, чтобы ее поймал главный catch
        throw new Error("Ошибка БД при обновлении владельца."); 
      }

      // ----------------------------------------------------------------
      // --- ИЗМЕНЕНИЕ ЛОГИКИ ЗДЕСЬ ---
      // ----------------------------------------------------------------
      
      // 1. Генерируем код верификации
      const verificationCode = crypto.randomInt(100000, 999999).toString();

      // 2. Сохраняем код в БД
      try {
        await prisma.owner.update({
          where: { id: ownerId },
          data: { emailVerificationCode: verificationCode }
        });
      } catch (dbError) {
         console.error("Ошибка при сохранении кода верификации админа:", dbError);
         throw new Error("Ошибка БД при сохранении кода.");
      }
      
      // 3. Отправляем код на email
      if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
        const msg = {
          to: owner.email,
          from: process.env.SENDGRID_FROM_EMAIL,
          subject: 'Код входа в Sushi Icon Admin',
          text: `Ваш код для входа в панель администратора: ${verificationCode}`,
          html: `<strong>Ваш код для входа в панель администратора: ${verificationCode}</strong>`,
        };
        try {
          await sgMail.send(msg);
          console.log(`Server: Письмо верификации отправлено админу ${owner.email}`);
        } catch (emailError) {
          console.error('Server: Ошибка отправки письма верификации админу:', emailError.response ? emailError.response.body : emailError);
          // ВАЖНО: Если email не ушел, впускать нельзя
          throw new Error("Ошибка отправки email.");
        }
      } else {
        console.log('Server: ОШИБКА: SENDGRID не настроен для входа админа.');
        throw new Error("Сервис email не настроен.");
      }

      // 4. Отправляем ответ "ожидание верификации"
      return res.status(200).json({
        message: "Учетные данные верны. Код отправлен на ваш email.",
        success: true,
        status: "pending_verification"
      });
  // ----------------------------------------------------------------
  // --- КОНЕЦ ИЗМЕНЕНИЯ ---
  // ----------------------------------------------------------------
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Некорректные данные.", 
        errors: error.flatten(),
        success: false 
      });
    }

    // Это поймает ошибку "ReferenceError" и другие
    console.error(`Необработанная ошибка /api/owner/login: ${error.message}`);
    return res.status(500).json({ 
      message: `Ошибка сервера при аутентификации: ${error.message}`,
      success: false 
    });
  }
});

// --- НОВЫЙ МАРШРУТ: /api/owner/verify-login ---
// (ШАГ 2: ПРОВЕРКА КОДА И СОЗДАНИЕ СЕССИИ)
app.post("/api/owner/verify-login", async (req, res) => {
  try {
    const { email, code } = ownerVerifySchema.parse(req.body);

    console.log(`[Admin Verify] Попытка верификации для: ${email}, Код: "${code}"`);

    // 1. Находим админа по email
    // (Используем ADMIN_CREDENTIALS.email для доп. безопасности, т.к. админ один)
    if (email !== ADMIN_CREDENTIALS.email) {
      console.log(`[Admin Verify] ОШИБКА: Неверный email.`);
      return res.status(400).json({ success: false, message: "Неверный email." });
    }

    const owner = await prisma.owner.findUnique({
      where: { email: ADMIN_CREDENTIALS.email },
    });

    if (!owner) {
      console.log(`[Admin Verify] ОШИБКА: Админ ${email} не найден в БД.`);
      return res.status(404).json({ success: false, message: "Администратор не найден." });
    }

    // 2. Сравниваем коды
    console.log(`[Admin Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${owner.emailVerificationCode}")`);

    if (owner.emailVerificationCode !== code) {
      console.log(`[Admin Verify] ОШИБКА: Коды не совпадают.`);
      return res.status(400).json({ success: false, message: "Неверный код верификации." });
    }
    
    // 3. УСПЕХ: Коды совпали. Очищаем код и создаем сессию.
    console.log(`[Admin Verify] УСПЕХ: Коды совпали. Создаем сессию для ${owner.email}.`);
    
    await prisma.owner.update({
      where: { id: owner.id },
      data: {
        emailVerificationCode: null, // Очищаем код
        lastLogin: new Date(), // Обновляем время входа
      },
    });

    // 4. Получаем инфо об устройстве
    const deviceInfo = await getDeviceAndLocationInfo(req);

    // 5. Создаем сессию (логика из старого /api/owner/login)
    let session;
    try {
      session = await prisma.ownerLoginSession.create({
        data: {
          ownerId: owner.id,
          isSuccessful: true,
          loginAt: new Date(),
          // ... (все остальные поля deviceInfo)
          deviceInfo: JSON.stringify(deviceInfo),
          ipAddress: deviceInfo.ipAddress,
          location: deviceInfo.location,
          userAgent: deviceInfo.userAgent,
          browser: deviceInfo.browser,
          os: deviceInfo.os,
          device: deviceInfo.device,
          country: deviceInfo.country,
          city: deviceInfo.city,
          latitude: deviceInfo.latitude,
          longitude: deviceInfo.longitude,
          timezone: deviceInfo.timezone,
          isp: deviceInfo.isp,
          region: deviceInfo.region,
          deviceType: deviceInfo.deviceType,
          deviceModel: deviceInfo.deviceModel,
          browserName: deviceInfo.browserName,
          browserVersion: deviceInfo.browserVersion,
          osName: deviceInfo.osName,
          osVersion: deviceInfo.osVersion,
          countryCode: deviceInfo.countryCode,
          regionCode: deviceInfo.regionCode,
          postal: deviceInfo.postal,
          currency: deviceInfo.currency,
          currencyName: deviceInfo.currencyName,
          languages: deviceInfo.languages,
          countryPopulation: deviceInfo.countryPopulation,
          countryArea: deviceInfo.countryArea,
          countryCapital: deviceInfo.countryCapital,
          continent: deviceInfo.continent,
          isEu: deviceInfo.isEu,
          callingCode: deviceInfo.callingCode,
          utcOffset: deviceInfo.utcOffset,
        },
      });
    } catch (sessionError) {
      console.error("Ошибка при сохранении сессии:", sessionError);
      throw new Error("Ошибка БД при создании сессии.");
    }
    
    if (!session) {
      throw new Error("Не удалось создать сессию по неизвестной причине.");
    }

    // 6. Отправляем токен
    return res.status(200).json({
      message: "Успешная аутентификация.",
      success: true,
      status: "verified",
      token: session.id, // <--- ТОКЕН СЕССИИ
      owner: {
        id: owner.id,
        email: owner.email,
        name: owner.name,
        lastLogin: owner.lastLogin,
        createdAt: owner.createdAt,
      },
      deviceInfo: deviceInfo,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("[Admin Verify] ОШИБКА: Zod.", error.flatten());
      return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Ошибка в /api/owner/verify-login:", error);
    return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
  }
});
// --- КОНЕЦ НОВОГО МАРШРУТА ---


// Получение информации о владельце
app.get("/api/owner/profile",authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const rawOwnerToken = req.headers["x-owner-token"];
    const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
    if (!ownerToken) {
      return res.status(401).json({ message: "Токен не предоставлен." });
    }

    // Для обратной совместимости проверяем старый токен
    if (OWNER_TOKEN && ownerToken === OWNER_TOKEN) {
      return res.status(200).json({
        message: "Аутентификация через старый токен.",
        owner: { name: "Администратор", email: "admin@example.com" },
      });
    }

    // Проверяем новый токен (email владельца)
  //  console.log(ownerToken);
  //  const owner = await prisma.owner.findUnique({
  //     where: { email: ownerToken },
  //   });

  //   if (!owner || !owner.isActive) {
  //     return res.status(401).json({ message: "Неверный токен или аккаунт заблокирован." });
  //   }
  
    // --- ИСПРАВЛЕНИЕ: 'owner' не был определен ---
    // req.ownerId прикрепляется middleware 'authenticateSession'
    const owner = await prisma.owner.findUnique({
      where: { id: req.ownerId }
    });
    
    if (!owner) {
      return res.status(404).json({ message: "Владелец не найден." });
    }
    // --- КОНЕЦ ИСПРАВЛЕНИЯ ---

    return res.status(200).json({
      message: "Профиль владельца получен.",
      owner: {
        id: owner.id,
        email: owner.email,
        name: owner.name,
        lastLogin: owner.lastLogin,
        createdAt: owner.createdAt,
      },
    });
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/profile:", error);
    return res.status(500).json({ message: "Ошибка сервера при получении профиля." });
  }
});

app.get("/api/customers", authenticateSession, async (req, res) => {
  try {
    // Аутентификация уже пройдена, просто получаем клиентов
    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(
      customers.map((customer) => ({
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        country: customer.country,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        birthDate: customer.birthDate,
        city: customer.city,
        street: customer.street,
        postalCode: customer.postalCode,
        houseNumber: customer.houseNumber,
        preferredFood: customer.preferredFood,
        feedback: customer.feedback,
        discountCode: customer.discountCode,
        createdAt: customer.createdAt,
      }))
    );
  } catch (error) {
    console.error("Необработанная ошибка /api/customers:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении клиентов." });
  }
});
// Синхронизация данных анкеты для панели администратора
app.get("/api/sync/form-data", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    const synced = customers.map((c) => ({
      id: c.id,
      firstName: c.firstName,
      lastName: c.lastName,
      country: c.country || "",
      phoneNumber: c.phoneNumber,
      email: c.email || "",
      birthDate: c.birthDate ? new Date(c.birthDate).toISOString() : "",
      city: c.city || "",
      street: c.street || "",
      postalCode: c.postalCode || "",
      houseNumber: c.houseNumber || "",
      preferredFood: c.preferredFood || "",
      feedback: c.feedback || "",
      discountCode: c.discountCode || "",
      timestamp: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
      isDraft: false,
    }));

    return res.json(synced);
  } catch (error) {
    console.error("Необработанная ошибка /api/sync/form-data:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при синхронизации формы." });
  }
});

// Сохранение черновика формы в базу данных (автосохранение каждую секунду)
app.post("/api/form-draft", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const draftData = req.body;
    const draftId = draftData.draftId;
    
    if (draftId) {
      // Обновляем существующий черновик
      await prisma.formDraft.update({
        where: { id: draftId },
        data: {
          firstName: draftData.firstName || null,
          lastName: draftData.lastName || null,
          phoneNumber: draftData.phoneNumber || null,
          email: draftData.email || null,
          birthDate: draftData.birthDate || null,
          city: draftData.city || null,
          street: draftData.street || null,
          postalCode: draftData.postalCode || null,
          houseNumber: draftData.houseNumber || null,
          country: draftData.country || null,
          preferredFood: draftData.preferredFood || null,
          feedback: draftData.feedback || null,
        },
      });
      return res.json({ success: true, draftId });
    } else {
      // Создаем новый черновик
      const newDraft = await prisma.formDraft.create({
        data: {
          firstName: draftData.firstName || null,
          lastName: draftData.lastName || null,
          phoneNumber: draftData.phoneNumber || null,
          email: draftData.email || null,
          birthDate: draftData.birthDate || null,
          city: draftData.city || null,
          street: draftData.street || null,
          postalCode: draftData.postalCode || null,
          houseNumber: draftData.houseNumber || null,
          country: draftData.country || null,
          preferredFood: draftData.preferredFood || null,
          feedback: draftData.feedback || null,
        },
      });
      return res.json({ success: true, draftId: newDraft.id });
    }
  } catch (error) {
    console.error('Ошибка сохранения черновика:', error);
    return res.status(500).json({ message: "Ошибка сохранения черновика." });
  }
});

// Удаление черновика после успешной отправки формы
app.delete("/api/form-draft/:draftId", async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const { draftId } = req.params;
    await prisma.formDraft.delete({
      where: { id: draftId },
    }).catch(() => {
      // Игнорируем ошибки, если черновик уже удален
    });
    return res.json({ success: true });
  } catch (error) {
    console.error('Ошибка удаления черновика:', error);
    // Не критично, если не удалось удалить, не возвращаем 500
    return res.status(200).json({ success: false, message: "Ошибка удаления черновика, но это не критично." });
  }
});

// Автоматическая очистка старых черновиков (старше 1 часа)
setInterval(async () => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    await prisma.formDraft.deleteMany({
      where: {
        updatedAt: {
          lt: oneHourAgo,
        },
      },
    });
  } catch (error) {
    console.error('Ошибка очистки старых черновиков:', error);
  }
}, 5 * 60 * 1000); // Каждые 5 минут

// Универсальный список заявок для таблицы (публичный рид-онли)
app.get("/api/submissions", async (_req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    const completedRows = customers.map((c) => ({
      id: c.id,
      name: `${c.firstName} ${c.lastName}`.trim(),
      phone: c.phoneNumber,
      email: c.email || "",
      country: c.country || "",
      city: c.city || "",
      street: c.street || "",
      postalCode: c.postalCode || "",
      houseNumber: c.houseNumber || "",
      birthDate: c.birthDate ? new Date(c.birthDate).toISOString().slice(0, 10) : "",
      preferences: c.preferredFood || "",
      feedback: c.feedback || "",
      promoCode: c.discountCode,
      registrationDate: c.createdAt ? new Date(c.createdAt).toISOString() : new Date().toISOString(),
      status: "Активный",
      isDraft: false,
    }));

    // Добавляем черновики из базы данных
    const drafts = await prisma.formDraft.findMany({ orderBy: { updatedAt: "desc" } });
    const draftRows = drafts.map((draft) => ({
      id: draft.id,
      name: `${draft.firstName || ''} ${draft.lastName || ''}`.trim() || 'Заполняется...',
      phone: draft.phoneNumber || '',
      email: draft.email || '',
      country: draft.country || '',
      city: draft.city || '',
      street: draft.street || '',
      postalCode: draft.postalCode || '',
      houseNumber: draft.houseNumber || '',
      birthDate: draft.birthDate || '',
      preferences: draft.preferredFood || draft.feedback || '',
      feedback: draft.feedback || '',
      promoCode: 'В процессе...',
      registrationDate: draft.updatedAt ? new Date(draft.updatedAt).toISOString() : new Date().toISOString(),
      status: "Заполняется",
      isDraft: true,
    }));

    // Объединяем черновики и завершенные заявки
    const allRows = [...draftRows, ...completedRows];

    return res.json(allRows);
  } catch (error) {
    console.error("Необработанная ошибка /api/submissions:", error);
    return res.status(500).json({ message: "Ошибка сервера при получении заявок." });
  }
});

// Получение истории входов администратора
app.get("/api/owner/login-sessions", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена. 
    // req.ownerId был добавлен в middleware 'authenticateSession'
    const sessions = await prisma.ownerLoginSession.findMany({
      where: { ownerId: req.ownerId }, // Используем ID из сессии
      orderBy: { loginAt: "desc" },
      take: 50, 
    });

    res.json(sessions);
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/login-sessions:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении истории входов." });
  }
});
// Получение информации о текущем устройстве
app.get("/api/owner/current-device", authenticateSession, async (req, res) => {
  try {
    // Аутентификация пройдена
    const deviceInfo = await getDeviceAndLocationInfo(req);
    res.json(deviceInfo);
  } catch (error) {
    console.error("Необработанная ошибка /api/owner/current-device:", error.message);
    return res.status(500).json({ message: "Ошибка сервера при получении информации об устройстве." });
  }
});
// Экспорт данных в CSV формат для Google Таблиц
app.get("/api/export/customers", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // const rawOwnerToken = req.headers["x-owner-token"];
    // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
    // if (!ownerToken) {
    //   return res.status(401).json({ message: "Токен не предоставлен." });
    // }

    // Проверяем, что это авторизованный администратор
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Создаем CSV заголовки
    const headers = [
      "ID",
      "Имя",
      "Фамилия", 
      "Страна",
      "Телефон",
      "Email",
      "Дата рождения",
      "Город",
      "Улица",
      "Номер дома",
      "Почтовый индекс",
      "Предпочтения в еде",
      "Отзыв",
      "Промокод",
      "Дата регистрации",
      "Полный адрес"
    ];

    // Создаем CSV строки
    const csvRows = [headers.join(",")];
    
    customers.forEach(customer => {
      // Формируем полный адрес
      const addressParts = [];
      if (customer.street) addressParts.push(customer.street);
      if (customer.houseNumber) addressParts.push(customer.houseNumber);
      if (customer.city) addressParts.push(customer.city);
      if (customer.postalCode) addressParts.push(customer.postalCode);
      if (customer.country) addressParts.push(customer.country);
      const fullAddress = addressParts.join(', ');
      
      const row = [
        customer.id,
        `"${customer.firstName || ""}"`,
        `"${customer.lastName || ""}"`,
        `"${customer.country || ""}"`,
        `"${customer.phoneNumber || ""}"`,
        `"${customer.email || ""}"`,
        `"${customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : ""}"`,
        `"${customer.city || ""}"`,
        `"${customer.street || ""}"`,
        `"${customer.houseNumber || ""}"`,
        `"${customer.postalCode || ""}"`,
        `"${customer.preferredFood || ""}"`,
        `"${customer.feedback || ""}"`,
        `"${customer.discountCode || ""}"`,
        `"${new Date(customer.createdAt).toLocaleString('ru-RU')}"`,
        `"${fullAddress}"`
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = csvRows.join("\n");
    
    // Устанавливаем заголовки для скачивания файла
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="sushi_customers_${new Date().toISOString().split('T')[0]}.csv"`);
    
    // Добавляем BOM для корректного отображения кириллицы в Excel
    res.write('\uFEFF');
    res.end(csvContent);

  } catch (error) {
    console.error("Необработанная ошибка /api/export/customers:", error);
    // Не можем отправить 500, если заголовки уже отправлены, но можем залогировать
    if (!res.headersSent) {
      return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
    }
  }
});

// Экспорт данных в Excel формат (JSON для Google Sheets)
app.get("/api/export/customers/json", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // const rawOwnerToken = req.headers["x-owner-token"];
    // const ownerToken = Array.isArray(rawOwnerToken) ? rawOwnerToken[0] : rawOwnerToken;
    
    // if (!ownerToken) {
    //   return res.status(401).json({ message: "Токен не предоставлен." });
    // }

    // Проверяем, что это авторизованный администратор
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId вместо жестко заданного токена
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    const customers = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Форматируем данные для Google Sheets
    const formattedData = customers.map(customer => {
      // Формируем полный адрес
      const addressParts = [];
      if (customer.street) addressParts.push(customer.street);
      if (customer.houseNumber) addressParts.push(customer.houseNumber);
      if (customer.city) addressParts.push(customer.city);
      if (customer.postalCode) addressParts.push(customer.postalCode);
      if (customer.country) addressParts.push(customer.country);
      const fullAddress = addressParts.join(', ');
      
      return {
        "ID": customer.id,
        "Имя": customer.firstName || "",
        "Фамилия": customer.lastName || "",
        "Страна": customer.country || "",
        "Телефон": customer.phoneNumber || "",
        "Email": customer.email || "",
        "Дата рождения": customer.birthDate ? new Date(customer.birthDate).toLocaleDateString('ru-RU') : "",
        "Город": customer.city || "",
        "Улица": customer.street || "",
        "Номер дома": customer.houseNumber || "",
        "Почтовый индекс": customer.postalCode || "",
        "Предпочтения в еде": customer.preferredFood || "",
        "Отзыв": customer.feedback || "",
        "Промокод": customer.discountCode || "",
        "Дата регистрации": new Date(customer.createdAt).toLocaleString('ru-RU'),
        "Полный адрес": fullAddress
      };
    });

    res.json({
      success: true,
      data: formattedData,
      total: customers.length,
      exportDate: new Date().toISOString()
    });

  } catch (error) {
    console.error("Необработанная ошибка /api/export/customers/json:", error);
    return res.status(500).json({ message: "Ошибка сервера при экспорте данных." });
  }
});

// Таргетированная рассылка по SMS выбранным клиентам
app.post("/api/owner/broadcast/sms", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    if (!twilioClient || !process.env.TWILIO_MESSAGING_SERVICE_SID) {
      return res.status(500).json({ message: "СМС отправка не настроена." });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    // Создаем запись сообщения (для истории)
    const message = await prisma.broadcastMessage.create({
      data: { title, body },
    });

    // Получаем подписки для клиентов
    const customers = await prisma.customer.findMany({
      where: { id: { in: recipientIds } },
      select: { id: true, phoneNumber: true },
    });

    const subscriptions = await prisma.messageSubscription.findMany({
      where: { customerId: { in: customers.map(c => c.id) } },
      select: { id: true, customerId: true },
    });

    const subByCustomerId = new Map(subscriptions.map(s => [s.customerId, s.id]));

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.phoneNumber) {
          return { status: "skipped", to: c.id, reason: "no-phone" };
        }
        try {
          const result = await twilioClient.messages.create({
            to: c.phoneNumber,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            body,
          });
          const subscriptionId = subByCustomerId.get(c.id);
          if (subscriptionId) {
            await prisma.messageDelivery.create({
              data: {
                messageId: message.id,
                subscriptionId,
                phoneNumber: c.phoneNumber,
                status: "SENT",
                sentAt: result.dateCreated ? new Date(result.dateCreated) : new Date(),
              },
            });
          }
          return { status: "sent", to: c.phoneNumber };
        } catch (smsError) {
          const subscriptionId = subByCustomerId.get(c.id);
          if (subscriptionId) {
            await prisma.messageDelivery.create({
              data: {
                messageId: message.id,
                subscriptionId,
                phoneNumber: c.phoneNumber || "",
                status: "FAILED",
                errorMessage: smsError.message,
              },
            });
          }
          return { status: "failed", to: c.phoneNumber, error: smsError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка SMS завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/sms:", error);
    return res.status(500).json({ message: "Ошибка сервера при SMS рассылке." });
  }
});

// Таргетированная рассылка по E-mail выбранным клиентам
app.post("/api/owner/broadcast/email",authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    if (!mailTransporter || !smtpEnabled) {
      return res.status(500).json({ message: "Почтовая отправка не настроена." });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    const customers = await prisma.customer.findMany({
      where: { id: { in: recipientIds } },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.email) {
          return { status: "skipped", to: c.id, reason: "no-email" };
        }
        try {
          await mailTransporter.sendMail({
            from: process.env.SMTP_FROM,
            to: c.email,
            subject: title,
            text: body, // Используем text, т.к. фронтенд отправляет 'body'
          });
          return { status: "sent", to: c.email };
        } catch (err) {
          return { status: "failed", to: c.email, error: err.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка Email завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/email:", error);
    return res.status(500).json({ message: "Ошибка сервера при Email рассылке." });
  }
});

// ----------------------------------------------------------------
// --- НОВЫЙ ЭНДПОИНТ ДЛЯ WHATSAPP ---
// ----------------------------------------------------------------

// Таргетированная рассылка по WhatsApp выбранным клиентам
app.post("/api/owner/broadcast/whatsapp", authenticateSession, async (req, res) => {
  // ИСПРАВЛЕНИЕ: Добавлен try...catch
  try {
    // --- ИСПРАВЛЕНИЕ: Используем req.ownerId
    if (!req.ownerId) {
      return res.status(401).json({ message: "Неверный токен." });
    }

    // Проверяем, что Twilio и номер WhatsApp настроены
    if (!twilioClient || !process.env.TWILIO_WHATSAPP_FROM_NUMBER) {
      return res.status(500).json({ message: "WhatsApp отправка не настроена. (TWILIO_WHATSAPP_FROM_NUMBER)" });
    }

    const { title, body, recipientIds } = targetedBroadcastSchema.parse(req.body);

    // (Опционально) Создаем запись сообщения (для истории)
    // Можно использовать ту же модель BroadcastMessage
    await prisma.broadcastMessage.create({
      data: { title: `[WhatsApp] ${title}`, body },
    });

    // Получаем клиентов
    const customers = await prisma.customer.findMany({
      where: { id: { in: recipientIds } },
      select: { id: true, phoneNumber: true },
    });

    const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM_NUMBER;

    const deliveries = await Promise.allSettled(
      customers.map(async (c) => {
        if (!c.phoneNumber) {
          return { status: "skipped", to: c.id, reason: "no-phone" };
        }
        
        // Номер получателя должен быть в формате E.164 с префиксом whatsapp:
        const to = `whatsapp:${c.phoneNumber}`;
        
        try {
          await twilioClient.messages.create({
            from: whatsappFrom,
            to: to,
            body: body,
          });
          
          // (Опционально) Можно добавить логику сохранения в MessageDelivery,
          // как в SMS-эндпоинте, если нужна детальная история
          
          return { status: "sent", to: to };
        } catch (waError) {
          console.error(`Failed to send WhatsApp to ${to}:`, waError.message);
          return { status: "failed", to: to, error: waError.message };
        }
      })
    );

    const summary = deliveries.reduce(
      (acc, item) => {
        if (item.status === "fulfilled") {
          const value = item.value;
          if (value.status === "sent") acc.sent += 1;
          else if (value.status === "failed") acc.failed += 1;
          else acc.skipped += 1;
        } else {
          acc.failed += 1;
        }
        return acc;
      },
      { sent: 0, failed: 0, skipped: 0 }
    );

    return res.status(200).json({ message: "Рассылка WhatsApp завершена.", summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Необработанная ошибка /api/owner/broadcast/whatsapp:", error);
    return res.status(500).json({ message: "Ошибка сервера при WhatsApp рассылке." });
  }
});


// ----------------------------------------------------------------
// --- НОВЫЙ ЭНДПОИНТ ДЛЯ EMAIL РАССЫЛКИ (SendGrid) ---
// ----------------------------------------------------------------
app.post("/api/admin/broadcast", authenticateSession, async (req, res) => {
  try {
    // 1. Валидация данных (используем новую схему)
    const { userIds, subject, htmlContent } = emailBroadcastSchema.parse(req.body);
    
    // 2. Получаем email'ы выбранных пользователей
    // (Модель 'customer', как видно из /api/customers)
    const customers = await prisma.customer.findMany({
      where: {
        id: { in: userIds },
      },
      select: {
        email: true // Выбираем только email
      }
    });

    // Отфильтровываем null/undefined/пустые email
    const emails = customers.map(c => c.email).filter(Boolean); 

    if (emails.length === 0) {
      return res.status(404).json({ message: 'Не найдено пользователей с email среди выбранных ID.' });
    }

    // 3. Создаем сообщение для SendGrid
    // 'from' email должен быть тем, что вы верифицировали в SendGrid
    const msg = {
      to: emails, // SendGrid автоматически обработает массив
      from: process.env.SENDGRID_FROM_EMAIL || 'your-verified-email@yourdomain.com', // УКАЖИТЕ ВАШ EMAIL в .env
      subject: subject,
      html: htmlContent, // Используем htmlContent для поддержки HTML
    };

    // 4. Отправляем
    await sgMail.sendMultiple(msg); // Используем sendMultiple для массива

    res.status(200).json({
      message: `Email-рассылка успешно отправлена ${emails.length} пользователям.`
    });

  } catch (error) {
    // Обработка ошибки Zod
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Некорректные данные для email рассылки.", 
        errors: error.flatten() 
      });
    }
    
    // Обработка других ошибок
    console.error('Ошибка при отправке SendGrid рассылки:', error);
    if (error.response) {
        console.error(error.response.body) // Логируем детальный ответ от SendGrid
    }
    res.status(500).json({ message: 'Ошибка сервера при отправке email рассылки.' });
  }
});

app.post("/api/verify-email", async (req, res) => {
  try {
    // 1. Убедитесь, что .trim() здесь есть (как в прошлый раз)
    const { customerId, code } = z.object({
      customerId: z.string(),
      code: z.string()
              .trim() // Убираем пробелы
              .min(6, "Код должен быть 6 цифр")
              .max(6, "Код должен быть 6 цифр"),
    }).parse(req.body);
    
    // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 1) ---
    console.log(`[Verify] Получен запрос на верификацию. CustomerID: ${customerId}, Код: "${code}"`);

    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!customer) {
      console.log(`[Verify] ОШИБКА: Пользователь ${customerId} не найден.`);
      return res.status(404).json({ success: false, message: "Пользователь не найден." });
    }
    if (customer.isEmailVerified) {
      console.log(`[Verify] ОШИБКА: Email ${customer.email} уже подтвержден.`);
      return res.status(400).json({ success: false, message: "Email уже подтвержден." });
    }
    
    // --- НОВОЕ ЛОГГИРОВАНИЕ (Шаг 2) ---
    console.log(`[Verify] Сравнение: Код из запроса ("${code}") vs Код из БД ("${customer.emailVerificationCode}")`);

    if (customer.emailVerificationCode !== code) {
      console.log(`[Verify] ОШИБКА: Коды не совпадают.`);
      return res.status(400).json({ success: false, message: "Неверный код верификации." });
    }

    // Успех!
    console.log(`[Verify] УСПЕХ: Коды совпали. Верифицируем пользователя ${customer.email}.`);
    await prisma.customer.update({
      where: { id: customerId },
      data: {
        isEmailVerified: true,
        emailVerificationCode: null, // Очищаем код
      },
    });

    return res.status(200).json({
      success: true,
      message: "Email успешно подтвержден!",
      discountCode: customer.discountCode,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("[Verify] ОШИБКА: Zod. Код не прошел валидацию (не 6 цифр?).", error.flatten());
      return res.status(400).json({ success: false, message: "Некорректные данные.", errors: error.flatten() });
    }
    console.error("Ошибка в /api/verify-email:", error);
    return res.status(500).json({ success: false, message: "Ошибка сервера при верификации." });
  }
});

// --- КОНЕЦ НОВОГО ЭНДПОИНТА ---

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});