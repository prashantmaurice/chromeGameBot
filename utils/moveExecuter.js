/**
 * Created by maurice on 23/06/16.
 */


var leftTop = {x : 20,y : 160};
var rightBottom = {x : 480,y : 400};

var MoveExecuter = {
    executeMove : function (move){
        var moveXy = this.transformColRowToXY(move.col,move.row);
        $.ajax({
            url: "http://localhost:4400/mouse/move-click?x="+moveXy.x+"&y="+moveXy.y
        }).done(function (data) {
            console.log("BACKPORT : ",data)
            // callback(data);
        });
    },

    transformColRowToXY : function(col,row){
        return {x:20,y:400};
    }
};