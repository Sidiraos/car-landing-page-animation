const hero_title = document.querySelector('#hero_title');
const downBtn = document.querySelector('#downBtn');

triggerFadeIn(downBtn , 1500)
triggerFadeIn(document.querySelector('.header-title p'), 1000)
function triggerFadeIn(el , time){
    setTimeout(()=> el.classList.add('visible'), time)
}
function triggerFadeOut(el , time) {
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

console.log(sectionTitlesP , titles);


const triggerAnimation = (entries) => {
    entries.forEach(entry => {
        console.log(entry.target)
        console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            triggerFadeIn(entry.target , 100)
        }else {
            triggerFadeOut(entry.target , 100)
        }
    }, {thereshold: 1})
}

const observer = new IntersectionObserver(triggerAnimation )
titles.forEach(title => observer.observe(title))
sectionTitlesP.forEach(titleP => observer.observe(titleP))

const section1Box1 = document.querySelector('.section1-box1')
const section1Box2 = document.querySelector('.section1-box2')

observer.observe(section1Box1)
observer.observe(section1Box2)

// slide animation
const slides = document.querySelectorAll('.slide')

slides.forEach(slide => observer.observe(slide));

