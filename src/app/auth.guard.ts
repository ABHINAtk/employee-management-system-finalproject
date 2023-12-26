
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    if (this.authService.isLoggedIn() && this.authService.getUserRole() === expectedRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
    alert("Please login to continue...");
    
  }
}






