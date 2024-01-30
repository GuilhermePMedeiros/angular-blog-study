import { Component, OnInit } from '@angular/core';
import { NewsType } from 'src/app/models/news/NewsType';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  principalNews : NewsType = {
    id: 0,
    titulo: '',
    introducao: '',
    data_publicacao: '',
    link: ''
  };
  
  newsList: NewsType[] = [];
  releaseList: NewsType[] = [];


  constructor(private service: NewsService) {

  }

  ngOnInit(): void {
    this.lodingNews();
    this.lodingRelease();
  }

  lodingNews(){
    this.service.getNews().subscribe({
      next: (res) => { 
        this.newsList = res.items;
        if (this.newsList.length > 1){
          this.principalNews = this.newsList[0];
          this.newsList.shift();
        }
      },
      error: (error) => console.error(error)
    });
  }

  lodingRelease(){
    this.service.getRelease().subscribe({
      next: (res) => { 
        this.releaseList = res.items;
      },
      error: (error) => console.error(error)
    });
  }
}
