 $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else
    {
      $('nav').removeClass('black');
    }
  })

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.documentElement.scrollTop > 900) {
      document.getElementById("project-nav").className = "project active";
    } else {
      document.getElementById("project-nav").className = "project non-active";
    }
    // if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 900) {
    //   document.getElementById("offer-nav").className = "offer active";
    // } else {
    //   document.getElementById("offer-nav").className = "offer non-active";
    // }
    // if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 1050) {
    //   document.getElementById("contact-nav").className = "contact active";
    // } else {
    //   document.getElementById("contact-nav").className = "contact non-active";
    // }
  }