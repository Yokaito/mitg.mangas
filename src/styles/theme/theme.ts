const theme = {
  // Fonts
  text: {
    size: {
      0: '12px', // Smallest
      1: '14px', // Smaller
      2: '16px', // Mobile   Desktop
      3: '1.25rem', // 18px  20px
      4: '1.5rem', // 22px  24px
      5: '1.875rem', // 27px 30px
      6: '2.5rem', // 36px  40px
      7: '3rem', // 43px  48px
      8: '3.75rem', // 54px 60px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    family: {
      primary: 'Jost',
    },
  },

  // Index
  zIndex: {
    below: -1,
    default: 0,
    top: 1,
    high: 2,
    highest: 3,
  },

  // Transition
  transition: {
    timing: '0.2s',
    property: 'all',
    function: 'ease-in-out',
  },

  gap: {
    small: '4px',
    medium: '8px',
    regular: '12px',
    large: '16px',
    extraLarge: '24px',
  },

  // Radius
  radius: {
    small: '4px',
    regular: '8px',
    large: '12px',
    extraLarge: '16px',
    pill: '100px',
    circle: '100%',
  },

  // Spacings
  spacings: {
    0: '4px',
    1: '8px',
    2: '12px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '40px',
    7: '48px',
    8: '56px',
    9: '64px',
    10: '72px',
    11: '80px',
    12: '88px',
    13: '96px',
  },

  // Breakpoints
  breakpoints: {
    desktop: 1440,
    notebook: 1280,
    tablet: 768,
    mobile: 320,
  },
}

export default theme
