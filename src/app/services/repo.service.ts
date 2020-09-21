import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, tap} from 'rxjs/operators'
import { IRequestResponse } from '../models/IRequestResponse';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
// T: type of resource to proce
export class RepoService<T>  {
  
  constructor(private http: HttpClient ) {}
  //apiUrl is an environment variable. Change value for production.
  private apifloodUrl: string = environment.apiUrl;
  private apiLogUrl: string = environment.apiLogUrl;
   
  //gets resource data
  get(url: string) {
    
    const reqUrl = `${this.apifloodUrl}${url}`;
    return this.http.get<any>(reqUrl)
      .pipe(
        tap(response => {
          //save request and response data
          const floodLogger = { requestUrl: reqUrl, responseBody: JSON.stringify(response) };
          this.logRequest(floodLogger);
        }),
        catchError(this.handleError)
    );
   
  }
  //logs errors for application
  private handleError(error: HttpErrorResponse): Observable<any> {
    console.warn(error);
    return throwError(error);
  }
  //saves request and response data for application
  logRequest(data:IRequestResponse ) {
    this.http.post(`${this.apiLogUrl}/api/v1/flood/data`,data)
      .subscribe((req) => { },
        (error:HttpErrorResponse) => { 
          console.error(`failed saving response data, ${error.message}`);
          console.error(error);
        });
  }
  //delete resource data
   delete(url:string) {
    return this.http.delete<any>(url);
   }
  //post resource data
   post(url:string,data:T) {
    return this.http.post<any>(url,data);
   }
  //updates resource data
  put(url:string,data:T) {
    return this.http.put<any>(url,data);
  }
}
