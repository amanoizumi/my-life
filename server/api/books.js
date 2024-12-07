// server/api/books.js

export default defineEventHandler(async (event) => {
  try {
    // 從 JSONbin 讀取資料
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.NUXT_JSON_BIN_ID}`,
      {
        headers: {
          'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
        }
      }
    );

    const result = await response.json();

    return result.record; // JSONbin 會把實際資料放在 record 屬性中
  } catch (error) {
    console.log('error', error);
    return [];
  }
});
