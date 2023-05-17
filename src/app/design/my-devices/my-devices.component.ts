import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.scss']
})
export class MyDevicesComponent implements OnInit {
constructor(private router:Router){}

  ngOnInit(): void {
  }
  onDeviceInfo(){
    this.router.navigateByUrl('/my-device/device-info')
  }

}
