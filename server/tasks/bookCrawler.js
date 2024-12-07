import { defineNitroTask } from 'nitro/tasks';
import { PrismaClient } from '@prisma/client';
import { crawlBooks } from '../utils/crawler';

const prisma = new PrismaClient();

export default defineNitroTask({
  schedule: '0 0 * * *', // 每天午夜執行
  async handler() {
    try {
      console.log('開始爬取新書資料...');
      const books = await crawlBooks();

      if (books.length === 0) {
        throw new Error('未取得任何書籍資料');
      }

      // 批量處理資料
      const results = await Promise.allSettled(
        books.map((book) =>
          prisma.book.upsert({
            where: { isbn: book.isbn },
            update: book,
            create: book
          })
        )
      );

      const successCount = results.filter(
        (r) => r.status === 'fulfilled'
      ).length;
      console.log(`成功處理 ${successCount}/${books.length} 本書籍資料`);
    } catch (error) {
      console.error('爬蟲任務執行失敗:', error);
    }
  }
});
