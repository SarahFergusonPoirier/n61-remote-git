let string = 'Bonjour!';
let str = string.split(''); 
let h1 = document.querySelector('h1'); 
function animer() {
    if (str.length != 0) {
        h1.innerHTML += str.shift(); 
        setTimeout(animer, 100);
    }
}

animer(); 
