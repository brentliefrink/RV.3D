 $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else
    {
      $('nav').removeClass('black');
    }
  })


 (function ($) {
     "use strict";

     /*==================================================================
     [ Validate ]*/
     var input = $('.validate-input .input100');

     $('.validate-form').on('submit',function(){
         var check = true;

         for(var i=0; i<input.length; i++) {
             if(validate(input[i]) == false){
                 showValidate(input[i]);
                 check=false;
             }
         }

         return check;
     });


     $('.validate-form .input100').each(function(){
         $(this).focus(function(){
             hideValidate(this);
         });
     });

     function validate (input) {
         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                 return false;
             }
         }
         else {
             if($(input).val().trim() == ''){
                 return false;
             }
         }
     }

     function showValidate(input) {
         var thisAlert = $(input).parent();

         $(thisAlert).addClass('alert-validate');
     }

     function hideValidate(input) {
         var thisAlert = $(input).parent();

         $(thisAlert).removeClass('alert-validate');
     }



 })(jQuery);


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
