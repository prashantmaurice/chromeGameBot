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
		case "http://minesweeperonline.com/": chrome.tabs.executeScript(tab.id, { file : "contentscripts/minesweeper.js"}); break;
	}
}



chrome.browserAction.onClicked.addListener(click);
