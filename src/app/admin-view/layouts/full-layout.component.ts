import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'app/pages/service/authentication.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { locale } from 'moment';
// import * as swal from 'sweetalert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  idleState = '';
  timedOut = false;
  lastPing?: Date = null;
  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    // console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private _authservice: AuthenticationService, private idle: Idle,
    private keepalive: Keepalive, private router: Router) {
    // console.log('Inside Session Method!!!!!');
    idle.setIdle(1000);
    idle.setTimeout(10);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No Longer Idle');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Time Out';
      this.timedOut = true;
      localStorage.removeItem('ud_key');
      // sessionStorage.removeItem('ud_key');
      swal('Sorry!!!!', 'Session expired, Please Login Again ', 'error');
      this.router.navigateByUrl('/pages/login');
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You have gone idle');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'you will log out in ' + countdown + ' seconds ');
    // console.log(this.idleState);
    // console.log();
    keepalive.interval(1500);
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.idle.watch();
    // this.idleState = 'Started.';
  }

  ngOnInit(): void {
   let popit = true;
    window.onload = function() {
           if (popit == true) {
               popit = true;
              //  return 'Are you sure you want to leave?';
         }
        else {
           popit = false;
           localStorage.removeItem('ud_key');
           localStorage.removeItem('userMobile');
           return 'Are you sure you want to leave?';
         }
        };
    };

  logOut() {
    // console.log('click');
    this._authservice.logout();
  }

  get user(): any {
    return localStorage.getItem('userMobile');
}

}
