import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'input-employee',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './input-employee.component.html',
})
export default class InputEmployeeComponent { }
