import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { DecksService } from "~/shared/decks.service";
import { DeckSelectorService } from "~/shared/deck.selector.service";
import { SettingsComponent } from "~/settings/settings.component";
import { CardComponent } from "~/deck/card/card.component";
import { DeckComponent } from "~/deck/deck.component";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { DeckDetailsComponent } from "~/deck/details/deck.details.component";
import { LabelCenterDirective } from "~/shared/label.center.directive";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptAnimationsModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
			'fa': './css/font-awesome.min.css'
		})
    ],
    declarations: [
        AppComponent,
        SettingsComponent,
        CardComponent,
        DeckComponent,
        DeckDetailsComponent,
        LabelCenterDirective
    ],
    providers: [
        DecksService,
        DeckSelectorService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
