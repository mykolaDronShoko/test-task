import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questions',
    loadChildren: () =>
      import('../app/questions/questions.module').then(
        (m) => m.QuestionsModule
      ),
  },
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
