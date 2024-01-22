// Background Tune Stop Slider
document.querySelector(".logo-image-img-src").addEventListener("click",()=>{
  document.querySelector(".background-tune-stop_main").style.top = "4%"
})

document.querySelector(".background-tune-stop-div-close").addEventListener("click",()=>{
  document.querySelector(".background-tune-stop_main").style.top = "-1188%"
})

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
        var linkURL = "./justinbeaber/justinbeaber.html";
        window.location.href = linkURL;
      });
    });
  });


 

    //  Alenwalkar Click

  document.addEventListener("DOMContentLoaded", function() {

    var clickableartistalanwalkar = document.querySelectorAll(".alen_walkar-main-div");
  
    clickableartistalanwalkar.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "./alenwalkar/alenwalkar.html";
        window.location.href = linkURL;
      });
    });
  });



//    //  Arjeet-sigh Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistarjeetsigh = document.querySelectorAll(".arijit-singh-main-div");
  
    clickableartistarjeetsigh.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/arijit-singh/arijitsingh.html";
        window.location.href = linkURL;
      });
    });
  });




   //   Tanishk-Bagchi Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartisttanishkbagchi = document.querySelectorAll(".tanishk-bagchi-main-div");
  
    clickableartisttanishkbagchi.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/tanishk-bagchi/tanishkbagchi.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  B-Praak Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistbpraak = document.querySelectorAll(".b-praak-main-div");
  
    clickableartistbpraak.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/b-praak/bpraak.html";
        window.location.href = linkURL;
      });
    });
  });

  
   //  Jubin-Nautiyal Click

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistjubinnautiyal = document.querySelectorAll(".jubin-nautiyal-main-div");
  
    clickableartistjubinnautiyal.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/jubin-nautiyal/jubinnautiyal.html";
        window.location.href = linkURL;
      });
    });
  });

   //  Imagine Dragons

   document.addEventListener("DOMContentLoaded", function() {

    var clickableartistimaginedragons = document.querySelectorAll(".imagine-dragons-main-div");
  
    clickableartistimaginedragons.forEach(function(element) {
      element.addEventListener("click", function() {
        var linkURL = "/imagine-dragons/imaginedragons.html";
        window.location.href = linkURL;
      });
    });
  }); 

