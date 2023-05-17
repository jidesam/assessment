import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { PagingComponent } from './grids/paging/paging.component';
import { SortingComponent } from './grids/sorting/sorting.component';
import { FilteringComponent } from './grids/filtering/filtering.component';
import { EditingComponent } from './grids/editing/editing.component';
import { MyDevicesComponent } from './design/my-devices/my-devices.component';
import { MyDevicesInfoComponent } from './design/my-devices-info/my-devices-info.component';
import { SettingsComponent } from './design/settings/settings.component';


const routes: Routes = [
  {path:'', component: NavigationComponent, children:[
  {path:'', component:PagingComponent},
  {path: 'sort', component: SortingComponent},
  {path:'filter', component: FilteringComponent},
  {path:'edit', component: EditingComponent}
  ] },
  {path: 'my-device', component: MyDevicesComponent},
  {path:'device-info', component: MyDevicesInfoComponent},
  {path:'settings', component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
