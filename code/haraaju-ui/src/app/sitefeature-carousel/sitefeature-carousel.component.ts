import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitefeature-carousel',
  templateUrl: './sitefeature-carousel.component.html',
  styleUrls: ['./sitefeature-carousel.component.css']
})
export class SitefeatureCarouselComponent implements OnInit {

  features = ["You can sell your items", "You can buy others items", "you can see what others are bidding"];

  constructor() { }

  ngOnInit(): void {
  }

}
