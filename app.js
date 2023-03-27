//getting html elements

const forwardbtn = document.getElementById("forward");
const backwardbtn = document.getElementById("backward");
const menubtn = document.getElementById("menuicon");
const closebtn = document.getElementById("closeicon");
const imgel = document.querySelectorAll(".project");
const logo = document.querySelectorAll(".logo");
const menubar = document.querySelector(".menu");
const totalLength = imgel.length;
//console.log(totalLength);

count = 0;

    function updateCount(){
        imgel.forEach(slider=>{
            slider.classList.remove("active");
            slider.classList.add("hidden");
        });
        imgel[count].classList.add("active");
       
        dots.forEach(dot=>{
            dot.classList.remove("dot-active");
        });
        dots[count].classList.add("dot-active");
        
    }
    forwardbtn.addEventListener(("click"),()=>{
        if(count == totalLength-1){
            count = 0;
        }else{
            count++
        }
      
    updateCount()
    });
    backwardbtn.addEventListener("click",()=>{
        if(count==0){
            count = totalLength - 1;
        }else{
            count--
        }
        updateCount()
    });
    
const dotcontainer = document.querySelector(".dots")
imgel.forEach(slide=>{
    const dotEl = document.createElement("div");
    dotEl.classList.add("dot");
    dotcontainer.appendChild(dotEl);
});
const dots = document.querySelectorAll(".dot");
dots[count].classList.add("dot-active");
dots[0].innerText = "1"
dots.forEach((dotItem,index)=>{
    dotItem.addEventListener(("click"),()=>{
     count = index;
     updateCount()
    })
 });

const btnEl = document.getElementById("onbtn");
    const offbtnEl = document.getElementById("offbtn");
    const projectimg = document.querySelectorAll(".project-img");
    const projectcontent = document.querySelectorAll(".project-content");
    btnEl.addEventListener("click",()=>{
        projectimg.forEach((imgs)=>{ 
            imgs.style.display = "block";
        });
        projectcontent.forEach((content)=>{
            content.style.display = "block";
        });
    });
    offbtnEl.addEventListener("click",()=>{
        projectimg.forEach((imgs)=>{
         imgs.style.display = "none";
        });
        projectcontent.forEach((content)=>{
         content.style.display = "none";
     })
     })

    
//menu bar

menubtn.addEventListener(("click"),()=>{
        menubar.classList.add("activemenu");
        menubtn.style.display = "none";
        closebtn.style.display = "block";
  
});

closebtn.addEventListener("click",()=>{
    menubar.classList.remove("activemenu");
    menubtn.style.display = "block";
    closebtn.style.display = "none";
});

const menuitem = document.querySelectorAll(".menuitem");

menuitem.forEach((item)=>{
    item.addEventListener(("click"),()=>{
        menubar.classList.remove("activemenu");
    menubtn.style.display = "block";
    closebtn.style.display = "none"; 
    })
})

