import axios from 'axios'
let version = '' // 版本号
var baseUrl = '' // 请求地址
// 判断当前环境
if (location.hostname === 'localhost') {
  // 本地环境
  baseUrl = 'lol'
} else if (location.hostname === 'dev') {
  // 开发环境
  baseUrl = 'dev'
} else if (location.hostname === 'test') {
  baseUrl = 'test'
}
let headers = {
  varsion: version
}
const axi = axios.create({
  baseURL: baseUrl,
  headers: headers,
  timeout: 8000
})
// get请求
let getData = (params) => {
  return axi.get(params.url).then(res => {
    params.success && params.success()
  }).catch(error => {
    params.fail && params.fail(error)
  })
}
// post请求
let postData = (refs) => {
  // 判断是否需要传值
  if (refs.data) {
  // 新建表单数据
    var formData = new FormData()
    for (var key in refs.data) {
      formData.append(key, refs.data[key])
    }
    // 将要传的数据转换位表单数据
    refs.data = formData
  }
  return axi({
    method: 'post',
    url: refs.url,
    data: refs.data
  }).then(res => {
    refs.success && refs.success(res.data)
  }).catch(error => {
    refs.fail && refs.fail(error)
  })
}

export {
  postData, getData
}
