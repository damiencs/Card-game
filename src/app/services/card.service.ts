import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class cardService {
  constructor(private http: HttpClient) {}

  getDeck() {
    return this.http.get('https://www.deckofcardsapi.com/api/deck/new/');
  }
}
