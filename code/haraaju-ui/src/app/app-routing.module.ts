import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { BidsComponent } from './bids/bids.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchResultComponent } from './searchresult/searchresult.component';


const routes: Routes = [{ path:"items",component:ItemsComponent},
  { path: "bids", component: BidsComponent },
  { path:"searchresults",component: SearchResultComponent},
{path:"",component:SummaryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
