const fs = require('fs');
const path = require('path');

// Переводы для phoneTooShort на разные языки
const translations = {
  'af.json': 'Voer asseblief \'n volledige telefoonnommer in',
  'am.json': 'እባክዎ ሙሉ ስልክ ቁጥር ያስገቡ',
  'ar-dz.json': 'يرجى إدخال رقم هاتف كامل',
  'ar-eg.json': 'يرجى إدخال رقم هاتف كامل',
  'ar-ma.json': 'يرجى إدخال رقم هاتف كامل',
  'ar.json': 'يرجى إدخال رقم هاتف كامل',
  'az.json': 'Zəhmət olmasa tam telefon nömrəsi daxil edin',
  'be.json': 'Калі ласка, увядзіце поўны нумар тэлефона',
  'bg.json': 'Моля, въведете пълен телефонен номер',
  'bs.json': 'Molimo unesite potpuni broj telefona',
  'ca.json': 'Si us plau, introduïu un número de telèfon complet',
  'cs.json': 'Zadejte prosím kompletní telefonní číslo',
  'cy.json': 'Rhowch rif ffôn llawn os gwelwch yn dda',
  'da.json': 'Indtast venligst et komplet telefonnummer',
  'el.json': 'Παρακαλώ εισάγετε έναν πλήρη αριθμό τηλεφώνου',
  'en-au.json': 'Please enter a complete phone number',
  'en-nz.json': 'Please enter a complete phone number',
  'en-us.json': 'Please enter a complete phone number',
  'et.json': 'Palun sisestage täielik telefoninumber',
  'fa.json': 'لطفاً شماره تلفن کامل را وارد کنید',
  'fi.json': 'Anna täydellinen puhelinnumero',
  'fo.json': 'Vinarliga, skrivað eitt fullt telefonnummar',
  'fr-ca.json': 'Veuillez saisir un numéro de téléphone complet',
  'ga.json': 'Cuir isteach uimhir theileafóin iomlán le do thoil',
  'hi.json': 'कृपया एक पूर्ण फोन नंबर दर्ज करें',
  'hr.json': 'Molimo unesite potpuni broj telefona',
  'hu.json': 'Kérjük, adjon meg egy teljes telefonszámot',
  'hy.json': 'Խնդրում ենք մուտքագրել ամբողջական հեռախոսահամար',
  'id.json': 'Silakan masukkan nomor telepon lengkap',
  'is.json': 'Vinsamlegast sláðu inn fullt símanúmer',
  'ja.json': '完全な電話番号を入力してください',
  'ka.json': 'გთხოვთ შეიყვანოთ სრული ტელეფონის ნომერი',
  'kk.json': 'Толық телефон нөмірін енгізіңіз',
  'ko.json': '전체 전화번호를 입력해 주세요',
  'ky.json': 'Толук телефон номурун киргизиңиз',
  'lb.json': 'Gitt w.e.g. eng komplett Telefonsnummer an',
  'lt.json': 'Įveskite pilną telefono numerį',
  'lv.json': 'Lūdzu, ievadiet pilnu tālruņa numuru',
  'me.json': 'Molimo unesite potpuni broj telefona',
  'mi.json': 'Tēnā koa, whakauruhia he nama waea katoa',
  'mk.json': 'Ве молиме внесете целосен телефонски број',
  'ms.json': 'Sila masukkan nombor telefon yang lengkap',
  'mt.json': 'Jekk jogħġbok daħħal numru tat-telefon sħiħ',
  'no.json': 'Vennligst skriv inn et fullstendig telefonnummer',
  'pl.json': 'Proszę wprowadzić pełny numer telefonu',
  'pt-br.json': 'Por favor, insira um número de telefone completo',
  'ro.json': 'Vă rugăm să introduceți un număr de telefon complet',
  'sk.json': 'Zadajte prosím kompletné telefónne číslo',
  'sl.json': 'Prosimo, vnesite polno telefonsko številko',
  'so.json': 'Fadlan geli lambarka telefoonka oo dhan',
  'sq.json': 'Ju lutemi vendosni një numër telefoni të plotë',
  'sr.json': 'Молимо унесите потпуни број телефона',
  'sv.json': 'Vänligen ange ett komplett telefonnummer',
  'th.json': 'กรุณาใส่หมายเลขโทรศัพท์ที่สมบูรณ์',
  'tk.json': 'Doly telefon belgisini giriziň',
  'tr.json': 'Lütfen tam bir telefon numarası girin',
  'uk.json': 'Будь ласка, введіть повний номер телефону',
  'ur.json': 'براہ کرم مکمل فون نمبر درج کریں',
  'uz.json': 'Iltimos, to\'liq telefon raqamini kiriting',
  'vi.json': 'Vui lòng nhập số điện thoại đầy đủ',
  'zh.json': '请输入完整的电话号码'
};

// Функция для добавления перевода в файл
function addTranslationToFile(filePath, translation) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Проверяем, есть ли уже секция errors
    if (!data.registration) {
      data.registration = {};
    }
    if (!data.registration.errors) {
      data.registration.errors = {};
    }
    
    // Добавляем перевод
    data.registration.errors.phoneTooShort = translation;
    
    // Записываем обратно
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Added translation to ${filePath}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Обрабатываем все файлы
const localesDir = 'frontend/src/i18n/locales';

Object.entries(translations).forEach(([filename, translation]) => {
  const filePath = path.join(localesDir, filename);
  if (fs.existsSync(filePath)) {
    addTranslationToFile(filePath, translation);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('🎉 All translations added successfully!');