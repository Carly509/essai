import Config from './Config';

const Theme = {};

// ------------------------------------------------------------
// Sizing
// ------------------------------------------------------------
Theme.spacing = {
  xTiny: 4,
  tiny: 8,
  small: 16,
  base: 24,
  large: 48,
  xLarge: 64
};

Theme.specifications = {
  titleSize: 20,
  activityIndicatorSize: Config.isAndroid ? 60 : 'large',
  activitySmallIndicatorSize: Config.isAndroid ? 30 : 'small',
};

// ------------------------------------------------------------
// Colors
// ------------------------------------------------------------
Theme.gray = {
  darkest: '#121212',
  darker: '#1a1a1a',
  dark: '#353535',
  light: '#828282',
  lighter: '#cfcfcf',
  lightest: '#f8f8f8'
};

const colors = {
  primary: '#189823',
  primaryVariant: 'rgba(24, 152, 35, 0.99)',
  transparentBlack: 'rgba(0,0,0,0.6)',
  greenLight: '#05C203',
  white: '#FFF',

  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8'
};

Theme.colors = {
  ...colors,
  background: colors.white,
  errorBox: '#ffe6ec',
  header: Theme.gray.darkest,
  bottomNavbar: Theme.gray.darkest,
  textInputSelection: `${colors.primary}aa`
};
// ------------------------------------------------------------
// Typography
// ------------------------------------------------------------
Theme.typography = {
  largeTitle: {
    fontSize: 40
  },
  robotoFont: {
    normal: {
      fontFamily: 'Roboto-Regular',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
    },
  },
}

export default Theme;