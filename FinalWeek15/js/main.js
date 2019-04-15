var url ='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8f20ef64-ad00-44c3-96a8-a9e22a68b6d8https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8f20ef64-ad00-44c3-96a8-a9e22a68b6d8';
parmas ="";

var url ='https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=8f20ef64-ad00-44c3-96a8-a9e22a68b6d8'
parmas ="";

$("searchBtn").click(function(){
	params = "",
	params += '&year=' + $('#year').val();
	params += '&year=' + $('#month').val();
	params += '&year=' + $('#day').val();

alert(url + params);
	$.get.JSON(url + params, function(data){
	$('#resultArea').html('<h1>'+data.result + '</h1>')	

	});
});