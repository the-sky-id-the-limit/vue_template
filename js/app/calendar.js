/**
 * 日付に関する基本情報を取得します。
 */
var getInitDate = function(){
    // 返却用オブジェクト
    var resultItems = {};
    var now = new Date();
    resultItems.now = now;
    resultItems.year = now.getFullYear();
    resultItems.month = ( "0"+( now.getMonth()+1 ) ).slice(-2);
    resultItems.day = ( "0"+now.getDate() ).slice(-2);
    resultItems.dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    resultItems.monthList = [01,02,03,04,05,06,07,08,09,10,11,12];
    resultItems.leapYearList = [2008,2012,2016,2020,2024,2028,2032,2036,2040,2044,2048,2052,2056,2060,2064,2068];
    return resultItems;
}

/**
 * 指定の日付をyyyyMMdd形式で取得します。
 */ 
var getYYYYMDD = function(date){
    var result = date.getFullYear()
                + ( "0"+( date.getMonth()+1 ) ).slice(-2)
                + ( "0"+date.getDate() ).slice(-2);
    return result;
}

/**
 * 指定した年からの配列を作成します。
 * @param year 基準年
 * @param start 基準年から何年前か(過去分は負の値)
 * @param end 基準年から何年か(0以上)
 */ 
var makeYearList = function(year,start,end){
    var yearList = [];
    for(var i = start; i <= end; i++){
        var intYear = parseInt(year);
        yearList.push(intYear + i);
    }
    return yearList;
}

var initItem = getInitDate();
var now = initItem.now;
var nowYMD = getYYYYMDD(now);
    
/**
 * 選択された月によって、表示される日付を変更する
 * 1,3,5,7,8,10,12は31日も追加
 * 2月は28日
 * 閏年の2月は29日
 */
 var changeDayList = function(month,dayList){
    if(month == '01' || month == '03' || month == '05' || month == '07'
        || month == '08' || month == '10' || month == '12') {
        dayList.push(31);
    } else if (month == '02') {
        // 29,30日を削除
        dayList.pop();
        dayList.pop();
        // 閏年か判断する
        for(var i = 0; i < leapYearList.length; i++) {
            if(leapYearList[i] == year){
                // 29日を追加
                dayList.push(29);
            }
        }
    }
    return dayList;
 }

/** 年のselectを変更した場合の処理を実施します
 * @param yearData 選択された年
 * @param monthData 選択された月
 */ 
var editYearSelects = function(yearData,year,monthData,leapYearList){
    var resultItems = {};
    var dayList = initItem.dayList;
    var monthList = initItems.monthList;
    if(yearData != year){
        if(monthData == '1' || monthData == '3' || monthData == '5' || monthData == '7'
            || monthData == '8' || monthData == '10' || monthData == '12') {
            dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        } else if (monthData == '2') {
            // 29,30日を削除
            dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
            // 閏年か判断する
            for(var i = 0; i < leapYearList.length; i++) {
                if(leapYearList[i] == yearData){
                    // 29日を追加
                    dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
                }
            }
        } else {
            dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        }
    } else {
        monthList = this.monthList.slice(0,month);
        dayList = this.dayList.slice(0,day);
    }
    resultItems.monthList = monthList;
    resultItems.dayList = dayList;
    return resultItems;
}
  
/** 月のselectを変更した場合の処理 */
var editMonthSelects = function(yearData,monthData,leapYearList){
    var dayList = initItem.dayList;
    if(monthData == '1' || monthData == '3' || monthData == '5' || monthData == '7'
        || monthData == '8' || monthData == '10' || monthData == '12') {
        dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    } else if (monthData == '2') {
        // 29,30日を削除
        dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
        // 閏年か判断する
        for(var i = 0; i < leapYearList.length; i++) {
            if(leapYearList[i] == yearData){
                // 29日を追加
                dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
            }
        }
    } else {
        dayList = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    return dayList;
}

/**
 * 今日の日付をyyyMMdd形式で取得します。
 */
var createToday = function(){
    var now = new Date();
    var nowYMD = now.getFullYear()
                        + ( "0"+( now.getMonth()+1 ) ).slice(-2)
                        + ( "0"+now.getDate() ).slice(-2);
    return nowYMD;
}

/**
 * 過去の日付かどうか確認します。
 * @param date 確認する日付
 */ 
var getPathFlag = function(date){
    if(nowYMD > date){
        return true;
    }
    return false;
}

