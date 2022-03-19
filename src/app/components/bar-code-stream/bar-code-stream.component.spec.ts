import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCodeStreamComponent } from './bar-code-stream.component';

describe('BarCodeStreamComponent', () => {
  let component: BarCodeStreamComponent;
  let fixture: ComponentFixture<BarCodeStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCodeStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCodeStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
