import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userRole: string = '';




  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const loginUrl = `${this.apiUrl}/users?username=${username}&password=${password}`;

    return this.http.get<any[]>(loginUrl).pipe(
      map(users => {
        if (users.length === 1) {
          this.loggedIn = true;
          this.userRole = users[0].role;
          return true;
        } else {
          this.loggedIn = false;
        
          return false;
        }
      }),
      catchError(() => {
        this.loggedIn = false;
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUserRole(): string {
    return this.userRole;
  }

  
}

