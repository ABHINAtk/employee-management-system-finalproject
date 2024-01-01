import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveService } from './leave.service';
import { DetailComponent } from './detail/detail.component';
import { EmployeeeListComponent } from './employeee-list/employeee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {path:'edit/:id',component:EditEmployeeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'hr' },
  children: [
    { path: 'create-employee', component: CreateEmployeeComponent },
    { path: 'employee-list', component: EmployeeeListComponent },

  ] },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'employee' },
  children: [
    { path: 'leave-application', component:LeaveApplicationComponent },
    { path: 'detail', component: DetailComponent }
  ] },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
