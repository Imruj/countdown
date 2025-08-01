let audio = new Audio('sound/lobby.mp3');

function start_countdown() {
    audio.play();
    audio.loop = true;
}

function end_countdown() {
    audio.loop = false;
    audio.pause();
}

document.getElementById('startButton').addEventListener('click', function() {
    start_countdown();
    let hours = parseInt(document.getElementById('input_hour').value) || 0;
    let minutes = parseInt(document.getElementById('input_min').value) || 0;
    let seconds = parseInt(document.getElementById('input_sec').value) || 0;

    //alert(`Countdown started for ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);

    let all = hours * 3600 + minutes * 60 + seconds;
    let a = all % 60;
    let b = Math.floor(all / 60) % 60;
    let c = Math.floor(all / 3600);
    
    let display = document.getElementById('display');
    display.innerHTML = `${c.toString().padStart(2, '0')}:${b.toString().padStart(2, '0')}:${a.toString().padStart(2, '0')}`;
    let countdownInterval = setInterval(function() {
        if (all <= 0) {
            end_countdown();
            clearInterval(countdownInterval);
            display.innerHTML = "00:00:00";
        } else {
            all--;
            a = all % 60;
            b = Math.floor(all / 60) % 60;
            c = Math.floor(all / 3600);
            display.innerHTML = `${c.toString().padStart(2, '0')}:${b.toString().padStart(2, '0')}:${a.toString().padStart(2, '0')}`;
        }
    }, 1000);
});