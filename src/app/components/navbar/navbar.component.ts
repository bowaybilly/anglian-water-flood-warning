import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'navbar',
  
  template: `
    <mat-card>
          
         
        <img class='d-inline-block' [src]='settings.icon' style='height:40px;'>
       
        <span class='d-inline-block'>{{settings.appName}}</span>
    </mat-card>
  `,
  styles: [
    `
      span.d-inline-block{
        font-size:1.2em;
        font-family:'Tahoma';
        letter-spacing:3px;
      }
      .vertical{
        height:40px;
        padding:10px;
        background-color:purple;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  settings: { appName: string; icon: string; };

  
  constructor(private settingService: SettingsService) { 
    this.settings = settingService.settings;
     
  }

  ngOnInit(): void {
  }

}
