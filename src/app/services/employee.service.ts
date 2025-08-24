import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private http = inject(HttpClient);
  employees = signal<Employee[]>([]);

  constructor() {
    this.loadEmployees();
   }

  loadEmployees() {
    this.http
      .get<Employee[]>(`${environment.url}/employees`)
      .subscribe((resp) => {
        this.employees.set(resp);
      });
  }

}
