/**
 * Created by maurice on 23/06/16.
 */


var rows = 16;
var columns = 16;
// var columns = 30;

var MoveCalculator = {
    getNextMove : function (board){
        return getMoveByDirect(board);
        // return {col:2,row:2, action:'right'};
    }


};

function getMoveByDirect(board){
    for(var col=1; col<=columns;col++){
        for(var row=1; row<=rows;row++) {
            var centerVal = board[col][row];
            var numCleared = getClearedAround(board,col,row);
            var numFlagged = getFlaggedAround(board,col,row);
            var numUnknown = getTotalAround(col,row)-numCleared-numFlagged;
            if(numUnknown!=0 && centerVal!=0&&centerVal!=9){
                console.log("REACH1("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown);
                var nextUnknown = getNextUnknownAround(board,col,row);
                //all mines found click rest of the boxes
                if(numFlagged==centerVal){
                    console.log("REACH2("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown,nextUnknown);
                    if(nextUnknown!=null){
                        console.log("All mines around "+col+":"+row+" found");
                        return {col:nextUnknown.col,row:nextUnknown.row, action:'left'};
                    }
                }

                //all unknown are mines
                if((numFlagged+numUnknown)==centerVal){
                    console.log("REACH3("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown,nextUnknown);
                    if(nextUnknown!=null){
                        console.log("All unknown are mines around "+col+":"+row+" found");
                        return {col:nextUnknown.col,row:nextUnknown.row, action:'right'};
                    }
                }

            }else{
                //all boxes filled
            }

        }
    }
    console.log("Executing Random");
    return {col : getRandomCell().col, row : getRandomCell().row, action:"left"};
}

function getRandomCell(){
    return {col : Math.round(Math.random()*columns+0.5),row : Math.round(Math.random()*rows+0.5)}
}

function getNextUnknownAround(board, col, row){
    var next = null;
    iterateAround(col,row).forEach(function(iter){
        if(isUnknown(board,iter[0],iter[1])) next = {col : iter[0], row : iter[1]};
    });
    return next;
}

function getClearedAround(board,col,row){
    var count = 0;
    iterateAround(col,row).forEach(function(iter){
        if(isCleared(board,iter[0],iter[1])) count++;
    });
    return count;
}
function getFlaggedAround(board,col,row){
    var count = 0;
    iterateAround(col,row).forEach(function(iter){
        if(isFlagged(board,iter[0],iter[1])) count++;
    });
    return count;
}
function getTotalAround(col,row){
    return iterateAround(col,row).length;
}

function isCleared(board,col,row){
    return board[col][row]>=0&&board[col][row]<=8;
}
function isUnknown(board,col,row){
    return board[col][row]==9;
}
function isFlagged(board,col,row){
    return board[col][row]==-1;
}
function iterateAround(x,y){
    var arr = [];
    arr.push([x-1,y-1]);
    arr.push([x-0,y-1]);
    arr.push([x+1,y-1]);
    arr.push([x+1,y-0]);
    arr.push([x+1,y+1]);
    arr.push([x+0,y+1]);
    arr.push([x-1,y+1]);
    arr.push([x-1,y+0]);

    var arr2 = [];
    arr.forEach(function(a){
       if(a[0]>0 && a[0]<=columns)
           if(a[1]>0 && a[1]<=rows)
               arr2.push(a);
    });

    return arr2;
}