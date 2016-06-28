/**
 * Created by maurice on 23/06/16.
 */


var rows = 16;
// var columns = 16;
var columns = 30;

var MoveCalculator = {
    getNextMove2 : function(board){
        return getMoveBySecond(board);
    }
};

function getMoveBySecond(board){

    var boxes = {};

    //Form Boxes and invert boxes
    for(var col=1; col<=columns;col++) {
        for (var row = 1; row <= rows; row++) {
            var centerVal = board[col][row];
            var unknowns = getUnknownAround(board,col,row);
            var flagged = getFlaggedAround(board,col,row);

            if(centerVal==9 || centerVal==-1 || unknowns.length==0) continue;

            var unknownsEncoded = [];
            unknowns.forEach(function(val){unknownsEncoded.push(encode(val[0],val[1]))});
            boxes[encode(col,row)] = {val : centerVal-flagged.length, unknowns : unknownsEncoded};
        }
    }
    console.log("BOXES",boxes);

    //Find subsets
    for (var box1 in boxes) {
        for (var box2 in boxes) {
            if(box1!=box2){
                if(boxes[box2].unknowns.length>1){//try to split box2
                    if(_.difference(boxes[box1].unknowns, boxes[box2].unknowns).length==0){
                        //box1 is subset of box2
                        // console.log("Splitted ",boxes[box2].unknowns,boxes[box1].unknowns,_.difference(boxes[box2].unknowns, boxes[box1].unknowns),boxes[box2].unknowns-boxes[box1].unknowns);
                        boxes[box2].val = boxes[box2].val-boxes[box1].val;
                        boxes[box2].unknowns = _.difference(boxes[box2].unknowns, boxes[box1].unknowns);
                    }
                }
            }
        }
    }

    //Find boxes with val 1
    var toFlag = [];
    var toClear = [];
    for (var box1 in boxes) {
        if(boxes[box1].unknowns.length == boxes[box1].val){
            boxes[box1].unknowns.forEach(function(unknown){
                toFlag.push(unknown);
            });
        }
        if(boxes[box1].val == 0){
            boxes[box1].unknowns.forEach(function(unknown){
                toClear.push(unknown);
            });
        }
    }
    toFlag = _.uniq(toFlag);
    toClear = _.uniq(toClear);
    console.log("To Flag : ",toFlag);
    console.log("To Clear : ",toClear);

    var decodedToFlag = [];
    toFlag.forEach(function(code){decodedToFlag.push(decode(code))});
    var decodedToClear = [];
    toClear.forEach(function(code){decodedToClear.push(decode(code))});

    if(decodedToFlag.length+decodedToClear.length==0){
        console.log("Executing random");
        var selected = getRandomUnknownCell(board);
        return {toClear : [{col : selected[0], row : selected[1]}], toFlag : []};
    }else{
        return {
            toFlag : decodedToFlag,
            toClear : decodedToClear
        }
    }

}

function encode(col,row){
    return col*100+row;
}
function decode(code){
    return {col : Math.floor(code/100), row : code%100}
}


function getUnknownAround(board,col,row){
    var unknowns = [];
    iterateAround(col,row).forEach(function(iter){
        if(isUnknown(board,iter[0],iter[1]))  unknowns.push(iter);
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
function getFlaggedAround(board,col,row){
    var count = [];
    iterateAround(col,row).forEach(function(iter){
        if(isFlagged(board,iter[0],iter[1])) count.push(iter);
    });
    return count;
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