/*
-------------------------------------------
Table Of Contents
-------------------------------------------
- On Dom Function Load
    - Bootstrap Essential
    - Adjust Header Menu On Scroll Down
    - Smooth Scrolling Effect
    - On click hide collapse menu
    - On click choose language
    - Submit form using AJAX
    - Hero Parallax
    - Wow Js Init
    - Accordion Init
    - Gallery init
    - Adjusting Video Player
    - Map
---------------------------------------------
*/
// On Window Load
jQuery(window).load(function() {
    "use strict";
    //relocate();
});
// On Dom Function Load
(function($) {
    "use strict";
    // Adjust Header Menu On Scroll Down
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 40) {
            $(".menu-style-1").addClass('dark-header-area');
            $(".menu-style-2").addClass('dark-header-area');
        } else {
            $(".menu-style-1").removeClass('dark-header-area');
            $(".menu-style-2").removeClass('dark-header-area');
        }

        if(wScroll >= 100) {
            $('.page-menu .navbar-default').addClass('navbar-fixed-top');
            $('.menu-style-3 .navbar-default').addClass('navbar-fixed-top');
        }else {
            $('.page-menu .navbar-default').removeClass('navbar-fixed-top');
            $('.menu-style-3 .navbar-default').removeClass('navbar-fixed-top');
        }


        // Hero Parallax
        hero_parallax();
    });

    // Smooth Scrolling Effect
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 60
        }, 1200);
    });

    // On click hide collapse menu
    $(".navbar-nav li a").on('click', function(event) {
        $(".navbar-collapse").removeClass("collapse in").addClass("collapse");
    });
    $(".drop-toggle").on('click', function(event) {
        $(".navbar-collapse").addClass("collapse in").removeClass("collapse");
    });

    // On click choose language
    $('.dropdown-menu a').on('click', function(e) {
        var link = $(this).attr("href").substr(0, 3);
        switch (link) {
          case "/ru":
            var lang = "ru";
            break;
          case "/ua":
            var lang = "uk";
            break;
          default :
            var lang = "en";
            break;
        }
        var options = {};
        options.expires = 31536000;
        options.path = "/";
        setCookie("lang", lang, options);
    });

    // Submit form using AJAX
    $("form").on("submit", function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        var id = "#" + $(this).attr('id');
        console.log(id);
        // Serialize the form data.
        var formData = $(id).serialize();
        console.log(formData);
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(id).attr('action'),
            data: formData,
            success: function(response) {
                $(id).trigger("reset");
            },
            error: function(data) {
            }
        });
        if (id == "#contact-form-mail") window.location.href = "#modal-mail";
            else window.location.href = "#modal-call";
    });

    // Hero Parallax
    function hero_parallax() {
        var scrollPosition = $(window).scrollTop();
        $('.speaker').css('left', (0 - (scrollPosition * .6)) + '%');
        $('.headphone').css('left', (-15 - (scrollPosition * .1)) + '%');
        $('.pencil').css('bottom', (13 - (scrollPosition * .05)) + '%');
        $('.frame').css('right', (4 - (scrollPosition * .1)) + '%');
        $('.black-tab').css('right', (1 - (scrollPosition * .3)) + '%');
        $('.mouse').css('bottom', (-30 - (scrollPosition * .4)) + 'px');
    }

    // Wow js init
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

}(jQuery));

// SetCookie
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

// GetCookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function relocate() {
    var sites = {
        en: "/",
        ru: "/ru",
        uk: "/ua"
    };
    var lang = getCookie("lang");
    var url = window.location.href.substr(-4, 3);
    if (url.indexOf("/ru") == - 1 && url.indexOf("/ua") == -1) url = "/";
    if (lang !== undefined && url !== sites[lang]) {
        window.location.href = sites[lang];
    }
        else {
            if (lang === undefined ) {
                lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage).substr(0, 2).toLowerCase();
                if (lang == 'hy' || lang == 'az' || lang == 'ka' || lang == 'kk' || lang == 'ky' || lang == 'mo' || lang == 'tg' || lang == 'tk'
                || lang == 'uz' || lang == 'be') lang == 'ru';
                if (lang !== 'uk') lang == 'en';
                if (url !== sites[lang]) window.location.href = sites[lang];
            }
        }
}