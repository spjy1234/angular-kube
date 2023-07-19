import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CrudComponent} from "./crud/crud.component";
import {DeleteUpdateComponent} from "./crud/delete-update/delete-update.component";

const routes: Routes = [
  {path: "", redirectTo:"user" , pathMatch:"full"},
  {path: "user", component: UserComponent},
  {path: "crud", component: CrudComponent},
  {path: "crud/:id", component: DeleteUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
