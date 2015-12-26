$(function(){
	var tmplArticleRow = _.template($('#_tmplArticleRow').html());
	
	$.getJSON( "data/articles.json", function( articles ) {
		
		//console.log(articles);
		
		_.each(articles,function(element, index, list){
				var articleRow = tmplArticleRow(element);
				$('.articles').append(articleRow);
		});
		
	});
		
});