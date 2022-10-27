import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaComponent } from "./trivia/trivia.component";
//above we have imported the component created by *ng generate component <name>*
const routes: Routes = [
  {path:'', component: TriviaComponent},
];
//above we add the Angular router to the project root by using the component imported from trivia component
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
