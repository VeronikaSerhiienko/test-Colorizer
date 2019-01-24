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