//If you want to run any code on load of the page use this
console.log("c-script AUTORUN");
console.log("$",$);
// console.log("NetworkUtils",NetworkUtils);
// console.log("BoardDecoder",BoardDecoder);
// console.log("MoveExecuter",MoveExecuter);
console.log("document",document);




// window.onkeydown = function (e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     console.log("onkeydown",e.keyCode);
//     if(code==75){// k
//         test();
//         // if(refreshIntervalId!=null) {
//         //     clearInterval(refreshIntervalId);
//         //     refreshIntervalId = null;
//         // }else{
//         //     refreshIntervalId = startLoop();
//         // }
//     }
// };
//
// function test(){
//     console.log("Test");
//     $('#1_24').trigger({type: 'mousedown', button: 3}).trigger({type: 'mouseup', button: 1});
//     console.log("DIV2",$('#1_24'));
//
//     var e = jQuery.Event("mousedown");
//     // e.which = keyCode; // # Some key code value
//     // e.keyCode = keyCode;
//     $("body").trigger(e);
//
//     window.setTimeout(function(){
//         var e = jQuery.Event("mouseup");
//         // e.which = keyCode; // # Some key code value
//         // e.keyCode = keyCode;
//         $("body").trigger(e);
//     }, 150);
// }