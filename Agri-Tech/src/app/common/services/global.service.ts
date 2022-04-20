import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
// import { ChannelDetails } from '../models/interface-model';
import { DeviceDetectorService } from 'ngx-device-detector';
import Swal from 'sweetalert2';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class GlobalService {
  public apiHost: string;
  public testUrl: string;
  // channel_details: ChannelDetails
  public setting: any = {};
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  mobileRegex = "^((\\+91-?)|0)?[0-9]{12}$";
  channel_details: { useragentversion: string; useragent: string; };
  constructor(private datePipe: DatePipe, private deviceService: DeviceDetectorService) {
    this.apiHost = "https://test-api.ekenya.co.ke/church-apis/church-apis";
    // this.apiHost = "https://test-api.ekenya.co.ke/echurch/api"//environment.baseUrl;
    // this.testUrl = 'http://10.20.2.59:6550/db-api/execute-operation';
    this.channel_details = {
      useragentversion: this.deviceService.getDeviceInfo().os_version,
      useragent: this.deviceService.getDeviceInfo().userAgent
    };
  }
  momentFomat(date) {
    return moment(date, '').format('DD MMM YY')
  }

  loadGlobalSettingsFromLocalStorage(): void {
    if (localStorage.getItem('backend-setting') != null) {
      this.setting = JSON.parse(localStorage.getItem('backend-setting'));
    }

  }

  public handleServerErrors(result: any): any {
    let isValidationError = false;
    let errorMessage;

  }

  public validateOnClientSide(validateForm: any): boolean {
    let hasClientValidationError = false;
    for (const i in validateForm.controls) {
      if (validateForm.controls) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
        if (validateForm.controls[i].errors !== null) {
          hasClientValidationError = true;
        }
      }
    }
    return hasClientValidationError;
  }

  // get Unique values in an array
  public uniqueBy(arr: any, fn: any): any {
    const unique = {};
    const distinct = [];
    arr.forEach(function (x: any): any {
      const key = fn(x);
      if (!unique[key]) {
        distinct.push(key);
        unique[key] = true;
      }
    });
    return distinct;
  }

// Returns an array of dates between the two dates
enumerateDaysBetweenDates(startDate: any, endDate: any): any {
  startDate = moment(startDate);
  endDate = moment(endDate);
  const now = startDate;
  const dates = [];
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'days');
  }
  return dates;
}
transformDate(date: NgbDateStruct) {
  const picked_date = new Date(date.year, date.month - 1, date.day);
  return this.datePipe.transform(picked_date, 'yyyy-MM-dd');
}

transformDateRange(dateRange: any) {
  const newDate = dateRange.toString().split(' ');
  const month = newDate[1];
  const day = newDate[2];
  const year = newDate[3];
  return this.stringToDate(month + ' ' + day + ', ' + year);
}

stringToDate(dateString: string) {
  return { year: new Date(dateString).getFullYear(), month: new Date(dateString).getMonth() + 1, day: new Date(dateString).getDate() };
}

stringToTime(timeString: string) {
  const newTime = timeString.split(':');
  return { hour: +newTime[0], minute: +newTime[1], second: +newTime[2] };
}

transformTime(time: any, seconds ?: boolean): any {
  if (seconds) {
    return time.hour + ':' + time.minute + ':' + time.second;
  } else {
    return time.hour + ':' + time.minute;
  }
}

backDate(date) {
  const newDate = new Date(date.year, date.month, date.day);
  return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 365);
}

  /**
   * Shuffles array in place. ES6 version
   */
  public shuffle(a: any): any {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

  public getUserInfo(): any {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}
  public getUserPermissions(): any {
  const permissions = localStorage.getItem('permissions');
  return JSON.parse(permissions);
}
  public getToken(): any {
  console.log(localStorage.getItem('auth_token'));

  return localStorage.getItem('auth_token');
}
}
