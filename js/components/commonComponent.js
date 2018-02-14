
/**
 * headerComponent
 * data.jsのrouteLinkに定義した値をメニューとして表示しています。
 */
Vue.component('headers', {

    template : 
        '<div class="header">'+
        '<router-link to="/">'+
          '<img :src="imgPath">'+
        '</router-link>'+
        '<mainads></mainads>'+
        '<div class="header-navi">'+
            '<ul>'+
                '<router-link class="header-navi-li" tag="li" v-for="link in routerLink" :id="link.id" :to="link.to">{{link.name}}</router-link>'+
            '</ul>'+
        '</div>'+
        '</div>',
    data: function () {
        return {
            routerLink : [],
            /** ヘッダーのトップ画像が必要ならここで定義 */
            imgPath : ''
        }
    },
    mounted : function(){
        // data.jsから取得
        this.routerLink = routeLink;
    }
})

// footerComponent
Vue.component('footers', {
    template : 
        '<div class="footer">'+
            '<div class="copyright">Copyright © {{serviceName}} All Rights Reserved.</div><!-- .copyright -->'+
        '</div>',
    data: function () {
        return {
            serviceName : serviceName
        }
    },
})

/**
 * infoComponent
 * sidebarに表示するお知らせ共通コンポーネントです。
 */
Vue.component('infos', {
    template :
        '<section class="info">'+
            '<h2>Info</h2>'+
            '<div class="side-detail">'+
                '<p>test1</p>'+
                '<p>test1</p>'+
                '<p>test1</p>'+
            '</div>'+
        '</section>'
})

/**
 * adComponent
 * sidebarに表示する広告共通コンポーネントです。
 */
Vue.component('ads', {
    template :
        '<section class="side-box latest">'+
            '<h2>Sponsored link</h2>'+
            '<div class="side-detail">'+
                '<div>'+
                    '<p>広告</p>'+
                '</div>'+
            '</div>'+
        '</section>'
})

/**
 * linkComponent
 * sidebarに表示するリンク共通コンポーネントです。
 */
Vue.component('links', {
    template :
        '<section class="side-box latest">'+
            '<h2>Link</h2>'+
            '<div class="side-detail">'+
                '<div>'+
                    '<a v-for="link in sidebarlink" :href="link.to" id="link.id">{{link.name}}</a>'+
                '</div>'+
            '</div>'+
        '</section>',
        data : function() {
            return {
                sidebarlink : sidebarLink
            }
        }
})

/**
 * Compsidebaronent
 * sidebarコンポーネントです。
 * infos,ad,linkコンポーネントを含みます。
 */
Vue.component('sidebars', {
    template :
        '<div class="sidebar">'+
            '<infos></infos>'+
            '<ads></ads>'+
            '<links></links>'+
        '</div>'
})
