import { Middleware, Context } from '@nuxt/types'

/**
 * 미들웨어는 아래의 세가지에서 순차적으로 실행됩니다.
 * 1. nuxt.config.js
 * 2. 매칭된 레이아웃
 * 3. 매칭된 페이지
 */
const logger: Middleware = ({ req }: Context) => {
  const isServer = process.server
  console.log(isServer ? '서버에서 로그' : '클라이언트에서 로그')
  const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
  console.log('userAgent :', userAgent)
}

export default logger
