function press(keyValue) {
	console.log(event.srcElement)
	// Set up our HTTP request
	var xhr = new XMLHttpRequest();
	xhr.timeout = 1000

	// Setup our listener to process completed requests
	xhr.onload = function () {

		// Process our return data
		if (xhr.status >= 200 && xhr.status < 300) {
			// What do when the request is successful
			var xhr2 = new XMLHttpRequest();
			xhr2.timeout = 1000
			xhr2.open('POST', 'http://192.168.0.54:8090/key');
			xhr2.send('<key state="release" sender="Gabbo">' + keyValue + '</key>');
		} else {
			// What do when the request fails
			console.log('The request failed!');
		}

		// Code that should run regardless of the request status
		console.log('This always runs...');
	};

	xhr.onerror = function() {
		console.log('error');
	}

	xhr.open('POST', 'http://192.168.0.54:8090/key');
	xhr.send('<key state="press" sender="Gabbo">' + keyValue + '</key>');
	console.log(keyValue)
}
