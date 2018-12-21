import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) {
    console.log('Data service connected...')
  }

  // getPosts() {
  //   return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  //   .map(res => res.json());
  // }
}
