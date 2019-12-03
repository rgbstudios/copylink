window.onload = function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
		let urlArea = document.getElementById('urlArea');		
		urlArea.innerHTML = tabs[0].url;
		urlArea.select();
		document.execCommand('copy');
		document.getElementById('info').innerHTML = 'Link copied successfully';
	});
}