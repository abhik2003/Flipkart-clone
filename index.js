let width=screen.width;
width=width/1000;
if(width>=1)
width=1;
document.getElementById("viewport").setAttribute('content','initial-scale="+width+"');