var gridster = null;

$(document).ready(function(){

  $('.video-list').slick({
      arrows: false,
      slidesToShow: 4,
    });

  // slick
  $('.slick-gallery-news').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    adaptiveHeight: true,
    asNavFor: '.slider-nav-gallery',
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
      }
    ]

  });

  $('.slider-nav-gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slick-gallery-news',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        slidesToScroll: 12,
        adaptiveHeight: true,
          centerMode: false,
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: true,
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          centerMode: false
        }
      }
    ]
  });

  
  $('.tvc-arrow .slicks-prev').on('click', function(){
      $('.tvc-m').slick('slickPrev');
      $('iframe').each(function(){
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
        });
  });
  $('.tvc-arrow .slicks-next').on('click', function(){
    $('.tvc-m').slick('slickNext');
    $('iframe').each(function(){
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
        });
  });
    
  $('.tvc-m').slick({
    arrows: true,
    slidesToShow: 1,
  });


  $('.navigator-menu').on('activate.bs.scrollspy', function () {
    // do something…
    $( ".menu-desktop li, .navigator-menu .logo-menu a" ).each(function( index ) {
    var geturl = $(this).find('a').attr('href');
      if($(this).hasClass('active')){
        var getactiveurl = $(this).find('a').attr('href');
        document.location.hash = getactiveurl;
      }
    });
  });


	$('.banner-slide').slick({
    lazyLoad: 'ondemand',
	  arrows: false,
      dots: true,
	  slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
	});

  


var screenwidth=$(window).width();
var screenheight=$(window).height();

if(screenwidth > 768){

   // var $grid = $('.grid').masonry();

  // $(".grid li").slice(0,6).show();
  // $("#loadMore").on('click', function (e) {
  //       e.preventDefault();
  //       $grid.masonry('layout');
  //       $(".grid li:hidden").slice(0, 1).slideDown();
  // });

  /*$('.pane-section').css({'min-height':screenheight});*/
  $('.splash-coffee').css({'height':'100%'});
  $('.article').css({'height':'100%'});
  /*$('.article .gridster').css({'height':'99%'});*/
  $('.contact-back .col-md-10').css({'height':'100%'});
  

}
else{
    $('.row-prod').slick({
      infinite: true,
      arrows:false,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 6000,
    });

    $(window).scroll(function(){
      var scrollval = $(window).scrollTop();
      if(scrollval == 0 ){
        $('.logo').css({'margin-bottom':'-43px'});
      }
      else if (scrollval > 1){
        // console.log(scrollval);
        $('.logo').css({'margin-bottom':'-8px'});
      }
    });
}

/*
if(screenheight < 700){
  $('.scroll-news').css({'padding-bottom':'15%'});
}
*/

    var heightsearch = $('.size-search').height() + 200;
    $('.wrap-search').css({'height':heightsearch});

    $('.abs-close-search').click(function(){
      $('.wrap-search').fadeOut().removeClass('active');
      $('.id-search').parent().removeClass('active');
      $('body').css({'overflow-y':'scroll'});
    });

    $('.id-search').click(function(){
      $(this).parent().addClass('active');
      if(screenwidth > 768){
        $('.menu-desktop li').removeClass('active');
        $('.wrap-search').css({'position':'fixed','height':'100%','width':'92%'});
        $('.list-search').css({'overflow-y':'scroll','height':'80%'});
        $('body').css({'overflow-y':'hidden'});
      }
      $('.wrap-search').fadeIn('slow', function() {
        $(this).addClass('active');
        $('.wrap-search .input-search').focus();

        if($('.wrap-search').hasClass('active')){
          $('.id-search').parent().addClass('active');
        }

      });
      $('.navbar-collapse').removeClass('in');
      $('.navbar-default .navbar-toggle').css({'-webkit-transform':'rotate(0deg)', 'transform':'rotate(0deg)'});
    });
    

    
    $('.abs-close').click(function(){
    	$('.abs-close').fadeOut();
    	$('.tab-product .tab-pane').removeClass('active');
    });

    $('.abs-close-news').click(function(){
      $('.wrap-news').fadeOut();
    }); 

    $('.pop-news').click(function(){
      $('.post-news').fadeIn();
    });	

    $('.abs-close-post').click(function(){
      // $('.post-news').fadeOut();
    });

    $('.row-prod div').click(function(){
    	$('.abs-close').fadeIn();
    });

    $('.btn-close-error').click(function(){
      $('.pop-error').fadeOut();
    });


    if(screenwidth > 768){
	    $('.show-product').click(function(){
	      $('.main-menu ul li:nth-child(2) a').trigger('click');
	    });
	}


    $('.article-detail-pop').click(function(){
      // $('.main-menu ul li:nth-child(1) a').trigger('click');
    });


    $('.menu-mobile .m-menu a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var tags = $(this).attr('href');
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.navbar-collapse').removeClass('in');
        $('.navbar-default .navbar-toggle').css({'-webkit-transform':'rotate(0deg)', 'transform':'rotate(0deg)'});
        if ($('.wrap-search').hasClass('active')) {
          $('.abs-close-search').trigger('click');
        }
          window.history.pushState('', '', tags);
          // console.log(tags);

        $('.abs-close-news, .abs-close').trigger('click');
        // window.history.pushState('', '', tags);
        return false;
      }
    }

  });


  $('.banner-slide a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  $('.menu-desktop a[href*="#"]:not([href="#"]), .logo-menu a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      var tags = $(this).attr('href');

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      window.history.pushState('', '', tags);

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('.navbar-collapse').removeClass('in');
        $('.navbar-default .navbar-toggle').css({'-webkit-transform':'rotate(0deg)', 'transform':'rotate(0deg)'});
        if ($('.wrap-search').hasClass('active')) {
          $('.abs-close-search').trigger('click');
          // $('.post-search').fadeOut('slow', function() {
          //   $('.pop-search-detail').empty();
          // })
        }
        $('.abs-close-news, .abs-close').trigger('click');
        return false;
      }
        window.history.pushState('', '', tags);
      
          console.log(tags);
    }
  });

  if(screenwidth > 768){
    $('#grid-scroll').perfectScrollbar();
  }

});
