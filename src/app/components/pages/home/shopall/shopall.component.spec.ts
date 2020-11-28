import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ShopallComponent} from './shopall.component';

describe('shopallComponent', () => {
  let component: ShopallComponent;
  let fixture: ComponentFixture<ShopallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
