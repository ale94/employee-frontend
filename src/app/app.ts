import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeDashboardComponent } from './pages/employe-dashboard/employe-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-app-angular');
}
