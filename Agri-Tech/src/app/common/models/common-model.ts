
export class CommonModel {
  allColumns: any;
  resource: any;
  defaultFilter: any;
  showCreateBtn: boolean = true;
  showUpdateBtn: boolean = true;
  showDeleteBtn: boolean = false;
  showExportBtn: boolean = false;
  showUploadBtn: boolean

  constructor() {
  }
  /** Returns all columns that can be displayed on a grid */
  getAllColumns(): any {
    return this.allColumns.filter(function (checked_columns: any): any {
      return !checked_columns.never_display;
    }).map(function (cols: any): any {
      return cols.value;
    });
  }
   /** Returns all columns that can be displayed on a grid - with labels */
   getAllColumnsWithLabels(): any {
    return this.allColumns.filter(function (checked_columns: any): any {
      return !checked_columns.never_display;
    }).map(function (cols: any): any {
      return cols;
    });
  }
  getCheckedColumns( never_display?: boolean  ): any {
    if (never_display) {
      return this.allColumns.filter(function (checked_columns: any): any {
        return checked_columns.checked === true && checked_columns.never_display === false;
      }).map(function (cols: any): any {
        return cols.value;
      });
    } else {
      return this.allColumns.filter(function (checked_columns: any): any {
        return checked_columns.checked === true;
      }).map(function (cols: any): any {
        return cols.value;
      });
    }
  }
   getQueryColumns(): string[] {
    return this.allColumns.filter(function (checked_columns: any): any {
        return checked_columns.in_db === true;
    }).map(function (cols: any): any {
      return cols.value;
    });
  }
}
