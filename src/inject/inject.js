var imgURL = chrome.runtime.getURL("/src/images");

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		document.onkeyup = function(e) {
			if (e.ctrlKey && e.which == 66) {
				console.log("Ctrl + B shortcut combination was pressed");
				console.log(imgURL)

				if (document.body.style.cursor) {
					document.body.style.cursor = '';
				} else {
					document.body.style.cursor = "url(" + imgURL + "/small.png), auto";
				}
			}
		  };
	}
	}, 10);
});