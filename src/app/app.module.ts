import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagingComponent } from './grids/paging/paging.component';
import { IgxGridModule } from 'igniteui-angular';
import { NavigationComponent } from './navigation/navigation.component';
import { SortingComponent } from './grids/sorting/sorting.component';
import { FilteringComponent } from './grids/filtering/filtering.component';
import { EditingComponent } from './grids/editing/editing.component';
import { MyDevicesComponent } from './design/my-devices/my-devices.component';
import { MyDevicesInfoComponent } from './design/my-devices-info/my-devices-info.component';
import { SettingsComponent } from './design/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    PagingComponent,
    NavigationComponent,
    SortingComponent,
    FilteringComponent,
    EditingComponent,
    MyDevicesComponent,
    MyDevicesInfoComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
