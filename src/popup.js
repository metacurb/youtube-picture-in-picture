$("<a href='#' id='upload-btn' class='yt-uix-button-default yt-uix-button popout-button'><span class='yt-uix-button-content'>Pop Out</span></a>").prependTo('#yt-masthead-signin, #yt-masthead-user');

$(document).ready(function() {
	var popOut = document.getElementsByClassName("popout-button");
	popOut[0].addEventListener("click", function(e) {
		e.preventDefault();
		urlCheck();
	});
});

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
	},
	function(createdWindow) {
		console.log(createdWindow);
	});
}