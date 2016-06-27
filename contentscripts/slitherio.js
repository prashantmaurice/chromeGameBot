var TAG = "slitherio-c-script";

init();
function init(){
    console.log("$",$);
	console.log(TAG,"init");
//     console.log("REACH0",$);
//     addListeners();

    GenUtils.injectScript( chrome.extension.getURL('bower_components/jquery/dist/jquery.min.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/slitherio/slitherUtils.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/slitherio/slitherExecuter.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/slitherio/slitherDecoder.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/slitherio/slitherAnalyzer.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('injectscripts/slitherio.js'), 'body');
}





