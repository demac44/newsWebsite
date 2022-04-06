import { Injectable } from '@angular/core';
import { Article } from '../Article';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentLanguage: string = "en"
  currentCategory: string = "general"
  private apiUrl = `http://api.mediastack.com/v1/news?access_key=bb10e4c5503740f9aa6ab8d6d4312ec8&languages=${this.currentLanguage}&categories=${this.currentCategory}`
  
  private apiStr = new BehaviorSubject<string>(this.apiUrl)
  currentAPI = this.apiStr.asObservable()
      
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article> {            
    return this.http.get<Article>(this.apiUrl)
  }

  setLanguage(lang: string){
    this.apiStr.next(lang)     
    this.currentLanguage = lang
    this.apiUrl = `http://api.mediastack.com/v1/news?access_key=bb10e4c5503740f9aa6ab8d6d4312ec8&languages=${this.currentLanguage}&categories=${this.currentCategory}`
    this.getArticles()
  }

  changeCategory(category: string){
    this.apiStr.next(category)     
    this.currentCategory = category
    this.apiUrl = `http://api.mediastack.com/v1/news?access_key=bb10e4c5503740f9aa6ab8d6d4312ec8&languages=${this.currentLanguage}&categories=${this.currentCategory}`
  }
}