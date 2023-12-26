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
          data: [75, 25], // Sample data (replace with actual data)
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
        labels: ['Employee 1', 'Employee 2', 'Employee 3'], // Sample labels
        datasets: [{
          label: 'Leaves Taken',
          data: [5, 3, 7], // Sample data (replace with actual data)
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




/*import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent {


  
}*/

/*
// hr-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  leaveApplications: any[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.loadLeaveApplications();
  }

  loadLeaveApplications(): void {
    this.leaveService.getAllLeaveApplications().subscribe(data => {
      this.leaveApplications = data;
    });
  }

  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.loadLeaveApplications();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.loadLeaveApplications();
    });
  }
}
*/
/*
// hr-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  leaveApplications: any[] = [];
  employees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchLeaveApplications();
    this.fetchEmployees();
  }

  fetchLeaveApplications(): void {
    this.leaveService.getLeaveApplications().subscribe(data => {
      this.leaveApplications = data;
    });
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.fetchLeaveApplications();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.fetchLeaveApplications();
    });
  }
}
*/
// hr-dashboard.component.ts
// hr-dashboard.component.ts
// hr-dashboard.component.ts
/*import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  leaveApplications: any[] = [];
  employees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchLeaveApplications();
    this.fetchEmployees();
  }

  fetchLeaveApplications(): void {
    this.leaveService.getLeaveApplications().subscribe(data => {
      this.leaveApplications = data;
    });
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.fetchLeaveApplications();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.fetchLeaveApplications();
    });
  }
}
*/
/*import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {

  leaveApplications: any[] = []; // Array to hold leave applications
  employees: any[] = []; // Array to hold employees

  constructor(private leaveService: LeaveService) { }

  ngOnInit(): void {
    // Fetch leave applications from service
    this.leaveService.getLeaveApplications().subscribe(data => {
      this.leaveApplications = data.leaveApplication;
    });

    // Fetch employees from service
    this.leaveService.getEmployees().subscribe(data => {
      this.employees = data.employees;
    });
  }

  // Method to get employee name using employeeId
  getEmployeeName(employeeId: number): string {
    const employee = this.employees.find(emp => emp.id === employeeId);
    return employee ? `${employee.firstname} ${employee.lastname}` : 'Unknown';
  }

  // Method to approve a leave application
  approveLeave(leaveId: number): void {
    this.leaveService.updateLeaveStatus(leaveId, 'Approved').subscribe(() => {
      // Reload leave applications after updating status
      this.ngOnInit();
    });
  }

  // Method to reject a leave application
  rejectLeave(leaveId: number): void {
    this.leaveService.updateLeaveStatus(leaveId, 'Rejected').subscribe(() => {
      // Reload leave applications after updating status
      this.ngOnInit();
    });
  }
}
*/
/*// hr-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  leaveApplicationsWithEmployees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchLeaveApplicationsWithEmployees();
  }

  fetchLeaveApplicationsWithEmployees(): void {
    this.leaveService.getLeaveApplications().subscribe(leaveApplications => {
      this.employeeService.getEmployees().subscribe(employees => {
        this.leaveApplicationsWithEmployees = leaveApplications.map(leaveApp => {
          const employee = employees.find(emp => emp.id === leaveApp.employeeId);
          return {
            ...leaveApp,
            employeeName: employee ? `${employee.firstname} ${employee.lastname}` : 'Unknown Employee'
          };
        });
      });
    });
  }

  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }
}*/
/*import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  leaveApplicationsWithEmployees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchLeaveApplicationsWithEmployees();
  }

  fetchLeaveApplicationsWithEmployees(): void {
    this.leaveService.getLeaveApplications().subscribe(leaveApplications => {
      this.employeeService.getEmployees().subscribe(employees => {
        this.leaveApplicationsWithEmployees = leaveApplications.map(leaveApp => {
          const employee = employees.find(emp => emp.id === leaveApp.employeeId);
          return {
            ...leaveApp,
            employeeName: employee ? `${employee.firstname} ${employee.lastname}` : 'Unknown Employee'
          };
        });
      });
    });
  }


  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }
}*/



/*
export class HrDashboardComponent implements OnInit {
  
  leaveApplicationsWithEmployees: any[] = [];

  constructor(private leaveService: LeaveService, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchLeaveApplicationsWithEmployees();
  }

  fetchLeaveApplicationsWithEmployees(): void {
    this.leaveService.getLeaveApplications().subscribe(leaveApplications => {
      this.employeeService.getEmployees().subscribe(employees => {
        this.leaveApplicationsWithEmployees = leaveApplications.map(leaveApp => {
          const employee = employees.find(emp => emp.id === leaveApp.employeeId);
          // Check if leaveStatus is not already set; if not, set it to 'Pending'
          const status = leaveApp.leaveStatus ? leaveApp.leaveStatus : 'Pending';
          return {
            ...leaveApp,
            employeeName: employee ? `${employee.firstname} ${employee.lastname}` : 'Unknown Employee',
            leaveStatus: status // Set the leaveStatus to 'Pending' for new applications if not already set
          };
        });
      });
    });
  }
  

  approveLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Approved').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }

  rejectLeave(id: number): void {
    this.leaveService.updateLeaveStatus(id, 'Rejected').subscribe(() => {
      this.fetchLeaveApplicationsWithEmployees();
    });
  }
}*/
