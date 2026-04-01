import { htmlChapter } from './html';
import { cssChapter } from './css';
import type { Chapter } from './types';

export const chapters: Record<string, Chapter> = {
  html: htmlChapter,
  css: cssChapter
};

export * from './types';
