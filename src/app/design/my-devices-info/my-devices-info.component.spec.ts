import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevicesInfoComponent } from './my-devices-info.component';

describe('MyDevicesInfoComponent', () => {
  let component: MyDevicesInfoComponent;
  let fixture: ComponentFixture<MyDevicesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDevicesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDevicesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
