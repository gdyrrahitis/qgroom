import { Injectable } from '@angular/core';
import * as applicationSettings from "application-settings";
import { Deck, Cards, Card } from '~/shared/decks';
import { DeckSelectorService } from '~/shared/deck.selector.service';

const DECK = "DECK";

@Injectable()
export class DecksService {
    constructor(private selector: DeckSelectorService) {
    }

    public setDeckTo(deck: string): void {
        applicationSettings.setString(DECK, deck);
    }

    public getDeck(): Cards {
        const name = applicationSettings.getString(DECK);
        return this.selector.getDeckByName(name);
    }

    public getAll(): Deck[] {
        return this.selector.getAll();
    }

    public getCardById(id: number): Card {
        const name = applicationSettings.getString(DECK);
        const deck = this.selector.getDeckByName(name);
        const card = deck.find(c => c.id === id);
        return card;
    }
}