/**
 * Created by maurice on 28/06/16.
 */
addListeners();
console.log("INJECTED");


function addListeners(){
    window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        // console.log("onkeydown",e.keyCode);
        if(code==75){// k
            startDecoding();
        }
        
        if(code == 76) {// l
            nextPlay();
        }
    };
}

function startDecoding(){
    var count =0;
    MoveExecuter.executeMove({ col : 12, row:12, action: "left"});
    var refreshIntervalId = setInterval(function(){
        if(count++>100000) {//safety switch
            clearInterval(refreshIntervalId);
            return;
        }
        var board = BoardDecoder.decode();

        //game ended
        if(board==null){
            // MoveExecuter.resetBoard();
            clearInterval(refreshIntervalId);
        }else{
            test();
        }

    }, 10);



}

function nextPlay(){
    var board = BoardDecoder.decode();
    var nextMove = MoveCalculator.getNextMove2(board);
    nextMove.toFlag.forEach(function(tile){
        MoveExecuter.flag(tile.row, tile.col);
    });
    nextMove.toClear.forEach(function(tile){
        MoveExecuter.clear(tile.row, tile.col);
    });
}

function clear(){
    $('#face').trigger({type: 'mousedown', button: 3});
    setTimeout(function(){
        $('#face').trigger({type: 'mouseup', button: 1});
    }, 100);
}