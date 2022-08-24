import { Injectable } from '@angular/core';
import { IQuestion } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  public questionsList: IQuestion[] = [];
  constructor() {}

  get(questionId: number) {
    return this.questionsList.filter(
      (el: IQuestion) => el.id === questionId
    )[0];
  }

  add(question: IQuestion) {
    this.questionsList.push(question);
  }

  remove(questionId: number) {
    this.questionsList = this.questionsList.filter(
      (q: IQuestion) => q.id !== questionId
    );
  }

  update(question: IQuestion) {
    const index = this.questionsList
      .map((el: IQuestion) => el.id)
      .indexOf(question.id);

    this.questionsList[index] = question;
  }
}
