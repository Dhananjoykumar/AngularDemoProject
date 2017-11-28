import { Injectable } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Injectable()
export class SessionService {

  idleState = 'Not Started';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, private keepalive: Keepalive) { 
    // idle.setIdle(5);
    // idle.setTimeout(5);
    // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // idle.onIdleEnd.subscribe(() => this.idleState = 'No Longer Idle');
    // idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Time Out';
    //   this.timeOut = true;
    // });
    // idle.onIdleStart.subscribe(() => this.idleState = 'You have gone idle');
    // idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'you will time out in ' + countdown+ 'seconds');
    // keepalive.interval(15);
    // keepalive.onPing.subscribe(() => this.lastPing = new Date());
    // // this.reset();

  }
  keepSession(idle: Idle, keepalive: Keepalive) {
    console.log('Inside Session Method!!!!!');
    idle.setIdle(10);
    idle.setTimeout(10);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No Longer Idle');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Time Out';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You have gone idle');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'you will time out in ' + countdown + 'seconds');
    console.log(this.idleState);
    console.log();
    keepalive.interval(15);
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    // this.reset();
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  // reset() {
  //   this.idle.watch();
  //   this.idleState = 'Started.';
  //   this.timedOut = false;
  // }

}
