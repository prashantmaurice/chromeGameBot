/**
 * Created by maurice on 23/06/16.
 */


var NetworkUtils = {
    callAPI : function (url, params, callback){
        $.ajax({
            url: "test.html"
        }).done(function (data) {
            callback(data);
        });

    }
};


var GenUtils = {
    retrieveWindowVariables  : function(variables) {


        console.log("REACH4",$);

        var ret = {};

        var scriptContent = "";
        for (var i = 0; i < variables.length; i++) {
            var currVariable = variables[i];
            scriptContent = "document.getElementsByTagName('body')[0].setAttribute('tmp_" + currVariable + "', " + currVariable + ");console.log('BABA',"+currVariable+")";
        }

        var script = document.createElement('script');
        script.id = 'tmpScript';
        script.appendChild(document.createTextNode(scriptContent));
        (document.body || document.head || document.documentElement).appendChild(script);

        for (var i = 0; i < variables.length; i++) {
            var currVariable = variables[i];
            ret[currVariable] = $("body").attr("tmp_" + currVariable);
            // $("body").removeAttr("tmp_" + currVariable);
        }

        $("#tmpScript").remove();

        return ret;
    },
    
    injectScript : function(file, node) {
        var th = document.getElementsByTagName(node)[0];
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', file);
        th.appendChild(s);
    }
};






