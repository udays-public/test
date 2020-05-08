import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitefeatureCarouselComponent } from './sitefeature-carousel.component';

describe('SitefeatureCarouselComponent', () => {
  let component: SitefeatureCarouselComponent;
  let fixture: ComponentFixture<SitefeatureCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitefeatureCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitefeatureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
