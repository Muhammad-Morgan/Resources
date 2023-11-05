import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-resources-information',
  templateUrl: './resources-information.component.html',
  styleUrls: ['./resources-information.component.css'],
})
export class ResourcesInformationComponent implements OnInit {
  counter = 0;
  resourceName = '';
  resourceFile = null;
  numberOfReservationDays = 0;
  numberOfReservationDay = 0;
  reservationCount = 0;
  month = '';
  conditionD: boolean = false;
  conditionT: boolean = false;
  conditionR: boolean = false;
  constructor(private shared: SharedService) {}
  /*Conditions*/
  updateValueDaysT() {
    this.conditionD = true;
  }
  updateValueDaysF() {
    this.conditionD = false;
  }
  updateValueDayT() {
    this.conditionT = true;
  }
  updateValueDayF() {
    this.conditionT = false;
  }
  updateValueResaT() {
    this.conditionR = true;
  }
  updateValueResaF() {
    this.conditionR = false;
  }
  /*-----------*/
  incCounter(e: Event) {
    e.preventDefault();
    this.counter += 1;
    this.shared.setInfoCounter(this.counter);
  }
  decCounter(e: Event) {
    e.preventDefault();
    this.counter -= 1;
    this.shared.setInfoCounter(this.counter);
  }
  updateName(e: Event) {
    /*Save the name*/
    this.resourceName = (e?.target as HTMLInputElement).value;
    this.shared.setInfoResourceName(this.resourceName);
  }
  updatePic(e: any) {
    /*Save the pic file*/
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.resourceFile = event.target.result;
        console.log(this.resourceFile)
        this.shared.setInfoResourceFile(this.resourceFile);
      };
    }
  }
  updateReservationDays(e: Event) {
    /*Save the Reservation Days Number*/
    this.numberOfReservationDays = parseInt(
      (e?.target as HTMLInputElement).value
    );
    this.shared.setInfoReservationDays(this.numberOfReservationDays);
  }
  updateReservationDay(e: Event) {
    /*Save the Month Day*/
    this.numberOfReservationDay = parseInt(
      (e?.target as HTMLInputElement).value
    );
    this.shared.setInfoReservationDay(this.numberOfReservationDay);
  }
  updateMonth(e: Event) {
    /*Save the Month*/
    this.month = (e?.target as HTMLInputElement).value;
    this.shared.setInfoMonth(this.month);
  }
  updateReservationCount(e: Event) {
    /*Save the Reservation Count*/
    this.reservationCount = parseInt((e?.target as HTMLInputElement).value);
    this.shared.setInfoReservationCount(this.reservationCount);
  }
  ngOnInit() {}
}
