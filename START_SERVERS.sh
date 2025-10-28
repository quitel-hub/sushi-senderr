#!/bin/bash

echo "🍣 Запуск серверов SUSHI ICON..."
echo ""

# Получаем директорию скрипта
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Останавливаем старые процессы
echo "🛑 Остановка старых процессов..."
pkill -f "node.*server.js" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true
sleep 2

# Запускаем Backend
echo "🚀 Запуск Backend на http://localhost:3000..."
cd "$DIR"
npm start > backend.log 2>&1 &
BACKEND_PID=$!
echo "   Backend PID: $BACKEND_PID"
sleep 3

# Проверяем Backend
if curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "   ✅ Backend работает!"
else
    echo "   ❌ Ошибка запуска Backend. Проверьте backend.log"
    exit 1
fi

# Запускаем Frontend
echo "🚀 Запуск Frontend на http://localhost:5190..."
cd "$DIR/frontend"
npm run dev > frontend.log 2>&1 &
FRONTEND_PID=$!
echo "   Frontend PID: $FRONTEND_PID"
echo "   ⏳ Frontend запускается (обычно занимает 10-15 секунд)..."
sleep 10

# Проверяем Frontend
if curl -s http://localhost:5190 > /dev/null 2>&1; then
    echo "   ✅ Frontend работает!"
else
    echo "   ⏳ Frontend еще запускается, подождите еще немного..."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Серверы запущены!"
echo ""
echo "📍 Адреса:"
echo "   • Frontend (сайт):  http://localhost:5190"
echo "   • Backend (API):    http://localhost:3000"
echo ""
echo "👤 Данные администратора:"
echo "   • Email:       sushi.master.admin.2024@secure-icon.com"
echo "   • Access Code: SUSHI-MASTER-2024-X9K7"
echo "   • Password:    SushiMaster2024!@#\$%^&*()_+{}|:<>?[]\\;',./"
echo ""
echo "📊 Логи:"
echo "   • Backend:  tail -f $DIR/backend.log"
echo "   • Frontend: tail -f $DIR/frontend/frontend.log"
echo ""
echo "🛑 Чтобы остановить серверы:"
echo "   pkill -f 'node.*server.js'"
echo "   pkill -f 'vite'"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Откройте в браузере: http://localhost:5190"
echo ""

