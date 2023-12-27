import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements AfterViewInit {
  leaveApplications: any[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.fetchLeaveApplications();
  }

  fetchLeaveApplications(): void {
    this.leaveService.getLeaveApplications().subscribe(
      data => {
        this.leaveApplications = data;
      },
      error => {
        console.error('Error fetching leave applications', error);
      }
    );
  }

  
approveLeave(id: number): void {
  this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(
    response => {
      console.log('Leave application approved', response);
      this.fetchLeaveApplications(); 
    },
    error => {
      console.error('Error approving leave application', error);
    }
  );
}

rejectLeave(id: number): void {
  this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(
    response => {
      console.log('Leave application rejected', response);
      this.fetchLeaveApplications(); 
    },
    error => {
      console.error('Error rejecting leave application', error);
    }
  );
}
  
  doughnutChart: any;
  barChart: any;

  ngAfterViewInit(): void {
    this.initDoughnutChart();
    this.initBarChart();
  }

  initDoughnutChart(): void {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Inactive'],
        datasets: [{
          data: [75, 25], 
          backgroundColor: ['green', 'red']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  initBarChart(): void {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Employee 1', 'Employee 2', 'Employee 3'], 
        datasets: [{
          label: 'Leaves Taken',
          data: [5, 3, 7], 
          backgroundColor: 'blue'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
}




