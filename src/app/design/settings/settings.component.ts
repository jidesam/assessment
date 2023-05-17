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
      image: 'assets/images/app-usage.svg',
      content: 'App usage problem',
      forwardArr: 'assets/images/forward.svg',
      alt:'App usage problem image'
    },
    {
      image: 'assets/images/features.svg',
      content: 'Features',
      forwardArr: 'assets/images/forward.svg',
      alt: 'feature Image'
    },
    {
      image: 'assets/images/lock-installation.svg',
      content: 'Lock Installation',
      forwardArr: 'assets/images/forward.svg',
      alt: 'Normal troubleshooting'
    },
    {
      image: 'assets/images/normal-trouble-shooting.svg',
      content: 'Normal Troubleshooting',
      forwardArr: 'assets/images/forward.svg',
      alt: 'lock installation image'
    },
   
  ]

  constructor(private Location: LocationStrategy){}

  back(){
    this.Location.back( )
  }
  

}
