import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  articles: Article[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe((articles) => {
      this.articles = articles.data            
    })
  }

}
