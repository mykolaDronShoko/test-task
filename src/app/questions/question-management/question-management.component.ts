import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/core/models/question.model';
import { QuestionsService } from 'src/app/core/services/questions.service';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent implements OnInit {
  constructor(public _questionsService: QuestionsService) {}

  ngOnInit(): void {}

  questionTypes = QuestionType;

  get questionsList() {
    return this._questionsService.questionsList.sort(
      (a: any, b: any) => b.date - a.date
    );
  }
  delete(questionId: number) {
    this._questionsService.remove(questionId);
  }
}
