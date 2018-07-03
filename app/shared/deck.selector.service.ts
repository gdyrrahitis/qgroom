import { Injectable } from '@angular/core';
import { Deck, Fibonacci, OtherSequence, Standard, Cards } from '~/shared/decks';

const FibonacciDeck: Deck = {
    name: "Fibonacci",
    cards: Fibonacci
};

const OtherNumericSeqDeck: Deck = {
    name: "Numeric sequence",
    cards: OtherSequence
};

const StandardDeck: Deck = {
    name: "Standard",
    cards: Standard
};

const Decks: Deck[] = [
    StandardDeck,
    FibonacciDeck,
    OtherNumericSeqDeck
];

@Injectable()
export class DeckSelectorService {
    public getDeckByName(name: string): Cards {
        const deck = Decks.find(d => d.name === name);
        return typeof(deck) === "undefined" ? []: deck.cards;
    }

    public getAll(): Deck[] {
        return Decks;
    }
}