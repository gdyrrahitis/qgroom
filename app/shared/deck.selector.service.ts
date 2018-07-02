import { Injectable } from '@angular/core';
import { Deck, Fibonacci, MountainGoat, Standard, Cards } from '~/shared/decks';

const FibonacciDeck: Deck = {
    name: "fibonacci",
    cards: Fibonacci
};

const MountainGoatDeck: Deck = {
    name: "mountain-goat",
    cards: MountainGoat
};

const StandardDeck: Deck = {
    name: "standard",
    cards: Standard
};

const Decks: Deck[] = [
    StandardDeck,
    FibonacciDeck,
    MountainGoatDeck
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