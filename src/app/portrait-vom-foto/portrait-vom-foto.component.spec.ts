import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitVomFotoComponent } from './portrait-vom-foto.component';

describe('PortraitVomFotoComponent', () => {
  let component: PortraitVomFotoComponent;
  let fixture: ComponentFixture<PortraitVomFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitVomFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitVomFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
