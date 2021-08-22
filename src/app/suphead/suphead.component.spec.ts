import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupheadComponent } from './suphead.component';

describe('SupheadComponent', () => {
  let component: SupheadComponent;
  let fixture: ComponentFixture<SupheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
