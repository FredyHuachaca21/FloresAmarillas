onload = () =>{
    document.body.classList.remove("container");
};

document.getElementById('playAudio').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    var icon = document.getElementById('audioIcon');
    
    if (audio.paused) {
        audio.play(); // Si el audio está pausado, se reproduce
        icon.src = 'img/pause.png'; // Cambia el ícono a 'pause'
        icon.alt = 'Pause';
    } else {
        audio.pause(); // Si el audio está reproduciéndose, se pausa
        icon.src = 'img/play.png'; // Cambia el ícono a 'play'
        icon.alt = 'Play';
    }
});
