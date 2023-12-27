import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  employeeData: any = [];  
  leaveDetails: any[] = [];  

  constructor(
    private employee: EmployeeService,
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    
    this.employee.getAllemployee().subscribe((allData) => {
      console.log(allData);
      this.employeeData = allData;
    });

    
    this.leaveService.getLeaveApplications().subscribe(
      data => {
        this.leaveDetails = data;  
      },
      error => {
        console.error('Error fetching leave details', error);
      }
    );
  }

}


