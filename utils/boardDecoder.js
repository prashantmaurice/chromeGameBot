/**
 * Created by maurice on 23/06/16.
 */


var rows = 16;
var columns = 30;

var BoardDecoder = {
    decode : function (){
        var board = {};
        for(var col=1; col<=columns;col++){
            board[col] = {};
            for(var row=1; row<=rows;row++){
                var val = 9;
                if($('#'+row+'_'+col+'').hasClass("blank")) val = 9;
                else if($('#'+row+'_'+col+'').hasClass("open0")) val = 0;
                else if($('#'+row+'_'+col+'').hasClass("open1")) val = 1;
                else if($('#'+row+'_'+col+'').hasClass("open2")) val = 2;
                else if($('#'+row+'_'+col+'').hasClass("open3")) val = 3;
                else if($('#'+row+'_'+col+'').hasClass("open4")) val = 4;
                else if($('#'+row+'_'+col+'').hasClass("open5")) val = 5;
                else if($('#'+row+'_'+col+'').hasClass("open6")) val = 6;
                else if($('#'+row+'_'+col+'').hasClass("open7")) val = 7;
                else if($('#'+row+'_'+col+'').hasClass("open8")) val = 8;
                board[col][row] = val;
            }
        }
        this.printBoard(board);
        // console.log("BOARD",board);
        return board;
    },

    getNextMove : function(board){
        return {col:1,row:1};
    },

    printBoard : function(board){
        var str = "\n";
        for(var row=1; row<=rows;row++){
            for(var col=1; col<=columns;col++){
                str += ""+board[col][row];
            }
            str += "\n";
        }
        console.log("Board",str);
    },

    
};