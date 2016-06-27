/**
 * Created by maurice on 26/06/16.
 */


var WATCH_RADIUS = 300;//radius of watch sector
var WATCH_ANGLE = Math.PI/3;

var SlitherAnalyzer = {
    analyze : function(gamevars){
        // console.log("MYSELF ANGLE : ",gamevars.self.rcv + " : "+gamevars.self.pts.length+" : "+gamevars.self.wsep)
        var nextFood = this.getNextFoodSource(gamevars.self, gamevars.foods)
        // console.log("Next Food : "+nextFood.xx +" : "+nextFood.yy+" : "+getAngle(gamevars.self,nextFood)+" : "+gamevars.self.ang);
        // console.log("getFoodQuality",getNextFoodSource(gamevars.self,gamevars.foods));
        // console.log("DIST : ["+gamevars.self.xx+","+gamevars.self.yy+"]  ["+nextFood.xx+","+nextFood.yy+"]");
        var snakesInPath = this.isSnakesInPath(gamevars.self,gamevars.snakes);
        console.log("SNAKESINPATH",snakesInPath);
        if(snakesInPath) return (gamevars.self.ang+(Math.PI))%(Math.PI*2);
        return gamevars.self.ang;
        // return RadianUtils.getAbsAngle(gamevars.self,nextFood);
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
        // console.log("cantTurnCount",cantTurnCount);
        return bestFood;
    },
    getFoodQuality : function(self, food){
        // console.log("getDistance",getDistance(self, food));
        if(self==null || food==null) return;
        return 1000/(RadianUtils.getDistance(self, food)+1);
        // return food.sz/(getDistance(self, food)+1);
    },
    isSnakesInPath : function(self, snakes){
        var that = this;
        var isInPath = false;

        snakes.forEach(function(snake){
            if(isInPath) return;
            if(snake.id == self.id) return;
            if(that.isSnakeInPath(self,snake)){
                isInPath = true;
            }
        });
        // console.log("isInPath",isInPath);
        return isInPath;
    },
    isSnakeInPath : function(self, snake){
        // console.log("REACH1");
        if(snake==null || snake.pts==null) return false;
        // console.log("REACH2");
        var isInPath = false;
        snake.pts.forEach(function(pt){
            if(isInPath==true) return;
            if(RadianUtils.getDistance(self,pt)<WATCH_RADIUS && RadianUtils.getAngle(self.ang,RadianUtils.getAbsAngle(self,pt))< WATCH_ANGLE){

                // console.log("DIST : ["+self.xx+","+self.yy+"]  ["+pt.xx+","+pt.yy+"] "+RadianUtils.getDistance(self,pt));
                // console.log("KAKAKAK : "+isInPath);
                isInPath = true;
            }
        });
        // console.log("asjdgaf : "+isInPath);
        return isInPath;
    }
};









