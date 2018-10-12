import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoichiometryFormComponent } from './stoichiometry-form/stoichiometry-form.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';

const routes: Routes = [
  // { path: '', redirectTo: '000000', pathMatch: 'full' },
  // this is the beginning of the ID recognition, will need to have something like :id
  // { path: '000000', component: AppComponent }
  // this is basically it, but we don't have it being recieved, so i'm just forcing the default to go to 000000 for now
  // { path: ':id', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StoichiometryFormComponent,
    AnswerKeyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }