/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditService } from './edit.service';

describe('Service: Edit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditService]
    });
  });

  it('should ...', inject([EditService], (service: EditService) => {
    expect(service).toBeTruthy();
  }));
});
