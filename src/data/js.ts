import type { Chapter } from './types';

export const jsChapter: Chapter = {
  title: 'JavaScript',
  questions: [
    {
      id: 'js1',
      type: 'tf',
      text: 'JavaScript is considered the programming language of the web.',
      correctAnswer: 'True'
    },
    {
      id: 'js2',
      type: 'tf',
      text: 'Modern JavaScript engines use just-in-time (JIT) compilation, meaning JavaScript is not purely interpreted but is compiled into optimized machine code at runtime.',
      correctAnswer: 'True'
    },
    {
      id: 'js3',
      type: 'tf',
      text: 'JavaScript is strictly a client-side scripting language and is not compatible with server-side environments.',
      correctAnswer: 'False'
    },
    {
      id: 'js4',
      type: 'mcq',
      text: 'Which of the following is FALSE regarding where and how you can write JavaScript?',
      options: [
        'You can execute JavaScript in the browser console.',
        'You can place the <script> tag inside the <body> tag of an HTML document.',
        'You can use an external JavaScript file using the src attribute of the <script> tag.',
        'You must only place the <script> tag inside the <head> tag of an HTML document.'
      ],
      correctAnswer: 'You must only place the <script> tag inside the <head> tag of an HTML document.'
    },
    {
      id: 'js5',
      type: 'mcq',
      text: 'How can you execute a JavaScript file named "file.js" from the terminal?',
      options: [
        'js file.js',
        'node file.js',
        'javascript file.js',
        'There is no way to run it in the terminal; it only runs via web browsers.'
      ],
      correctAnswer: 'node file.js'
    },
    {
      id: 'js6',
      type: 'mcq',
      text: 'How do you write a single-line comment in JavaScript?',
      options: [
        '// this is a single-line comment',
        '/* this is a single-line comment */',
        '<!-- this is a single-line comment -->',
        '# this is a single-line comment'
      ],
      correctAnswer: '// this is a single-line comment'
    },
    {
      id: 'js7',
      type: 'matching',
      text: 'Match the variable declaration keywords with their correct scope behavior:',
      pairs: [
        {
          id: 'p1',
          left: 'var',
          rightOptions: [
            'Accessible within the function it’s declared in',
            'Only accessible within the block it’s declared in'
          ],
          rightCorrect: 'Accessible within the function it’s declared in'
        },
        {
          id: 'p2',
          left: 'let',
          rightOptions: [
            'Accessible within the function it’s declared in',
            'Only accessible within the block it’s declared in'
          ],
          rightCorrect: 'Only accessible within the block it’s declared in'
        }
      ]
    },
    {
      id: 'js8',
      type: 'mcq',
      text: 'What is the data type of the variable foo in the following declaration: let foo;',
      options: ['Null', 'Undefined', 'String', 'Boolean'],
      correctAnswer: 'Undefined'
    },
    {
      id: 'js9',
      type: 'mcq',
      text: 'Given the object: let course = { title: "Web Applications", students: [ {name: "Ali"}, {name: "Ahmed"} ] }; How would you access the name "Ahmed"?',
      options: [
        'course.students.name',
        'course.students[1].name',
        'course.students.name[1]',
        'course[students][1].name'
      ],
      correctAnswer: 'course.students[1].name'
    },
    {
      id: 'js10',
      type: 'tf',
      text: 'In JavaScript, "null" is actually an object, not a primitive data type that represents the intentional absence of any object value.',
      correctAnswer: 'False'
    },
    {
      id: 'js11',
      type: 'mcq',
      text: 'What is the primary difference between the loose equality operator (==) and the strict equality operator (===)?',
      options: [
        '== compares values and types, while === only compares values',
        '== performs type coercion when comparing two values, while === compares values and types without type conversion',
        'There is no difference between them',
        '=== is used to assign values, while == compares them'
      ],
      correctAnswer: '== performs type coercion when comparing two values, while === compares values and types without type conversion'
    },
    {
      id: 'js12',
      type: 'matching',
      text: 'Match the JavaScript array methods with their correct descriptions:',
      pairs: [
        { id: 'p1', left: 'push()', rightOptions: ['Adds elements to the end of an array', 'Removes the last element from an array', 'Joins all elements of an array into a string', 'Returns a new array joined with other array(s)'], rightCorrect: 'Adds elements to the end of an array' },
        { id: 'p2', left: 'pop()', rightOptions: ['Adds elements to the end of an array', 'Removes the last element from an array', 'Joins all elements of an array into a string', 'Returns a new array joined with other array(s)'], rightCorrect: 'Removes the last element from an array' },
        { id: 'p3', left: 'join()', rightOptions: ['Adds elements to the end of an array', 'Removes the last element from an array', 'Joins all elements of an array into a string', 'Returns a new array joined with other array(s)'], rightCorrect: 'Joins all elements of an array into a string' },
        { id: 'p4', left: 'concat()', rightOptions: ['Adds elements to the end of an array', 'Removes the last element from an array', 'Joins all elements of an array into a string', 'Returns a new array joined with other array(s)'], rightCorrect: 'Returns a new array joined with other array(s)' }
      ]
    },
    {
      id: 'js13',
      type: 'matching',
      text: 'Match the following array methods to their operational descriptions:',
      pairs: [
        { id: 'p1', left: 'forEach()', rightOptions: ['Calls a function for each element', 'Sorts the elements of an array in place', 'Reverses the order of the elements', 'Returns the first index of an element'], rightCorrect: 'Calls a function for each element' },
        { id: 'p2', left: 'sort()', rightOptions: ['Calls a function for each element', 'Sorts the elements of an array in place', 'Reverses the order of the elements', 'Returns the first index of an element'], rightCorrect: 'Sorts the elements of an array in place' },
        { id: 'p3', left: 'reverse()', rightOptions: ['Calls a function for each element', 'Sorts the elements of an array in place', 'Reverses the order of the elements', 'Returns the first index of an element'], rightCorrect: 'Reverses the order of the elements' },
        { id: 'p4', left: 'indexOf()', rightOptions: ['Calls a function for each element', 'Sorts the elements of an array in place', 'Reverses the order of the elements', 'Returns the first index of an element'], rightCorrect: 'Returns the first index of an element' }
      ]
    },
    {
      id: 'js14',
      type: 'mcq',
      text: 'What is the resulting output of bigArr in the following code? \nlet smallArr = [1-3]; \nlet bigArr = [...smallArr, 4, 5, 6];',
      options: [
        '[[1-3], 4, 5, 6]',
        '[1, 2, 3, 4, 5, 6]',
        '[1, 2, 3]',
        'Error'
      ],
      correctAnswer: '[1, 2, 3, 4, 5, 6]'
    },
    {
      id: 'js15',
      type: 'mcq',
      text: 'What will be printed to the console given the following code? \nlet fruits = ["apple", "orange", "banana"]; \nconsole.log(...fruits);',
      options: [
        '["apple", "orange", "banana"]',
        'apple orange banana',
        'apple,orange,banana',
        'Error'
      ],
      correctAnswer: 'apple orange banana'
    },
    {
      id: 'js16',
      type: 'mcq',
      text: 'Which of the following represents the correct syntax for the inline conditional (ternary) operator?',
      options: [
        'condition ? exprIfTrue : exprIfFalse',
        'condition : exprIfTrue ? exprIfFalse',
        'exprIfTrue ? condition : exprIfFalse',
        'condition ? exprIfFalse : exprIfTrue'
      ],
      correctAnswer: 'condition ? exprIfTrue : exprIfFalse'
    },
    {
      id: 'js17',
      type: 'tf',
      text: 'The rest parameters syntax (...) allows a function to accept an indefinite number of arguments as an array, and it must be the last argument in a function’s parameter list.',
      correctAnswer: 'True'
    }
  ]
};