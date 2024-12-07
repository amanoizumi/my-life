import { defineNitroTask } from 'nitro/tasks';
import { crawlBooks } from '../utils/crawler';

export default defineNitroTask({
  schedule: '0 7 * * *', // 每天早上 7:00 執行
  async handler() {
    try {
      console.log('===== 爬蟲任務開始 =====');
      console.log('執行時間:', new Date().toLocaleString());

      // 1. 取得所有備份 bins
      const allBinsResponse = await fetch('https://api.jsonbin.io/v3/b', {
        headers: {
          'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
        }
      });
      const allBins = await allBinsResponse.json();

      // 2. 清理超過 14 天的備份
      const fourteenDaysAgo = new Date();
      fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

      // 找出並刪除舊的備份
      const oldBackups = allBins.filter((bin) => {
        if (!bin.name.startsWith('backup-')) return false;
        const backupDate = new Date(bin.name.replace('backup-', ''));
        return backupDate < fourteenDaysAgo;
      });

      for (const backup of oldBackups) {
        await fetch(`https://api.jsonbin.io/v3/b/${backup.id}`, {
          method: 'DELETE',
          headers: {
            'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
          }
        });
        console.log(`已刪除舊備份: ${backup.name}`);
      }
      // 3. 建立今天的備份
      const backupDate = new Date().toISOString().split('T')[0];
      const oldDataResponse = await fetch(
        `https://api.jsonbin.io/v3/b/${process.env.NUXT_JSON_BIN_ID}`,
        {
          headers: {
            'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
          }
        }
      );
      const oldData = await oldDataResponse.json();

      await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY,
          'X-Bin-Name': `backup-${backupDate}`
        },
        body: JSON.stringify(oldData.record)
      });
      console.log('已建立今天的備份');

      // 4. 執行新的爬蟲並更新資料

      console.log('開始爬取新書資料...');
      const books = await crawlBooks();
      console.log(`爬取完成，取得 ${books.length} 本書籍`);

      // 5. 檢查新資料是否合理
      if (books.length === 0) {
        throw new Error('未取得任何書籍資料');
      }

      // 5. 如果新資料正常，更新主要的 bin
      console.log('開始更新主要資料...');

      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${process.env.NUXT_JSON_BIN_ID}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': process.env.NUXT_JSON_BIN_API_KEY
          },
          body: JSON.stringify(books)
        }
      );

      const result = await response.json();

      console.log('JSONbin 回應:', result);
      console.log('資料更新完成');
      console.log('===== 爬蟲任務結束， =====');
    } catch (error) {
      console.error('===== 錯誤報告 =====');
      console.error('錯誤時間:', new Date().toLocaleString());
      console.error('錯誤類型:', error.name);
      console.error('錯誤訊息:', error.message);
      console.error('錯誤堆疊:', error.stack);
      console.error('===================');
    }
  }
});
