import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ResponseList } from '../models/response/responseList'


@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private pathUrl :string;
  private newsPath :string = "noticias/?tipo=noticia&qtd=5";
  private realisePath :string = "noticias/?tipo=release&qtd=4";
  
  private newsData :ResponseList | any;
  private releaseData :ResponseList | any;

  constructor(private http:HttpClient) {
    this.pathUrl = environment.ibgeApi; 
  }

  getNews() :Observable<ResponseList>{
    this.newsData = this.http
                        .get<ResponseList>(`${this.pathUrl + this.newsPath}`);
    
    return this.newsData;
  }

  getRelease() :Observable<ResponseList>{
    this.releaseData = this.http
    .get<ResponseList>(`${this.pathUrl + this.realisePath}`);

    return this.releaseData;
  }
}
