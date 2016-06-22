function click(e){
	console.log("test223");
	chrome.tabs.query({currentWindow : true, active:true},function(tabs){
		var currTab = tabs[0];
		injectForTab(currTab);
		console.log("currentTab",currTab);
	});
}

function injectForTab(tab){
	switch(tab.url){
		case "http://minesweeperonline.com/#intermediate": chrome.tabs.executeScript(tab.id, { file : "contentscripts/minesweeper.js"}); break;
		case "http://slither.io/": chrome.tabs.executeScript(tab.id, { file : "contentscripts/slitherio.js"}); break;
	}
}



chrome.browserAction.onClicked.addListener(click);
