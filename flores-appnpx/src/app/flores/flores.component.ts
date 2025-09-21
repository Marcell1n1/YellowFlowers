import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent {
  tulipanes = [
    'flores.png',
    'flores.png',
    'flores.png',
    'flores.png',
    'flores.png'
  ];
}
