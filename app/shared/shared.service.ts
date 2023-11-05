import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
timeDayObject= [
{
  id: 0,
  starttime: '',
  endtime: '',
  day: ''
}
]
timeToRemove={
  startTime: '',
  endTime: ''
}
setTimeRemove(prop={
  startTime: '',
  endTime: ''
}){
  this.timeToRemove = {...this.timeToRemove,
    startTime: prop.startTime,
    endTime: prop.endTime
  } 
}
getTimeRemove(){
  return this.timeToRemove
}
startTime = ['']
endTime = ['']
weekday = ''
setEnd(prop: string){
    this.endTime.push(prop);
}
getEnd(){
  return this.endTime;
}
setWeekDay(prop = [{
  id: 0,
  starttime: '',
  endtime: '',
  day: ''
}]){
this.timeDayObject = prop
}
getWeekDay(){
return this.timeDayObject;
}
  counter = 0;
  resourceName = '';
  resourceFile = null;
  numberOfReservationDays = 0;
  numberOfReservationDay = 0;
  reservationCount = 0;
  month = '';
  setInfoCounter(counter: number) {
    this.counter = counter;
  }
  setInfoResourceName(resourceName: string) {
    this.resourceName = resourceName;
  }
  setInfoResourceFile(resourceFile: null) {
    this.resourceFile = resourceFile;
  }
  setInfoReservationDays(numberOfReservationDays: number) {
    this.numberOfReservationDays = numberOfReservationDays;
  }
  setInfoReservationDay(numberOfReservationDay: number) {
    this.numberOfReservationDay = numberOfReservationDay;
  }
  setInfoReservationCount(reservationCount: number) {
    this.reservationCount = reservationCount;
  }
  setInfoMonth(month: string) {
    this.month = month;
  }
  getInfoCounter() {
    return this.counter;
  }
  getInfoResourceName() {
    return this.resourceName;
  }
  getInfoResourceFile() {
    return this.resourceFile;
  }
  getInfoReservationDays() {
    return this.numberOfReservationDays;
  }
  getInfoReservationDay() {
    return this.numberOfReservationDay;
  }
  getInfoReservationCount() {
    return this.reservationCount;
  }
  getInfoMonth() {
    return this.month;
  }}
