import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MainComponent } from '../main/main.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch
  val: string = ""
  language: string = "en";
  category: string = "general"

  searchForm = this.formBuilder.group({
    searchInput: ""
  })

  constructor(
    private news: NewsService, 
    private main: MainComponent,
    private formBuilder: FormBuilder
    ) {
    this.news.currentAPI.subscribe(data => data = this.language)
  }

  ngOnInit(): void {
    this.news.currentAPI.subscribe(data => data = this.language)
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

  search(): void{
    let val = this.searchForm.get('searchInput')?.value
    this.news.setSearchQuery(val)
    this.main.getArticles()
  }
}
