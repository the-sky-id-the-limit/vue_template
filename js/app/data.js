/**
 * アプリ内で使用するデータを格納します。
 */

// store
var store = {
    debug: true,
    state : {
        // データ
    }
}

/**
 * headerメニューを作るためのオブジェクト
 * ここに追加したら router.js にも追加が必要です。
 */ 
var routeLink = [
    {id: 'home', to: '/', name: 'Home'},
    {id: 'list', to: '/list', name: 'List'},
    {id: 'regist', to: '/regist', name: 'Regist'},
    {id: 'config', to: '/config', name: 'Config'}
]

/**
 * sidebarメニューの外部リンクを作るためのオブジェクト
 */ 
var sidebarLink = [
    {id: 'blog', to: 'http://www.sky-limit-future.com/', name: 'ブログ'},
    {id: 'twitter', to: 'https://twitter.com/duotaro100', name: 'twitter'}
]

/** 
 * サービス名
 * footerのCopyrightで表示します。
 */
var serviceName = 'The sky is the limit'
