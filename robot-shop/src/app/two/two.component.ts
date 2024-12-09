import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from '../three/three.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule, ThreeComponent],
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent {}
