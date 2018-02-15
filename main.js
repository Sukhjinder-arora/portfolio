$(document).ready(function() {
    $(".navbar-brand").click(function() {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
  
      return false;
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    // scroll body to 0px on click
    $("#back-to-top").click(function() {
      $("#back-to-top").tooltip("hide");
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  
    $("#back-to-top").tooltip("show");
  
    //Smooth scrolling when click to nav
    $("#myNavbar > ul > li > a").click(function(e) {
      e.preventDefault();
      var curLink = $(this);
      var scrollPoint = $(curLink.attr("href")).position().top;
      $("body,html").animate(
        {
          scrollTop: scrollPoint
        },
        500
      );
    });
    $(window).scroll(function() {
      onScrollHandle();
    });
    function onScrollHandle() {
      //Navbar shrink when scroll down
      $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
      //Get current scroll position
      var currentScrollPos = $(document).scrollTop();
      //Iterate through all node
      $("#myNavbar > ul > li > a").each(function() {
        var curLink = $(this);
        var refElem = $(curLink.attr("href"));
        //Compare the value of current position and the every section position in each scroll
        if (
          refElem.position().top <= currentScrollPos  &&
          refElem.position().top + refElem.height() > currentScrollPos
        ) {
          //Remove class active in all nav
          $("#myNavbar > ul > li").removeClass("active");
          //Add class active
          curLink.parent().addClass("active");
        } else {
          curLink.parent().removeClass("active");
        }
      });
    }
  
    // changing hamburger to x
    $(".navbar-toggle").on("click", function() {
      $(this).toggleClass("active");
    });
      
      
      $(".nav-links").click(function() {
       $(".navbar-toggle").toggleClass("active");
  
      
    });
  });
  