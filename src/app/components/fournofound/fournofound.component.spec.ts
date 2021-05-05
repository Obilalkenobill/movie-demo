import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournofoundComponent } from './fournofound.component';

describe('FournofoundComponent', () => {
  let component: FournofoundComponent;
  let fixture: ComponentFixture<FournofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournofoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
