import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { DecksService } from '~/shared/decks.service';
import { Cards } from '~/shared/decks';
import { RouterExtensions } from 'nativescript-angular/router';
import { isAndroid, isIOS } from "platform";
import { Page } from 'ui/page';
import { LayoutBase, EventData } from 'tns-core-modules/ui/layouts/layout-base';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'ns-deck',
    templateUrl: './deck.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./deck.component.css"],
    animations: [
        trigger("state", [
            state("in", style({
                // "background-color": "#eee",
                // "opacity": 1,
                // transform: 'scale(1)'
            })),

            state("void", style({
                //"background-color": "#fff",
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

    public onItemLabelLoaded() {
        setTimeout(() => {
            this.currentState = "in";
        }, 1000);
        // call a function here using 'id'
    }

    public onItemTap(id: number): void {
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

    public getFloor(value: number) {
        return Math.floor(value);
    }

    public onBusyChanged(args: any) { }
}