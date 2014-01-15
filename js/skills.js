$(function(){

	var tmplHeading = $("#_tmplHeading").html();
	
	$.getJSON( "data/skills.json")
		.done(function(response){
			
			var skills = response.skills,
			headings = response.headings;
			
			var config = [
				{
					"selector":".ux",
					"key":"ux"
				},
				{
					"selector":".prototyping",
					"key":"prototyping"
				},
				{
					"selector":".design",
					"key":"design"
				},
				{
					"selector":".development",
					"key":"development"
				},
				{
					"selector":".tools",
					"key":"tools"
				}
			];
			
			
			//Cache the jQuery objects (Backbone style)
			_.each(config,function(settings, index, config){
				settings['$el']=$(settings.selector);
			});
			
			_.each(config,function(settings, index, config){
				var headingDtls = _.findWhere(headings, {"key":settings.key});
				$('.heading',settings.$el).append(_.template(tmplHeading, headingDtls));
			});
			
			
		});
	
	
	/*$.getJSON( "data/skills.json", function( skills ) {
		
		console.log(skills);
		
		//_.where(skills, {});
		console.log(_.pluck(skills,'type'));
		
	});
	
	
	var tmplJobRow = _.template($('#_tmplJobRow').html());
	
	$.getJSON( "data/experience.json", function( jobs ) {
		
		_.each(jobs,function(element, index, list){
				var jobRow = tmplJobRow(element);
				$('.job-details').append(jobRow);
		});
		
		var propertyColors = _.pluck(jobs,'property-color'),
		$jobs = $('.job'),
		bgSelector = '.start, .separator, .end, .role',
		borderSelector = '.org-name',
		orgNameSelector = '.org-name';
		
		_.each(propertyColors, function(color,index,list){
			$(bgSelector,$jobs.eq(index)).css({
				'background-color':color
			});
			
			$(orgNameSelector,$jobs.eq(index)).css({
				'color':color
			});
			
			$(borderSelector,$jobs.eq(index)).css({
				'border-color':color
			});
			
		});
	
	});
	*/
		
});