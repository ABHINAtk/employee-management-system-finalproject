import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent  implements OnInit{
 
  constructor(private employee:EmployeeService) {}

  addEmployee = new FormGroup({
    firstname : new FormControl(' '),
    lastname : new FormControl(' '),
    age:new FormControl(''),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    image: new FormControl(''),
    bloodgroup: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
});

  ngOnInit(): void {
    
  }
  saveData(){
    console.log(this.addEmployee.value);
    this.employee.saveStudentData(this.addEmployee.value).subscribe((result)=>{
       console.log(result);

       this.addEmployee.reset();

   } );
  }
}

































