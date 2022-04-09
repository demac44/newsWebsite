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
  currentLimit: number = 25
  searchQuery: string = ""
  private apiUrl = `https://newsapi.org/v2/top-headlines?language=${this.currentLanguage}&category=${this.currentCategory}&pageSize=${this.currentLimit}&apiKey=7bd64748222643f996e7accadab32872`

  private apiStr = new BehaviorSubject<any>(this.apiUrl)
  currentAPI = this.apiStr.asObservable()
      
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article> {            
    return this.http.get<Article>(this.apiUrl)
  }

  setLanguage(lang: string){
    this.apiStr.next(lang)     
    this.currentLanguage = lang
    this.apiUrl = `https://newsapi.org/v2/top-headlines?language=${this.currentLanguage}&q=&category=${this.currentCategory}&pageSize=25&apiKey=7bd64748222643f996e7accadab32872`
  }

  changeCategory(category: string){
    this.apiStr.next(category)     
    this.currentCategory = category
    this.apiUrl = `https://newsapi.org/v2/top-headlines?language=${this.currentLanguage}&q=&category=${this.currentCategory}&pageSize=25&apiKey=7bd64748222643f996e7accadab32872`
  }

  setLimit(limit: number){
    this.apiStr.next(limit)
    this.currentLimit += 25
    this.apiUrl = `https://newsapi.org/v2/top-headlines?language=${this.currentLanguage}&category=${this.currentCategory}&pageSize=${this.currentLimit}&apiKey=7bd64748222643f996e7accadab32872`
  }

  setSearchQuery(query: string){
    this.apiStr.next(query)
    this.searchQuery = query
    this.apiUrl = `https://newsapi.org/v2/top-headlines?language=${this.currentLanguage}&q=${this.searchQuery}&category=${this.currentCategory}&pageSize=25&apiKey=7bd64748222643f996e7accadab32872`
  }
}