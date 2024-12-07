// server/utils/crawler.js
import axios from 'axios';
import { load } from 'cheerio';

export async function crawlBooks() {
  try {
    const books = [];
    const url = 'https://www.books.com.tw/web/books_nbtopm_16';

    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    const { data } = await axios.get(url, { headers });
    const $ = load(data);

    $('.wrap .item').each((_, element) => {
      const $el = $(element);

      // 取得書名
      const title = $el.find('h4 a').text().trim();

      // 取得出版日期
      const publishInfo = $el.find('.list .info span').text();
      console.log('publishInfo', publishInfo);
      const publishDate = publishInfo.split('：')[1]?.trim() || '';
      // 取得價格
      const priceText = $el.find('.price .set2 strong:last').text();
      const price = parseInt(priceText, 10) || 0;

      if (title) {
        books.push({
          title,
          publishDate,
          price
        });
      }
    });

    console.log(`成功爬取 ${books.length} 本書籍資料`);
    return books;
  } catch (error) {
    console.error('爬蟲錯誤:', error);
    return [];
  }
}
