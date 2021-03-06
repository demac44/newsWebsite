import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: Article = {
    author: '',
    title: '',
    description: '',
    url: '',
    source: {
      name: ""
    },
    urlToImage: '',
    category: '',
    language: '',
    country: '',
    publishedAt: '',
    articles: '',
    content: ''
  }

  // @Input() articles: Article[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
