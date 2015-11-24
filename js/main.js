$('#day-2, #day-3').css('display', 'none');

$( "ul.tabbed li" ).on('click', function() {
	var id = $(this).data('day');
	var activeId = $('.active').data('day');
	
	$('.active').removeClass('active');
  $(this).addClass('active');
  
  $(activeId).css('display', 'none');
  $(id).css('display', 'block');
});

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 40
        }, 1000);
        return false;
      }
    }
  });
});