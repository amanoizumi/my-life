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
    // 修改 JSONbin
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.NUXT_JSON_BIN_ID}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
          // 'X-Collection-Id': process.env.NUXT_JSON_BIN_COLLECTION_ID
        },
        body: JSON.stringify(books)
      }
    );

    const result = await response.json();

    return {
      success: true,
      message: `成功儲存 ${books.length} 本書籍資料`,
      binId: result.metadata.id // 儲存 bin ID 以便之後讀取
    };
  } catch (error) {
    console.error('爬蟲失敗:', error);
    return {
      success: false,
      error: error.message
    };
  }
});
