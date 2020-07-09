

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


function changeColor(){
    document.getElementById("demo").style.color="#fff";
}

function changeBGColor(){
    document.getElementById("demo").style.backgroundColor="#f54";
}

function changeFontSize(){
    document.getElementById("demo").style.fontSize="40px";
    //this property is same as ago in CSS just camel case

}

function changeVisibility(){
    document.getElementById("demo").style.visibility="hidden";
}