import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  socket : any;
  readonly uri: string = "ws://localhost:3000";
  computeData :any = {}

  public _subject = new Subject<object>();
  public event = this._subject.asObservable();

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/portfolios`);
  }

  getScenarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/scenarios`);
  }

  getFacts(): any {
    return this.http.get(`${this.baseUrl}/facts`);
  }

  public publishPortfolio(portfolio: string) {
     this.computeData.portfolio = portfolio;
     this._subject.next(this.computeData);
    console.log("publishPortfolio:"+portfolio);
  }

  public publishSID(sid: Date) {
    this.computeData.sid = sid;
    this._subject.next(this.computeData);
   console.log("publishSID:"+sid);
 }

 public publishStep(step: string) {
  this.computeData.bucketStep = step;
  this._subject.next(this.computeData);
}

public publishMaturity(maturity: string) {
  this.computeData.bucketMaturity = maturity;
  this._subject.next(this.computeData);
}

public publishFacts(facts: Array<string>) {
  this.computeData.facts = facts;
  this._subject.next(this.computeData);
  console.log("publishFacts:"+this.computeData.facts.length);
}

public publishScenario(scenario: string) {
  this.computeData.scenario = scenario;
  this._subject.next(this.computeData);
 console.log("publishScenario:"+scenario);
}

  initCommunication(){
    this.socket = io(this.uri);
  }

  startComputation(){
    this.emitMessage('startcomputation', this.computeData)
  }

  listenComputation2(eventName : string): Observable<any>{
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data => {
        subscriber.next(data);
      }))
    });
  }
  public listenComputationNotification(eventName: string): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on(eventName, (data: any) => observer.next(data));
    });
}

  emitMessage(eventName : string, data: any){
    this.socket.emit(eventName, data);

  }


}
