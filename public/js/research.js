$(function(){

  var tmplResearchRow = _.template($('#_tmplResearchRow').html());

  $.getJSON( "data/research.json", function ( researchPaper ) {

    _.each(researchPaper,function(element, index, list){
        var researchRow = tmplResearchRow(element);
        $('.research').append(researchRow);
    });

  });

});
