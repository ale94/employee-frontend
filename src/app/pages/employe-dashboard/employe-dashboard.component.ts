import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { CardEmployeeComponent } from '../../components/card-employee/card-employee.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'employe-dashboard',
  imports: [
    NavbarComponent,
    HeaderComponent,
    FilterComponent,
    CardEmployeeComponent,
    FooterComponent,
  ],
  templateUrl: './employe-dashboard.component.html',
})
export class EmployeDashboardComponent {}
