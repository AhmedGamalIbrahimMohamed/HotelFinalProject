import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor(public httpClient : HttpClient) { }
  getUSANews() : Observable<any>{
    return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2edfaa1a39a5405689f32eb1f01c79e6");
}
}
