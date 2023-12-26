// leave-application.component.ts

import { Component, ViewChild } from '@angular/core';
import { LeaveService } from '../leave.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html'
})
export class LeaveApplicationComponent {
  @ViewChild('leaveForm') leaveForm!: NgForm; 
  leave = {
    name:'',
    type: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: 'Pending'
  };

  constructor(private leaveService: LeaveService) {}

  applyForLeave(): void {
    this.leaveService.applyLeave(this.leave).subscribe(
      response => {
        console.log('Leave application submitted successfully', response);
        this.leaveForm.resetForm()
      },
      error => {
        console.error('Error submitting leave application', error);
      }
    );
  }
}









/*import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {

}*/
/*
// leave-application.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {
  leaveForm: any = {};

  constructor(private leaveService: LeaveService) {}

  applyForLeave() {
    this.leaveService.applyForLeave(this.leaveForm).subscribe(
      () => {
        console.log('Leave Application Submitted successfully');
        // Optionally, you can navigate to another page after submission
      },
      error => {
        console.error('Error submitting leave application:', error);
      }
    );
  }
}*/
// leave-application.component.ts
/*import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {
  leaveType: string = '';
  startDate: string = '';
  endDate: string = '';
  reason: string = '';
  leaveStatus: string = 'Pending';
  employeeName: any;
  employeeEmail: any;

  constructor(private leaveService: LeaveService) {}

  onSubmit(): void {
    const leaveData = {
      employeeName: this.employeeName, 
      employeeEmail: this.employeeEmail, 
      leaveType: this.leaveType,
      startDate: this.startDate,
      endDate: this.endDate,
      reason: this.reason,
      leaveStatus: this.leaveStatus
    };

    this.leaveService.applyForLeave(leaveData).subscribe(
      (response: any) => {
        console.log('Leave application submitted successfully', response);
      },
      (error: any) => {
        console.error('Error submitting leave application', error);
      }
    );
  }
}*/
/*import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {
 employeeId!: number;
  leaveType!: string;
  startDate!: Date;
  endDate!: Date;
  reason!: string;

  constructor(private leaveService: LeaveService) {}

  onSubmit(): void {
    const leaveData = {
      employeeId: this.employeeId,
      leaveType: this.leaveType,
      startDate: this.startDate,// Convert Date to ISO String
      endDate: this.endDate, // Convert Date to ISO String
      reason: this.reason
    };

    // Call the service method to submit the leave application
    this.leaveService.applyForLeave(leaveData).subscribe(
      (response: any) => {
        console.log('Leave application submitted successfully', response);
        // You can handle the response or navigate to another page upon successful submission
      },
      (error: any) => {
        console.error('Error submitting leave application', error);
        // Handle the error as required, maybe show an error message to the user
      }
    );
  }
}*/
