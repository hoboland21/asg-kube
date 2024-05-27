import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { tap,map,concatMap  } from 'rxjs/operators';
import { IAction } from '@app/_interfaces/IAction';
import { IUser } from '@app/_interfaces/IUser';
import { AppEnv } from '@app/_helpers/appenv';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(
    private router: Router, 
    private http: HttpClient ,
 
    private env: AppEnv) { }

  private API = this.env.WEB_API

  public getLogs(count:number): Observable<IAction[]> {
    return this.http.get<any[]>(`${this.API}/listlogs/${count}/`,httpOptions) 
  }

  public postLog(log:IAction): Observable<any> {
    if(log.action == 'TCREFRESH' || log.action =='REFRESH' ) {
      return of(log)
    }  
    return  this.http.post<any>(`${this.API}/postlog/`,log,httpOptions)
      
    
  }
}