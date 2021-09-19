import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
@Component({
  selector: 'app-lastest-news',
  templateUrl: './lastest-news.component.html',
  styleUrls: ['./lastest-news.component.css']
})
export class LastestNewsComponent implements OnInit {
  news :any= [];
  constructor(public latestNews : LatestnewsService) { }

  ngOnInit(): void {
    this.latestNews.getUSANews().subscribe((data)=>{
      this.news = data.articles;
      
    })
  }

}
