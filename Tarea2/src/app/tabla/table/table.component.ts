import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  data = Array.from({ length: 15 }, (_, i) => ({
    column1: `Data ${i + 1}.1`,
    column2: `Data ${i + 1}.2`,
    column3: `Data ${i + 1}.3`,
    column4: `Data ${i + 1}.4`,
    column5: `Data ${i + 1}.5`,
    column6: `Data ${i + 1}.6`
  }));

  showColumns = {
    column1: true,
    column2: true,
    column3: true,
    column4: true,
    column5: true,
    column6: true
  };
  headerModified = false;

  toggleTable() {
    this.headerModified = !this.headerModified;
    this.showColumns.column1 = !this.showColumns.column1;
    this.showColumns.column2 = !this.showColumns.column2;
  }

}
