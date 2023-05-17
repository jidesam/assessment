import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-devices-info',
  templateUrl: './my-devices-info.component.html',
  styleUrls: ['./my-devices-info.component.scss']
})
export class MyDevicesInfoComponent {
  constructor(private location: LocationStrategy){}

back(){
  this.location.back()

}

}
