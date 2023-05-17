import { Component, OnInit } from '@angular/core';

import { ColumnType } from 'igniteui-angular';
import { employeesData,  Employee} from '../paging/localData';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {


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
