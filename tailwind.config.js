module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        samim: ["samim", "sans-serif"],
        'IranSans': 'IRANSansX'
      },
      fontSize:{
        '10xl':'10rem',
        '11xl':'12rem',
        '12xl':'14rem',
        '13xl':'16rem',
      },
      colors:{
        sisakoWhite:'#F9F7F7',
        sisakoGray:'#DBE2EF',
        sisakoLightBlue:'#3F72AF',
        sisakoDarkBlue:'#112D4E'
      },
      backgroundImage: {
        'back1': "url('./public/images/kir-simakov-LnPkr4WDeQY-unsplash.jpg')",
      },
      flexBasis:{
          '1/7': '14.2857143%',
          '2/7': '28.5714286%',
          '3/7': '42.8571429%',
          '4/7': '57.1428571%',
          '5/7': '71.4285714%',
          '6/7': '85.7142857%',
      },
      boxShadow: {
        'screenText1': '5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b, 20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b, 35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b'
      },
      spacing:{
        '15':'3.75rem'
    },
    gridRow: {
      'span-16': 'span 16 / span 16',
    },
    gridColumn: {
      'span-16': 'span 16 / span 16',
    },
    corePlugins: {
      aspectRatio: false,
    },
    gridRowStart: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    keyframes: {
      slideInLeft: {
        '0%': { color: 'transparent' },
        '100%': { color: 'red' },
      },
      slideInRight: {
        '0%': { transform: 'translatex(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInUp: {
        '0%': { transform: 'translatey(-100%)' },
        '100%': { transform: 'translatey(0)' },
      },
      coloranimation: {
        '0%': { color: '#DBE2EF' },
        '100%': { color: '#112D4E' },
      },
      colorOpacity:{
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
       shake: {
        '0%': { transform: 'translate(1px, 1px) rotate(0deg);' },
        '10%': { transform: 'translate(-1px, -2px) rotate(-1deg);' },
        '20%': { transform: 'translate(-3px, 0px) rotate(1deg);' },
        '30%': { transform: 'translate(3px, 2px) rotate(0deg);' },
        '40%': { transform: 'translate(1px, -1px) rotate(1deg);' },
        '50%': { transform: 'translate(-1px, 2px) rotate(-1deg);' },
        '60%': { transform: 'translate(-3px, 1px) rotate(0deg);' },
        '70%': { transform: 'translate(3px, 1px) rotate(-1deg);' },
        '80%': { transform: 'translate(-1px, -1px) rotate(1deg);' },
        '90%': { transform: 'translate(1px, 2px) rotate(0deg);' },
        '100%': { transform: 'translate(1px, -2px) rotate(-1deg);' }
      }
    },
    animation: {
      'slideInRight': 'slideInRight 2s linear 2 1',
      'slideInUp': 'slideInUp 2s linear 4 1 ',
      'slideInLeft': 'slideInLeft 2s linear 6 1',
      'color':'coloranimation 2s linear 2s',
      'opacity':'colorOpacity 2s linear 2s',
      'shake':'shake linear 0.5s'
    },
    scale:{
      '115': '1.15',
    },
    
  },
  
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
}
