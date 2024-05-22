import { TestBed } from '@angular/core/testing';

import { ManageCourseService } from './manage-course.service';

describe('ManageCourseService', () => {
  let service: ManageCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
