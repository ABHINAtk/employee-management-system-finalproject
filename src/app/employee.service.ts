import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getAllemployee(){
     return this.http.get(this.baseUrl);
  }

  removeEmployee(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getEmployeeById(id:any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

 
  saveStudentData(data: any){
    console.log(data);
    return this.http.post(this.baseUrl,data);
  }
getStudentById(id: number){
  return this.http.get(`${this.baseUrl}/${id}`);
}




}
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
}*/