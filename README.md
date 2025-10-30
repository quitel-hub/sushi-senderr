# 🍣 Sushi Icon Promo System

Full-stack web application for restaurant customer registration with automatic promo code generation and comprehensive admin dashboard.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)

## ✨ Features

### Customer Features
- 📝 **Customer Registration** - Easy registration form with validation
- 🎟️ **Auto Promo Code Generation** - Unique discount codes (RC10-XXXXXX)
- 🏠 **Address Validation** - Netherlands postal code validation
- 🌍 **Multilingual Support** - 71 languages supported
- 💾 **Auto-save Drafts** - Form data saved to database automatically

### Admin Features
- 📊 **Real-time Dashboard** - Live data synchronization every second
- 👥 **Customer Management** - View all customers with complete details
- 📈 **Statistics** - Today, week, month, year registration stats
- 🔄 **Draft Monitoring** - See who's filling forms in real-time
- 📤 **Data Export** - Export to CSV and JSON
- 🔐 **Secure Login** - Admin authentication with device tracking
- ← → **Scrollable Table** - View all 15 columns with horizontal scroll

### Data Management
- 💾 **Persistent Storage** - All data saved to SQLite database
- 🔄 **Draft Recovery** - Forms persist even after page reload
- 📊 **15 Data Columns** - ID, Name, Phone, Email, Address, Promo Code, etc.
- 🕐 **Auto-cleanup** - Old drafts removed after 1 hour

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Prisma** - ORM
- **SQLite** - Database
- **Zod** - Validation

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/kkrasnova/sushi-icon-promo.git
cd sushi-icon-promo
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

4. **Set up the database**
```bash
npx prisma migrate dev
```

5. **Initialize test data (optional)**
```bash
node init_database.js
```

## 🚀 Running the Application

### Start Backend (Terminal 1)
```bash
npm start
```
Backend will run on http://localhost:3000

### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5190

### Or use the startup script
```bash
./START_SERVERS.sh
```

## 🔐 Admin Login

Access the admin panel by clicking the ⚙️ button in the top-right corner.

**Credentials:**
- **Email**: `sushi.master.admin.2024@secure-icon.com`
- **Access Code**: `SUSHI-MASTER-2024-X9K7`
- **Password**: `SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;',./`

## 📊 Database Schema

### Customer Model
- Personal info (name, phone, email, birthdate)
- Address (country, city, street, house number, postal code)
- Preferences and feedback
- Unique discount code
- Registration timestamp

### FormDraft Model
- All customer fields (nullable)
- Auto-saved every second
- Cleaned up after 1 hour

### Owner Model
- Admin authentication
- Login session tracking

### OwnerLoginSession Model
- Device information
- Location tracking
- Browser and OS details
- Success/failure tracking

## 📁 Project Structure

```
sushi-icon-promo/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── i18n/           # Translations (71 languages)
│   │   ├── data/           # Postal code data
│   │   └── App.tsx         # Main app component
│   └── package.json
├── prisma/                  # Database
│   ├── schema.prisma       # Database schema
│   ├── migrations/         # Migration history
│   └── dev.db             # SQLite database
├── server.js               # Express backend
├── package.json
└── START_SERVERS.sh        # Startup script
```

## 🌍 Supported Languages

Arabic, Armenian, Bulgarian, Chinese, Czech, Danish, Dutch, English, Finnish, French, German, Greek, Hebrew, Hindi, Hungarian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Romanian, Russian, Spanish, Swedish, Thai, Turkish, Ukrainian, Vietnamese, and many more...

## 📤 Export Features

- **CSV Export** - Download customer data as CSV
- **JSON Export** - Get structured JSON data
- **Full Address** - Complete address in single field
- **Date Formatting** - Russian locale date format

## 🔒 Security Features

- Admin authentication required
- Session tracking with device info
- Failed login attempt logging
- IP address tracking
- Secure password storage

## 🎨 UI Features

- **Responsive Design** - Works on all devices
- **Real-time Updates** - Table updates every second
- **Horizontal Scroll** - View all columns easily
- **Status Indicators** - Visual feedback for draft/completed
- **Modern UI** - Clean, professional interface

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 👤 Author

**Anastasia Krasnova**
- GitHub: [@kkrasnova](https://github.com/kkrasnova)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ for Sushi Icon Restaurant

.env file
TWILIO_ACCOUNT_SID=AC4c64739b8103027493baef5821d96eb4
TWILIO_AUTH_TOKEN=41cf7b310f781b709f7f8d2b4e8c2b08
TWILIO_MESSAGING_SERVICE_SID=MG65c13efcbd4f70cdacc132e6248ddb7f
TWILIO_WHATSAPP_FROM_NUMBER=whatsapp:+14155238886
DATABASE_URL="file:./prisma/dev.db"
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=465
SMTP_USER=apikey
SMTP_PASS='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'
SMTP_FROM='karpenko.k.a.07@gmail.com'
SENDGRID_API_KEY='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'
NODE_ENV='development'
SENDGRID_FROM_EMAIL='karpenko.k.a.07@gmail.com'


