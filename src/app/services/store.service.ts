import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  articles = new BehaviorSubject<any[]>([]);
  articlesListObserver = this.articles.asObservable();

  users = new BehaviorSubject<any[]>([]);
  usersListObserver = this.users.asObservable();

  loggedUser = new BehaviorSubject<any>(null);
  loggedUserObserver = this.loggedUser.asObservable();

  constructor(
    private http: HttpService
  ) { 
    this.http.fetchArticles().subscribe(rest => this.setArticles(rest))
  }

  setArticles(updatedList: any){
    this.articles.next(updatedList);
  }
  setUsers(updatedList: any){
    this.users.next(updatedList);
  }
  setLoggedUser(updatedUser: any){
    this.loggedUser.next(updatedUser);
  }

  deleteArticle(id: number){
    let newList = this.articles.value.filter( (item: any) => item.id != id);
    console.log(this.articles.value)
    this.setArticles(newList);
  }
}
