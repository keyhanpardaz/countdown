//
//    OSX SCREENSAVER DOWNLOAD:
//    https://goo.gl/AtpYAA 
//

$(document).ready(function() {
  var countDownDate = new Date("Aug 20, 2021 16:00:00").getTime();
  var now1 = new Date("Aug 20, 2021 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  hours=hours+(days*24);
  var minutes1=minutes+(hours*60);
  var seconds1=seconds+(minutes1*60);
  var distance1 = countDownDate - now1;
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance1 % (1000 * 60)) / 1000);
  hours1=hours1+(days*24);
  var minutes3=minutes2+(hours1*60);
  var seconds3=seconds2+(minutes3*60);   
  var style = document.createElement('style');
  var x1= 100-((seconds1*100)/seconds3);
  style.innerHTML = `h1::before {content: attr(data-text);position: absolute;top: 0;left: 0;width: 100%;color: dodgerblue;animation: lod `+seconds1+`s linear infinite;overflow: hidden;}@keyframes lod {0% {width: `+x1+`%;}100% {width: 100%;}}`;
  document.head.appendChild(style);
});
var countDownDate = new Date("Aug 20, 2021 16:00:00").getTime();





$(document).ready(function () {
	$('.fadein').delay(1000).fadeIn(17000);
    var tro= setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var x=0;
 if(x===0){    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  hours=hours+(days*24);
  var minutes1=minutes+(hours*60);
  var seconds1=seconds+(minutes1*60);    
    
              var realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds;
    
        $('.time').html(realTime);
        $('.time').attr('data-time', realTime);
      

}

        //$('title').html(realTime);
        if (distance < 0) {
        //seconds1=0; 
          clearInterval(tro);
               realTime = (hours < 10 ? '0' : '') + 00 + ' : ' + (minutes < 10 ? '0' : '') + 00 + ' : ' + (seconds < 10 ? '0' : '') + 00;
          var style = document.createElement('style');
          style.innerHTML = `h1::before {content: attr(data-text);position: absolute;top: 0;left: 0;width: 100%;color: dodgerblue;animation: lod `+seconds1+`s linear infinite;overflow: hidden;}@keyframes lod {0% {width: 0%;}100% {width: 100%;}}`;
          document.head.appendChild(style);
        $('.time').html(realTime);
        $('.time').attr('data-time', realTime);
          var targetURL="http://itpy.ir/";
          //window.location=targetURL;


        }


const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

       
    }, 1000);
});
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}
