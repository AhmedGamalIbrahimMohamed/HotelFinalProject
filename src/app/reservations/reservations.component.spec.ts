import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESERVATIONSComponent } from './reservations.component';

describe('RESERVATIONSComponent', () => {
  let component: RESERVATIONSComponent;
  let fixture: ComponentFixture<RESERVATIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RESERVATIONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RESERVATIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
