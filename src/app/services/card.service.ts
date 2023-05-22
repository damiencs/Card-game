import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckModel } from '../models/deck.model';
import { DrawDeckModel } from '../models/drawDeck.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class cardService {
  constructor(private http: HttpClient) {}

  deckId:string;
  getDeck():Observable<DeckModel> {
    return this.http.get<DeckModel>('https://www.deckofcardsapi.com/api/deck/new/');
  }

  drawCard(id:string):Observable<DrawDeckModel>{
    let req = "https://www.deckofcardsapi.com/api/deck/"+id+"/draw/?count=1"
    return this.http.get<DrawDeckModel>(req);
  }
}