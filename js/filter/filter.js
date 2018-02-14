/**
 * 数値をカンマ区切りで返します。
 */
Vue.filter('addComma', function(value) {
　　return value.toLocaleString();
});

// Vue.filter('dateFormat', function(value, format) {
//   moment.lang('ja');
//   return moment(value).format(format);
// });