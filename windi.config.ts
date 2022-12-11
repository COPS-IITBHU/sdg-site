import lineClamp from 'windicss/plugin/line-clamp'
import typo from 'windicss/plugin/typography'

export default {
  darkMode: 'class',
  plugins: [typo, lineClamp],
  scan: {
    dirs: ['./'],
    exclude: ['node_modules', 'dist', '.git', '.github', '.nuxt']
  },
  safelist: 'prose prose-sm m-auto text-left',
  theme: {
    extend: {
      colors: {
        'bg-color':'#000',
        'text-color':'#fff',
        'text-accent-color':'#0cbc8b',
        'acccent-color':'#08fdd8',
        'blob-color-1': '#005c43',
        'blob-color-2': '#0cbc8b',
        'blob-color-3': '#08fdd8',
      },
      spacing: {
        half: '50%',
        '1/20': '5%',
        '1/10': '10%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%'
      }
    },
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      heading: ['Jura','sans-serif'],
      cardtopic: ['Libre Baskerville', 'serif'],
    }
  }
}
