import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DecksService } from '~/shared/decks.service';
import { Cards } from '~/shared/decks';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS } from "platform";
import { Page } from 'ui/page';

const transition = isAndroid ? "fade": "curl";

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

    public onItemTap(id: number): void {
        this.router.navigate(["/card", id], {
            transition: {
                name: transition,
                duration: 300,
                curve: "linear"
            }
        });
    }

    public goToSettings() {
        this.router.navigate(["/settings"], {
            transition: {
                name: transition,
                duration: 300,
                curve: "linear"
            }
        });
    }

    public getFloor(value: number) {
        return Math.floor(value);
    }
}