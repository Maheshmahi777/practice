import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';
import { map, of } from 'rxjs';

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
  }

  getUsers() {
    this.practiceService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
