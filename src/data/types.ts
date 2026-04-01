export type QuestionType = 'mcq' | 'tf' | 'matching';

export interface BaseQuestion {
  id: string;
  text: string;
  type: QuestionType;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  options: string[];
  correctAnswer: string;
}

export interface TFQuestion extends BaseQuestion {
  type: 'tf';
  correctAnswer: 'True' | 'False';
}

export interface MatchingPair {
  id: string;
  left: string;
  rightOptions: string[];
  rightCorrect: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: MatchingPair[];
}

export type Question = MCQQuestion | TFQuestion | MatchingQuestion;

export interface Chapter {
  title: string;
  questions: Question[];
}
