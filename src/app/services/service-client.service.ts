import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
/*
  DRY principle used here. Since all my services
  may make http request, having a single source
  of request service avoids repetition
*/

@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  //apiUrl is an environment variable. Change value for production.
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { 
    
  }
  //url: endpoint to get data
  get(url:string) {
      return this.http.get<any>(`${this.apiUrl}${url}`);
    }
   delete(url:string) {
    return this.http.delete<any>(url);
   }
   post(url:string,data:any) {
    return this.http.post<any>(url,data);
   }
  put(url:string,data:any) {
    return this.http.put<any>(url,data);
  }
}
