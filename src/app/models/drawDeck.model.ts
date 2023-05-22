import { CardModel } from "./card.model";

export interface DrawDeckModel {
    success: string;
    deck_id: string;
    cards: Array<CardModel>;
    remaining: number;
}