import { Component, OnInit } from '@angular/core';
import { ListPicker } from "ui/list-picker";
import { DecksService } from '~/shared/decks.service';
import { Deck } from '~/shared/decks';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'ns-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
    private decks: Deck[];
    private deck: Deck;
    private canGoBack: boolean;

    constructor(private deckService: DecksService,
        private router: RouterExtensions) {
            this.canGoBack = router.canGoBack();
    }

    ngOnInit(): void {
        this.decks = this.deckService
            .getAll()
            .map(d => {
                return {
                    name: d.name,
                    cards: d.cards,
                    toString: () => d.name
                };
            });
    }

    public selectedIndexChanged(args) {
        const picker = <ListPicker>args.object;
        this.deck = this.decks[picker.selectedIndex];

    }

    public onTap() {
        if (typeof (this.deck) !== "undefined") {
            this.deckService.setDeckTo(this.deck.name);
            this.router.navigate(["/deck"], {
                transition: {
                    name: "slideLeft",
                    duration: 700,
                    curve: "linear"
                }
            });
        } else {
            const options = {
                title: "Deck selection",
                message: "No deck selected",
                okButtonText: "OK"
            };
            
            alert(options);
        }
    }

    public goBack () {
        this.router.backToPreviousPage();
    }
}