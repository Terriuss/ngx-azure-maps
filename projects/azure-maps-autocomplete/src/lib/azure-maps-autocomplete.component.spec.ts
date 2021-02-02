import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureMapsAutocompleteComponent } from './azure-maps-autocomplete.component';

describe('AzureMapsAutocompleteComponent', () => {
  let component: AzureMapsAutocompleteComponent;
  let fixture: ComponentFixture<AzureMapsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureMapsAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureMapsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
