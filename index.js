// Background Tune Stop Slider
let backgroundmusic = new Audio(src="/audio/background tune/background-sound.mp3");

// Background Music Play
backgroundmusic.play();

document.querySelector(".logo-image-img-src").addEventListener("click",()=>{
  document.querySelector(".background-tune-stop_main").style.top = "4%"
})

document.querySelector(".background-tune-stop-div-close").addEventListener("click",()=>{
  document.querySelector(".background-tune-stop_main").style.top = "-1188%"
})

// Background tune play pause Function

  function backgroundtuneplaypause(){
      if(backgroundmusic.paused){
          document.querySelector("#played-pause-on-click").innerHTML="⏸️";
          backgroundmusic.play()
      }
      else{
        backgroundmusic.pause()
          document.querySelector("#played-pause-on-click").innerHTML="⏯️";
      }
  }



// Slider Left

document.querySelector(".slider-slide_call-on-click").addEventListener("click",()=>{
  document.querySelector(".left-slider").style.left = "0"
})

document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".left-slider").style.left = "-100%"
})


// Artist & Singers

//  Justin Beaber Click

document.addEventListener("DOMContentLoaded", function() {
    var clickableartistjustinbeaber = document.querySelectorAll(".justin_beaber-main-div");
  
    clickableartistjustinbeaber.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/justinbeaber/justinbeaber.html";
        window.location.href = linkURL;
      });
    });
  });


 

    //  Alenwalkar Click

  document.addEventListener("DOMContentLoaded", function() {

    var clickableartistalanwalkar = document.querySelectorAll(".alen_walkar-main-div");
  
    clickableartistalanwalkar.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/alenwalkar/alenwalkar.html";
        window.location.href = linkURL;
      });
    });
  });



//    //  Arjeet-sigh Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistarjeetsigh = document.querySelectorAll(".arijit-singh-main-div");
  
    clickableartistarjeetsigh.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/arijit-singh/arijitsingh.html";
        window.location.href = linkURL;
      });
    });
  });




   //   Tanishk-Bagchi Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartisttanishkbagchi = document.querySelectorAll(".tanishk-bagchi-main-div");
  
    clickableartisttanishkbagchi.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/tanishk-bagchi/tanishkbagchi.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  B-Praak Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistbpraak = document.querySelectorAll(".b-praak-main-div");
  
    clickableartistbpraak.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/b-praak/bpraak.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  Jubin-Nautiyal Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistjubinnautiyal = document.querySelectorAll(".jubin-nautiyal-main-div");
  
    clickableartistjubinnautiyal.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/jubin-nautiyal/jubinnautiyal.html";
        window.location.href = linkURL;
      });
    });
  });

   //  Imagine Dragons

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistimaginedragons = document.querySelectorAll(".imagine-dragons-main-div");
  
    clickableartistimaginedragons.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./artists/imagine-dragons/imaginedragons.html";
        window.location.href = linkURL;
      });
    });
  }); 



  // Choose Your Mood

  
//    //  Radhe Krishna Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodradhe_krishna = document.querySelectorAll(".radhe_krishna-mood_main_div");

  clickablemoodradhe_krishna.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/radhe_krishna/radhe_krishna.html";
      window.location.href = linkURL;
    });
  });
});


//    //  Motivation Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodmotivation = document.querySelectorAll(".motivation-mood_main_div");

  clickablemoodmotivation.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/motivation/motivation.html";
      window.location.href = linkURL;
    });
  });
});


//    //  Study Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodstudy = document.querySelectorAll(".study-mood_main_div");

  clickablemoodstudy.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/study/study.html";
      window.location.href = linkURL;
    });
  });
});


//    //  Lofi-Remix Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodlofi_remix = document.querySelectorAll(".lofi_remix-mood_main_div");

  clickablemoodlofi_remix.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/lofi_remix/lofi_remix.html";
      window.location.href = linkURL;
    });
  });
});


//    //  Imagination Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodimagination = document.querySelectorAll(".imagination-mood_main_div");

  clickablemoodimagination.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/imagination/imagination.html";
      window.location.href = linkURL;
    });
  });
});


//    //  Meditation Yoga Click

document.addEventListener("DOMContentLoaded", function() {

  var clickablemoodmeditation_yoga = document.querySelectorAll(".meditation_yoga-mood_main_div");

  clickablemoodmeditation_yoga.forEach(function(element) {
    element.addEventListener("click", function() {
      var linkURL = "./mood/meditation_yoga/meditation_yoga.html";
      window.location.href = linkURL;
    });
  });
});

