const userDate = document.querySelector("#userDate");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector(".result")

function getReverseStr(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    var reverseString = getReverseStr(str);
    return reverseString === str;
}

function convertDateIntostr(date) {
    var requireDate = {day: '', month: '', year: ''};

    if (date.day < 10) {
        requireDate.day = '0' + date.day;
    }
    else {
        requireDate.day = date.day.toString();
    }

    if (date.month < 10) {
        requireDate.month = '0' + date.month;
    }
    else {
        requireDate.month = date.month.toString();
    }

    requireDate.year = date.year.toString();

    return requireDate;
}

function dateInDifferentFormats(date) {
     var modifiedDate = convertDateIntostr(date);

    var ddmmyyyy = `${modifiedDate.day}${modifiedDate.month}${modifiedDate.year}`;
    var mmddyyyy = `${modifiedDate.month}${modifiedDate.day}${modifiedDate.year}`;
    var yyyymmdd = `${modifiedDate.year}${modifiedDate.month}${modifiedDate.day}`;
    var ddmmyy = `${modifiedDate.day}${modifiedDate.month}${modifiedDate.year.slice(-2)}`;
    var mmddyy = `${modifiedDate.month}${modifiedDate.day}${modifiedDate.year.slice(-2)}`;
    var yymmdd = `${modifiedDate.year.slice(-2)}${modifiedDate.month}${modifiedDate.day}`;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var dateArray = dateInDifferentFormats(date);
    for (var i=0; i<dateArray.length; i++) {    
        if (isPalindrome(dateArray[i])) 
            return true;
        break;
    }
    return false;
}

function isLeapyear(year) {
    if (year % 400 === 0)  
        return true;
    if (year % 100 === 0)
        return false;
    if (year % 4 === 0)
        return true;
    else 
        return false;
}

function getNextDay(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var monthList = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2) {
        if(isLeapyear) {
            if (day > 29) {
                day = 1;
                month++; 
            }
        }      
    }
    else {
        if (day > monthList[month-1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return [day,month,year];
}


function calculateNoOfDaysForPalindrome(date) {
    var ctr = 0;
    var nextDate = getNextDay(date);

    while(1) {
        ctr++;
        var palindromeChecker = checkPalindromeForAllDateFormats(nextDate);
        if (palindromeChecker) {
            break;
        }
        
        nextDate = getNextDay(nextDate);
    }
    return [ctr, nextDate];
}
  

var date = {
    day: 12,
    month: 2,
    year: 2021
}

console.log(calculateNoOfDaysForPalindrome(date));