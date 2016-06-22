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