import { Component, OnInit } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Country {
  name: string;
  code: string;
}

@Component({
    selector: 'select-filter-demo',
    templateUrl: './select-filter-demo.component.html',
    standalone: true,
    imports: [FormsModule, SelectModule, AnimateOnScrollModule]
})
export class SelectFilterDemo implements OnInit {
countries: Country[] = [];     
    selectedCountry: Country | null = null; 

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}