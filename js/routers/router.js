/** コンポーネントの定義 */
const Home = { template: '<homes></homes>' }
const List = { template: '<lists></lists>' }
const Regist = { template: '<regists></regists>' }
const Config = { template: '<configs></configs>' }
const Prepare = { template: '<prepares></prepares>' }

/** routeの定義 */
const routes = [
  { path: '/', component: Home },
  { path: '/prepare', component: Prepare },
  { path: '/list', component: List },
  { path: '/regist', component: Regist },
  { path: '/config', component: Config }

  // 準備中ページへのリダイレクト方法
  // { path: '/list', redirect: '/prepare' },
]

/** routerへのroutes注入 */
const router = new VueRouter({
  routes
})