

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


function visibleOnOff(){
    

    if(document.querySelector("#demo").classList.contains("in-visible")){
        document.querySelector("#demo").classList.remove("in-visible");
    }
    else{
        document.querySelector("#demo").classList.add("in-visible");
    }
}


function changeText(){
    document.getElementById('demo').innerHTML="Good Night";
    //document.getElementById('demo').textContent="Good Night";
    //.innerHTML and .textContent are same


    //if you have multiple html tag
    //<p id="demo"><strong>Hello</strong></p>
    //innerHTML returns <strong>Hello</strong>
    //textContent returns Hello
    //innerHTML you can also set tree of tags
    //textContent you can only set the text
}


function changeAttribute(){

    console.log(document.getElementById("demo").attributes);
    console.log(document.getElementById("demo").getAttribute("href"));

    document.getElementById("demo").setAttribute("href","https://www.amazon.in");
    console.log(document.getElementById("demo").getAttribute("href"));
}
