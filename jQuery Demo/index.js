console.log("This is working");


$(document).ready(function(){
   
    $("h1").click(function(){
        $("h1").css("color","red");

    });


    $("button").click(function(){
        $("h1").css("color","yellow");

    });
   
});


//$("h1");
//$("button");
//here it selects all buttons 