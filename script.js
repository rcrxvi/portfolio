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