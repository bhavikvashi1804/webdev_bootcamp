console.log("This is working");


$(document).ready(function(){
   
    $("h1").click(function(){
        $("h1").css("color","red");

    });


    $("button").click(function(){
        $("h1").css("color","yellow");

    });


    //only for input type
    $("input").keypress(function(event){
        console.log((event.key));
    });

    //for whole page
    $(document).keypress(function(event){
        console.log((event.key));
    });
   
});


//$("h1");
//$("button");
//here it selects all buttons 