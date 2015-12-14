$(document).ready(function() {
	
	setGistWidth();

});

function setGistWidth() {
	var deviceWidth = window.orientation == 0 ? window.screen.width : window.screen.height;
    if (navigator.userAgent.indexOf('Android') >= 0 && window.devicePixelRatio) {
        deviceWidth = deviceWidth / window.devicePixelRatio;
    }

    if (deviceWidth < 768) {
		deviceWidth -= 30;
		$('.gist').css('width',deviceWidth);
    }
}