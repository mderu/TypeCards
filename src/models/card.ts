/**
 * The Card class is the information model that defines a concept desired to be
 * learned. Cards can contain multiple CardDefinitions, where their faces can
 * be formatted in various ways to allow the cards to be re-used for other
 * LearningModes.
 */
export class Card {

	/** The name of the card. This should be unique. */
	name: string;

	/**
	 * A list of CardDefinitions. The structure of these definitions will
	 * determine whether or not the card can be used in various LearningModes.
	 * 
	 * Most Cards will only contain one CardDefinition. Multiple definitions
	 * allow cards to be compatible with various LearningModes without
	 * requiring the format fo the CardDefinition to be compatible with each
	 * mode.
	 */
	definitions: CardDefinition[];

	constructor(name: string, definitions: CardDefinition[]) {
		this.name = name;
		this.definitions = definitions;
	}
}

/**
 * The CardDefinition class is a model that contains JSON-style information
 * that can be formatted onto Cards for various LearningModes.
 */
export class CardDefinition {
	vars: any;

	constructor(vars: any) {
		this.vars = vars;
	}
}


/**
 * Placeholder class until I can actually come up with a good idea.
 */
export class Face {
	value: any;

	constructor(value: any) {
		this.value = value;
	}
}

export abstract class FaceParser {
	constructor() { }

	accept(definition: CardDefinition) {
		return false;
	}
}
