function onYouTubeIframeAPIReady(){player=new YT.Player("trailer-video",{height:"430",width:"705",videoId:"zQelxq6hCD8",playerVars:{},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(){}function onPlayerStateChange(){}$(document).ready(function(){$("#navbar-logo").hide(),$(window).scroll(function(){$(window).scrollTop()>1e3?($("#euphoria-navbar").css("background-color","#F8CA00"),$(".euphoria-link").css("color","#604621"),$("#navbar-logo").show()):($("#euphoria-navbar").css("background-color","transparent"),$(".euphoria-link").css("color","#FFFFFF"),$("#navbar-logo").hide()),$(window).scrollTop()>100?$("#down-arrow").css("opacity",0):$("#down-arrow").css("opacity",1)}),$("a").on("click",function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e})}}),$(window).scroll(function(){topDistance=$(window).scrollTop(),layers=document.querySelectorAll("[data-type='parallax']"),layers.forEach(function(t){depth=t.getAttribute("data-depth"),movement=-topDistance*depth,translate3d="translate3d(0, "+movement+"px, 0)",t.style["-webkit-transform"]=translate3d,t.style["-moz-transform"]=translate3d,t.style["-ms-transform"]=translate3d,t.style["-o-transform"]=translate3d,t.style.transform=translate3d})}),$("<img />",{src:"/assets/jaw_breaker.gif"}),$("<img />",{src:"/assets/run.gif"}),$("<img />",{src:"/assets/idle.gif"}),$(".grid").hover(function(){type=$(this).find("img").attr("data-type"),"run"===type?$(this).find("img").attr("src","/assets/run.gif?p"+(new Date).getTime()):"idle"===type&&$(this).find("img").attr("src","/assets/idle.gif?p"+(new Date).getTime())},function(){$(this).find("img").attr("src","/assets/rectangle.png")})});var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player;