/************************************************
			ストレージ共通の実装				
************************************************/

/**
 * LocalStorageから取得します。
 * @param {string} storageKey localStorageのKey
 */
var getLocalStorage = function(storageKey){
	// JSON形式で返却
	return JSON.parse(localStorage.getItem(storageKey));
}

/**
 * LocalStorageに保存します。
 * @param {string} storageKey localStorageのKey
 * @prama {Object} data 保存するオブジェクト
 */
var setLocalStorage = function(storageKey,data){
	// JSON形式で保存
	var jsonData = JSON.stringify(data);
	localStorage.setItem(storageKey, jsonData);
}

/**
 * storageKeyに紐づくデータをすべて削除します。
 * @param {string} storageKey localStorageのKey
 */
var deleteLocalStorage = function(storageKey){
	localStorage.removeItem(storageKey);
}

/**
 * session情報を取得します。
 */
var getSessionStorage = function(){	
	var session = '';
	// localstorageに存在しない場合は空文字を返却。
	if(sessionStorage.getItem("sessionLogin") != null){
		session = JSON.parse(sessionStorage.getItem("sessionLogin"));
	} 

	return session;
}

/**
 * sessionのログイン情報を保存します。
 * @prama {string} password 保存するpassword
 */
var setSessionStorage = function(sessionLogin){
	// JSON形式で保存
	var jsonData = JSON.stringify(sessionLogin);
	sessionStorage.setItem("sessionLogin", jsonData);
}

/**
 * storageKeyに紐づくデータをすべて削除します。
 * @param {string} storageKey sessionStorageのkey
 */
var deleteSessionStorage = function(storageKey){
	sessionStorage.removeItem(storageKey);
}
