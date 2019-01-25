;(function() {
  function verticalScroll() {
    var linksArray = document.querySelectorAll('.js-colorizer-link');    
    linksArray.forEach(function(item) {
      item.addEventListener('click', function(event) {    
        event.preventDefault();
        doScroll(event.target);
      });
    });
  }

  function doScroll(eventTarget) {
    var id  = eventTarget.getAttribute('href');
    var newAnchor = document.querySelector(id);
      newAnchor = newAnchor.getBoundingClientRect().top;

      function scrollInterval() {
        var i = 0;
        var splitAnchor = newAnchor / 100;     
        splitAnchor = (splitAnchor / 10) * 9.87;

        var timer = setInterval(function() {
          if (i === 100) clearInterval(timer);
          i++;
          window.scrollBy(0, splitAnchor);
        }, 5);
      }
      scrollInterval();
    }
   verticalScroll();
})();

var newScriptTag = document.createElement('script');
newScriptTag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(newScriptTag, firstScriptTag);
var popUpVideoPlayer;
function onYouTubeIframeAPIReady() {
 popUpVideoPlayer = new YT.Player('js-pop-up-video', {
   height: '315',
   width: '560',
   autoplay: 1,
   videoId: 'JwChyACAbSc',
   events: {
     'onReady': onPlayerReady,
   }
 });
}

function onPlayerReady(event) {
  var playerReadyEvent = event;
  playerReadyEvent.target.mute();
  playerReadyEvent.target.playVideo();
  playerReadyEvent.target.pauseVideo();
  playerReadyEvent.target.unMute();
  var modalWrapper = document.querySelector('.js-pop-up-wrapper');
  var modalWindow = document.querySelector('.js-pop-up');
  var allButtons = document.querySelectorAll('.js-pop-up-button-open');
  allButtons.forEach(function(item) {
    item.addEventListener('click', function(event) {
      setTimeout(function() {
        playerReadyEvent.target.playVideo();
        modalWindow.classList.add('visible');
        modalWrapper.classList.add('visible');
      },500);
  });
});

 document.querySelector('.js-pop-up-button-close').addEventListener('click', function(event) {
   modalWindow.classList.remove('visible');
   modalWrapper.classList.remove('visible');
   playerReadyEvent.target.pauseVideo();
 });

 modalWrapper.addEventListener('click', function(event) {
   modalWindow.classList.remove('visible');
   modalWrapper.classList.remove('visible');
   playerReadyEvent.target.pauseVideo();
 });

 modalWindow.addEventListener('click', function(event) {
   event.stopPropagation();
 });
}

(function() {  
  window.onload = function() {
  var beta = document.querySelector('.js-beta');
  var originalY = document.querySelector('.js-original-colorizer').offsetTop;
  var testingY = document.querySelector('.js-colorizer-testing').offsetTop;
  window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    if (pageY >= originalY && pageY <= testingY) {
      beta.classList.add('visible');
    } else {
      beta.classList.remove('visible');
    }
   };
  };
})();