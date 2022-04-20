import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from '../../../common/services/http.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ng-shared-filter',
  templateUrl: './ng-shared-filter.component.html',
  styleUrls: ['./ng-shared-filter.component.scss']
})
export class NgSharedFilterComponent implements OnInit {
  @Output() pickedDateRange = new EventEmitter<any>();
  @Output() selectedPeriod = new EventEmitter<string>();
  defaultRange: Object;
  public today: Date = new Date(new Date().toDateString());
  public weekStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());
  public weekEnd: Date = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
    - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString());
  public monthStart: Date = new Date(new Date(new Date().setDate(1)).toDateString());
  public monthEnd: Date = this.today;
  public lastStart: Date = new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString());
  public lastEnd: Date = this.today;
  public yearStart: Date = new Date(new Date(new Date().setDate(new Date().getDate() - 365)).toDateString());
  public yearEnd: Date = this.today;
  public minDate: any;
  public maxDate: any;
  daterange: any;
  periods: any[] = [
    { value: 'daily', viewValue: 'Daily' },
    { value: 'weekly', viewValue: 'Weekly' },
    { value: 'monthly', viewValue: 'Monthly' }
  ];
  constructor(
    private httpService: HttpService,
    public translate: TranslateService

  ) {
    this.defaultRange = this.yearStart
    this.minDate = moment(this.yearStart, '').format('DD-MM-YYYY')
    this.maxDate = moment(this.yearEnd, '').format('DD-MM-YYYY')
  }
  ngOnInit(): void {
    this.setInitialDateRange();
  }
  setInitialDateRange() {
    if (this.daterange) {
      this.daterange.end = moment(this.yearEnd, '').format('YYYY-MM-DD')
      this.daterange.start = moment(this.yearStart, '').format('YYYY-MM-DD')
      this.httpService.setDateInfo(this.daterange);
      this.defaultRange = `${this.daterange.start} - ${this.daterange.end}`
    }

    // console.log(this.defaultRange);
  }
  selectedDate(value: any) {
    // use passed valuable to update state
    this.daterange.start = moment(value.startDate, '').format('YYYY-MM-DD')//this.globalService.transformDateRange(value.startDate);
    this.daterange.end = moment(value.endDate, '').format('YYYY-MM-DD')//this.globalService.transformDateRange(value.endDate);
    this.pickedDateRange.emit(this.daterange);
  }
  onPeriodSelect(value: string) {
    this.selectedPeriod.emit(value)
  }
}
