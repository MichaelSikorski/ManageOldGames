
function fetchGamesList() {
	
}

function authenticate() {
	// 1. Create a new XMLHttpRequest object
	let xhr = new XMLHttpRequest();

	// 2. Configure it
	xhr.open('POST', 'http://127.0.0.1:3000/user/login');
	
	let json = JSON.stringify({
	  uname: document.getElementById("uname").innerHTML,
	  pass: document.getElementById("pass").innerHTML
	});
	

	// 3. Send the request over the network
	xhr.send(json);

	// 4. This will be called after the response is received
	xhr.onload = function() {
	  if (xhr.status != 200) { // analyze HTTP status of the response
		alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
	  } else { // show the result
		alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
	  }
	};

	xhr.onprogress = function(event) {
	  if (event.lengthComputable) {
		alert(`Received ${event.loaded} of ${event.total} bytes`);
	  } else {
		alert(`Received ${event.loaded} bytes`); // no Content-Length
	  }

	};

	xhr.onerror = function() {
	  alert("Request failed");
	};
}