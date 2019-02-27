import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../_services/article.service';
import { Article } from '../_models/article';
import { AlertifyService } from '../_services/alertify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article [];
  allTimePops: Article[];
  todayPops: Article[];
  newest: Article[];
  constructor(private articleService: ArticleService, private alertify: AlertifyService, private http: HttpClient) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(
      (places: Article[]) => {
        this.articles = places;
      },
      error => {
        this.alertify.error(error);
      }
    );
    this.articleService.getNewest().subscribe(
      (places: Article[]) => {
        this.newest = places;
      },
      error => {
        this.alertify.error(error);
      }
    );
    this.articleService.getTodays().subscribe(
      (places: Article[]) => {
        this.todayPops = places;
      },
      error => {
        this.alertify.error(error);
      }
    );
    this.articleService.getMostPop().subscribe(
      (places: Article[]) => {
        this.allTimePops = places;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

}
