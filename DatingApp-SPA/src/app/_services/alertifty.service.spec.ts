/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertiftyService } from './alertifty.service';

describe('Service: Alertifty', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertiftyService]
    });
  });

  it('should ...', inject([AlertiftyService], (service: AlertiftyService) => {
    expect(service).toBeTruthy();
  }));
});
