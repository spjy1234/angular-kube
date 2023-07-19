import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from "@angular/common/http";
import { CrudComponent } from './crud/crud.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteUpdateComponent } from './crud/delete-update/delete-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CrudComponent,
    DeleteUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
