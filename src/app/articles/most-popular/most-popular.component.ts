import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from 'src/app/_services/article.service';
import { Article } from 'src/app/_models/article';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  @Input() articles: Article [];
  constructor(private articleService: ArticleService, private alertify: AlertifyService, private http: HttpClient) { }

  ngOnInit() {
      }
}
