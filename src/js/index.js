(function() {
  function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  var linksArray = document.querySelectorAll('.js-colorizer-link');    
  for (var i = 0; i < linksArray.length; i++) {
    linksArray[i].addEventListener('click', smoothClick);
  }
  function smoothClick(event) {
    event.preventDefault();
    //take id for block with attr href 
    var id  = event.target.getAttribute('href');
    scrollTo(document.querySelector(id));
  }
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
  document.querySelector('.js-pop-up-button-open').addEventListener('click', function(event) {
  setTimeout(function() {
    playerReadyEvent.target.playVideo();
    modalWindow.classList.add('visible');
    modalWrapper.classList.add('visible');
  },500);
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

;(function() {  
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