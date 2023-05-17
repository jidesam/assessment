import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ColumnType, IgxGridComponent } from 'igniteui-angular';
import { Employee, employeesData } from '../paging/localData';


@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss']
})
export class EditingComponent implements OnInit {


  
  localData: Employee[] = [];
  title = 'paging';

  ngOnInit(): void {
    this.localData = employeesData;
  }

   onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }



}
