function addButton() {
	var unregBool = !!document.getElementById('yt-masthead-signin');
	var unreg = document.getElementById('yt-masthead-signin');
	var reg = document.getElementById('yt-masthead-user');
	popButton = document.createElement('a');
	popButton.className = 'yt-uix-button-default yt-uix-button popout-button';
	popButton.id = 'upload-btn';
	popButton.innerHTML = '<span class="yt-uix-button-content">Pop Out</span>';

	if (unregBool) {
		unreg.insertBefore(popButton, unreg.firstChild);	
	} else {
		reg.insertBefore(popButton, reg.firstChild);	
	}
}

function popOut() {
	var popOut = document.getElementsByClassName("popout-button");
	popOut[0].addEventListener("click", function(e) {
		e.preventDefault();
		urlCheck();
	});
}

function urlCheck() {
	var CurrentPage = window.location.href;
	if (/watch/.test(CurrentPage)) {
		urlDetails(CurrentPage);
	}
}

function urlDetails(SelectedVideo) {
	var YoutubeUnique = SelectedVideo.split('/watch?v=').pop();
	var CleanChars = YoutubeUnique.replace('&', '?');
	var CompleteUrl = 'https://www.youtube.com/embed/' + CleanChars;
	createPopUp(CompleteUrl);
}

function createPopUp(GoodLink) {
	chrome.runtime.sendMessage({
		action: 'createWindow',
		url: GoodLink
	});
}

addButton();
popOut();