export type Cards = Array<Card>;
export type Card = {
    id: number,
    value: string,
    icon?: string,
    useWebFont?: boolean,
    unicode?: string
};

export const Fibonacci: Cards = [
    { id: 0, value: "0" },
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "5" },
    { id: 5, value: "8" },
    { id: 6, value: "13" },
    { id: 7, value: "21" },
    { id: 8, value: "34" },
    { id: 9, value: "55" },
    { id: 10, value: "89" },
    { id: 11, value: "Bomb", icon: 'fa-bomb', useWebFont: true }
];

export const MountainGoat: Cards = [
    { id: 0, value: "0" },
    { id: 1, value: "1/2" },
    { id: 2, value: "1" },
    { id: 3, value: "2" },
    { id: 4, value: "3" },
    { id: 5, value: "5" },
    { id: 6, value: "8" },
    { id: 7, value: "13" },
    { id: 8, value: "21" },
    { id: 9, value: "34" },
    { id: 10, value: "100" },
    { id: 11, value: "?", icon: 'fa-question', useWebFont: true },
    { id: 12, value: "Coffee", icon: 'fa-coffee', useWebFont: true }
];
export const Standard: Cards = [
    { id: 0, value: "Ace", unicode: "\u2660" },
    { id: 1, value: "2" },
    { id: 2, value: "3" },
    { id: 3, value: "5" },
    { id: 4, value: "8" },
    { id: 5, value: "King", unicode: "\u265A" }
];

export type Deck = {
    name: string,
    cards: Cards
};