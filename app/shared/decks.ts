export type Cards = Array<Card>;
export type Card = {
    id: number,
    value: string,
    icon?: string,
    useWebFont?: boolean,
    unicode?: string,
    description?: string
};

export const Fibonacci: Cards = [
    { id: 0, value: "0", description: "This task can be done instantly." },
    { id: 1, value: "1", description: "This task needs one unit." },
    { id: 2, value: "2", description: "This task needs two units." },
    { id: 3, value: "3", description: "This task needs three units." },
    { id: 4, value: "5", description: "This task needs five units." },
    { id: 5, value: "8", description: "This task needs eight units." },
    { id: 6, value: "13", description: "This task needs thirteen units." },
    { id: 7, value: "21", description: "This task needs twenty one units." },
    { id: 8, value: "34", description: "This task needs thirty four units." },
    { id: 9, value: "55", description: "This task needs fifty five units." },
    { id: 10, value: "89", description: "This task needs eighty nine units." },
    { id: 11, value: "Bomb", icon: 'fa-bomb', useWebFont: true, description: "Cannot be completed." }
];

export const OtherSequence: Cards = [
    { id: 0, value: "0", description: "This task can be done instantly." },
    { id: 1, value: "1/2", description: "This task is very easy." },
    { id: 2, value: "1", description: "This task needs one unit." },
    { id: 3, value: "2", description: "This task needs two units." },
    { id: 4, value: "3", description: "This task needs three units." },
    { id: 5, value: "5", description: "This task needs five units." },
    { id: 6, value: "8", description: "This task needs eight units." },
    { id: 7, value: "13", description: "This task needs thirteen units." },
    { id: 8, value: "21", description: "This task needs twenty one units." },
    { id: 9, value: "34", description: "This task needs thirty four units." },
    { id: 10, value: "100", description: "This task needs one hundred units." },
    { id: 11, value: "?", icon: 'fa-question', useWebFont: true, description: "Unsure." },
    { id: 12, value: "Coffee", icon: 'fa-coffee', useWebFont: true, description: "I need a break." },
    { id: 13, value: "Bomb", icon: 'fa-bomb', useWebFont: true, description: "Cannot be completed." }
];
export const Standard: Cards = [
    { id: 0, value: "Ace", unicode: "\u2660", description: "Easy task." },
    { id: 1, value: "2", description: "This task needs two units." },
    { id: 2, value: "3", description: "This task needs three units." },
    { id: 3, value: "5", description: "This task needs five units." },
    { id: 4, value: "8", description: "This task needs eight units." },
    { id: 5, value: "King", unicode: "\u265A", description: "This item is too big to estimate." }
];

export type Deck = {
    name: string,
    cards: Cards
};