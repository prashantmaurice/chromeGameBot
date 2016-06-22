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
    console.log("MoveExecuter",MoveExecuter);

}

startDecoding();
function startDecoding() {

    // for(var move=0; move<3;move++){
        var board = BoardDecoder.decode();
        var next = BoardDecoder.getNextMove(board);

        MoveExecuter.executeMove(next);
    
    
    // }




}


