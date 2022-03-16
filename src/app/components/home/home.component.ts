import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
// import   articles from '../../data/articles.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // articles: {id: number, username: string, title: string, date: string} = articles;
  loggedUser: any = false;
  articles: any = [];
  

  constructor(
    private store: StoreService,
    private httpService: HttpService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.username){
      console.log('logged')
      this.loggedUser = true;
    }else{
      console.log('not logged')
      this.loggedUser = false;
    }
    this.getArticles();
  }

  logout(){
    this.loggedUser = false;;
  }

  getArticles(){
    this.store.articlesListObserver.subscribe(
      rest => this.articles = rest
    )
  }
 
}
