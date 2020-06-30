import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from "./models/article";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private articleList: Article[];
  articles: { id: number; name: string; price: number; vat: number; amount: number; }[];

  constructor() {
  this.articles = [
      {
      id: 1,
     name:"Nasiona Rózy",
     price :17,
     vat: 23,
     amount:79
     }, 

    {
    id: 1,
   name:'Nasiona Bzu',
   price :17,
   vat: 23,
   amount:79
   },
   
    {
    id: 1,
   name:'ziemniak',
   price :17,
   vat: 23,
   amount:78
   }, 
   {
    id: 1,
   name:'Łopata',
   price :10,
   vat: 23,
   amount:79
   },
   {
    id: 1,
   name:'Rękawice',
   price :18,
   vat: 23,
   amount:87
   } 
  ]
  }

  getArticles() : Observable<Article[]> {
   return of(this.articles);
  }
  getarticleById(articleId: number): Article {
    return this.articleList.find(article=>article.id === articleId);
  }
  addArticle(article:Article): void{
    this.articles.push(article);
  }

}
