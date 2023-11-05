import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
class slot {
  startTime: string = '';
  endTime: string = '';
}
class day {
  name: string = '';
  condition: boolean = false;
  index: number = 0;
  alertCond: boolean = false;
  alertCondS: boolean = false;
  addCondi: boolean = false;
  schedule: Array<slot> = [{ startTime: '', endTime: '' }];
}
@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css'],
})
export class WeekdaysComponent {
  weekDAys = [
    'saturday',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday'
  ]
  timesToRemove={
    startTime: '',
    endTime: ''
  }
  weekday = ''
  tempObject = {
    id: 0,
    starttime: '',
    endtime: '',
    day: ''
  }
  newObject=[{
    id: 0,
    starttime: '',
    endtime: '',
    day: ''
  }]
  dayTimeArray = [
    {
      id: 0,
      starttime: '',
      endtime: '',
      day: ''
    }
  ]
  advancedCondition: boolean = true
  advancedConditionA: boolean = false
  days: Array<day> = [
    {
      alertCondS: false,
      index: 0,
      name: 'Saturday',
      condition: false,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 1,
      name: 'Sunday',
      condition: true,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 2,
      name: 'Monday',
      condition: true,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 3,
      name: 'Tuesday',
      condition: true,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 4,
      name: 'Wednsday',
      condition: true,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 5,
      name: 'Thursday',
      condition: true,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
    {
      alertCondS: false,
      index: 6,
      name: 'Friday',
      condition: false,
      addCondi: false,
      schedule: [{ startTime: '', endTime: '' }],
      alertCond: false,
    },
  ];
  toggleCondition(i: number) {
    this.days[i].condition = !this.days[i].condition;
  }
  enableAdvanced(event: Event){
    event.preventDefault()
    this.advancedCondition = !this.advancedCondition
  }
/*Toggle Functions*/
  addSlot(indexOfDay: number, event: Event) {
    event.preventDefault();
    this.days[indexOfDay].schedule.push({ startTime: '', endTime: '' });
    this.days[indexOfDay].addCondi = true;
    this.advancedConditionA = !this.advancedConditionA
  }
  removeSlot(indexOfDay: number, indexOfSlot: number, event: Event) {
    event.preventDefault();
    this.days[indexOfDay].schedule.pop();
    this.timesToRemove = {...this.timesToRemove,
    startTime: this.days[indexOfDay].schedule[indexOfSlot].startTime,
    endTime: this.days[indexOfDay].schedule[indexOfSlot].endTime
    };
    this.move.setTimeRemove(this.timesToRemove)
    if (this.days[indexOfDay].schedule.length <= 1) {
      this.days[indexOfDay].addCondi = false;
    }
  }
/*Add-Remove Functions*/
  copySlot(indexOfDay: number, event: Event, indexOfSlot: number) {
    event.preventDefault();
    this.days[indexOfDay].index = indexOfSlot
    this.days[indexOfDay].alertCond = true;
    setTimeout(() => {
      this.days[indexOfDay].alertCond = false;
    }, 1000);
}
copySlotS(indexOfSlot: number, indexOfDay: number, event: Event) {
    event.preventDefault();
    this.days[indexOfDay].index = indexOfSlot
    this.days[indexOfDay].alertCondS = true;
    setTimeout(() => {
      this.days[indexOfDay].alertCondS = false;
    }, 1000);
  }
/*Copy Funcitons*/
  updateStartTime(indexOfDay: number, indexOfSlot: number, event: Event) {
    this.days[indexOfDay].schedule[indexOfSlot].startTime = (
      event?.target as HTMLInputElement
    ).value;
    this.weekday = this.weekDAys[indexOfDay]
    this.tempObject = {...this.tempObject, day: this.weekday}
    this.tempObject.starttime = this.days[indexOfDay].schedule[indexOfSlot].startTime
  }
  updateEndTime(indexOfDay: number, indexOfSlot: number, event: Event) {
    this.days[indexOfDay].schedule[indexOfSlot].endTime = (
      event?.target as HTMLInputElement
    ).value;
this.tempObject = {...this.tempObject, endtime: this.days[indexOfDay].schedule[indexOfSlot].endTime} 
this.tempObject = {...this.tempObject, id: indexOfDay}
this.dayTimeArray.push(this.tempObject)
this.move.setWeekDay(this.dayTimeArray)
  }
  constructor(private move: SharedService){}
}

