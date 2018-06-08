/*
Open a new tab, and load "my-page.html" into it.
*/
function openMyPage() {
	console.log("injection");
	browser.tabs.create({
		"url": "unscrambler/index.html"
	});

	// browser.tabs.create({"url": "unscrambler/index.html"}).then(() => {
	//   browser.tabs.executeScript({
	//     file: "/js/index.js"
	//   });
	// });
}

/* Listen in for clicks to browser_action */
browser.browserAction.onClicked.addListener(openMyPage);