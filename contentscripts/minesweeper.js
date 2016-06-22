var TAG = "minesweeper-c-script";
init();
function init(){
    // console.log("r",r);
    // var r = require('utils/networkUtils.js');
    console.log("$",$);
	console.log(TAG,"init");
    console.log("networkUtils",NetworkUtils);
    console.log("BoardDecoder",BoardDecoder);
    console.log("MoveExecuter",MoveExecuter);

}

startDecoding();
function startDecoding() {

    //main
    var count = 0;
    var stop = false;
    var refreshIntervalId = setInterval(function(){
        if(count++>10000) return;
        var board = BoardDecoder.decode();
    
        //game ended
        if(board==null){
    
            // clearInterval(refreshIntervalId);
    
    
    
            MoveExecuter.resetBoard();
            return;
        }
    
    
        var next = MoveCalculator.getNextMove(board);
        MoveExecuter.executeMove(next);
    }, 50);

    //test1
    // MoveExecuter.executeMove({col : 16, row:16});
    // MoveExecuter.resetBoard();

    // for(var move=0; move<3;move++){
    //     var board = BoardDecoder.decode();
    //     var next = MoveCalculator.getNextMove(board);
    //
    //     MoveExecuter.executeMove(next);
    //
    //
    // }




}


