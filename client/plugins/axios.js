import https from 'https'
import postRepository from '~/apis/postRepository'

export default (ctx, inject) => {
  //  개발기일 때 SSL 이슈 해결 방안
  ctx.$axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })

  //  request에서 기본적으로 로그 찍도록 설정
  ctx.$axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  // 에러 공통 처리
  ctx.$axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  // const postRepositoryWithAxios = postRepository(ctx.$axios)
  // inject('postRepository', postRepositoryWithAxios('/posts'))
}
