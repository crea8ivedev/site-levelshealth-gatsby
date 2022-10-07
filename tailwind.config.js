module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['"TT Hoves"'],  
    },
    colors: {      
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        light: '#54ECCA',
        dark: '#05473C',
      },
      gray: {
        100: '#8D8D8D',
        200: '#5D6465',
        300: '#F5F5F5',
      },
      transparent: 'transparent',
    },
    zIndex: {
      9: '9',
      99: '99',
      999: '999',
      10: '10',
      50: '50',
    },
    padding: {
      0: '0px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      40: '40px',
      50: '50px',
      60: '60px',
      120: '120px',
    },
    margin: {
      auto: 'auto',
      0: '0px',
      15: '15px',
      25: '25px',
      30: '30px',
      50: '50px',
      
    },
    fontSize: {
      12: '12px',
      14: '14px',
      57: '57px',
      
    },
    letterSpacing: {       
      0.2: '0.2em',
      0.12: '0.12em',
      'minus-0.1em': '-0.01em',
      'minus-0.3em': '-0.03em',
    },
    lineHeight: {
      14: '14px',
      16: '16px',
    },
    borderRadius: {
      0: '0',
      1: '1px',
      10: '10px',
      999: '999px',
     
    },
    borderWidth: {
      0.6: '0.6px',
      1: '1px',
    
    },
    fontWeight: {      
      400: '400', 
      700: '700',        
    },
    translate: {      
      0: '0px',
      '7_minus': '-7px',      
      minus_50: '-50%',
    },
    inset: {
      auto: 'auto',
      0: '0px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      60: '60px',
      70: '70px',
      90: '90px',
      100: '100px',
      
    },
    backgroundImage: theme => ({
      none: 'none',
      gradient: 'radial-gradient(100% 62.34% at 0% 37.66%, #FFFFFF 38.02%, #E6E6E6 100%)',
      linear_gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 38.02%, #FFFFFF 100%)',
    }),
    boxShadow: { 
        card: '4px 4px 10px rgba(0, 0, 0, 0.04);',     
    },
    extend: {
      maxWidth: {
        20: '20px',
        25: '25px',
        '80-per': '80%',
      },
      width: {
        1: '1px',
        5: '5px',
        10: '10px',
        15: '15px',
      },
      height: {
        1: '1px',
        5: '5px',
        10: '10px',
        15: '15px',
      },
      minHeight: {
        719: '719px',
      },
      transitionProperty: {
        'height': 'height'
      },
      opacity: {
        '0.65': '0.65'
      },

      screens: {
        maxscreen: { min: '2000px' },
        desktop3: { max: '1700px' },
        desktop2: { max: '1600px' },
        desktop: { max: '1440px' },
        1400: { max: '1400px' },
        laptop: { max: '1366px' },
        laptopmini: { max: '1300px' },
        xl: { min: '1200px' },
        xlscreen: { max: '1199px' },
        lgscreen: { max: '1023px' },
        ipad: { max: '992px' },
        mdscreen: { max: '767px' },
        smscreen2: { max: '640px' },
        smscreen: { max: '575px' },
        xsscreen3: { max: '475px' },
        xsscreencustom: { max: '400px' },
        xsscreen2: { max: '390px' },
        xsscreen1: { max: '360px' },
        xsscreen: { max: '320px' },
        1279: { max: '1279px' },
        minHeight: { min: '700px' },
        minHeightMenu: { min: '500px' }
      },
    },
  },
  plugins: [
    // require('tailwindcss'),
    function ({ addComponents }) {
        addComponents({

            '.container-xl': {
                maxWidth: '100%',
                '@screen sm': {
                    maxWidth: '640px',
                },
                '@screen md': {
                    maxWidth: '768px',
                },
                '@screen lg': {
                    maxWidth: '940px',
                },
                '@screen xl': {
                    maxWidth: '1140px',
                },
                '@screen 2xl': {
                    maxWidth: '1340px',
                    margin: 'auto',
                },
            },


            '.container': {
                maxWidth: '100%',
                '@screen sm': {
                    maxWidth: '640px',
                },
                '@screen md': {
                    maxWidth: '768px',
                },
                '@screen lg': {
                    maxWidth: '940px',
                },
                '@screen xl': {
                    maxWidth: '1140px',
                },
                '@screen 2xl': {
                    maxWidth: '1240px',
                },
            }
        })
    }

],
}
