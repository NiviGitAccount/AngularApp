import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppservicesService {
  articleUrl = "http://localhost:3000/register";
  //Create constructor to get Http instance
  constructor(private http:Http) { 
  }
  //Fetch all articles
  getAllArticles(model): Observable<{data:any}> {
    console.log(model);
      return this.http.post(this.articleUrl, model)
      .pipe(map(this.extractData))
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
