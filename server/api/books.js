// server/api/books.js
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { ensureDataFile } from '../utils/ensureDataFile';

export default defineEventHandler(async (event) => {
  try {
    await ensureDataFile();
    const filePath = resolve('./server/data/books.json');
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
});
