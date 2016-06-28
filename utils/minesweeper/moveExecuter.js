/**
 * Created by maurice on 23/06/16.
 */

var MoveExecuter = {
    clear : function(row, col){
        $('#'+row+'_'+col).trigger({type: 'mousedown', button: 3}).trigger({type: 'mouseup', button: 1});
    },
    flag : function(row, col){
        $('#'+row+'_'+col).trigger({type: 'mousedown', button: 2}).trigger({type: 'mouseup', button: 1});
    },
    surroundClear : function(row, col){
        this.clear(row,col);
        this.flag(row,col);
    },
    executeMove : function (move){
        console.log("executeMove",move);
        switch (move.action){
            case 'left': this.clear(move.row,move.col);break;
            case 'right': this.flag(move.row,move.col);break;
            case 'middle': this.surroundClear(move.row,move.col);break;
        }
    },

    resetBoard : function (){
        //TODO : add reset command to restart game on fail/success
        
        // $.ajax({
        //     // url: "http://localhost:4400/mouse/move-click?x=140&y=120&action=left"
        //     url: "http://localhost:4400/mouse/move-click?x=250&y=120&action=left"
        // }).done(function (data) {
        //     console.log("BACKPORT : ",data);
        //     // callback(data);
        // });
    }

};
