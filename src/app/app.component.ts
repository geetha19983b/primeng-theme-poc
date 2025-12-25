import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemoComponent } from './components/button/button.component';
import { SelectFilterDemo } from './components/select/select-filter-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemoComponent, SelectFilterDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-theme-poc';
}
