import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import {DNVPreset} from './dnv.preset';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        providePrimeNG({
            theme: {
                preset: DNVPreset
            }
        })
    ]
};