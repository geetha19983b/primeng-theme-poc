import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBar } from 'primeng/progressbar';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-basic-demo',
    templateUrl: './multi-select.component.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, ProgressBar]
})
export class MultiSelectComponent implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}