// app.module.ts
// app-routing.module.ts
// app.module.ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { DetailComponent } from './detail/detail.component';
import { LeaveService } from './leave.service';
import { EmployeeService } from './employee.service';
import { EmployeeeListComponent } from './employeee-list/employeee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NgChartjsModule } from 'ng-chartjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    HrDashboardComponent,
    CreateEmployeeComponent,
    EmployeeComponent,
    LeaveApplicationComponent,
    DetailComponent,
    EmployeeeListComponent,
    EditEmployeeComponent
    
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule,NgChartjsModule,],
  providers: [AuthGuard, AuthService,LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule {}
