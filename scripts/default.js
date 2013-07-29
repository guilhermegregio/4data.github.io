var start = function start(){
	var activate = ('createTouch' in document) ? 'touchstart' : 'click';


	$('.contextMenuIcon').live(activate, function(event){

		if($('#page').hasClass('active')){
			$('#page').removeClass('active');
		} else {
			$('#page').addClass('active');
		}
	});

};

$(document).ready(start);