/**
 * Created by maurice on 26/06/16.
 */


var SlitherAnalyzer = {
    analyze : function(gamevars){
        // console.log("MYSELF ANGLE : ",gamevars.self.rcv + " : "+gamevars.self.pts.length+" : "+gamevars.self.wsep)
        var nextFood = this.getNextFoodSource(gamevars.self, gamevars.foods)
        // console.log("Next Food : "+nextFood.xx +" : "+nextFood.yy+" : "+getAngle(gamevars.self,nextFood)+" : "+gamevars.self.ang);
        // console.log("getFoodQuality",getNextFoodSource(gamevars.self,gamevars.foods));
        // console.log("DIST : ["+gamevars.self.xx+","+gamevars.self.yy+"]  ["+nextFood.xx+","+nextFood.yy+"]");
        // console.log("DIST",RadianUtils.getDistance(gamevars.self,nextFood));
        return RadianUtils.getAbsAngle(gamevars.self,nextFood);
    },
    canTurn : function(self, food){
        var dist = RadianUtils.getDistance(self,food);
        var angle = RadianUtils.getAbsAngle(self,food);
        var angleToTurn = RadianUtils.getAngle(self.ang,angle);
        // console.log("angle  : "+angleToTurn+ " : "+dist);;
        if(dist<100&&angleToTurn>1) return false;
        return true;
    },
    getNextFoodSource : function(self, foods){
        var that = this;
        if(self==null || foods==null) return;
        var bestFood = null, bestFoodQuality=0;
        var cantTurnCount = 0;
        foods.forEach(function(food){
            if(food==null) return;
            if(!that.canTurn(self,food)) cantTurnCount++;
            // console.log("getFoodQuality",that.getFoodQuality(self,food));
            if(bestFoodQuality<that.getFoodQuality(self,food)){
                bestFoodQuality = that.getFoodQuality(self,food);
                bestFood = food;
            }
        });
        console.log("cantTurnCount",cantTurnCount);
        return bestFood;
    },
    getFoodQuality : function(self, food){
        // console.log("getDistance",getDistance(self, food));
        if(self==null || food==null) return;
        return 1000/(RadianUtils.getDistance(self, food)+1);
        // return food.sz/(getDistance(self, food)+1);
    }
};









