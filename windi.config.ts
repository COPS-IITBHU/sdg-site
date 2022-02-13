import lineClamp from 'windicss/plugin/line-clamp'
import typo from 'windicss/plugin/typography'

export default {
  darkMode: 'class',
  plugins: [typo(), lineClamp],
  scan: {
    dirs: ['./'],
    exclude: ['node_modules', 'dist', '.git', '.github', '.nuxt']
  },
  safelist: 'prose prose-sm m-auto text-left',
  theme: {
    extend: {
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
      display: ['Lato'],
      heading: ['"Noto Serif KR"'],
      body: ['"Open Sans"']
    }
  }
}
