// server/api/crawl.js
import { crawlBooks } from '../utils/crawler';

export default defineEventHandler(async (event) => {
  try {
    // 爬取資料
    const books = await crawlBooks();

    // 確保有爬到資料
    if (books.length === 0) {
      throw new Error('未取得任何書籍資料');
    }

    // 寫入 JSON 檔案

    return {
      success: true,
      message: `成功取得 ${books.length} 本書籍資料`,
      books
    };
  } catch (error) {
    console.error('爬蟲失敗:', error);
    return {
      success: false,
      error: error.message
    };
  }
});
