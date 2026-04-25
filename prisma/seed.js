require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    console.log("No users found. Please log in via the browser first to create a user account.");
    return;
  }
  
  const userId = users[0].id;
  
  console.log(`Seeding transactions for user: ${users[0].name || userId}`);
  
  // Clear old dummy transactions for this user
  await prisma.transaction.deleteMany({
    where: { userId }
  });

  const transactions = [
    { userId, type: 'receive', asset: 'ETH', amount: 2.45, usdValue: 8341.20, status: 'completed' },
    { userId, type: 'send', asset: 'BTC', amount: 0.12, usdValue: 5120.50, status: 'completed' },
    { userId, type: 'swap', asset: 'SOL', amount: 145.00, usdValue: 12450.00, status: 'pending' },
    { userId, type: 'receive', asset: 'USDT', amount: 1500.00, usdValue: 1500.00, status: 'completed' },
  ];

  for (const tx of transactions) {
    await prisma.transaction.create({ data: tx });
  }
  
  console.log("Seed completed successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
