const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      console.log(now-prev, delay);
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
}
document.querySelector("#center")
.addEventListener("mousemove" , throttleFunction((dets) => {

 var div = document.createElement("div");

     div.classList.add("imagediv");
     div.style.left = dets.clientX + "px";
     div.style.top = dets.clientY + "px";

     var img = document.createElement("img");
     img.setAttribute("src" ,"WhatsApp Image 2023-07-31 at 1.34.43 AM.jpeg")
     div.appendChild(img);

     document.body.appendChild(div);
     gsap.to(img , {
        y:"0" , 
        ease : Power1 ,
        duration:0.2

     })
     gsap.to(img , {
        y:"100%" , 
        delay:0.6,
        ease : Power3 ,
        duration:0.2

     })

     setTimeout(function()  {
        div.remove();
     } , 2000)
},400)
)

