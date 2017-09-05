import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {DataService} from "./data.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
