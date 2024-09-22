/*
let secondes = 0;
let minutes = 2;

    let para_min = document.getElementById("affichage_min");
    let para_sec = document.getElementById("affichage_sec");
    para_sec.innerHTML = secondes;
    para_min.innerHTML = minutes;
    let bouton = document.getElementById("action");

    bouton.addEventListener("click",temps(2));
 
    function temps(test) {
        console.log(test);
        if (test == 0){
            if (secondes == 60){
                minutes--;
                secondes = 60;
            }
            secondes--;
            para_sec.innerHTML = secondes;
            para_min.innerHTML = minutes;
            if (secondes == 0) {
                minutes--;
                secondes = 60;
            }
            test = 1;
        }
        console.log("cc"+test);
        if(test == 1){
            console.log("dac"+test);
            //window.setTimeout(temps(0),1000);
        }
        else{
            minutes = 2;
            secondes = 0; 
            para_sec.innerHTML = secondes;
            para_min.innerHTML = minutes;
            setTimeout(1000);
            console.log("ccccccc");
        }
    }
*/