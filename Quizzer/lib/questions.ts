export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type QuizSet = {
  id: number;
  name: string;
  description: string;
  questions: Question[];
};

export const quizSets: QuizSet[] = [
  {
    id: 1,
    name: "Web Fundamentals",
    description: "Basic concepts of web development",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Logic",
          "Home Tool Markup Language"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which programming language runs in web browsers?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: 2
      },
      // Add 8 more questions for this set
    ]
  },
  {
    id: 2,
    name: "Programming Basics",
    description: "Fundamental programming concepts",
    questions: [
      {
        id: 1,
        question: "What is a variable?",
        options: [
          "A container for storing data values",
          "A mathematical equation",
          "A type of function",
          "A programming language"
        ],
        correctAnswer: 0
      },
      // Add 9 more questions
    ]
  },
  // Add 8 more sets with 10 questions each
];