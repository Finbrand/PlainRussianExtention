var CurrentURL = 'URL';
var API="http://api.plainrussian.ru/api/1.0/ru/measure/?url=";

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    CurrentURL = tabs[0].url;
	console.log (CurrentURL);
	var Requst=API+CurrentURL;
	console.log (Requst);
	var requesturl = Requst;
	console.log (requesturl);
	var xhr = new XMLHttpRequest();
//var APIurl = 'http://api.plainrussian.ru/api/1.0/ru/measure/';
//var URL-sending= 'https://echo.msk.ru/blog/ssobyanin/2210036-echo/';
//var requesturl = 'url=' + encodeURIComponent(URL-sending);
xhr.open('GET', requesturl);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//xhr.responseType = 'json';
xhr.send();	
xhr.onreadystatechange = function () {
	document.getElementById("State").innerHTML = xhr.readyState;
	document.getElementById("Response").innerHTML = xhr.status;
    if (xhr.readyState == 4 ) {
        var index = JSON.parse(xhr.responseText);
	document.getElementById("grade_SMOG").innerHTML = index.indexes.grade_SMOG;
	    }
};
});
//document.getElementById("CurrentURL").innerHTML = 'CurrentURL';
//var requesturl = 'http://api.plainrussian.ru/api/1.0/ru/measure/?url=https://echo.msk.ru/blog/ssobyanin/2210036-echo/';

//var requesturl = 'http://api.plainrussian.ru/api/1.0/ru/measure/?url='+CurrentURL;

