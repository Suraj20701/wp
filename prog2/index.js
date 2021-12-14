let topCont="cont4";
function toTop(clickedCont){
let newCont = document.getElementById(clickedCont).style;
let cont = document.getElementById(topCont).style;
newCont.zIndex=1;
cont.zIndex=0;
topCont=clickedCont;
}