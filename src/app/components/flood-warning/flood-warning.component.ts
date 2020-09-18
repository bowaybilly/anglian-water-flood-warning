import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IRootobject } from 'src/app/models/IRootobject';
import { Item } from 'src/app/models/Item';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-flood-warning',
  templateUrl: './flood-warning.component.html',
  styleUrls: ['./flood-warning.component.less']
})
export class FloodWarningComponent implements OnInit {
  data: IRootobject;
@Output() onRefresh = new EventEmitter<Item>();
  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
  }
   getImage(item:Item):string {
    const imageUrl = this.settingsService.settings.warningImages[item.severityLevel-1];
    return `assets/${imageUrl}`
   }
  refresh(item: Item) {
    this.data.items=this.data.items.filter(x=>x.floodArea.county!=item.floodArea.county)
    this.onRefresh.emit(item);
  }
}
