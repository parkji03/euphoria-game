$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100 ){
      //NOTE: these colors need to be changed to match colors.scss
      $('#euphoria-navbar').css('background-color', '#F8CA00');
      $('.euphoria-link').css('color', '#604621')
    }
    else {
      $('#euphoria-navbar').css('background-color', 'transparent');
      $('.euphoria-link').css('color', '#FFFFFF')
    };
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
  $('.grid').hover(function(){
    //appending a random number as a paramater to the file path forces a reload
    //and prevent Chrome from stopping the gif from playing
    $(this).find('img').attr("src","/assets/jaw_breaker.gif?p"  + new Date().getTime());
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
