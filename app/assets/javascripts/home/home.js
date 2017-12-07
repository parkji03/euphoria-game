$(document).ready(function() {
  $('#navbar-logo').hide();
  // navbar code
  $(window).scroll(function() {
    if ($(window).scrollTop() > 1000 ){
      //NOTE: these colors need to be changed to match colors.scss
      $('#euphoria-navbar').css('background-color', '#F8CA00');
      $('.euphoria-link').css('color', '#604621');
      $('#navbar-logo').show();
    }
    else {
      $('#euphoria-navbar').css('background-color', 'transparent');
      $('.euphoria-link').css('color', '#FFFFFF');
      $('#navbar-logo').hide();
    };
    if ($(window).scrollTop() > 100 ){
      $('#down-arrow').css('opacity', 0);
    } else {
      $('#down-arrow').css('opacity', 1);
    }
  });

  //onClick for the arrow


  // smooth scroll code
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // parallax code
  $(window).scroll(function() {
    topDistance = $(window).scrollTop()
    layers = document.querySelectorAll("[data-type='parallax']")

    layers.forEach(function(layer){
      depth = layer.getAttribute('data-depth')
      movement = -(topDistance * depth)
      translate3d = 'translate3d(0, ' + movement + 'px, 0)'
      layer.style['-webkit-transform'] = translate3d
      layer.style['-moz-transform'] = translate3d
      layer.style['-ms-transform'] = translate3d
      layer.style['-o-transform'] = translate3d
      layer.style.transform = translate3d

    })

  });

  $('<img />',{ src: '/assets/jaw_breaker.gif'});
  $('<img />',{ src: '/assets/run.gif'});
  $('<img />',{ src: '/assets/idle.gif'});
  $('.grid').hover(function(){
    type =  $(this).find('img').attr('data-type')
    if(type === 'run') {
      //appending a random number as a paramater to the file path forces a reload
      //and prevent Chrome from stopping the gif from playing
       $(this).find('img').attr("src","/assets/run.gif?p"  + new Date().getTime());

    }
    else if(type === 'idle') {
     $(this).find('img').attr("src","/assets/idle.gif?p"  + new Date().getTime());
    }

  },
    function(){

        $(this).find('img').attr("src","/assets/rectangle.png")
    });

});


// 2. This code loads the IFrame Player API code asynchronously.


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
 player = new YT.Player('trailer-video', {
   height: '430',
   width: '705',
   videoId: 'zQelxq6hCD8',
   playerVars: {
    // controls:'0' //we can decide if we want to remove controls
   },
   events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
   }
 });
}

function onPlayerReady() {
 //if we wanna do cool things here
}

function onPlayerStateChange() {
 //if we wanna do cool things here
}
