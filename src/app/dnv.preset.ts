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
      500: '#003591', // Brand Blue (The default Button color)
      600: '#002D7B', // Hover state
      700: '#002566', // Active/Pressed state
      800: '#001D50',
      900: '#00153A',
      950: '#000D24',
    },
    //GLOBAL FOCUS RING (The #2196f3)
    focusRing: {
      color: '#2196f3',
      shadow: '0 0 0 0.2rem rgba(33, 150, 243, 0.5)', // Soft glow in #2196f3
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff', // Ensures white text on blue buttons
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        // Change the ENTIRE surface to follow light blue brand
        // surface: {
        //   50: '#e9f7fc', // Page Ground
        //   100: '#d3eef8', // Section/Detail Header
        // },
        // 4. FORM FIELD FOCUS & HOVER
        // formField: {
        //   hoverBorderColor: '#2196f3',
        //   focusBorderColor: '#2196f3',
        // },
        surface: {
          0: '#ffffff', // --surface-0
          50: '#fafafa', // --surface-50
          100: '#f5f5f5', // --surface-100
          200: '#eeeeee', // --surface-200
          300: '#cbcac8', // From border-bottom-color
          400: '#bdbdbd', // --surface-400
          500: '#9e9e9e', // --surface-500
          600: '#757575', // --surface-600
          700: '#616161', // --surface-700
          800: '#424242', // --surface-800
          900: '#212121', // --surface-900
          950: '#1a1a1a',
        },
        formField: {
          borderColor: '#cbcac8', // exact border color
          hoverBorderColor: '#bdbdbd', // Darker gray on hover
          focusBorderColor: '#2196f3', // The blue focus
        },
        content: {
          background: '#ffffff',
          hoverBackground: '#e9ecef', // --surface-hover
          selectedBackground: 'rgba(33, 150, 243, 0.06)', // --highlight-bg
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '8px',
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
