import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private itemService: ItemsService,private route:ActivatedRoute ) { }

  items : Item[];

  searchtext = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchtext = params['searchtext']
    })
    console.log(this.searchtext);
     this.itemService.getItems(this.searchtext).subscribe( response => {
       this.items = response._embedded.items;
     })
  }

}
