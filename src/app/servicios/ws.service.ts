import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WSService {
  private url = 'http://localhost:3000';
  constructor(private  http: HttpClient) { }

  public get<Object>(url: string, token: string) {
    return this.http.get<Object>(this.url + url);
  }
  public post<Object>(url: string, objeto: any, token: string) {
    return this.http.post<Object>(this.url + url, objeto, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  public update<Object>(url: string, objeto: any, token: string) {
    return this.http.post<Object>(this.url + url, objeto, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
}
