import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/models/Item';
import { RepoService } from 'src/app/services/repo.service';
import { SettingsService } from 'src/app/services/settings.service';

import { FloodWarningComponent } from './flood-warning.component';

describe('FloodWarningComponent', () => {
  let component: FloodWarningComponent;
  let fixture: ComponentFixture<FloodWarningComponent>;
  let settingsService: any;
  let item: Item = {
          id: '',
          description: '',
          eaAreaName: '',
          eaRegionName: '',
          floodArea: null,
          floodAreaID: '',
          isTidal: false,
          message: '',
          severity: '',
          severityLevel: 3,
          timeMessageChanged: '',
          timeRaised: '',
          timeSeverityChanged: ''
  }
  let data= {
    context: '',
    meta: null,
    items: [

      {
          id: '',
          description: '',
          eaAreaName: '',
          eaRegionName: '',
          floodArea: null,
          floodAreaID: '',
          isTidal: false,
          message: '',
          severity: '',
          severityLevel: 3,
          timeMessageChanged: '',
          timeRaised: '',
          timeSeverityChanged: ''
      },
        
      {
          id: '',
          description: '',
          eaAreaName: '',
          eaRegionName: '',
          floodArea: null,
          floodAreaID: '',
          isTidal: false,
          message: '',
          severity: '',
          severityLevel: 3,
          timeMessageChanged: '',
          timeRaised: '',
          timeSeverityChanged: ''
  }
    ]
}
  beforeEach(async(() => {
    settingsService=jasmine.createSpyObj(['settings'])
    TestBed.configureTestingModule({
      declarations: [FloodWarningComponent],
      imports:[HttpClientTestingModule],
      providers: [
        RepoService,
        {provider:SettingsService, useValue:settingsService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    settingsService.settings = {
       appName: 'Anglian water',
     icon: 'assets/appicon.png',
     counties: [],warningImages:[
       'Severe.png',
       'Warning.png',
       'Alert.png',
       'Downgrade.png'
     ]
    };
    fixture = TestBed.createComponent(FloodWarningComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

    it('should return flood alert warning image', () => {
      const imageUrl = component.getImage(item);
      expect(imageUrl).toContain('assets/Alert.png')
    });

   it('should create 14 span tags with text-description css class', () => {
     const debugElement = fixture.debugElement;
     const elements=debugElement.queryAll(x=>x.nativeElement.className.includes('text-description'))
     expect(elements.length).toEqual(14)
   });
  
});
