


const navbar = document.getElementById("navbar");
function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add("heart");
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 5 + "s";
    
    heart.innerText = "❄️"
  
    navbar.appendChild(heart)
  
    setTimeout(()=>{
      heart.remove();
    },6000)
  
    
  }
  
  setInterval(createHeart,2000)



const accordin = document.querySelector(".accordin");
const accordinBody = document.querySelector(".accordin-body")
 

accordin.addEventListener("click", ()=>{



  accordinBody.classList.toggle("active")
})


// icon.addEventListener("click",()=>{
//   icon.style.transform = "rotate(180deg)"
// })


const banner = document.querySelector(".banner");
const bannerText = document.querySelector(".banner-Text p");


banner.addEventListener("mouseover",()=>{
  bannerText.style.opacity = '1';
  setTimeout(()=>{
    bannerText.style.opacity = '0';
  },8000)
})


const textMain = document.querySelector(".text h3")
const text = `🤞 Welcome To Our Blog. `;

let index = 2;


const typeText = ()=>{
textMain.innerHTML = text.slice(0,index);
index++;

if(index > text.length){
  index = index;
  setTimeout(()=>{
    index=2;
  },2000)
}
}

setInterval(typeText, 100);




