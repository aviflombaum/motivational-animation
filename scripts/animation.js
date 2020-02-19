if (typeof(showTime) == "undefined"){
  showTime = 4000;
}

function AnimatePhrase(phrase, counter){
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
      setTimeout(AnimatePhrases, 1000)
    }
  }, showTime)
};

function AnimatePhrases(){
  const phrases = document.querySelectorAll("ul.messages li")
  let delay = 0
  phrases.forEach(function(phrase, i){
    // phrase.style.display = "none"

    setTimeout(function(){
      const classes = phrase.classList
      classes.forEach(function(c){
        if (c.includes("Out")){            
          phrase.classList.remove(c)
          phrase.classList.add(c.replace("Out", "In"))
        }
      })          
      AnimatePhrase(phrase, i)
    }, delay)
    delay = delay + showTime + 1000      
  })
}

document.addEventListener("DOMContentLoaded", function(event) { 
  AnimatePhrases()
});
