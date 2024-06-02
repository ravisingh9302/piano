
const pianokeys = document.querySelectorAll(".keys>.key");
let volume = document.querySelector(".volume");
let checkbox = document.querySelector(".check");
// let whitekey = document.querySelector(".white");
let whitekey = document.getElementById('whitekeywidth')
let blackkey = document.querySelectorAll(".black");

let audio = new Audio("audio/a.wav");
let allnames = [];


const playtune =async (key) => {
    console.log("key",key)
    audio.src = `audio/${key}.wav`;
    await audio.play();
    console.log(allnames);

    const clickedkey = document.querySelector(`[data-keyname="${key}"]`);
    clickedkey.classList.add('active');
    setTimeout(() => {
        clickedkey.classList.remove('active');

    }, 150)
}

const volumelevel = (e)=>{
    audio.volume=e.target.value;
}
const showhide = ()=>{
   pianokeys.forEach(key => key.classList.toggle('hide'));
}

 

pianokeys.forEach(key => {
    allnames.push(key.dataset.keyname);
    key.addEventListener('click', () => playtune(key.dataset.keyname))

})



const pressedkey = (e) => {

    if (allnames.includes(e.key)) playtune(e.key);
}

document.addEventListener('keydown', pressedkey);
volume.addEventListener('input',volumelevel);
checkbox.addEventListener('click',showhide);


// console.log(whitekey.clientWidth);

// blackkey.style.marginLeft="50px";
// blackkey.style.marginRight="50px";



