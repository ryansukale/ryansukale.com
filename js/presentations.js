$(function(){
	var tmplPPTRow = _.template($('#_tmplPPTRow').html());
	
	$.getJSON( "data/presentations.json", function( presentations ) {
		
		_.each(presentations,function(ppt, index, list){
				
				var pptRow = tmplPPTRow(ppt);
				$('.ppts').append(pptRow);
				
				//$.ajax({
				//	url:'http://speakerdeck.com/oembed.json?url='+ppt.url_direct
				//}).done(function(data){
				//	console.log(data);
				//	pptRow.embed_code = data.html;
				//	var pptRow = tmplPPTRow(element);
				//	//$('.ppts').append(pptRow);
				//});
				
		});
		
	});
		
});

//<iframe allowfullscreen=\"true\" allowtransparency=\"true\" frameborder=\"0\" height=\"596\" id=\"talk_frame_90096\" mozallowfullscreen=\"true\" src=\"//speakerdeck.com/player/ecafbae08964013139980215d6758fd9\" style=\"border:0; padding:0; margin:0; background:transparent;\" webkitallowfullscreen=\"true\" width=\"710\"></iframe>\n