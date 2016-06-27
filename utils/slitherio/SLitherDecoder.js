/**
 * Created by maurice on 26/06/16.
 */


var SlitherDecoder = {
    decode : function(){
        var gameVars  = {};
        gameVars.snakes = window.snakes; // xx, yy, ang, wsep
        gameVars.foods = window.foods; // sz, xx, yy
        gameVars.self = window.snake; // xx, yy, ang, wsep
        // console.log("REACH3",$);
        // var windowVars = GenUtils.retrieveWindowVariables(["snakes"]);
        // gameVars.snakes = windowVars.snakes;

        // console.log("gameVars",gameVars);
        return gameVars;
    }
};


var FoodDecoder = {
    decode : function(foods){
        var foodParsed = [];
        foods.forEach(function(food){
            foodParsed.push(food);
        });
        return foodParsed;
    }
};


var SnakeDecoder = {
    decode : function(snakes){
        var snakeParsed = [];
        snakes.forEach(function(snake){
            snakeParsed.push(snake);
        });
        return snakeParsed;
    }
}

var SelfDecoder = {
    decode : function(snake){
        return {
            x : snake.xx,
            y : snake.yy,
            ang : snake.ang,
            size : snake.cv2
        };
    }
}


