import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceClientService } from './service-client.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService<T> extends ServiceClientService {
  
  constructor(http:HttpClient) { super(http) }
}
