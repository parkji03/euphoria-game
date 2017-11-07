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
