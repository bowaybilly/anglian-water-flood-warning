import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { FloodWarningComponent } from './components/flood-warning/flood-warning.component';
import { IFloodWarning } from './models/IFloodWarning';
import { IRootobject } from "./models/IRootobject";
import { ISettings } from './models/ISettings';
import { Item } from './models/Item';
import { FloodWarningService } from './services/flood-warning.service';
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
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('county') countyCtrl: MatSelectionList;
  constructor(public settingService: SettingsService,
    private _repoService: RepoService<IFloodWarning>,
    private resolver:ComponentFactoryResolver
    ) {
    this.locations= this.settingService.settings.counties;
  } 
  ngOnInit(): void {
   
  }
  //load flood warning based on filter value
  getFloodStatus() {
    this.container.clear();
    if (this.filterValue.length > 0) {
      this.floodTitle=`Flood warning for ${this.filterValue}`
      this._repoService.get(`?county=${this.filterValue}`)
        .subscribe((response: IRootobject) => {
          this.renderFloodWarning(response);
          
      }, (error: HttpErrorResponse) => {
          console.log(error.message);
    })
    
    } else {
      this.filterValue = '';
      this.floodTitle = `United Kingdom flood warnings`;
      this._repoService.get('')
              .subscribe((response: IRootobject) => {
                this.renderFloodWarning(response);
                
              }, (error: HttpErrorResponse) => {
                  //log any request errors to console
                console.log(error.message);
          })
    
    }
  }
  //render flood report if request returns result
  private renderFloodWarning(response: IRootobject) {
    if (response.items.length > 0) {
      //dynamically flood warning report on the fly
      const ref = this.container.createComponent(this.resolver.resolveComponentFactory(FloodWarningComponent));
      ref.instance.data = response;
      //refresh flood warning with the latest data
      ref.instance.onRefresh.subscribe((response: Item) => {
        this.refresh(response);
      });
    } else {
      this.floodTitle = `No flood warning data for ${this.filterValue}`;
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
}
