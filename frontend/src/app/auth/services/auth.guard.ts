import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthService);
  const router =inject(Router)
  const isLoggedIn = authService.isLoggedIn();
  if (isLoggedIn) {
    return true; // User is authenticated, allow access
  } else {
    router.navigate(['/auth/login']);
    window.alert('You need to log in first.'); // Show alert for demonstration
    return false; // Prevent access
  }
  return true;
};
