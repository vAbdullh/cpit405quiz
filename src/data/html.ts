import type { Chapter } from './types';

export const htmlChapter: Chapter = {
  title: 'HTML Chapter',
  questions: [
    {
      id: 'h1',
      type: 'mcq',
      text: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tabular Markup Language'],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      id: 'h2',
      type: 'matching',
      text: 'Match the HTML tags with their core meaning:',
      pairs: [
        { id: 'p1', left: '<a>', rightOptions: ['Paragraph', 'Anchor/Link', 'Image'], rightCorrect: 'Anchor/Link' },
        { id: 'p2', left: '<img>', rightOptions: ['Paragraph', 'Anchor/Link', 'Image'], rightCorrect: 'Image' },
        { id: 'p3', left: '<p>', rightOptions: ['Paragraph', 'Anchor/Link', 'Image'], rightCorrect: 'Paragraph' }
      ]
    },
    {
      id: 'h3',
      type: 'tf',
      text: 'HTML tags are case-sensitive.',
      correctAnswer: 'False'
    }
  ]
};
