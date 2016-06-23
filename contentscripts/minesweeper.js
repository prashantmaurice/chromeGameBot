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
    MoveExecuter.executeMove({ col : 12, row:12, action: "left"});
    var refreshIntervalId = setInterval(function(){
        if(count++>10000) return;
        var board = BoardDecoder.decode();
    
        //game ended
        if(board==null){
    
            // clearInterval(refreshIntervalId);
    
    
    
            MoveExecuter.resetBoard();
            // return;
        }else{
            var next = MoveCalculator.getNextMove(board);
            if(next==null){
                clearInterval(refreshIntervalId);
                return;
            }else{
                MoveExecuter.executeMove(next);
            }
        }


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


