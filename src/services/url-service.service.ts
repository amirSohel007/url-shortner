import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private http: HttpClient) { }

  urlShortner(longUrl){
    return this.http.post(environment.apiUrl, {url:longUrl})
  }

}
