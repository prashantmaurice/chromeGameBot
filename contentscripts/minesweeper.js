var TAG = "minesweeper-c-script";
init();
function init(){
    // console.log("r",r);
    // console.log("$",$);
    // console.log(TAG,"init");
    console.log("networkUtils",NetworkUtils);
    console.log("genUtils",GenUtils);
    // console.log("BoardDecoder",BoardDecoder);
    // console.log("MoveExecuter",MoveExecuter);


    GenUtils.injectScript( chrome.extension.getURL('bower_components/underscore/underscore-min.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/minesweeper/boardDecoder.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/minesweeper/moveCalculator.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('utils/minesweeper/moveExecuter.js'), 'body');
    GenUtils.injectScript( chrome.extension.getURL('injectscripts/minesweeper.js'), 'body');

}

// startDecoding();
// function startDecoding() {
//     console.log("startDecoding");
//
//     $('#1_24').trigger({type: 'mousedown', button: 3});
//
//     window.setTimeout(function(){
//         $('#1_24').trigger({type: 'mouseup', button: 1});
//         // var e = jQuery.Event("keyup");
//         // e.which = keyCode; // # Some key code value
//         // e.keyCode = keyCode;
//         // $("body").trigger(e);
//     }, 250);

    // //main
    // var count = 0;
    // var stop = false;
    // MoveExecuter.executeMove({ col : 12, row:12, action: "left"});
    // var refreshIntervalId = setInterval(function(){
    //     if(count++>10000) return;
    //     var board = BoardDecoder.decode();
    //
    //     //game ended
    //     if(board==null){
    //
    //         // clearInterval(refreshIntervalId);
    //
    //
    //
    //         MoveExecuter.resetBoard();
    //         // return;
    //     }else{
    //         var next = MoveCalculator.getNextMove(board);
    //         if(next==null){
    //             clearInterval(refreshIntervalId);
    //             return;
    //         }else{
    //             MoveExecuter.executeMove(next);
    //         }
    //     }
    //
    //
    // }, 50);

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




// }


