import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  fetchArticles(){
    return this.http.get('/assets/articles.json')
    }

  login(){
    // return this.http.get("").subscribe(data =>{
    //   console.log(data);
    // })
  }

  register(){

  }

  logout(){

  }

  deleteArticle(article_id: number){
    
    return this.http.get('/assets/articles.json')
  }
}
