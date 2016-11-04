/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReEnterpasswordService } from './re-enterpassword.service';

describe('Service: ReEnterpassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReEnterpasswordService]
    });
  });

  it('should ...', inject([ReEnterpasswordService], (service: ReEnterpasswordService) => {
    expect(service).toBeTruthy();
  }));
});
