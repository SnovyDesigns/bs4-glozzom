import $ from 'jquery';

$('carousel').carousel({
  interval: 6000,
  pause: 'hover'
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
