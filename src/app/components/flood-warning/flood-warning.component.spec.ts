import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodWarningComponent } from './flood-warning.component';

describe('FloodWarningComponent', () => {
  let component: FloodWarningComponent;
  let fixture: ComponentFixture<FloodWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
