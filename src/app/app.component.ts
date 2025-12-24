import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemoComponent } from './components/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-theme-poc';
}
