/**
 * Created by maurice on 26/06/16.
 */



var RadianUtils = {
    getAngle : function(ang1,ang2){
        var var1 = ang1-ang2;
        var var2 = (var1+(2*Math.PI))%(2*Math.PI);
        return Math.min(var2,(2*Math.PI)-var2);
    },
    isLeft : function(ang1,ang2){
        var var1 = ang1-ang2;
        var var2 = (var1+(2*Math.PI))%(2*Math.PI);
        return var2<Math.PI;
    },
    getAbsAngle : function(obj1, obj2){
        var rad = Math.atan2(obj2.yy - obj1.yy, obj2.xx - obj1.xx);
        if(rad<0) rad = rad+(2*Math.PI);
        return rad;
    },
    getDistance : function(obj1, obj2){
        if(obj1==null || obj2==null) return 10000000;
        return Math.sqrt((obj1.xx-obj2.xx)*(obj1.xx-obj2.xx) + (obj1.yy-obj2.yy)*(obj1.yy-obj2.yy));
    }
};




