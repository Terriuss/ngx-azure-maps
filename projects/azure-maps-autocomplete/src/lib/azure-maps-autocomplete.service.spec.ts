import { TestBed } from '@angular/core/testing';

import { AzureMapsAutocompleteService } from './azure-maps-autocomplete.service';

describe('AzureMapsAutocompleteService', () => {
  let service: AzureMapsAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureMapsAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
