import { htmlChapter } from './html';
import { cssChapter } from './css';
import { jsChapter } from './js';
import type { Chapter } from './types';

export const chapters: Record<string, Chapter> = {
  html: htmlChapter,
  css: cssChapter,
  js: jsChapter
};

export * from './types';
