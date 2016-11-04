/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditDataService } from './edit-data.service';

describe('Service: EditData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDataService]
    });
  });

  it('should ...', inject([EditDataService], (service: EditDataService) => {
    expect(service).toBeTruthy();
  }));
});
