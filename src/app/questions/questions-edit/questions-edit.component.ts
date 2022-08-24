import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IQuestion,
  IQuestionOption,
  QuestionType,
} from 'src/app/core/models/question.model';
import { QuestionsService } from 'src/app/core/services/questions.service';

@Component({
  selector: 'app-questions-edit',
  templateUrl: './questions-edit.component.html',
  styleUrls: ['./questions-edit.component.scss'],
})
export class QuestionsEditComponent implements OnInit {
  question: IQuestion = {
    id: Math.random() * 100,
    text: '',
    type: QuestionType.Single,
    options: [],
    isAnswered: false,
    answer: '',
    date: new Date(),
  };
  questionTypes = QuestionType;
  isEditMode: boolean = false;

  constructor(
    private _questionsService: QuestionsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.question = this._questionsService.get(+id);
    }
  }

  addOption() {
    this.question.options.push({} as IQuestionOption);
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  removeOption(index: number) {
    this.question.options.splice(index, 1);
  }

  onSubmit() {
    const data: IQuestion = {
      ...this.question,
      options: this.question.options.filter(
        (el: IQuestionOption) => !!el.value
      ),
    };

    if (this.isEditMode) {
      this._questionsService.update(data);
    } else {
      this._questionsService.add(data);
    }

    this._router.navigate(['/questions/manage']);
  }

  checkValidation() {
    if (
      this.question.type !== QuestionType.Open &&
      this.question.options.length >= 2 &&
      this.question.text
    ) {
      return true;
    }
    if (this.question.type === QuestionType.Open && this.question.text) {
      return true;
    }
    return false;
  }
}
