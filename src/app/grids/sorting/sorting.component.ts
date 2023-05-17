import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from '../paging/localData';
import { ColumnType } from 'igniteui-angular';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit{

 

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
