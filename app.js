(function(){
	var breakpoint = Math.min(window.innerHeight, window.innerWidth);
	var text = document.getElementById('result');

	document.addEventListener('DOMContentLoaded', function(){
		var longSide = Math.max(window.innerWidth, window.innerHeight);
		var shortSide = Math.min(window.innerWidth, window.innerHeight);
		var deviceWidth = longSide / window.devicePixelRatio;
		console.log(deviceWidth);

		/* Medium devices (desktops, 992px and up) */
		if(deviceWidth > 992){
			text.innerHTML = '<h2>Desktop</h2>'+ 'deviceWidth: ' + deviceWidth + 'px <br /> pixelRatio: ' + window.devicePixelRatio;


			/* v1.0 Small devices (tablets, 768px and up) */
			/* v1.1 Small devices (tablets, 700px and up) */
		} else if (deviceWidth > 700){
			text.innerHTML = 'Tablet: ' + deviceWidth;

			/* Extra small devices (phones, less than 768px) */
			/* No media query since this is the default in Bootstrap */
		} else {
			text.innerHTML = '<h2>Mobile</h2> : ' + deviceWidth;
		}
	});
})();