import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeckModel } from '../models/deck.model';
import { DrawDeckModel } from '../models/drawDeck.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class cardService {
  private _currentDeck$: BehaviorSubject<DrawDeckModel>;
  private _currentDeck: DrawDeckModel = {
    success: '',
    deck_id: '',
    cards: [],
    remaining: 0
  };

  constructor(private http: HttpClient) {
    this._currentDeck$= new BehaviorSubject(this._currentDeck);
  }

  deckId:string;
  getDeck():Observable<DeckModel> {
    return this.http.get<DeckModel>('https://www.deckofcardsapi.com/api/deck/new/');
  }

  drawCard(id:string):Observable<DrawDeckModel>{
    let req = "https://www.deckofcardsapi.com/api/deck/"+id+"/draw/?count=1"
    return this.http.get<DrawDeckModel>(req);
  }

  getCurrentDeck(): Observable<DrawDeckModel>{
    return this._currentDeck$.asObservable();
  }
  sendCurrentDeck(data:DrawDeckModel){
    this._currentDeck$.next(data);
  }
}