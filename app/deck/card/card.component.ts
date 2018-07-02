import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { Card } from '~/shared/decks';
import { DecksService } from '~/shared/decks.service';

@Component({
    moduleId: module.id,
    selector: 'ns-card',
    templateUrl: './card.component.html',
    styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
    private id: number;
    private card: Card;

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

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}