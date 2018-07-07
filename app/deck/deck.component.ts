import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { DecksService } from '~/shared/decks.service';
import { Cards } from '~/shared/decks';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS } from "platform";

@Component({
    moduleId: module.id,
    selector: 'ns-deck',
    templateUrl: './deck.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./deck.component.css"]
})
export class DeckComponent implements OnInit {
    private cards: Cards;
    private currentState: string = "void";

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
        console.log(id);
        this.router.navigate(["/card", id], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "ease"
            }
        });
    }

    public goToSettings() {
        this.router.navigate(["/settings"], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "ease"
            }
        });
    }
}