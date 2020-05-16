import axios from "axios"
//1.创建axios实例
export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 9000
  })

  // 2. 拦截器
  // 请求拦截(他里面有2个参数，一个是config就是获取请求的配置星系，另一个是请求失败要返回的信息，
  // 这里是他门进行拦截，如果拦截成功了，必须在他们返回出去，要不然就打印前面err了)
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 这里里拦截的是还没有道服务器之前的东西，可以做一些小动画，比如说那种加载的小圈圈
    return config
  }, err => {
    // console.log(err);
  })
  // 相应拦截，就是等把从服务器里面返回的东西进行拦截，这里必欲也要进行返回，在这里可以进行筛选，把data信息直接返回过去
  instance.interceptors.response.use(res => {
    // 这里是拦截的是从服务器发回到本地的一些数据，可以把他们进行筛选啊，选出data来就行，其他的我感觉没有啥用
    // console.log(res);
    return res.data;
  }, err => {
    // console.log(err);

  })



  // 3.发送网络请求进阶
  return instance(config)


}
// 发送网络请求
// instance(config.baseConfig)
//   .then(res => {
//     config.success(res)
//   })
//   .catch(err => {
//     config.filure(err)
//   })
