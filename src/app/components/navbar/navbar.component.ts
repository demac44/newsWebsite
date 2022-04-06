import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  language: string = "en";
  category: string = "general"

  constructor(private news: NewsService, private main: MainComponent) {
    this.news.currentAPI.subscribe(lang => lang = this.language)
  }

  ngOnInit(): void {
    this.news.currentAPI.subscribe(lang => lang = this.language)
  }


  getLanguage(lang: any){
    this.language = lang
    this.news.setLanguage(lang)
    this.main.getArticles()
  }

  changeCategory(category: string){
    this.category = category
    this.news.changeCategory(category)
    this.main.getArticles()
  }

}
