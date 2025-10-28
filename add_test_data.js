import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function addTestData() {
  try {
    // Добавляем тестового клиента
    const customer = await prisma.customer.create({
      data: {
        firstName: 'Тест',
        lastName: 'Клиент',
        phoneNumber: '+1234567890',
        email: 'test@example.com',
        birthDate: new Date('1990-01-01'),
        city: 'Тестовый город',
        preferredFood: 'sushi',
        feedback: 'Тестовый отзыв',
        country: 'US',
        discountCode: 'TEST123'
      }
    });

    console.log('✅ Тестовый клиент создан:', customer);

    console.log('🎉 Тестовые данные добавлены успешно!');
  } catch (error) {
    console.error('❌ Ошибка при добавлении тестовых данных:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestData();
