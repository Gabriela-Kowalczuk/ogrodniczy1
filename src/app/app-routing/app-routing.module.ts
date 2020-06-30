import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from "@angular/router";
import { ArticlesListComponent } from '../articles/articles-list/articles-list.component';

const APP_ROUTES : Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'articles'},
  {path:'articles', component:<any>ArticlesListComponent }
];
@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    CommonModule,
  ]
})
export class AppRoutingModule { }
