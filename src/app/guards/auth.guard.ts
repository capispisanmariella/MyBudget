import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.checkAuth();
  }

  canActivateChild() {
    return this.checkAuth();
  }

  canMatch() {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
}