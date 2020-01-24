import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { freeApiService } from "./services/freeApi.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        freeApiService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }