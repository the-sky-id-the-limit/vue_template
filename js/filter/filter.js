/**
 * 数値をカンマ区切りで返します。
 */
Vue.filter('addComma', function(value) {
　　return value.toLocaleString();
});
