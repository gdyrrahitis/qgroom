import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DeckComponent } from "~/deck/deck.component";
import { CardComponent } from "~/deck/card/card.component";
import { SettingsComponent } from "~/settings/settings.component";

const routes: Routes = [
    { path: "", redirectTo: "/deck", pathMatch: "full" },
    { path: "deck", component: DeckComponent },
    { path: "card/:id", component: CardComponent },
    { path: "settings", component: SettingsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }