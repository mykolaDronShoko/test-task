export interface IQuestion {
  id: number;
  text: string;
  type: QuestionType;
  date: Date;
  isAnswered: boolean;
  options: IQuestionOption[];
  answer: string | number;
  lastUpdated?: Date;
}

export interface IQuestionOption {
  value: number;
  checked: boolean;
}

export enum QuestionType {
  Single,
  Multiple,
  Open,
}
