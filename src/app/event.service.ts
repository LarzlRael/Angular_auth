import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl = "http://localhost:4000/api/events";
  private _specialUrl = "http://localhost:4000/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventUrl)
  }

  getSpecial() {
    return this.http.get<any>(this._specialUrl);
  }
}
