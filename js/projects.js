$(function(){
	var tmplProjectRow = _.template($('#_tmplProjectRow').html());
	
	$.getJSON( "data/projects.json", function( projects ) {
		
		//console.log(projects);
		
		_.each(projects,function(element, index, list){
				var projectRow = tmplProjectRow(element);
				$('.projects').append(projectRow);
		});
		
	});
		
});