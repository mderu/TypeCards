import {Card} from "./card";

/** 
 * The Deck class is a model that holds multiple cards within a list. Decks 
 * can contain a structured hierarchy of subdecks. A deck cannot be a subdeck
 * of itself, and cycles may not occur.
 */
export class Deck {
	cards: Card[];
	name: string;
	disabledCards: Card[] = [];
	metadata: any = {};

    constructor(name: string, cards: Card[]) {
		this.name = name;
        this.cards = cards;
	}
}

export class DeckGroup {
	name: string;
	decks: [DeckGroup | Deck];
	_metadata: {[id: string]: any} = {};

	constructor(name: string, decks: [DeckGroup | Deck]) {
		this.name = name;
		this.decks = decks;
	}
}
