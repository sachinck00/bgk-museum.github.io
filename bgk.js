const header =document.querySelector("header");
const text= document.querySelector(".text p ");

window.addEventListener('load', ()=>{
  const wrapper = document.querySelector(".wrapper");
  const loader = document.querySelector(".loader");
  wrapper.style.display = "none";
})


window.addEventListener("scroll", background);
function background()
{
    header.classList.toggle("scrheader" ,window.scrollY > 20);
}


const clsActive = document.querySelectorAll(".navul li a");
for(let i=0;i<clsActive.length;i++){
    clsActive[i].addEventListener('click', ()=>{
        document.querySelector(".active").classList.remove('active');
        clsActive[i].classList.add('active');
    });
}
//circular text
text.innerHTML = text.innerText.split('').map(
    (char, i) => 
    `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
).join('');

//for gallery
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const images = document.querySelectorAll(".img-gallery img");

images.forEach(
    (img) =>{
        img.addEventListener('click', ()=>{
            fullImgBox.style.display = "flex";
            fullImg.src = img.getAttribute('src');
        }) 
    }
);
const closeFullImg = () =>{
    fullImgBox.style.display = "none";
}

//menu
const navUl = document.querySelector(".navul");
const closeBtn = document.getElementById("close-symbol");
const menuBtn = document.getElementById("menu-symbol");
 //;
menuBtn.addEventListener('click', ()=>{

    navUl.style.display = "flex";
    
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
});
closeBtn.addEventListener('click', ()=>{
    
    navUl.style.display = 'none';
   menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
});

