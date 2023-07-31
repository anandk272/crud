import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './pages/http/http.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  {path:'http',component:HttpComponent},
  {path:'forms',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
