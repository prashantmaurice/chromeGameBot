// Read your variable from here and do stuff with it
console.log("MMMMM",window.snakes);


addListeners();




function addListeners(){
    // console.log("REACH1",$);
    window.onkeydown = function (e) {
        // console.log("REACH2",$);
        var code = e.keyCode ? e.keyCode : e.which;
        // console.log("onkeydown",e.keyCode);

        if(code==75){// k
            if(refreshIntervalId!=null) {
                clearInterval(refreshIntervalId);
                refreshIntervalId = null;
            }else{
                refreshIntervalId = startLoop();
            }
        }


        // window.init2();

        // var vars = GenUtils.retrieveWindowVariables(["snakes"]);
        // console.log("BABABABA",SlitherDecoder.decode());
        
        // var gamevars = SlitherDecoder.decode();
        // SlitherAnalyzer.analyze(gamevars);
        
        
        // SlitherDecoder.decode();
    };
}

var refreshIntervalId;
function startLoop() {
    var id = setInterval(function(){
        var gamevars = SlitherDecoder.decode();
        // console.log("gamevars",gamevars);
        var idealAngle = SlitherAnalyzer.analyze(gamevars);
        SlitherExecuter.pointAngle(gamevars.self, idealAngle);
        // SlitherExecuter.test();
    },300);
    return id;
}