/* eslint-disable import/first */
import { configureReadme, addFooter, addHeader } from 'storybook-readme'

// import './Button'
// import './withCustomPreview'
// import './withSidebarDocs'
// import './withContentDocs'
// import './withEmoji'
// import './withCustomTheme'
// import './withCustomCodeTheme'
// import './withOldApi'
// import './withVueDocs'

configureReadme({
  // codeTheme: 'far',
  header: ``,
  footer: `
---
- 가이드 제작에 참고한 사이트 1: [react storybook-readme](https://github.com/tuchk4/storybook-readme)
- 가이드 제작에 참고한 사이트 2: [typescript + storybook](https://avengersrhydon1121.tistory.com/275)
- Issues and suggestions [storybook-readme/issues](https://github.com/tuchk4/storybook-readme/issues). You are welcome to suggest to awesome feature or report an annoying bug.
- <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="twitter" style="width:16px;"/> [tuchk4](https://twitter.com/tuchk)
`
})

import './Guide'
import './Button'
