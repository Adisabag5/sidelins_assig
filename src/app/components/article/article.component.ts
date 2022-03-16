import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  @Input() articleData: any;
  @Input() isLogged: boolean = false;

  ngOnInit(): void {

  }

  deleteArticle(id: number){
    console.log(id)
    this.store.deleteArticle(id);
  }

}
