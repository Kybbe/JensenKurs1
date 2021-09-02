
slider = document.getElementById("progressSlider");
$('#progressBar').attr('aria-valuenow', slider.value).css('width', slider.value+'%');
slider.addEventListener('input', function () {
    $('#progressBar').attr('aria-valuenow', slider.value).css('width', slider.value+'%');
  }, false);
  