import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Cards } from '~/shared/decks';

@Component({
    moduleId: module.id,
    selector: 'ns-deck-details',
    templateUrl: './deck.details.component.html',
    styleUrls: ["./deck.details.component.css"],
    animations: [
        trigger("state", [
            state("in", style({})),
            state("void", style({
                "opacity": 0
            })),
            transition("void => *", [animate("450ms 1000ms linear", keyframes([
                style({ opacity: 0, transform: 'scale(0.3) translate3d(0,0,0)', offset: 0 }),
                style({ opacity: 0.9, transform: 'scale(1.1)', offset: 0.5 }),
                style({ opacity: 1, transform: 'scale(0.89)', offset: 0.8 }),
                style({ offset: 1.0, opacity: 1, transform: 'scale(1) translate3d(0,0,0)' }),
            ]))]),
            transition("* => void", [animate("1s ease-out")])
        ])
    ]
})
export class DeckDetailsComponent {
    @Input() cards: Cards;
    @Output() onCardTap = new EventEmitter<number>();

    public onItemTap(id: number): void {
        this.onCardTap.emit(id);
    }
}