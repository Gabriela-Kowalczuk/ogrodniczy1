import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CoreModule } from '../core-module/core-module';
import { SheredModule } from '../shered-module/shered-module';



@NgModule({
  exports: [ArticlesListComponent],
  declarations: [ArticlesListComponent],
  imports: [
    CommonModule,
    CoreModule,
    SheredModule

  ]
})
export class ArticlesModule { }
