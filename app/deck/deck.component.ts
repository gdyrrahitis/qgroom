import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DecksService } from '~/shared/decks.service';
import { Cards } from '~/shared/decks';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'ns-deck',
    templateUrl: './deck.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./deck.component.css"]
})
export class DeckComponent implements OnInit {
    private cards: Cards;

    constructor(
        private deckService: DecksService,
        private router: RouterExtensions
    ) { }

    ngOnInit() {
        const cards = this.deckService.getDeck();
        if (cards.length === 0) {
            this.goToSettings();
        }

        this.cards = cards;
    }

    public onItemTap(args: any): void {
        const id = this.cards[args.index].id;
        this.router.navigate(["/card", id], {
            transition: {
                name: "slideLeft",
                duration: 700,
                curve: "linear"
            }
        });
    }

    public goToSettings() {
        this.router.navigate(["/settings"], {
            transition: {
                name: "slideLeft",
                duration: 700,
                curve: "linear"
            }
        });
    }

    public getFloor(value: number) {
        return Math.floor(value);
    }
}