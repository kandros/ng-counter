import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter: number = 0;
  running: boolean = false;
  private interval;

  startInterval() {
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
    this.running = true;
  }

  stopInterval() {
    clearInterval(this.interval);
    this.running = false;
  }

  resetCounter(stopCounter: boolean) {
    if (stopCounter) {
      this.stopInterval();
    }
    this.counter = 0;
  }

  ngOnInit() {
    this.startInterval();
  }

}
