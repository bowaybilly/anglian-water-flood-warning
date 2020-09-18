import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsService } from 'src/app/services/settings.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let settingSettingsMock:any
  beforeEach(async(() => {
    settingSettingsMock=jasmine.createSpyObj(['settings'])
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {provide:SettingsService,useValue:settingSettingsMock}
      ]
    })
    .compileComponents();
  }));
  beforeEach(async() => {
      settingSettingsMock.settings=({
      appName: 'Anglian water',
      icon: 'assets/appicon.png',
      counties: []
      });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  

  it('should display Anglian Water in header', () => {
    const debugElement = fixture.debugElement;
    const elements     = debugElement.queryAll(x=>x.nativeElement.className.includes('d-inline-block'));
    expect(elements[1].nativeElement.textContent).toEqual('Anglian water');
  
  });

  it('should render image in template', () => {
    
    const debugElement = fixture.debugElement;
    const elements     = debugElement.queryAll(x=>x.nativeElement.className.includes('d-inline-block'));
    expect(elements[0].nativeElement.src).toContain('assets/appicon.png');
   });
  
});
