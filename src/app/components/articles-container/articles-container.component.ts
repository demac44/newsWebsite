import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css']
})
export class ArticlesContainerComponent implements OnInit {
  @Input() articles: Article[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
