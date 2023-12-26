import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit{
 
  constructor(private employee:EmployeeService,private router:ActivatedRoute) {}

  editEmployee = new FormGroup({
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

    this.employee.getEmployeeById(this.router.snapshot.params['id']).subscribe((result)=>{
    console.log(result);
  } );
    
  }

  updateData(){
    console.log(this.editEmployee.value);
    this.employee.saveStudentData(this.editEmployee.value).subscribe((result)=>{
       console.log(result);
   } );
  }

}
