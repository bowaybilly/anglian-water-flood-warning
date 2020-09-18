import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FloodWarningComponent } from './components/flood-warning/flood-warning.component';
import { IFloodWarning } from './models/IFloodWarning';
import { IRootobject } from "./models/IRootobject";
import { ISettings } from './models/ISettings';
import { Item } from './models/Item';
import { RepoService } from './services/repo.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit,OnInit {
  filterValue: string = '';
  settings: ISettings;
  locations: string[];
  floodTitle: string = '';
  displayProgress: boolean = false;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('county') countyCtrl: MatSelectionList;
  constructor(public settingService: SettingsService,
    private _repoService: RepoService<IFloodWarning>,
    private resolver: ComponentFactoryResolver,
    private _snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
    ) {
    this.locations= this.settingService.settings.counties;
  } 
  ngOnInit(): void {
   
  }
  //load flood warning based on filter value
  getFloodStatus() {
    this.container.clear();
    if (this.filterValue.length > 0) {
      //load flood warning for selected location
      this.displayProgress = true;
       this.cdr.detectChanges();
      this.floodTitle=`Flood warning for ${this.filterValue}`
      this._repoService.get(`?county=${this.filterValue}`)
        .subscribe((response: IRootobject) => {
          this.displayProgress = false;
          this.renderFloodWarning(response);
        }, (error: HttpErrorResponse) => {
            this.displayProgress = false;
          console.log(error.message);
    })
    
    } else {
       //load flood warning for selected location
      this.displayProgress = true;
      this.filterValue = '';
      this.floodTitle = `United Kingdom flood warnings`;
       this.cdr.detectChanges();
      this._repoService.get('')
              .subscribe((response: IRootobject) => {
                this.displayProgress = false;
                this.renderFloodWarning(response);
              }, (error: HttpErrorResponse) => {
                   this.displayProgress = false;
                  //log any request errors to console
                  console.log(error.message);
                  
          })
    
    }
  }
  //render flood report if request returns result
 renderFloodWarning(response: IRootobject) {
    if (response.items.length > 0) {
      //dynamically flood warning report on the fly
      const ref = this.container.createComponent(this.resolver.resolveComponentFactory(FloodWarningComponent));
      ref.instance.data = response;
      //refresh flood warning with the latest data
      ref.instance.onRefresh.subscribe((response: Item) => {
        this.refresh(response);
      });
    } else {
      //display no flooding message if there isn't any
      this.floodTitle = `No flood warning data for ${this.filterValue}`;
      this._snackBar.open(this.floodTitle,'',{duration:6000})
    }
  }

  ngAfterViewInit(): void {
   
     this.getFloodStatus();
     this.countyCtrl.selectionChange.subscribe((selected:MatSelectionListChange) => {
       this.filterValue = selected.option.value;
       this.getFloodStatus();
    });
  }
  //filter location list when value is supplied by user
  appyFilterValue() {
    this.locations = this.settingService.settings.counties
      .filter((county: string) =>  county.toLowerCase().includes(this.filterValue.toLowerCase()) )
  }
  refresh(item: Item) {
    //refresh component by performing a new request ONLY for the county selected
    this._repoService.get(`?county=${item.floodArea.county}`)
    .subscribe((response: IRootobject) => {
           
                this.renderFloodWarning(response);
                
            }, (error: HttpErrorResponse) => {
                console.log(error.message);
          })
    
  }
  //current flood status loads all flood warnings
  currentFloodStatus() {
    this.filterValue = '';
    this.getFloodStatus();
  }
}
