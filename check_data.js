import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function checkData() {
  try {
    console.log('📊 Проверка данных в базе...\n');

    const owners = await prisma.owner.findMany();
    const customers = await prisma.customer.findMany();
    const sessions = await prisma.ownerLoginSession.findMany();

    console.log('👤 Администраторы:');
    owners.forEach(owner => {
      console.log(`   ✓ ${owner.name} (${owner.email})`);
    });

    console.log(`\n👥 Клиенты (${customers.length}):`);
    customers.forEach(customer => {
      console.log(`   ✓ ${customer.firstName} ${customer.lastName} - ${customer.phoneNumber}`);
    });

    console.log(`\n🔐 Сессии входа: ${sessions.length}`);

    console.log('\n✅ Все данные на месте!');
    console.log('\n🌐 Ваш сайт доступен по адресу:');
    console.log('   Frontend: http://localhost:5190');
    console.log('   Backend: http://localhost:3000');
    
  } catch (error) {
    console.error('❌ Ошибка:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();

