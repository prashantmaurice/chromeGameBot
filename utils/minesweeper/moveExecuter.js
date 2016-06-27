/**
 * Created by maurice on 23/06/16.
 */


var leftTop = {x : 20,y : 160};
// var rightBottom = {x : 260,y : 400};
var rightBottom = {x : 480,y : 400};
var rows = 16;
// var columns = 16;
var columns = 30;

var MoveExecuter = {
    executeMove : function (move){
        console.log("executeMove",move);
        var moveXy = this.transformColRowToXY(move.col,move.row);
        $.ajax({
            url: "http://localhost:4400/mouse/move-click?x="+moveXy.x+"&y="+moveXy.y+"&action="+move.action
        }).done(function (data) {
            console.log("BACKPORT : ",data);
            // callback(data);
        });
    },

    resetBoard : function (){
        $.ajax({
            // url: "http://localhost:4400/mouse/move-click?x=140&y=120&action=left"
            url: "http://localhost:4400/mouse/move-click?x=250&y=120&action=left"
        }).done(function (data) {
            console.log("BACKPORT : ",data);
            // callback(data);
        });
    },

    transformColRowToXY : function(col,row){
        //
        // console.log("RRRRR : ",col);
        // console.log("RRRRR : ",leftTop.x);
        // console.log("RRRRR : ",rightBottom.x);
        // console.log("RRRRR : ",(rightBottom.x-leftTop.x));
        // console.log("RRRRR : ",((rightBottom.x-leftTop.x)/(columns-1)));
        // console.log("RRRRR : ",((col-1)*((rightBottom.x-leftTop.x)/(columns-1))));
        // console.log("RRRRR : ",leftTop.x+((col-1)*((rightBottom.x-leftTop.x)/(columns-1))));
        //

        var xReal = leftTop.x+((col-1)*((rightBottom.x-leftTop.x)/(columns-1)));
        var yReal = leftTop.y+((row-1)*((rightBottom.y-leftTop.y)/(rows-1)));

        return {x:xReal,y:yReal};
        // return {x:20,y:400};
    }
};