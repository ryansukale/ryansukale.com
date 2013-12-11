$(function(){
	
	$(".main-content").onepage_scroll({
		sectionContainer: "section", 
		easing: "ease",
		animationTime: 1000,
		pagination: true,
		updateURL: false
	});

	var expMetadata = $('.experience-metadata');
	
	var experienceDescriptions = {
		'tcs' : $('.exp-tcs',expMetadata).html(),
		'iu_iat' : $('.exp-iu-iat',expMetadata).html(),
		'iu_soic' : $('.exp-iu-soic',expMetadata).html(),
		'oracle' : $('.exp-oracle',expMetadata).html(),
		'yahoo' : $('.exp-yahoo',expMetadata).html() 
	};
	
	
	var experience = {
    "timeline":
    {
        "headline":"Experience",
        "type":"default",
        "text":"2008 - Present",
        "asset": {
            "media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
        //    "credit":"Credit Name Goes Here",
        //    "caption":"Caption text goes here"
        },
        "date": [
            {
                "startDate":"2008,10",
                "endDate":"2011,03",
                "headline":"Tata Consultancy Services",
                "text":"<p>BSNL Telecom</p> <p>J2EE Applications Engineer</p> ",
                "tag":"Full Time",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    //"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
										'media':experienceDescriptions['tcs']
                    //"thumbnail":"optional-32x32px.jpg",
                    //"credit":"Credit Name Goes Here",
                    //"caption":"Caption text goes here"
                }
            },
						{
                "startDate":"2011,03",
                "endDate":"2012,07",
                "headline":"Oracle Corporation",
                "text":"<p>Oracle Fusion Financials</p> <p>J2EE Applications Developer</p>",
								"tag":"Full Time",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    //"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
										'media':experienceDescriptions['oracle']
                    //"thumbnail":"optional-32x32px.jpg",
                    //"credit":"Credit Name Goes Here",
                    //"caption":"Caption text goes here"
                }
            },
						{
                "startDate":"2012,08",
                "endDate":"2014,05",
                "headline":"Indiana University",
                "text":"<p>School Of Informatics & Computing</p><p>Graduate Research Assistant, Uncanny Valley</p>",
								"tag":"Part Time",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": { //"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
										'media':experienceDescriptions['iu_soic']
                    //"thumbnail":"optional-32x32px.jpg",
                    //"credit":"Credit Name Goes Here",
                    //"caption":"Caption text goes here"
                }
            },
						{
                "startDate":"2013,05",
                "endDate":"2013,07",
                "headline":"Yahoo!",
                "text":"<p>Yahoo Finance Mobile Web</p><p>UX/Usability and Front end Intern</p>",
								"tag":"Internship",
                //"tag":"This is Optional",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    //"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
										'media':experienceDescriptions['yahoo'],
                    //"thumbnail":"optional-32x32px.jpg",
                    //"credit":"Credit Name Goes Here",
                    //"caption":"Caption text goes here"
                }
            },
						{
                "startDate":"2013,02",
                "endDate":"2014,02",
                "headline":"Indiana University",
                "text":"<p>Institute of American Thought</p><p>UX/Usability and Front End</p>",
                "tag":"Part Time",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    //"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
										'media':experienceDescriptions['iu_iat'],
                    //"thumbnail":"optional-32x32px.jpg",
                    //"credit":"Credit Name Goes Here",
                    //"caption":"Caption text goes here"
                }
            }
        ]//,
        //"era": [
        //    {
        //        "startDate":"2008,10",
        //        "endDate":"2011,03",
        //        "headline":"TCS",
        //        //"text":"<p>Body text goes here, some HTML is OK</p>",
        //        "tag":"This is Optional"
        //    },
				//		{
        //        "startDate":"2011,03",
        //        "endDate":"2012,07",
        //        "headline":"Oracle",
        //        //"text":"<p>Body text goes here, some HTML is OK</p>",
        //        "tag":"This is Optional"
        //    },
				//		{
        //        "startDate":"2012,08",
        //        "endDate":"2014,05",
        //        "headline":"IUPUI, SOIC",
        //        //"text":"<p>Body text goes here, some HTML is OK</p>",
        //        "tag":"This is Optional"
        //    },
				//		{
        //        "startDate":"2013,05",
        //        "endDate":"2013,07",
        //        "headline":"Yahoo",
        //        //"text":"<p>Body text goes here, some HTML is OK</p>",
        //        "tag":"This is Optional"
        //    },
				//		{
        //        "startDate":"2013,02",
        //        "endDate":"2014,02",
        //        "headline":"IUPUI, IAT",
        //        //"text":"<p>Body text goes here, some HTML is OK</p>",
        //        "tag":"This is Optional"
        //    }
        //
				//	]
			}
	}
	
	createStoryJS({
        type:       'timeline',
        width:      'auto',
        height:     '600',
				start_at_end :false,
        source:     experience,
        embed_id:   'my-timeline',
				css:				'css/plugins/timeline.css',
        js:					'js/plugins/timeline-min.js'
    });
	
	
});
