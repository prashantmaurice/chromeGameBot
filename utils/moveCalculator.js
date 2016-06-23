/**
 * Created by maurice on 23/06/16.
 */


var rows = 16;
// var columns = 16;
var columns = 30;

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
            var cleared = getClearedAround(board,col,row);
            var numCleared = cleared.length;
            var flagged = getFlaggedAround(board,col,row);
            var numFlagged = flagged.length;
            var unknown = getUnknownAround(board,col,row);
            var numUnknown = unknown.length;
            if(numUnknown!=0 && centerVal!=0&&centerVal!=9){
                console.log("REACH1("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown);
                var nextUnknown = getNextUnknownAround(board,col,row);
                //all mines found click rest of the boxes
                if(numFlagged==centerVal){
                    console.log("REACH2("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown,nextUnknown);
                    return {col: col,row: row, action:'middle'};
                    // if(nextUnknown!=null){
                        // return {col:nextUnknown.col,row:nextUnknown.row, action:'left_right'};
                        console.log("All mines around "+col+":"+row+" found");
                    // }
                }

                //all unknown are mines
                if((numFlagged+numUnknown)==centerVal){
                    console.log("REACH3("+col+":"+row+") : "+centerVal+":"+numCleared+":"+numFlagged+":"+numUnknown,nextUnknown);
                    if(nextUnknown!=null){
                        console.log("All unknown are mines around "+col+":"+row+" found");
                        return {col:nextUnknown.col,row:nextUnknown.row, action:'right'};
                    }
                }

                // if(centerVal-numFlagged<numUnknown){
                //     permute(board,col,row,cleared,flagged,unknown,centerVal);
                // }

            }else{
                //all boxes filled
            }

        }
    }
    console.log("Executing Random");
    // return;
    var selected = getRandomUnknownCell(board);
    return {col : selected[0], row : selected[1], action:"left"};
}

function permute(board,col,row,cleared,flagged,unknown,centerVal){
    // var mines = centerVal-flagged.length;

    var zeroOnes = recursiveWrap(unknown.length);
    getValidZeroOnes(board,col,row,unknown,zeroOnes);


    // unknownPossibleVal = []
    // for (i=0; i<unknown.length; i++){
    //     for{j=i; }
    // }
}

function getValidZeroOnes(board,col,row,unknown,zeroOnes){
    var valid = [];
    zeroOnes.forEach(function(zeroOne){
        isValidZeroOne(board,col,row,unknown,zeroOne);
    });
}

function isValidZeroOne(board,col,row,unknown,zeroOne){
    
}

function getUnknownPermutations(board,col,row){
    
}

function recursiveWrap(len){
    var sol = [];
    recursive([],0,len,sol);
    return sol;
}
function recursive(arr,put,len,sol){
    function copy(arr){
        var arr2 = [];
        arr.forEach(function(a){ arr2.push(a)});
        return arr2;
    }


    //detect end
    if(put==len){
        console.log("END : ",copy(arr));
        sol.push(copy(arr));
        return;
    }


    //next recursive
    arr[put] = 1;
    var var1 = recursive(arr,put+1,len,sol);
    arr[put] = 0;
    var var2 = recursive(arr,put+1,len,sol);
    return;
    // return var1.concat(var2);
}

function getUnknownAround(board,col,row){
    var unknowns = [];
    iterateAround(col,row).forEach(function(iter){
        if(isUnknown(board,iter[0],iter[1]))  unknowns.push(iter);
    });
    return unknowns;
}


function getFlagsAround(board,col,row){
    var unknowns = [];
    iterateAround(col,row).forEach(function(iter){
        if(isFlagged(board,iter[0],iter[1]))  unknowns.push(iter);
    });
    return unknowns;
}

function getRandomUnknownCell(board){
    var unknowns = [];
    for(var col=1; col<=columns;col++){
        for(var row=1; row<=rows;row++) {
            if(isUnknown(board,col,row)) unknowns.push([col,row]);
        }
    }
    var selectedNum =  Math.round(Math.random()*unknowns.length-0.5);
    return unknowns[selectedNum];

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
    var count = [];
    iterateAround(col,row).forEach(function(iter){
        if(isCleared(board,iter[0],iter[1])) count.push(iter);
    });
    return count;
}
function getFlaggedAround(board,col,row){
    var count = [];
    iterateAround(col,row).forEach(function(iter){
        if(isFlagged(board,iter[0],iter[1])) count.push(iter);
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