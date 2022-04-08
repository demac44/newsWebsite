import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-pagination-control',
  templateUrl: './pagination-control.component.html',
  styleUrls: ['./pagination-control.component.css']
})
export class PaginationControlComponent implements OnInit {
  limit: number = 25

  constructor(private service: NewsService, private main: MainComponent) {
    this.service.currentAPI.subscribe(limit => limit = this.limit)
  }

  ngOnInit(): void {
    this.service.currentAPI.subscribe(limit => limit = this.limit)
  }

  nextPage(){
    this.service.setLimit(this.limit+25)
    this.main.getArticles()
  }

  prevPage(){
    if(this.limit<=25){
      return
    }
    this.service.setLimit(this.limit-25)
    this.main.getArticles()
  }

}
