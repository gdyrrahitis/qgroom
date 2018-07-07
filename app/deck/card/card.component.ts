import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Card } from '~/shared/decks';
import { DecksService } from '~/shared/decks.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'ns-card',
    templateUrl: './card.component.html',
    styleUrls: ["./card.component.css"],
    animations: [
        trigger("twinkle", [
            state("void", style({
                opacity: 1,
                transform: "scale(1)"
            })),
            state("start", style({})),
            transition("void => start", [animate("1s ease-in-out", keyframes([
                style({ offset: 0, transform: "rotate(10deg)", opacity: 0.5 }),
                style({ offset: 0.25, transform: "rotate(-10deg)", opacity: 0.5 }),
                style({ offset: 0.5, transform: "rotate(20deg) scale(0.5)", opacity: 0.5 }),
                style({ offset: 0.75, transform: "rotate(-15deg) scale(1.2)", opacity: 0.8 }),
                style({ offset: 1, transform: "rotate(0deg) scale(1)", opacity: 1 })
            ]))])
        ])
    ]
})
export class CardComponent implements OnInit {
    private id: number;
    private card: Card;
    private twinkleState: string = "void";

    constructor(private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private deckService: DecksService) {
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => { this.id = +params["id"]; });
    }

    ngOnInit() {
        this.card = this.deckService.getCardById(this.id);
    }

    public onItemTap() {
        this.twinkleState = "void";
        setTimeout(() => {
            this.twinkleState = "start";
        }, 300);
    }

    public goBack() {
        this.routerExtensions.back();
    }
}