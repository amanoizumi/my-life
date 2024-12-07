// server/utils/ensureDataFile.js
import { writeFile, access } from 'fs/promises';
import { resolve } from 'path';

export async function ensureDataFile() {
  const filePath = resolve('./server/data/books.json');

  try {
    await access(filePath);
  } catch {
    // 如果檔案不存在，建立一個空的 JSON 陣列
    await writeFile(filePath, '[]', 'utf-8');
  }
}
