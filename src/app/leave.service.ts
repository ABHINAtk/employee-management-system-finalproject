import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private baseUrl = 'http://localhost:3000/leaveApplication';

  constructor(private http: HttpClient) {}

  getLeaveApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  applyLeave(leave: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, leave);
  }

  

  updateLeaveStatus(leaveId: number, status: string): Observable<any> {
    const updateData = { status }; 
    return this.http.patch<any>(`${this.baseUrl}/${leaveId}`, updateData);
  }
}






