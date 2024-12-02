import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  users: any;

  constructor(private practiceService: PracticeService) {}

  ngOnInit() {
    this.getUsers();
    // Observable example
    let source$ = of(1, 2, 3, 4, 5);
    source$.pipe(map((val) => val * 2)).subscribe({
      next(value) {
        console.log('doubled', value);
      },
    });

    source$.subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Emission done');
      },
    });
    // Observable example

    // observable error example

    let observableWithError = new Observable((subscriber) => {
      subscriber.next('1');
      subscriber.next('2');
      subscriber.next('3');
      subscriber.error('Something went wrong');
      subscriber.complete();
    });
    observableWithError.subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Emission done');
      },
    });
    // observable error example
    // In this case, the Observable emits values but encounters an error,
    // which is handled by the error callback in the subscribe() method.
    //Notice that after the error, the complete() method isn't called because an error
    //halts the stream.
  }

  getUsers() {
    this.practiceService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
