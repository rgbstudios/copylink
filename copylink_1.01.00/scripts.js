window.onload = function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var urlArea = document.getElementById("urlArea");		
		urlArea.innerHTML = tabs[0].url;
		urlArea.select();
		document.execCommand("copy");
		document.getElementById("title").innerHTML = "Link copied successfully";
	});
}