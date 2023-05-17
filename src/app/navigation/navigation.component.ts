import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router : Router){}

  navPaths=[
    {
      path: '/',
      name:'Paging',
      exact: true
      
    },
    {
      path: '/sort',
      name:'Sorting'
    },
    {
      path: '/filter',
      name:'Filtering'
    },
    {
      path: '/edit',
      name:'Editing'
    },
  ]

  onDesign(){
    this.router.navigateByUrl('/my-device')
  }
}
