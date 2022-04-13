let width=screen.width;
width=width/1000;
if(width>=1)
width=1;
document.getElementById("viewport").setAttribute('content','initial-scale="+width+"');



var img_no=0;
let slide=document.getElementsByClassName("slide");
slide[0].style.display="block";
function slide_change(y){
    slide[img_no].style.display="none";
    img_no+=y;
    img_no%=slide.length;
    if(img_no==-1)
        img_no=7;
    slide[img_no].style.display="block";
};
setInterval("slide_change(1)",3000);


var height1=document.getElementById("heading").offsetHeight;
height1+=12;
document.getElementById("main").style.paddingTop=height1+"px";
console.log(height1);