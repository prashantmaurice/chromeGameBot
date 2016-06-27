/**
 * Created by maurice on 26/06/16.
 */


var SlitherExecuter = {
    goToPoint : function(object){
    },

    pointAngle : function(self, ang2){
        var ang1 = self.ang;
        var towardsLeft = RadianUtils.isLeft(ang1,ang2);
        var angle = RadianUtils.getAngle(ang1,ang2);
        var strength = angle/(Math.PI);
        strength = strength*strength;
        // if(strength>1) strength = 1;


        // console.log("diffAct",towardsLeft+" : "+angle + " : " +strength);
        // triggerKeyboardEvent(document.body,37);


        if(towardsLeft) KeyboardUtils.turnLeft(strength);
        else KeyboardUtils.turnRight(strength);
    }

};


var KeyboardUtils = {
    doKeyEvent : function(keyCode, strength){
        console.log("MOVE : "+keyCode+" : "+strength);
        // return;
        var e = jQuery.Event("keydown");
        e.which = keyCode; // # Some key code value
        e.keyCode = keyCode;
        $("body").trigger(e);

        window.setTimeout(function(){
            var e = jQuery.Event("keyup");
            e.which = keyCode; // # Some key code value
            e.keyCode = keyCode;
            $("body").trigger(e);
        }, strength*300);
    },
    turnLeft : function(strength){
        this.doKeyEvent(37,strength);
    },
    turnRight : function(strength){
        this.doKeyEvent(39,strength);
    }
};




