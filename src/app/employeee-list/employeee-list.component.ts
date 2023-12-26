
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employeee-list',
  templateUrl: './employeee-list.component.html',  
  styleUrls: ['./employeee-list.component.scss']
})

export class EmployeeeListComponent implements OnInit {

  constructor(private employee:EmployeeService) {}

  employeeData : any = []
  ngOnInit(): void {
    this.employee.getAllemployee().subscribe((allData)=>{
      console.log(allData);
      this.employeeData=allData as any[];
    } );
  }
  removeEmployee( employee_id :any){
    this.employee.removeEmployee(employee_id).subscribe((result)=>{
    this.ngOnInit();
    } );
  }
  

  
}
