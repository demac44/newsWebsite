import { Injectable } from '@angular/core';
import { Article } from '../Article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = "http://api.mediastack.com/v1/news?access_key=bb10e4c5503740f9aa6ab8d6d4312ec8"


  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.apiUrl)
  }
}
