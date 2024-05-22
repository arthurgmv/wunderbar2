import { TestBed } from '@angular/core/testing';

import { ApiCourseService } from './api-course.service';

describe('ApiCourseService', () => {
  let service: ApiCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
