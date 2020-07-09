

function myFunction(){
    document.getElementById("demo").innerHTML="Good Night";
}


function myFunction1(){
    var x=document.getElementsByTagName("p");

    for(var i=0;i<x.length;i++){
        x[i].innerHTML="This is changed by Tag name";

    }
}

function myFunction2(){
    var x=document.getElementsByClassName("a");

    for(var i=0;i<x.length;i++){
        x[i].innerHTML="This is changed by Class name";

    }
}

function myFunction3(){
    document.querySelector("p").style.backgroundColor = "red";
    console.log(document.querySelector("p"));
    //.a to add a background color to the first element in the document with class="a".
    //#a to add a background color to the first element in the document with id="a".
}