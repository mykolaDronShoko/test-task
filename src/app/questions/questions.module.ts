import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsEditComponent } from './questions-edit/questions-edit.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionManagementComponent,
    QuestionsListComponent,
    QuestionsEditComponent,
  ],
  imports: [CommonModule, QuestionsRoutingModule, FormsModule],
})
export class QuestionsModule {}
