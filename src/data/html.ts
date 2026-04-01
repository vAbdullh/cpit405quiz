import type { Chapter } from './types';

export const htmlChapter: Chapter = {
  title: 'HTML Chapter',
 "questions": [
    {
      "id": "q1",
      "type": "matching",
      "text": "Match the term to its correct definition regarding internet resource identifiers.",
      "pairs": [
        {
          "id": "p1",
          "left": "URL",
          "rightOptions": [
            "A reference (an address) to a resource on the internet specifying a location",
            "A broader concept that includes identifiers used to name resources but does not necessarily specify a location"
          ],
          "rightCorrect": "A reference (an address) to a resource on the internet specifying a location"
        },
        {
          "id": "p2",
          "left": "URI",
          "rightOptions": [
            "A reference (an address) to a resource on the internet specifying a location",
            "A broader concept that includes identifiers used to name resources but does not necessarily specify a location"
          ],
          "rightCorrect": "A broader concept that includes identifiers used to name resources but does not necessarily specify a location"
        }
      ]
    },
    {
      "id": "q2",
      "type": "mcq",
      "text": "Which of the following is an example of a URI that is NOT a URL because it identifies a resource without specifying a location?",
      "options": [
        "https://www.google.com",
        "mailto:example@example.com",
        "http://example.com/favicon.ico"
      ],
      "correctAnswer": "mailto:example@example.com"
    },
    {
      "id": "q3",
      "type": "matching",
      "text": "Match the URL components with their correct examples.",
      "pairs": [
        {
          "id": "p1",
          "left": "Protocol",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "https"
        },
        {
          "id": "p2",
          "left": "Domain Name",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "example.com"
        },
        {
          "id": "p3",
          "left": "Port",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "443"
        },
        {
          "id": "p4",
          "left": "Path",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "/favicon.ico"
        },
        {
          "id": "p5",
          "left": "Query String",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "?q=cat"
        },
        {
          "id": "p6",
          "left": "Fragment",
          "rightOptions": ["https", "example.com", "443", "/favicon.ico", "?q=cat", "#History"],
          "rightCorrect": "#History"
        }
      ]
    },
    {
      "id": "q4",
      "type": "matching",
      "text": "Match the HTTP status code classes with their correct meaning.",
      "pairs": [
        {
          "id": "p1",
          "left": "1xx",
          "rightOptions": ["Informational", "Successful", "Redirection", "Client Error", "Server Error"],
          "rightCorrect": "Informational"
        },
        {
          "id": "p2",
          "left": "2xx",
          "rightOptions": ["Informational", "Successful", "Redirection", "Client Error", "Server Error"],
          "rightCorrect": "Successful"
        },
        {
          "id": "p3",
          "left": "3xx",
          "rightOptions": ["Informational", "Successful", "Redirection", "Client Error", "Server Error"],
          "rightCorrect": "Redirection"
        },
        {
          "id": "p4",
          "left": "4xx",
          "rightOptions": ["Informational", "Successful", "Redirection", "Client Error", "Server Error"],
          "rightCorrect": "Client Error"
        },
        {
          "id": "p5",
          "left": "5xx",
          "rightOptions": ["Informational", "Successful", "Redirection", "Client Error", "Server Error"],
          "rightCorrect": "Server Error"
        }
      ]
    },
    {
      "id": "q5",
      "type": "mcq",
      "text": "What does a 404 HTTP status code mean?",
      "options": [
        "Internal Server Error",
        "Bad Request",
        "Unauthorized",
        "Not Found"
      ],
      "correctAnswer": "Not Found"
    },
    {
      "id": "q6",
      "type": "matching",
      "text": "Match the HTTP methods with their intended action.",
      "pairs": [
        {
          "id": "p1",
          "left": "GET",
          "rightOptions": ["Retrieves data from a resource", "Creates a new resource", "Updates an existing resource completely", "Deletes a resource"],
          "rightCorrect": "Retrieves data from a resource"
        },
        {
          "id": "p2",
          "left": "POST",
          "rightOptions": ["Retrieves data from a resource", "Creates a new resource", "Updates an existing resource completely", "Deletes a resource"],
          "rightCorrect": "Creates a new resource"
        },
        {
          "id": "p3",
          "left": "PUT",
          "rightOptions": ["Retrieves data from a resource", "Creates a new resource", "Updates an existing resource completely", "Deletes a resource"],
          "rightCorrect": "Updates an existing resource completely"
        },
        {
          "id": "p4",
          "left": "DELETE",
          "rightOptions": ["Retrieves data from a resource", "Creates a new resource", "Updates an existing resource completely", "Deletes a resource"],
          "rightCorrect": "Deletes a resource"
        }
      ]
    },
    {
      "id": "q7",
      "type": "mcq",
      "text": "Which common HTTP header indicates the media type of the resource in the body of the request (e.g., application/json)?",
      "options": [
        "Authorization",
        "Content-Type",
        "User-Agent",
        "Cookie"
      ],
      "correctAnswer": "Content-Type"
    },
    {
      "id": "q8",
      "type": "tf",
      "text": "All HTTP requests must contain an HTTP body.",
      "correctAnswer": "False"
    },
    {
      "id": "q9",
      "type": "mcq",
      "text": "Which of the following is a characteristic of a dynamic website?",
      "options": [
        "Delivers the exact same content to every user as it's stored",
        "Built using only HTML, CSS, and JavaScript without server-side processing",
        "Generates content in real-time using server-side languages like PHP or Node.js",
        "Best suited for content that doesn't change frequently"
      ],
      "correctAnswer": "Generates content in real-time using server-side languages like PHP or Node.js"
    },
    {
      "id": "q10",
      "type": "tf",
      "text": "Static websites are generally faster and cheaper to host because they require less server resources.",
      "correctAnswer": "True"
    },
    {
      "id": "q11",
      "type": "mcq",
      "text": "In the three-tier web application architecture, which tier is responsible for handling the business logic of the application?",
      "options": [
        "Presentation Tier (front-end)",
        "Application Tier (back-end)",
        "Data Tier (Database Server)",
        "Physical Tier"
      ],
      "correctAnswer": "Application Tier (back-end)"
    },
    {
      "id": "q12",
      "type": "tf",
      "text": "JSON is considered the modern de facto data exchange format for the web.",
      "correctAnswer": "True"
    }
  ]
};
