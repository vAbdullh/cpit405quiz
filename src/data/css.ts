import type { Chapter } from './types';

export const cssChapter: Chapter = {
  title: 'CSS Chapter',
  questions: [
    {
      id: 'c1',
      type: 'mcq',
      text: 'What is the primary definition and purpose of CSS?',
      options: [
        'A declarative language used to define the presentation, layout, and visual styling of structured web documents',
        'A markup language responsible for structuring and organizing content in web pages',
        'A scripting language used to create dynamic behavior and interactivity in web applications',
        'A protocol that enables communication between web clients and servers'
      ],
      correctAnswer: 'A declarative language used to define the presentation, layout, and visual styling of structured web documents'
    },
    {
      id: 'c2',
      type: 'tf',
      text: 'CSS is designed to support the principle of separation of content and presentation, meaning HTML structures the content while CSS handles the styling.',
      correctAnswer: 'True'
    },
    {
      id: 'c3',
      type: 'mcq',
      text: 'What is the "cascade" in CSS?',
      options: [
        'The algorithm used to resolve conflicts when multiple CSS rules apply to a single HTML element',
        'The method used to position floating elements next to each other',
        'A framework used for structuring web pages'
      ],
      correctAnswer: 'The algorithm used to resolve conflicts when multiple CSS rules apply to a single HTML element'
    },
    {
      id: 'c4',
      type: 'matching',
      text: 'Match the three main ways to apply CSS to an HTML document with their correct definition:',
      pairs: [
        {
          id: 'p1',
          left: 'External CSS',
          rightOptions: [
            'Defined within the <link> element to link an external resource',
            'Defined within the <style> element inside the <head> section',
            'Defined within a single HTML element using the HTML attribute style'
          ],
          rightCorrect: 'Defined within the <link> element to link an external resource'
        },
        {
          id: 'p2',
          left: 'Internal CSS',
          rightOptions: [
            'Defined within the <link> element to link an external resource',
            'Defined within the <style> element inside the <head> section',
            'Defined within a single HTML element using the HTML attribute style'
          ],
          rightCorrect: 'Defined within the <style> element inside the <head> section'
        },
        {
          id: 'p3',
          left: 'Inline CSS',
          rightOptions: [
            'Defined within the <link> element to link an external resource',
            'Defined within the <style> element inside the <head> section',
            'Defined within a single HTML element using the HTML attribute style'
          ],
          rightCorrect: 'Defined within a single HTML element using the HTML attribute style'
        }
      ]
    },
    {
      id: 'c5',
      type: 'mcq',
      text: 'When there is more than one style defined in an HTML document, which of the following takes the highest priority?',
      options: [
        'External style sheets',
        'Internal style sheets',
        'Inline style',
        'Browser default style'
      ],
      correctAnswer: 'Inline style'
    },
    {
      id: 'c6',
      type: 'mcq',
      text: 'How do you conditionally load an external stylesheet specifically for print preview and printing?',
      options: [
        '<link rel="stylesheet" href="print.css" media="print">',
        '<style media="print">',
        '<link rel="stylesheet" href="print.css" type="print">',
        '<style type="print">'
      ],
      correctAnswer: '<link rel="stylesheet" href="print.css" media="print">'
    },
    {
      id: 'c7',
      type: 'matching',
      text: 'Match the CSS Selectors with their correct syntax:',
      pairs: [
        { id: 'p1', left: 'Universal Selector', rightOptions: ['*', '.tag', '#root', 'element[something=name]'], rightCorrect: '*' },
        { id: 'p2', left: 'Class Selector', rightOptions: ['*', '.tag', '#root', 'element[something=name]'], rightCorrect: '.tag' },
        { id: 'p3', left: 'ID Selector', rightOptions: ['*', '.tag', '#root', 'element[something=name]'], rightCorrect: '#root' },
        { id: 'p4', left: 'Attribute Selector', rightOptions: ['*', '.tag', '#root', 'element[something=name]'], rightCorrect: 'element[something=name]' }
      ]
    },
    {
      id: 'c8',
      type: 'matching',
      text: 'Match the common CSS Pseudo-classes with their correct triggers or states:',
      pairs: [
        { id: 'p1', left: ':hover', rightOptions: ['Matches when the mouse pointer is over an element', 'Matches links that have been visited', 'Matches when an element has received focus', 'Matches an element that is the first of its siblings'], rightCorrect: 'Matches when the mouse pointer is over an element' },
        { id: 'p2', left: ':visited', rightOptions: ['Matches when the mouse pointer is over an element', 'Matches links that have been visited', 'Matches when an element has received focus', 'Matches an element that is the first of its siblings'], rightCorrect: 'Matches links that have been visited' },
        { id: 'p3', left: ':focus', rightOptions: ['Matches when the mouse pointer is over an element', 'Matches links that have been visited', 'Matches when an element has received focus', 'Matches an element that is the first of its siblings'], rightCorrect: 'Matches when an element has received focus' },
        { id: 'p4', left: ':first-child', rightOptions: ['Matches when the mouse pointer is over an element', 'Matches links that have been visited', 'Matches when an element has received focus', 'Matches an element that is the first of its siblings'], rightCorrect: 'Matches an element that is the first of its siblings' }
      ]
    },
    {
      id: 'c9',
      type: 'matching',
      text: 'Match the CSS Box Model components to their definitions:',
      pairs: [
        { id: 'p1', left: 'Margin', rightOptions: ['The space around the border', 'The line that goes around the element', 'Space between the content and the border', 'The actual content of the element'], rightCorrect: 'The space around the border' },
        { id: 'p2', left: 'Border', rightOptions: ['The space around the border', 'The line that goes around the element', 'Space between the content and the border', 'The actual content of the element'], rightCorrect: 'The line that goes around the element' },
        { id: 'p3', left: 'Padding', rightOptions: ['The space around the border', 'The line that goes around the element', 'Space between the content and the border', 'The actual content of the element'], rightCorrect: 'Space between the content and the border' },
        { id: 'p4', left: 'Content', rightOptions: ['The space around the border', 'The line that goes around the element', 'Space between the content and the border', 'The actual content of the element'], rightCorrect: 'The actual content of the element' }
      ]
    },
    {
      id: 'c10',
      type: 'matching',
      text: 'Match the relative CSS units with their correct behavior:',
      pairs: [
        { id: 'p1', left: 'em', rightOptions: ['Relative to the font size of the current element or its parent', 'Relative to the font size of the root element', 'Relative to the size of the parent element'], rightCorrect: 'Relative to the font size of the current element or its parent' },
        { id: 'p2', left: 'rem', rightOptions: ['Relative to the font size of the current element or its parent', 'Relative to the font size of the root element', 'Relative to the size of the parent element'], rightCorrect: 'Relative to the font size of the root element' },
        { id: 'p3', left: '% (Percentages)', rightOptions: ['Relative to the font size of the current element or its parent', 'Relative to the font size of the root element', 'Relative to the size of the parent element'], rightCorrect: 'Relative to the size of the parent element' }
      ]
    },
    {
      id: 'c11',
      type: 'tf',
      text: 'The "display" property (e.g., none) removes an element completely from the layout, while the "visibility" property (e.g., hidden) hides the element but keeps its space on the page.',
      correctAnswer: 'True'
    },
    {
      id: 'c12',
      type: 'mcq',
      text: 'Given the following code, what color will the paragraph text be? <style> #content{color: blue;} .article{color: green;} p{color: red;} </style> <p id="content" class="article">What is my font color?</p>',
      options: ['Blue', 'Green', 'Red', 'Black'],
      correctAnswer: 'Blue'
    },
    {
      id: 'c13',
      type: 'mcq',
      text: 'What is Flexbox in CSS?',
      options: [
        'A one-dimensional layout model for distributing space between items',
        'A two-dimensional layout model for handling both rows and columns simultaneously',
        'A method exclusively used for floating elements to the left or right'
      ],
      correctAnswer: 'A one-dimensional layout model for distributing space between items'
    },
    {
      id: 'c14',
      type: 'mcq',
      text: 'In a Flexbox container, which property is used to distribute space around the flex items along the main axis?',
      options: ['align-items', 'justify-content', 'flex-direction', 'display'],
      correctAnswer: 'justify-content'
    },
    {
      id: 'c15',
      type: 'mcq',
      text: 'In a Flexbox container, which property is used to align the flex items along the cross axis (vertically)?',
      options: ['align-items', 'justify-content', 'flex-direction', 'display'],
      correctAnswer: 'align-items'
    },
    {
      id: 'c16',
      type: 'mcq',
      text: 'Alongside Flexbox, which other layout model is mentioned as a technique for creating responsive CSS layouts?',
      options: ['Grid Layout', 'Table Layout', 'Frame Layout', 'Absolute Layout'],
      correctAnswer: 'Grid Layout'
    }
  ]
};
