import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'card-employee',
  imports: [],
  templateUrl: './card-employee.component.html',
})
export class CardEmployeeComponent {

  employeeService = inject(EmployeeService);
}
