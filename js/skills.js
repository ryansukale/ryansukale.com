$(function(){

	var tmplHeading = $("#_tmplHeading").html(),
	tmplSkillRow = $("#_tmplSkillRow").html();
	
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
				var headingDtls = _.findWhere(headings, {key:settings.key});
				$('.heading',settings.$el).append(_.template(tmplHeading, headingDtls));
				
				var skillSet = _.where(skills, {key: settings.key});
				
				_.each(skillSet,function(skill, index, skillSet){
				
					skill.updatedDesc = skill.description;

					_.each(skill.urls,function(value, key, urls){
						var wrappedKey = '<a class="b" href="'+value+'">' + key + '</a>';
						skill.updatedDesc = skill.updatedDesc.replace(key,wrappedKey);
					});
				
					$('.skill-container>.grid-col',settings.$el).append(_.template(tmplSkillRow, skill));
				});
				
			});
			
		});
		
});