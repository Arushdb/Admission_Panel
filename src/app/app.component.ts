import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";
import { Event as NavigationEvent } from "@angular/router";
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'Admission-System-new';
  constructor(private router: Router,
    private idle: Idle, private keepalive: Keepalive) {

///ideal time out code//////////////////////////////////////////
/*
idle.setIdle(10);
idle.setTimeout(5);
idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

idle.onIdleEnd.subscribe(() => { 
  this.idleState = 'No longer idle.'
  console.log(this.idleState);
  this.reset();
});

idle.onTimeout.subscribe(() => {
  this.idleState = 'Timed out!';
  this.timedOut = true;
  console.log(this.idleState);
  this.router.navigate(['/login']);
});


idle.onIdleStart.subscribe(() => {
  this.idleState = 'You\'ve gone idle!'
  console.log(this.idleState);
  //this.childModal.show();
});

idle.onTimeoutWarning.subscribe((countdown) => {
  this.idleState = 'You will time out in ' + countdown + ' seconds!'
  //alert(this.idleState);
  console.log(this.idleState);
});

keepalive.interval(15);

keepalive.onPing.subscribe(() => this.lastPing = new Date());

this.reset();
*/


///////back button disbale////////////////////////////////////////
    router.events
    .pipe(
      filter(
        ( event: NavigationEvent ) => {

          return( event instanceof NavigationStart );

        }
      )
    ).subscribe(
      ( event: NavigationStart ) => {
        console.group( "NavigationStart Event" );
        console.log( "navigation id:", event.id );
        console.log( "route:", event.url );
        console.log( "trigger:", event.navigationTrigger );

        if ( event.restoredState )
        {

          console.warn(
            "restoring navigation id:",
            event.restoredState.navigationId
          );
          this.router.navigate(['/login']);
          sessionStorage.clear();

        }

        console.groupEnd();

      }
    )
  ;

   }

   reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  ngOnInit() 
  {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
}
