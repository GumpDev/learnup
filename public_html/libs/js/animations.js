var scr = 0;
var page = "";

function animate(n){
    if(n == "index"){
        page = "index";
        var lineDrawing = anime({
            targets: '#lineDrawing .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) { return i * 250 }
        });
        var cssSelector = anime({
            targets: '#imgLogo',
            opacity: 1,
            duration: 1000,
            delay: 1500
        });
        var title = anime({
            targets: '#title',
            opacity: 1,
            duration: 2000,
            delay: 2250
        });
        var subtitle = anime({
            targets: '#subtitle',
            opacity: 1,
            duration: 2000,
            delay: 2500
        });
        var log = anime({
            targets: '.log',
            opacity: 1,
            duration: 1000,
            delay: 3000
        });
    }
}

