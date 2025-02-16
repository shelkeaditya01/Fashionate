// Script for the sproduct secti



let mainimg=document.getElementById("mainimg1");
let smallimg=document.getElementsByClassName("spimg");

for(let i=0;i<smallimg.length;i++){
    smallimg[i].onclick=function(){
        mainimg.src=smallimg[i].src;
    }
}