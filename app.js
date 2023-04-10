const hero_title = document.querySelector('#hero_title');
const downBtn = document.querySelector('#downBtn');

addAnimationClass(downBtn , 1500)
addAnimationClass(document.querySelector('.header-title p'), 1000)
function addAnimationClass(el , time){
    setTimeout(()=> el.classList.add('visible'), time)
}
function removeAnimationClass(el , time) {
    setTimeout(()=> el.classList.remove('visible'), time)
}
let i = 0;
let opacity = 0;

function typingAnimation(text , el , speed){
    // opacity animation for increase opacity depending on text lenght
    // i + 21 for giving opacity visible no 0 because i start by 0
    opacity = (i+21)/(text.length+20)
    el.innerHTML += `<span style = "color : rgba(255, 255, 255, ${opacity})">${text.charAt(i)}</span>`;
    i++;
    const interval = setTimeout(()=>typingAnimation(text , el , speed), speed);
    if(i >= text.length) clearInterval(interval);
}
let text = "PORSCHE , SET FREE.";

typingAnimation(text, hero_title , 200);

// second page of animation
const titles = document.querySelectorAll('.title');
const sectionTitlesP = document.querySelectorAll('.section-title p');

const triggerAnimation = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            addAnimationClass(entry.target , 100)
        }else {
            removeAnimationClass(entry.target , 100)
        }
    }, {thereshold: 1})
}

const observer = new IntersectionObserver(triggerAnimation)
titles.forEach(title => observer.observe(title))
sectionTitlesP.forEach(titleP => observer.observe(titleP))

const childsSection1Box1 = document.querySelectorAll('.section1-box1 >*')
const section1Box2 = document.querySelector('.section1-box2')
childsSection1Box1.forEach(child => observer.observe(child))
observer.observe(section1Box2)

// slide animation
const slides = document.querySelectorAll('.slide')

slides.forEach((slide)=>{
    const children = Array.from(slide.children);
    console.log(children)
    children.forEach(child => observer.observe(child))
    
});

// custom cursor animation
const cursor = document.querySelector('#customCursor');
window.addEventListener('mousemove' , moveCustomCursor);
window.addEventListener('scroll' , moveCustomCursor);

function moveCustomCursor(e){
    posX = e.clientX;
    posY = e.clientY;
    // limiter la position du curseur personnalisé à l'intérieur du contenu de la page
    const content = document.querySelector('body');
    if(e.clientX + cursor.offsetWidth >= content.offsetWidth) {
        posX = content.offsetWidth - (cursor.offsetWidth+1);
    }
  // Mettre à jour la position du curseur en fonction de la position de défilement de la page
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  cursor.style.top = posY + scrollTop + 'px';
  cursor.style.left = posX + scrollLeft + 'px';
}
