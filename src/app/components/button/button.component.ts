import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-demo',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [ButtonModule]
})
export class ButtonDemoComponent {}