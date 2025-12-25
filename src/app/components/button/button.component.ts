import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
@Component({
  selector: 'button-demo',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [ButtonModule, ButtonGroupModule],
})
export class ButtonDemoComponent {
  years = ['2024', '2025', '2026'];
  activeYear = '2025';

  secondaryButtonPT = {
    root: {
       style: {
        '--p-button-secondary-background': 'transparent',
        '--p-button-secondary-border-color': '#003591',
        '--p-button-secondary-color': '#003591',
        '--p-button-secondary-hover-background': '#003591',
        '--p-button-secondary-hover-border-color': '#003591',
        '--p-button-secondary-hover-color': '#ffffff',
        '--p-button-secondary-active-background': '#002a74',
        '--p-button-secondary-active-border-color': '#002a74',
        '--p-button-secondary-active-color': '#ffffff'
      } as any
    }
  };

  
  setActiveYear(year: string) {
    this.activeYear = year;
  }

   trackById(index: number, item: any): number {
    return item;
  }
}
