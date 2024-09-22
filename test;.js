let secondes = 60;
let minutes = 1;

    let para_min = document.getElementById("affichage_min");
    let para_sec = document.getElementById("affichage_sec");
    para_sec.innerHTML = secondes;
    para_min.innerHTML = minutes;
    let zero = document.getElementById("res");
    let bouton = document.getElementById("action");
    let chrono;
  
    bouton.addEventListener("click",function() { 
        secondes = 60;
        minutes--;
        chrono = window.setInterval(tictictic, 1000);
    });

    zero.addEventListener("click",function() { 
        window.clearTimeout(chrono);
        secondes=0;
        minutes = 2;
        para_sec.innerHTML = secondes;
        para_min.innerHTML = minutes;
    });

    function tictictic() {
        secondes--;
        para_sec.innerHTML = secondes;
        para_min.innerHTML = minutes;
        if (secondes == 0 && minutes == 0) {
            window.clearTimeout(chrono);
        }
        if (secondes == 0){
            secondes = 60;
            minutes--;
        }
    }