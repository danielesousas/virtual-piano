const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input")

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
    
}; 

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) =>{
    if(mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const clickedKey = document.querySelectorAll(`[data-key="${key}"]`);
clickedKey.classList.add("active");
setTimeout(()=>{
    clickedKey.classList.remove("active");
},150);