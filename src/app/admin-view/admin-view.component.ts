import { Component, OnInit } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { SessionService } from 'app/pages/service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  // idleState = '';
  // timedOut = false;
  // lastPing?: Date = null;

  // constructor(private idle: Idle, private keepalive: Keepalive, private router: Router) {
  //   console.log('Inside Session Method!!!!!');
  //   idle.setIdle(10);
  //   idle.setTimeout(10);
  //   idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  //   idle.onIdleEnd.subscribe(() => this.idleState = 'No Longer Idle');
  //   idle.onTimeout.subscribe(() => {
  //     this.idleState = 'Time Out';
  //     this.timedOut = true;
  //     localStorage.removeItem('ud_key');
  //     swal('Wooah!!!!', 'Session expired, Please Login Again ', 'error');
  //     this.router.navigateByUrl('/pages/login');
  //   });
  //   idle.onIdleStart.subscribe(() => this.idleState = 'You have gone idle');
  //   idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'you will log out in ' + countdown + 'seconds');
  //   console.log(this.idleState);
  //   console.log();
  //   keepalive.interval(15);
   
  //   keepalive.onPing.subscribe(() => this.lastPing = new Date());
  //   this.idle.watch();
  // //  / this.idleState = 'Started.';
  //   this.timedOut = false;
  // }
  // reset() {
  //   this.idle.watch();
  //   this.idleState = 'Started.';
  //   this.timedOut = false;
  // }
  ngOnInit() {
  }

}
