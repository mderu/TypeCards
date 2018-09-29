import {Card} from "./card";

/** 
 * The Deck class is a model that holds multiple cards within a list. Decks 
 * can contain a structured hierarchy of subdecks. A deck cannot be a subdeck
 * of itself, and cycles may not occur.
 */
export class Deck {
	subdecks: Deck[];
	cards: Card[];
	name: string;

    constructor(name: string, cards: Card[], subdecks: Deck[] = []) {
		this.name = name;
        this.cards = cards;
        this.subdecks = subdecks;
	}
}
