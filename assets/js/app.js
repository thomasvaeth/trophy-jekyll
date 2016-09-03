var s,
Preview = {

  settings: {
    img: document.getElementsByClassName('preview__img'),
    post: document.getElementsByClassName('preview')
  },

  init: function() {
    s = this.settings;
    this.display();
    this.mouseenter();
  },

  display: function() {
    [].forEach.call(s.img, function(img) {
      img.style.display = 'none';
    });
    s.img[0].style.display = 'block';
  },

  mouseenter: function() {
    var currentIdx = 0,
        prevIdx = currentIdx;

    [].forEach.call(s.post, function(preview, idx) {
      preview.addEventListener('mouseenter', function() {
        prevIdx = currentIdx;
        currentIdx = idx;

        if (prevIdx !== currentIdx) {
          s.img[prevIdx].style.display = 'none';
          s.img[currentIdx].style.display = 'block';
        }
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  Preview.init();
});
