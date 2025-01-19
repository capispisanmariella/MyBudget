import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() code: string = '404';
  @Input() title: string = 'Page Not Found';
  @Input() message: string = 'The page you are looking for does not exist.';

  constructor(private router: Router) {}

  goBack(): void {
    window.history.back();
  }
}