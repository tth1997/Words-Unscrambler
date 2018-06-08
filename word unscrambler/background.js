/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
	console.log("injection");
	browser.tabs.create({
		"url": "unscrambler/index.html"
	});
}

/* Listen in for clicks to browser_action */
browser.browserAction.onClicked.addListener(openMyPage);