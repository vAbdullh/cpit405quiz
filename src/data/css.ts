import type { Chapter } from './types';

export const cssChapter: Chapter = {
  title: 'CSS Chapter',
  questions: [
    {
      id: 'c1',
      type: 'tf',
      text: 'CSS is used primarily to define the structure of a web page.',
      correctAnswer: 'False'
    },
    {
      id: 'c2',
      type: 'matching',
      text: 'Match the status codes classes with their meaning:',
      pairs: [
        { id: 'p1', left: '2xx', rightOptions: ['Server Error', 'Informational/Success', 'Redirect'], rightCorrect: 'Informational/Success' },
        { id: 'p2', left: '3xx', rightOptions: ['Server Error', 'Informational/Success', 'Redirect'], rightCorrect: 'Redirect' },
        { id: 'p3', left: '5xx', rightOptions: ['Server Error', 'Informational/Success', 'Redirect'], rightCorrect: 'Server Error' }
      ]
    },
    {
      id: 'c3',
      type: 'mcq',
      text: 'Which property is used to change the background color?',
      options: ['color', 'bgcolor', 'background-color'],
      correctAnswer: 'background-color'
    }
  ]
};
