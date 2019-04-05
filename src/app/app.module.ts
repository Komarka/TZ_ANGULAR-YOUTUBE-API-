import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SearchListComponent } from "./search-bar/search-list/search-list.component";
import { ShorterPipe } from "./search-bar/search-list/shorter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchListComponent,
    ShorterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
