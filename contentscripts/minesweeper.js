var TAG = "minesweeper-c-script";
init();
function init(){
    // console.log("r",r);
    // var r = require('utils/networkUtils.js');
    console.log("$",$);
    console.log("require",require);
	console.log(TAG,"init");
    console.log("networkUtils",NetworkUtils);
    console.log("BoardDecoder",BoardDecoder);

}

startDecoding();
function startDecoding() {
    BoardDecoder.decode();
}


