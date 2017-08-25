var url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top";
var apiKey = "&apiKey=1d7cea5143fc43838ed03210bc5ee950";

$.get(url + apiKey, function(data){
	console.log(data)
	for(var i=0; i<data.articles.length; i++){
		var article = data.articles[i]
		$("#target").append(`<div class="article">
								<img src="${article.urlToImage}" alt="img" width="200px">
								<a href="${article.url}"><h3>${article.title}</h3></a>
								<p>${article.author}</p>
								<p>${article.description}<p>
							</div>`);
	}
}, "json");