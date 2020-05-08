import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SitefeatureCarouselComponent } from './sitefeature-carousel/sitefeature-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { ItemsComponent } from './items/items.component';
import { BidsComponent } from './bids/bids.component';
import { SearchResultComponent } from './searchresult/searchresult.component';
import {
  FormsModule
} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    SitefeatureCarouselComponent,
    NavbarComponent,
    SummaryComponent,
    ItemsComponent,
    BidsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
