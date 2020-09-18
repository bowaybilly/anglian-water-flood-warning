import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        
      ]
    });
    service = TestBed.inject(SettingsService);
  });

  it('should return Anglian water', () => {
    expect(service.settings.appName).toBe('Anglian water');
  });
   it('should return four flood warning image paths', () => {
    expect(service.settings.warningImages.length).toBe(4);
   });
   it('should return list of locations in the Uk', () => {
    expect(service.settings.counties.length>0).toBeTrue();
  });
});
