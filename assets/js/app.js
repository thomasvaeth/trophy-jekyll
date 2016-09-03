document.addEventListener('DOMContentLoaded', function() {
  var previewImg = document.getElementsByClassName('preview__img');
  var previewImgFirst = previewImg[0];
  previewPost = document.getElementsByClassName('preview');
  var currentIdx = 0;

  [].forEach.call(previewImg, function(img) {
    img.style.display = 'none';
  });
  previewImgFirst.style.display = 'block';

  [].forEach.call(previewPost, function(preview, idx) {
    preview.addEventListener('mouseenter', function() {
      var prevIdx = currentIdx;
      currentIdx = idx;

      if (prevIdx !== currentIdx) {
        previewImg[prevIdx].style.display = 'none';
        previewImg[currentIdx].style.display = 'block';
      }
    });
  });
});
