let button=document.getElementById("button");
button.addEventListener('click',color_change);
function color_change(){
    let a=(Math.floor(Math.random()*246));
    let b=(Math.floor(Math.random()*246));
    let c=(Math.floor(Math.random()*246));
const back=document.getElementsByTagName('*')[0];
back.style.backgroundColor="rgb("+a+","+b+","+c+")";
console.log("color value is rgb("+a+","+b+","+c+");")
if(a===0&&b===0&&c===0){
button.style.border="5px solid white";
button.style.color="white";
}
}