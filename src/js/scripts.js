import $ from 'jquery';

$('carousel').carousel({
  interval: 6000,
  pause: 'hover'
});

// Video Play
$(function() {
  // Auto play modal video
  $('.video').click(function() {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto =
        videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

$('#year').text(new Date().getFullYear());

$('body').scrollspy({ target: '#main-nav', offset: xxx });

$('#main-nav a').on('click', function(e) {
  const hash = this.hash;

  $('html, body').animate(
    {
      scrollTop: $(hash).offset().top
    },
    900
  );
});
