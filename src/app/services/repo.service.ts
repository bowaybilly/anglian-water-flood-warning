import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class RepoService<T>  {
  
  constructor(private http: HttpClient ) {}
  //apiUrl is an environment variable. Change value for production.
  private apiUrl: string = environment.apiUrl;
  private apiLogUrl: string = environment.apiLogUrl;
   
  //url: endpoint to get data
  get(url: string) {
    
    const reqUrl = `${this.apiUrl}${url}`;
    return this.http.get<any>(reqUrl)
      .pipe(
        tap(response => {
          //save request and response data
          this.http.post(`${this.apiLogUrl}/api/v1/flood/data`,
            { requestUrl: reqUrl, responseBody: JSON.stringify(response) })
            .subscribe((req) => { },
              (error) => { })
            ;
        })
      );
   
  }
   delete(url:string) {
    return this.http.delete<any>(url);
   }
   post(url:string,data:T) {
    return this.http.post<any>(url,data);
   }
  put(url:string,data:T) {
    return this.http.put<any>(url,data);
  }
}
