$(function(){

	var tmplBookCol = _.template($('#_tmplBookCol').html());

	$.getJSON( "data/readingList.json", function ( jobs ) {

		_.each(jobs,function(element, index, list){
				var bookCol = tmplBookCol(element);
				$('.reading-list ul').append(bookCol);
		});

	});

});
