const hero_title = document.querySelector('#hero_title');
const downBtn = document.querySelector('#downBtn');

setTimeout(() => downBtn.classList.add('visible') , 1000);
let i = 0;

function typingAnimation(text , el , speed){
    el.textContent += text.charAt(i)
    i++;
    setTimeout(()=>typingAnimation(text , el , speed), speed);
    

    
}
let text = "PORSCHE , SET FREE.";

typingAnimation(text, hero_title , 200);