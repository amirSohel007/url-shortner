import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as ENV } from "./../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UrlServiceService {
  constructor(private http: HttpClient) {}

  urlShortner(longUrl) {
    return this.http.post(ENV.apiUrl, { url: longUrl });
  }
}
