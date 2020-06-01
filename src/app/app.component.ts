import { Component, OnDestroy, OnInit } from '@angular/core';
import { UrlServiceService } from '../services/url-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private urlService : UrlServiceService){}
  processingText:Boolean = false
  shortUrl:any;
  urlString:any


  ngOnInit() {}

  convertUrl(){
    this.processingText = true;
    this.urlService.urlShortner(this.urlString).subscribe(data => {
      if(data){
        this.processingText = false; //Loaing text change
        this.shortUrl = data  //assigning data to variable
        this.urlString = this.shortUrl['shortUrl'] // replacing old url with short url
      } else {
        
      }
      
    })
  }
}
