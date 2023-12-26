import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:3000/leaveApplication';

  constructor(private http: HttpClient) {}

  // Fetch all leave applications
  getLeaveApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Apply for leave
  applyForLeave(leaveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, leaveData);
  }

  // Update leave status
  updateLeaveStatus(id: number, status: string): Observable<any> {
    const updateUrl = `${this.apiUrl}/${id}`;
    return this.http.patch<any>(updateUrl, { leaveStatus: status });
  }
}

