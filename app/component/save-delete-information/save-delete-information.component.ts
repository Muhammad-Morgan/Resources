import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-save-delete-information',
  templateUrl: './save-delete-information.component.html',
  styleUrls: ['./save-delete-information.component.css']
})
export class SaveDeleteInformationComponent {
  weekdayTime= 
[  
{
  id: 0,
  starttime: '',
  endtime: '',
  day: ''
}
] 
 conditionalButton = false;
  popUpCondition = false;
  counter = 0;
  resourceName = '';
  resourceFile = null;
  numberOfReservationDays = 0;
  numberOfReservationDay = 0;
  reservationCount = 0;
  month = '';
  dataSaved: boolean = false;
  dataMissing: boolean = false;
  removeDay(e: Event, time: string){
    e.preventDefault()
   this.weekdayTime = this.weekdayTime.filter((item)=>item.starttime !== time)
  }
  onClick(e: Event) {
    e.preventDefault();
    this.counter = this.shared.getInfoCounter();
    this.resourceName = this.shared.getInfoResourceName();
    this.resourceFile = this.shared.getInfoResourceFile();
    this.numberOfReservationDays = this.shared.getInfoReservationDays();
    this.numberOfReservationDay = this.shared.getInfoReservationDay();
    this.reservationCount = this.shared.getInfoReservationCount();
    this.month = this.shared.getInfoMonth();
    this.weekdayTime = this.shared.getWeekDay()
    this.weekdayTime.sort((a,b)=>{
      return a.id - b.id;
    })
    if (
      this.counter != 0 &&
      this.resourceName != '' &&
      this.numberOfReservationDays != 0 &&
      this.numberOfReservationDay != 0 &&
      this.reservationCount != 0
    ) {
      
      this.dataSaved = true;
      setTimeout(() => {
        this.dataSaved = false;
      }, 2000);
      this.conditionalButton = true;
    } else {
      this.dataMissing = true;
      setTimeout(() => {
        this.dataMissing = false;
      }, 2000);
    }
  }
  togglePopUp(e: Event) {
    e.preventDefault();
    this.popUpCondition = true;
  }
  togglePopClose(e: Event) {
    e.preventDefault();
    this.popUpCondition = false;
  }

constructor (private shared: SharedService){}
}
