import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {
  

  articles: Article[] ;

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles)=>{
      this.articles = articles;
    })

  }

}
