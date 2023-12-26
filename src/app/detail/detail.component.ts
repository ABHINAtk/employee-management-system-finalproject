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


/*import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../leave.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
 

  constructor(private employee:EmployeeService,private route: ActivatedRoute, private leaveService: LeaveService) {}

  employeeData : any = []
  ngOnInit(): void {
    this.employee.getAllemployee().subscribe((allData)=>{
      console.log(allData);
      this.employeeData=allData;

      
       
 } );
  }
  removeEmployee( employee_id :any){
    this.employee.removeEmployee(employee_id).subscribe((result)=>{
    //console.log(result);
    this.ngOnInit();
    } );
  }

}/*
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
  employeeId: number | undefined; // Assuming you'll get this ID from the route parameter
  approvedLeaves: any[] = [];
  rejectedLeaves: any[] = [];
  leaveData: any[] = [];

  constructor(private employee:EmployeeService,private route: ActivatedRoute,
    private leaveService: LeaveService
) {}

  employeeData : any = []
  ngOnInit(): void {
    this.employee.getAllemployee().subscribe((allData)=>{
      console.log(allData);
      this.employeeData=allData;
       
 } );
 this.employeeId = +this.route.snapshot.paramMap.get('id')!;


    // Fetch approved leaves for the employee
    this.leaveService.getEmployeeLeaves(this.employeeId).subscribe(data => {
      this.approvedLeaves = data.filter((leave: { status: string; }) => leave.status === 'approved');
      this.rejectedLeaves = data.filter((leave: { status: string; }) => leave.status === 'rejected');
    });
  }

  
  removeEmployee( employee_id :any){
    this.employee.removeEmployee(employee_id).subscribe((result)=>{
    //console.log(result);
    this.ngOnInit();
    } );
  }

}
*/
