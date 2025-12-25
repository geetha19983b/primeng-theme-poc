import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import {DNVPreset} from './dnv.preset';
import Aura from '@primeuix/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
       provideAnimations(),
        providePrimeNG({
            theme: {
                preset: DNVPreset
            }
        })
    ]
};