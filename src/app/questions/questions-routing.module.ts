import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionsEditComponent } from './questions-edit/questions-edit.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsListComponent,
  },
  {
    path: 'create',
    component: QuestionsEditComponent,
  },
  {
    path: 'manage',
    component: QuestionManagementComponent,
  },
  {
    path: ':id',
    component: QuestionsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
