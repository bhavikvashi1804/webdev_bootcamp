

function myFunction(){
    document.getElementById("demo").innerHTML="Good Night";
}


function myFunction1(){
    var x=document.getElementsByTagName("p");

    for(var i=0;i<x.length;i++){
        x[i].innerHTML="This is changed by Tag name";

    }
}