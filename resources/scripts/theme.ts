import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#e5edf9',
        100: '#bed3ef',
        200: '#92b5e5',
        300: '#6697db',
        400: '#4681d3',
        500: '#256bcb',
        600: '#2163c6',
        700: '#1b58be',
        800: '#164eb8',
        900: '#0d3cac',
      },
      green: {
        50: '#eff3e1',
        100: '#d7e2b5',
        200: '#bccf84',
        300: '#a1bb53',
        400: '#8cad2e',
        500: '#789e09',
        600: '#709608',
        700: '#658c06',
        800: '#5b8205',
        900: '#487002',
      },
      blue: {
        50: '#e0f9fa',
        100: '#b3f1f3',
        200: '#80e8ec',
        300: '#4ddfe4',
        400: '#26d8de',
        500: '#00d1d8',
        600: '#00ccd4',
        700: '#00c6ce',
        800: '#00c0c8',
        900: '#00b5bf',
      },
      yellow: {
        50: '#fef1e1',
        100: '#fddcb4',
        200: '#fcc582',
        300: '#fbae4f',
        400: '#fa9c2a',
        500: '#f98b04',
        600: '#f88303',
        700: '#f77803',
        800: '#f66e02',
        900: '#f55b01',
      },
      red: {
        50: '#fee6e6',
        100: '#fdc1c1',
        200: '#fc9898',
        300: '#fb6f6f',
        400: '#fa5050',
        500: '#f93131',
        600: '#f82c2c',
        700: '#f72525',
        800: '#f61f1f',
        900: '#f51313',
      },
    },
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`,
    },
    semanticTokens: {
      colors: {
        'chakra-border-color': {
          _light: 'gray.300',
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'base',
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              borderRadius: 'base',
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
  }),
);

export default theme;
