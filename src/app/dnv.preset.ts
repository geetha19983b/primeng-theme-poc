import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
export const DNVPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F2F5FA',
      100: '#C2CFE5',
      200: '#91A8D0',
      300: '#6182BB',
      400: '#305BA6',
      500: '#003591', // Your Brand Blue (The default Button color)
      600: '#002D7B', // Hover state
      700: '#002566', // Active/Pressed state
      800: '#001D50',
      900: '#00153A',
      950: '#000D24',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff', // Ensures white text on blue buttons
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '8px', // Matches the slightly squared look in your screenshot
        paddingX: '8px',
        paddingY: '8px',
        gap: '1rem',
        label: {
          fontWeight: '600',
        },
      },
    },
  },
});
