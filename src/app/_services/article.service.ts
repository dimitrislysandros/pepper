import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../_models/article';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(private http: HttpClient) { }

baseUrl = environment.apiUrl;

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.baseUrl + 'articles', httpOptions);
}

getNewest(): Observable<Article[]> {
  return this.http.get<Article[]>(this.baseUrl + 'newest', httpOptions);
}

getTodays(): Observable<Article[]> {
  return this.http.get<Article[]>(this.baseUrl + 'todaypop', httpOptions);
}

getMostPop(): Observable<Article[]> {
  return this.http.get<Article[]>(this.baseUrl + 'mostpop', httpOptions);
}
}
