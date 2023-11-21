window.onload = function () {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		function successCopy() {
			document.getElementById('info').innerHTML =
				'Link copied successfully';
		}

		const urlArea = document.getElementById('urlArea');
		urlArea.innerHTML = tabs[0].url;
		urlArea.select();

		if (navigator.clipboard) {
			navigator.clipboard.writeText(tabs[0].url).then(successCopy);
		} else {
			document.execCommand('copy');
			successCopy();
		}
	});
};
