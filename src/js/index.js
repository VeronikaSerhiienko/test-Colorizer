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

;(function() {
  var modalWrapper = document.querySelector('.js-pop-up-wrapper');
  var modalWindow = document.querySelector('.js-pop-up');
  var modalVideo = document.querySelector(".js-pop-up-video");
  var videoLink = modalVideo.getAttribute('src');
  document.querySelector('.js-pop-up-button-open').addEventListener('click', function(event) {    
    setTimeout(function() {
      var videoAutoPlay = videoLink + '?autoplay=1';
      modalVideo.setAttribute('src', videoAutoPlay);
      console.log(modalVideo.getAttribute('src'));
      modalWindow.classList.add('visible');
      modalWrapper.classList.add('visible');
    },500);
  });

  document.querySelector('.js-pop-up-button-close').addEventListener('click', function(event) {
    modalWindow.classList.remove('visible');
    modalWrapper.classList.remove('visible');
    modalVideo.setAttribute('src', videoLink);
  });

  modalWrapper.addEventListener('click', function(event) {
    modalWindow.classList.remove('visible');
    modalWrapper.classList.remove('visible');
    modalVideo.setAttribute('src', videoLink); 
  });

  modalWindow.addEventListener('click', function(event) {
    event.stopPropagation();    
  });
})();
// (function() {
//   window.document.onkeydown = function(e) {
//   if (!e) {
//     e = event;
//   }
//   if (e.keyCode == 27) {
//     lightbox_close();
//   }
// };

// function lightbox_open() {
//   var lightBoxVideo = document.querySelector(".js-video");
//   window.scrollTo(0, 0);
//   document.querySelector('.js-pop-up').style.display = 'block';
//   document.querySelector('.js-pop-up-wrapper').style.display = 'block';
//   lightBoxVideo.play();
// }

// function lightbox_close() {
//   var lightBoxVideo = document.querySelector(".js-video");
//   document.querySelector('.js-pop-up').style.display = 'none';
//   document.querySelector('.js-pop-up-wrapper').style.display = 'none';
//   lightBoxVideo.pause();
// }
// })();