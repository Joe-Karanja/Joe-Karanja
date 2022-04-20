import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import Swal from 'sweetalert2';
@Injectable(
    {
        providedIn: 'root',
    }
)
export class HttpService {
    url = this._globalService.apiHost;
    // url = environment.baseUrl;
    churchid = 'churchid';
    branchid = 'branchid';
    serviceid = 'serviceid';
    userid = 'userid';
    requesttypeid = 'requesttypeid';
    categoryid = 'categoryid';
    eventtypeid = 'eventtypeid';
    id = 'id';
    page = 'page';
    size = 'size';
    startdate = 'startdate';
    enddate = 'enddate';
    period = 'period'

    empObjArr = [];

    param$: Observable<string>;
    private paramSubject: ReplaySubject<any>;

    branchInfo$: Observable<any>;
    private branchSubject: ReplaySubject<any>;

    requestInfo$: Observable<any>;
    private requestSubject: ReplaySubject<any>;

    dateInfo$: Observable<any>;
    private dateSubject: ReplaySubject<any>;

    periodInfo$: Observable<any>;
    private periodSubject: ReplaySubject<any>;

    churchInfo$: Observable<any>;
    private churchSubject: ReplaySubject<any>;

    private channel: BehaviorSubject<boolean> = new BehaviorSubject(true);
    currentChannel$: Observable<boolean> = this.channel.asObservable();

    private dataSource = new BehaviorSubject<any>(this.empObjArr);
    content = this.dataSource.asObservable();

    setEmpArr(content) {
        this.dataSource.next(content);
    }

    setParam(param: any) {
        this.paramSubject.next(param);
    }

    changeChannel(channel: boolean): any {
        this.channel.next(channel);
    }

    setBranchInfo(param: any) {
        this.branchSubject.next(param);
    }
    setChurchInfo(param: any) {
        this.churchSubject.next(param);
    }

    setRequestInfo(param: any) {
        this.requestSubject.next(param);
    }

    setDateInfo(param: any) {
        this.dateSubject.next(param);
    }

    setPeriodInfo(param: any) {
        this.periodSubject.next(param);
    }

    constructor(
        private http: HttpClient,
        private _globalService: GlobalService,
        private _authService: AuthService,
    ) {
        this.paramSubject = new ReplaySubject(1);
        this.param$ = this.paramSubject.asObservable();

        this.branchSubject = new ReplaySubject<any>(1);
        this.branchInfo$ = this.branchSubject.asObservable();

        this.requestSubject = new ReplaySubject<any>(1);
        this.requestInfo$ = this.requestSubject.asObservable();

        this.dateSubject = new ReplaySubject<any>(1);
        this.dateInfo$ = this.dateSubject.asObservable();

        this.churchSubject = new ReplaySubject<any>(1);
        this.churchInfo$ = this.churchSubject.asObservable();

        this.periodSubject = new ReplaySubject<any>(1);
        this.periodInfo$ = this.periodSubject.asObservable();
    }
    private static createCompleteRoute(route: string, envAddress: string): string {
        return `${envAddress}/${route}`;
    }
    convertToArray(data: any) {
        let jsonToBeUsed = [];
        for (let type in data) {
          let item = {};
          item['key'] = type;
          item['value'] = data[type];
          jsonToBeUsed.push(item);
        }
        return jsonToBeUsed;
    }
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            //  Authorization: 'Bearer '+localStorage.getItem("auth_token") ? localStorage.getItem('auth_token').replace(/^"|"$/g, '') : ""
        });
    }
    private getHeadersWithoutBearer(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    public login(endpoint: any, model: any): any {
        return this.http.post(this._globalService.apiHost + endpoint, model, { headers: this.getHeadersWithoutBearer() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public post(endpoint: string, model: any): any {
        return this.http.post(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }

    public postResource(model: any): any {
        return this.http.post(this._globalService.testUrl, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public getFile(url: string) {
        return 'https://test-api.ekenya.co.ke/echurch/api/files?url=' + url;
    }
    public patch(endpoint: string, model: any): any {
        return this.http.patch(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public put(endpoint: string, model: any): any {
        return this.http.put(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public getResource(route: string, httpParams?: any): any {
        return this.http.get<any>(HttpService.createCompleteRoute(route, this.url),
            { headers: this.getHeaders(), params: httpParams })
    }
    public get(endpoint: string): any {
        let params = new HttpParams();
        return this.http.get(this._globalService.apiHost + endpoint,
            {
                headers: this.getHeaders(), params: params
            }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public delete(endpoint: string): any {
        return this.http.delete(this._globalService.apiHost + endpoint, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    getFromJson(endpoint: string): any {
        return this.http.get(endpoint);
    }
    private handleError(error: Response | any) {
        let errorMessage: any = {};
        if (error.status === 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: 'Sorry, there was a connection error occurred. Please try again.',
            };
        } else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
    format(date: NgbDateStruct, format: string): string {
        if (!date) { return ''; }
        const mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid()) { return ''; }
        return mdt.format(format);
    }
    deleteResource(data: any, endpoint: string, refreshList: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'

        }).then((result) => {
            if (result.value) {
                console.log(data , endpoint);
                const model = data
                this.post(endpoint, model)
                    .subscribe(res => {
                        console.log(res);
                        
                        if (res['success']) {
                            Swal.fire(
                                'Successful!',
                                'Deletion successful.',
                                'success'
                            );
                            refreshList();
                        } else {
                            Swal.fire(
                                'Error!',
                                'Deletion failed, ',// + res['message'],
                                'error'
                            );
                        }
                    });
                // console.log(model);
            } else {
                refreshList();
            }
        });

    }
    confirmRequest(item) {
        Swal.fire({
          title: 'Are you sure want to Approve?',
          text: 'Proceed to approve',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, Continue!',
          cancelButtonText: 'No, Cancel'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Approved!',
              'Your record is Approved.',
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your record wasn\'t Approved :)',
              'error'
            )
          }
        })
    }
}
