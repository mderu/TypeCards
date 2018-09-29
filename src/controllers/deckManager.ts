import { Card, CardDefinition } from '../models/card';
import { Deck } from '../models/deck';

export class DeckManager {
    decks: Deck[];
    cards: { [id: string]: Card };

    constructor(decks: Deck[], cards: { [id: string]: Card }) {
        this.decks = decks;
        this.cards = cards;
    }

    static buildCardsFromJson(cardDataDict: { [id: string]: any }) {
        let cards: { [id: string]: Card } = {}
        for (let cardName in cardDataDict) {
            let cardData = cardDataDict[cardName];
            let definitions: CardDefinition[] = [];
            if (!(cardData instanceof Array)) {
                cardData = [cardData];
            }
            for (let definitionData in cardData) {
                definitions.push(new CardDefinition(cardData[definitionData]));
            }
            cards[cardName] = new Card(cardName, definitions);
        }
        console.log(cards);
        return cards;
    }

    static buildDecksFromJson(deckDataDict: { [id: string]: any }, allCards: { [id: string]: Card }) {
        var decks: Deck[] = [];
        for (let deckName in deckDataDict) {
            let deckData = deckDataDict[deckName];
            let subdecks: Deck[] = [];
            if ('subdecks' in deckData) {
                subdecks = this.buildDecksFromJson(
                    deckData['subdecks'],
                    allCards);
            }
            var deckCards: Card[] = [];
            if ('cards' in deckData) {
                console.log(deckData['cards']);
                for (let cardNum in deckData['cards']) {
                    let key = deckData['cards'][cardNum];
                    console.log(key);
                    console.log(allCards[key]);
                    deckCards.push(allCards[key]);
                }
            }
            decks.push(new Deck(deckName, deckCards, subdecks));
        }
        return decks;
    }

    static load(allData: any) {
        let data = JSON.parse(allData);
        let allCards = DeckManager.buildCardsFromJson(data['cards']);
        let allDecks = DeckManager.buildDecksFromJson(data['decks'], allCards);
        return new DeckManager(allDecks, allCards);
    }
}
