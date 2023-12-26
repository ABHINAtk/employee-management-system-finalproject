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

































/*
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import  {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent  implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;

  employeeForm: FormGroup;
  employees: Employee[];
  employeesToDisplay: Employee[];
  buttontemp: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router


  ) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      age: this.fb.control(''),
      birthdate: this.fb.control(''),
      gender: this.fb.control(''), 
      Image: this.fb.control(''),
      bloodgroup: this.fb.control(''),
      email: this.fb.control(''),
      mobile: this.fb.control(''),

    });

    this.employeeService.getEmployees().subscribe((res) => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }

  addEmployee() {
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      age: this.Age.value,
      birthdate: this.BirthDate.value,
      //education: this.educationOptions[parseInt(this.Education.value)],
      gender: this.Gender.value,
      image: this.fileInput.nativeElement.files[0]?.name,
      bloodgroup: this.BloodGroup.value,
      email: this.Email.value,
      mobile: this.Mobile.value
    
    };
    this.employeeService.postEmployee(employee).subscribe(() => {
      // After adding employee, navigate to the EmployeeDetailComponent
      this.router.navigate(['/employee-details']);
      

    });
  }


   removeEmployee(event: any) {
    this.employees.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.employeeService.deleteEmployee(event).subscribe((res) => {
          this.employees.splice(index, 1);
        });
      }
    });
  }

  editEmployee(event: any) {
    this.employees.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeEmployee(event);
    this.addEmployeeButton.nativeElement.click();
  }


  setForm(emp: Employee) {
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.Age.setValue(emp.age);
    this.BirthDate.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender)
    this.fileInput.nativeElement.value = '';
    this.BloodGroup.setValue(emp.bloodgroup);
    this.Email.setValue(emp.email);
    this.Mobile.setValue(emp.mobile);
  }



  clearForm() {
    this.FirstName.setValue('hjh');
    this.LastName.setValue('');
    this.Age.setValue('');
    this.Gender.setValue('');
    this.BirthDate.setValue('');
    this.Gender.setValue('');
    this.fileInput.nativeElement.value = '';
    this.BloodGroup.setValue('');
    this.Email.setValue('');
    this.Mobile.setValue('');
   
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }   
  public get Age(): FormControl {
    return this.employeeForm.get('age') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get BirthDate(): FormControl {
    return this.employeeForm.get('birthdate') as FormControl;
  }
    public get BloodGroup(): FormControl {
    return this.employeeForm.get('bloodgroup') as FormControl;
  }
  public get Email(): FormControl {
    return this.employeeForm.get('email') as FormControl;
  }
  public get Mobile(): FormControl {
    return this.employeeForm.get('mobile') as FormControl;
  }
}
*/