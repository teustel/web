(function () {
  var images = document.querySelectorAll('.js-defer');
  for (var i=0; i < images.length; i++) {
    var image = images[i];
    var srcset = image.getAttribute('data-srcset');
    if (srcset) {
      image.setAttribute('srcset', srcset);
      image.removeAttribute('data-srcset');
    }
  }
}());