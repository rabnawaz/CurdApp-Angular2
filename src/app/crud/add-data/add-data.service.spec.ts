/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddDataService } from './add-data.service';

describe('Service: AddData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDataService]
    });
  });

  it('should ...', inject([AddDataService], (service: AddDataService) => {
    expect(service).toBeTruthy();
  }));
});
