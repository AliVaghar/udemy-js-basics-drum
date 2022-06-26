// Array of button in the documnet
buttons = document.querySelectorAll("button");

// Audios
const audios = {
  'w': new Audio("sounds/tom-1.mp3"),
  'a': new Audio("sounds/tom-2.mp3"),
  's': new Audio("sounds/tom-3.mp3"),
  'd': new Audio("sounds/tom-4.mp3"),
  'j': new Audio("sounds/crash.mp3"),
  'k': new Audio("sounds/kick-bass.mp3"),
  'l': new Audio("sounds/snare.mp3")
};

// Add event listener (click) to each element
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

// Add event listener to each entire document
document.addEventListener("keydown", handleKeydown);

// function to be called when user click
function handleKeydown() {
  playAudio(event['key'], true);
}

// function to be called when user click
function handleClick() {
  playAudio(this.textContent, true);
}

function playAudio(inputKey, run_animation) {
  console.log(inputKey);
  if (Object.keys(audios).includes(inputKey)) {
    audios[inputKey].play();
    if (run_animation == true) {
      buttonAnimation(inputKey);
    }
  }
}

function buttonAnimation(inputKey) {
  let clickedButton = document.querySelector("." + inputKey);
  clickedButton.classList.add("pressed");
  setTimeout(function() {
    clickedButton.classList.remove("pressed");
  }, 100);
}
