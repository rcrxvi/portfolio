window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(document).ready(function () {
 $('.down').on('click',function () {
  $("html").scrollTop(0);
   $('html, body').animate({
     scrollTop: $("header").offset().top
 }, 1000);
 });
});

jQuery(document).ready(function() {
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
    	scrollTop: $(".down").offset().top + $(".down").outerHeight(true)}, '300');
  });
});