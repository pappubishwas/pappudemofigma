function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      x.style.display = "block";
      x.style.visibility="visible";
      x.style.width="50%";
      x.style.marginLeft="15rem";
      x.style.padding="2rem";
      x.style.fontSize="2rem";
      x.style.color="#061C41";
      x.style.height="100vh";
      x.style.backgroundColor="#fff";
      x.style.border="1px solid #f4eeee";
      x.style.borderRadius="3rem";

    } else {
      x.style.display = "none";
    }
  }



document.getElementById("traininghidden").addEventListener("mouseover", mouseOver);
document.getElementById("traininghidden").addEventListener("mouseout", mouseOut);



function mouseOver(){
    var y=document.getElementById("trainhidden");
    y.style.visibility="visible";

    y.style.height="650px";
    y.style.width="100%";
    y.style.marginLeft="10%";
    y.style.fontSize="1.5rem";

    

}
function mouseOut(){
   var p=document.getElementById("trainhidden");
   p.style.visibility="hidden";
   p.style.height="0px";
   p.style.width="0px";

}