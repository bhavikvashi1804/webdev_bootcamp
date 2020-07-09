console.log("This is working");


$(document).ready(function(){
   
    $("button").click(function(){
        $("h1").slideUp().slideDown().animate({
            margin:"20%"
        });   
    });


   
});

