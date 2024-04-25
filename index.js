var buttons = $(".drum");
const audioFiles = {
  w: new Audio("./sounds/tom-1.mp3"),
  a: new Audio("./sounds/tom-2.mp3"),
  s: new Audio("./sounds/tom-3.mp3"),
  d: new Audio("./sounds/tom-4.mp3"),
  j: new Audio("./sounds/snare.mp3"),
  k: new Audio("./sounds/crash.mp3"),
  l: new Audio("./sounds/kick-bass.mp3"),
};

function playAudio(key) {
  if (audioFiles[key]) {
    audioFiles[key].play();
    buttonAnimation(key);
  } else {
    console.log("Неверная кнопка: " + key);
  }
}

function buttonAnimation(key) {
  var activeButton = $("." + key);
  activeButton.addClass("pressed");
  setTimeout(() => {
    activeButton.removeClass("pressed");
  }, 1000);
}

$(".drum").on("click", function(){
  const key = $(this).attr("class")[0];
  playAudio(key)
})

$(document).on("keydown", function (event) {
  playAudio(event.key);
});
