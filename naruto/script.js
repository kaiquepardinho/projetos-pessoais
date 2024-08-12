

function clickDown0() {
    var secbox0 = document.getElementById("secbox0");
    var secbox1 = document.getElementById("secbox1");

    if (secbox0.style.display !== "none") {
        secbox0.style.display = "none";
        ph1.style.display = "none"
        secbox1.style.display = "block";
        arrow.style.display = 'block'
        pbtnbox.style.display = 'block'
    } else {
        secbox0.style.display = "block";
        ph1.style.display = "block"
        secbox1.style.display = "none";
        arrow.style.display = 'none'
        pbtnbox.style.display = 'none' 
    }
}


function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Autoplay bloqueado pelo navegador:', error);
    });
}


