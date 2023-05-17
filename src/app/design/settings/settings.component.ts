import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settings=[
    {
      image: 'images/assets/app-usage.svg',
      content: 'App usage problem',
      forwardArr: 'images/assets/forward.svg',
      alt:'App usage problem image'
    },
    {
      image: 'images/assets/features.svg',
      content: 'Features',
      forwardArr: 'images/assets/forward.svg',
      alt: 'feature Image'
    },
    {
      image: 'images/assets/lock-installation.svg',
      content: 'Lock Installation',
      forwardArr: 'images/assets/forward.svg',
      alt: 'Normal troubleshooting'
    },
    {
      image: 'images/assets/normal-trouble-shooting.svg',
      content: 'Normal Troubleshooting',
      forwardArr: 'images/assets/forward.svg',
      alt: 'lock installation image'
    },
   
  ]

  constructor(private Location: LocationStrategy){}

  back(){
    this.Location.back( )
  }
  

}
