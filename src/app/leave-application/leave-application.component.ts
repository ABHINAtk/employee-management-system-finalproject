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









