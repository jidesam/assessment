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
      image: 'assets/app-usage.svg',
      content: 'App usage problem',
      forwardArr: 'assets/forward.svg',
      alt:'App usage problem image'
    },
    {
      image: '/assets/features.svg',
      content: 'Features',
      forwardArr: 'assets/forward.svg',
      alt: 'feature Image'
    },
    {
      image: 'assets/lock-installation.svg',
      content: 'Lock Installation',
      forwardArr: 'assets/forward.svg',
      alt: 'Normal troubleshooting'
    },
    {
      image: 'assets/normal-trouble-shooting.svg',
      content: 'Normal Troubleshooting',
      forwardArr: 'assets/forward.svg',
      alt: 'lock installation image'
    },
   
  ]

  constructor(private Location: LocationStrategy){}

  back(){
    this.Location.back( )
  }
  

}
