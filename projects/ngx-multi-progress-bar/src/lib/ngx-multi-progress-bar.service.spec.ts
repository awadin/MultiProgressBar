import { TestBed } from '@angular/core/testing';

import { NgxMultiProgressBarService } from './ngx-multi-progress-bar.service';

describe('NgxMultiProgressBarService', () => {
  let service: NgxMultiProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMultiProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
