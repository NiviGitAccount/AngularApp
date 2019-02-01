import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  requestData = {data : ''};
  
  articleUrl = "http://localhost:3000/profile";
  constructor(private http:Http) { 
  }
  
  getAllArticles(data): Observable<{data:any}> {
    this.requestData.data=data;
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: cpHeaders });
      return this.http.post(this.articleUrl,this.requestData,options)
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
