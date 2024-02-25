import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultiProgressBarComponent } from './ngx-multi-progress-bar.component';

describe('NgxMultiProgressBarComponent', () => {
  let component: NgxMultiProgressBarComponent;
  let fixture: ComponentFixture<NgxMultiProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMultiProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMultiProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
