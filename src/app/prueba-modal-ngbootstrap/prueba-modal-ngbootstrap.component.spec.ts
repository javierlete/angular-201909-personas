import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaModalNgbootstrapComponent } from './prueba-modal-ngbootstrap.component';

describe('PruebaModalNgbootstrapComponent', () => {
  let component: PruebaModalNgbootstrapComponent;
  let fixture: ComponentFixture<PruebaModalNgbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaModalNgbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaModalNgbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
