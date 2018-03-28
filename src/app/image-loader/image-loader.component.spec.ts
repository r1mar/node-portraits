import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatImageLoaderComponent } from './mat-image-loader.component';

describe('MatImageLoaderComponent', () => {
  let component: MatImageLoaderComponent;
  let fixture: ComponentFixture<MatImageLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatImageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatImageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
