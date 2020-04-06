/**
 ** TailwindCSS Configuration File
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#22292f',
      white: '#ffffff',
      primary: '#4c56ff',
      grey: '#b8c2cc',
      'grey-light': '#dae1e7',
      background: '#F9F9FF',
      blue: {
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0'
      }
    }
    /**
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | text colors를 정의합니다. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    |
    */
    // textColor: (theme) => theme('colors'),

    /**
   |-----------------------------------------------------------------------------
   | Background colors             https://tailwindcss.com/docs/background-color
   |-----------------------------------------------------------------------------
   |
   | background colors를 정의합니다. By default these use
   | the color palette we defined above, however you're welcome to set
   | these independently if that makes sense for your project.
   |
   | Class name: .bg-{color}
   |
   */

    // backgroundColor: (theme) => theme('colors')
  },
  variants: {},
  plugins: []
}
