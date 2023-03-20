const hero_title = document.querySelector('#hero_title');
const downBtn = document.querySelector('#downBtn');

setTimeout(() => downBtn.classList.add('visible') , 1500);
triggerFadeIn(downBtn , 1500)
triggerFadeIn(document.querySelector('.header-title p'), 1000)
function triggerFadeIn(el , time){
    setTimeout(()=> el.classList.add('visible'), time)
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