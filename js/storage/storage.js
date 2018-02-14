/**
 * commonStorage.jsの共通メソッドを元に、storageキー固有のメソッドを定義していきます。
 * 例えば menuList という名前のキーでLocalStorageを取り扱うには以下のように記載します。
 * 現在はコメントアウトしています。
 */
// /**
//  * menuリストを取得します。
//  */
// var getMenuList = function(){
// 	return getLocalStorage('menuList');
// }
// /**
//  * menuリストを保存します。
//  */ 
// var setMenuList = function(data){
// 	setLocalStorage('menuList', data);
// }
// /**
//  * 該当のmenuを削除します。
//  */
// var deleteMenu = function(key){
// 	// menuリストを取得
// 	var menuList = getMenuList();
// 	var updateMenuList = {};
// 	// keyに該当するデータを削除
// 	for(menu in menuList) {
// 		if(key != menu) {
// 			updateMenuList[menu] = menuList[menu];
// 		}
// 	}
// 	setMenuList(updateMenuList);
// }
// /**
//  * menuリストを全て削除します。
//  */
// var deleteMenuList = function(){
// 	deleteLocalStorage('menuList');
// }
