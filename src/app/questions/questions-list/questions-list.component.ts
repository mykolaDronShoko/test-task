import { Component, OnInit } from '@angular/core';
import {
  IQuestion,
  IQuestionOption,
  QuestionType,
} from 'src/app/core/models/question.model';
import { QuestionsService } from 'src/app/core/services/questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnInit {
  constructor(public _questionsService: QuestionsService) {}

  ngOnInit(): void {}
  questionTypes = QuestionType;

  getUnansweredQuestions() {
    return this._questionsService.questionsList
      .filter((el: IQuestion) => !el.isAnswered)
      .sort((a: any, b: any) => b.lastUpdated - a.lastUpdated);
  }

  getAnsweredQuestions() {
    return this._questionsService.questionsList
      .filter((el: IQuestion) => el.isAnswered)
      .sort((a: any, b: any) => b.lastUpdated - a.lastUpdated);
  }

  getAnswer(questionId: number, status: boolean) {
    const index = this._questionsService.questionsList
      .map((el: IQuestion) => el.id)
      .indexOf(questionId);
    this._questionsService.questionsList[index].isAnswered = status;
    this._questionsService.questionsList[index].lastUpdated = new Date();
  }

  checkDisable(question: IQuestion) {
    if (question.type === QuestionType.Multiple) {
      return (
        question.options.filter((el: IQuestionOption) => el.checked).length > 0
      );
    }
    return !!question.answer;
  }
}
