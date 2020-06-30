import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ArticleService } from './articles/article.service';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core-module/core-module';
import { HttpClientModule} from"@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    CoreModule,
    RouterModule.forRoot([
      {path: 'articles', component: <any>ArticlesListComponent}
    ]),
    HttpClientModule,

  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

