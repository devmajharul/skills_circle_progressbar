(function($){
	"use-strict";


	$(document).ready(function(){
	  $('#webdesign_progress').circleProgress({
	    value: 0.85,
	    size: 150,
	    thickness:3,
	    fill: {
	      gradient: ["red", "orange"]
	    }
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle_percentage').html(Math.round(85 * progress) + '<i>%</i>');
	  });

	  $('#webdevelop_progress').circleProgress({
	    value: 0.70,
	    size: 150,
	    thickness:3,
	    fill: {
	      gradient: ["red", "green"]
	    }
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle_percentage').html(Math.round(70 * progress) + '<i>%</i>');
	  });

	  $('#graphics_progress').circleProgress({
	    value: 0.40,
	    size: 150,
	    thickness:3,
	    fill: {
	      gradient: ["green", "red"]
	    }
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.circle_percentage').html(Math.round(40 * progress) + '<i>%</i>');
	  });

	});

}(jQuery));