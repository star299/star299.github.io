<!--//夜间模式-->    
      
(function(){
    if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
        if(new Date().getHours() > 22 || new Date().getHours() < 6){
            document.body.classList.add('night');
            document.cookie = "night=1;path=/";
            console.log('夜间模式开启');
        }else{
            document.body.classList.remove('night');
            document.cookie = "night=0;path=/";
            console.log('夜间模式关闭');
        }
    }else{
        var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
            document.body.classList.remove('night');
        }else if(night == '1'){
            document.body.classList.add('night');
        }
    }
})();
//夜间模式切换
function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(night == '0'){
        document.body.classList.add('night');
        document.cookie = "night=1;path=/"
        console.log(' ');
    }else{
        document.body.classList.remove('night');
        document.cookie = "night=0;path=/"
        console.log(' ');
    }
}
 
//全屏切换
//控制全屏
function enterfullscreen() { //进入全屏
  $("#fullscreen").html(" ");
  var docElm = document.documentElement;
  //W3C
  if(docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
  //FireFox
  else if(docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
  //Chrome等
  else if(docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  //IE11
  else if(elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
function exitfullscreen() { //退出全屏
  $("#fullscreen").html(" ");
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if(document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
 
var a = 0;
$('#fullscreen').on('click', function() {
  a++;
  a % 2 == 1 ? enterfullscreen() : exitfullscreen();
})