if (typeof(showTime) == "undefined"){
  showTime = 4000;
}

const animatedClasses = [
  "bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp",
  "fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig",
  "fadeInUp","fadeInUpBig","flipInX","flipInY","lightSpeedIn","rotateIn","rotateInDownLeft",
  "rotateInDownRight","rotateInUpLeft","rotateInUpRight","hinge","jackInTheBox","rollIn","zoomIn",
  "zoomInDown","zoomInLeft","zoomInRight","zoomInUp","slideInDown","slideInLeft","slideInRight",
  "slideInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut",
  "fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig",
  "fadeOutUp","fadeOutUpBig","flipOutX","flipOutY","lightSpeedOut","rotateOut","rotateOutDownLeft",
  "rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","rollOut","zoomOut","zoomOutDown",
  "zoomOutLeft","zoomOutRight","zoomOutUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"
]

const nonAnimatedClasses = [
"bounce", "flash", "pulse", "rubberBand", "shake", "headShake", "swing", "tada",
"wobble", "jello", "heartBeat"   
]

function AnimatePhrase(phrase, counter, phrases){
  phrase.style.display = "block"

  setTimeout(function(){
    const classes = phrase.classList
    classes.forEach(function(c){
      if (c.includes("In")){            
        phrase.classList.remove(c)
        phrase.classList.add(c.replace("In", "Out"))        
      } 
    })
    if (counter == document.querySelectorAll("ul.messages li").length-1) {
      setTimeout(function(){AnimatePhrases(phrases)}, 1000)
    }
  }, showTime)
};

function AnimatePhrases(phrases){
    let delay = 0
    phrases.forEach(function(phrase, i){    
    setTimeout(function(){
      const classes = phrase.classList
      classes.forEach(function(c){
        if (c.includes("Out")){            
          phrase.classList.remove(c)
          phrase.classList.add(c.replace("Out", "In"))
        }
      })          
      AnimatePhrase(phrase, i, phrases)
    }, delay)
    delay = delay + showTime + 1000      
  })
}

function findPhrases(){
  return document.querySelectorAll("ul.messages li")
}

function preparePhrases(){
  let phrases = findPhrases();
  phrases.forEach(function(phrase, i){
    phrase.originalAnimation = phrase.classList[0];
    phrase.classList.toggle("animated");
  })
  return phrases;
}

function beginAnimation(){
  let phrases = preparePhrases();
  AnimatePhrases(phrases)
}

document.addEventListener("DOMContentLoaded", beginAnimation);
