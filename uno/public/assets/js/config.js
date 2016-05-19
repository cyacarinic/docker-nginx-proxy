
// API
var BASE =  'http://app.yachay.pe';
var BASE_API = 'http://app.yachay.pe/api/v1';

// URLS
var DESTINO = 'staging.yachay.pe';




function links(){

	var links = $("a[href*='//dashboard']");

	var original = 'dashboard.yachay.pe:8012';
	

	$.map(links, function(n, i){
		var str = $(n).attr('href');
		$(n).attr('href', replaceAll(str, original, DESTINO));
	});

}

$(document).ready(function(){
	links();
});

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}