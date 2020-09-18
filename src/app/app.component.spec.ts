import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Item } from './models/Item';
import { RepoService } from './services/repo.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[RepoService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'anglian-water-flood-warning'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    const input = compiled.getElementByTagName('input')
    input.value='Cumbria'
    fixture.changeDetectorRef.detectChanges();
    const component = fixture.componentInstance;
    expect(component.filterValue).toEqual('Cumbria');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('anglian-water-flood-warning app is running!');
  });
});
