(function(){
	var breakpoint = Math.min(window.innerHeight, window.innerWidth);
	var text = document.getElementById('result');

	$(document).ready(function() {
		var longSide = Math.max(window.innerWidth, window.innerHeight);
		var shortSide = Math.min(window.innerWidth, window.innerHeight);
		var deviceWidth = longSide / window.devicePixelRatio;
		console.log(deviceWidth);


		function push(device) {
			var object = {
				devicePrediction: device,
				userAgent: navigator.userAgent,
				devicePixelRatio: window.devicePixelRatio,
				longSide: longSide,
				shortSide: shortSide
			};
			$.ajax({
				url: "https://api.mongolab.com/api/1/databases/responsive_tracking/collections/devices?apiKey=XXXXXXXXXXXXXXXXXXXXXXXX",
				type: "POST",
				data: JSON.stringify(object),
				contentType: "application/json"
			}).done(function(msg){
				console.log(msg);
			});
		}

		/* ipads */
		if(!!(navigator.userAgent.match(/iPad/i))) {
			text.innerHTML = '<h2>Tablet</h2>';
			push("Tablet");

		/* iphones */
		} else if (!!(navigator.userAgent.match(/(iPhone)|(Windows Phone)/i))) {
			text.innerHTML = '<h2>Mobile</h2>';
			push("Mobile");

		/* msie */
		} else if (!!(navigator.userAgent.match(/MSIE/i))) {
			text.innerHTML = '<h2>Desktop</h2>';
			push("Desktop");


	/**
	 * viewport switch
	 */
		/* Medium devices (desktops, 992px and up) */
		} else if(deviceWidth > 1024){
			text.innerHTML = '<h2>Desktop</h2>';
			push("Desktop");


		/* v1.0 Small devices (tablets, 768px and up) */
		/* v1.1 Small devices (tablets, 700px and up) */
		} else if (deviceWidth > 700){
			text.innerHTML = '<h2>Tablet</h2>';
			push("Tablet");

			/* Extra small devices (phones, less than 768px) */
			/* No media query since this is the default in Bootstrap */
		} else {
			text.innerHTML = '<h2>Mobile</h2>';
			push("Mobile");
		}
	});
})();