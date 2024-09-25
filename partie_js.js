var chm_min_tr = document.getElementById("min_tr");
var chm_sec_tr = document.getElementById("sec_tr");
var chm_min_rp = document.getElementById("min_rp");
var chm_sec_rp = document.getElementById("sec_rp");
var rep_cycle = document.getElementById("repeti");
let bouton = document.getElementById("action");
var secondes = 0;
var secondes_rp = 0;
var minutes_rp = 5;
var minutes = 25;
var cycle = 10;
var secondes_depart_repos = secondes_rp;
var minutes_depart_repos = minutes_rp;
var minutes_depart = minutes;
var secondes_depart = secondes;
var cycle_depart = cycle;
var minutes_repos;
var secondes_repos;
var minutes_travail;
var secondes_travail;
let para_min = document.getElementById("affichage_min");
let para_sec = document.getElementById("affichage_sec");
let para_repeti = document.getElementById("affichage_repetition");
let play = false;
let travail = 1;
para_sec.innerHTML = secondes;
para_min.innerHTML = minutes;
para_repeti.innerHTML = "<p>Nombre de répétition restante : </p>" + cycle;


function valid(){
    if(chm_min_rp.value != 0 && chm_min_rp.value <=59){
        minutes_repos = chm_min_rp.value;
        minutes_depart_repos = minutes_repos;
    }
    if(chm_sec_rp.value != 0 && chm_sec_rp.value <= 59){
        secondes_repos = chm_sec_rp.value;
        secondes_depart_repos = secondes_repos;
    }
    if(chm_min_tr.value != 0 && chm_min_tr.value <= 59 ){
        minutes_travail = chm_min_tr.value;
        minutes = minutes_travail;
        minutes_depart = minutes_travail;
    }
    if(chm_sec_tr.value != 0 && chm_sec_tr.value <= 59){
        secondes_travail = chm_sec_tr.value;
        secondes = secondes_travail;
        secondes_depart = secondes_travail;         
    }
    if(rep_cycle.value != null ){
        cycle = rep_cycle.value;
        cycle_depart = cycle;
    }
    para_min.innerHTML = minutes;
    para_sec.innerHTML = secondes;
    para_repeti.innerHTML = "<p>Nombre de répétition restante : </p>" + cycle;

}

function lance(){
    if (play == false){
        play = true;
        if(secondes == 0){
            if (minutes != 0){
                minutes--;
            }
            secondes = 60;
        }
        bouton.textContent = "Reset";
    }
    else{ 
        play = false;
        secondes = secondes_depart;
        minutes = minutes_depart;
        cycle = cycle_depart;
        para_sec.innerHTML = secondes;
        para_min.innerHTML = minutes;
        para_repeti.innerHTML = "<p>Nombre de répétition restante : </p>" + cycle;
        bouton.textContent = "Démarer";
    };
    tictictic();
}


setInterval(tictictic, 1000);

function tictictic() {
    if (play == true){
        secondes--;
        para_sec.innerHTML = secondes;
        para_min.innerHTML = minutes;
        para_repeti.innerHTML = "<p>Nombre de répétition restante : </p>" + cycle;

        if (secondes == 0 && minutes == 0) {
            travail ++;
            if (travail % 2 == 0){//repos
                secondes = secondes_depart_repos;
                minutes = minutes_depart_repos;
                para_sec.innerHTML = secondes;
                para_min.innerHTML = minutes;
            }
            if (travail % 2 != 0){//travail
                secondes = secondes_depart;
                minutes = minutes_depart;
                cycle --;
                para_sec.innerHTML = secondes;
                para_min.innerHTML = minutes;
                if (cycle >= 0){
                    para_repeti.innerHTML = "<p>Nombre de répétition restante : </p>" + cycle;
                }
            }
            
            if (cycle < 0){
                play = false;
            }
        }
        if (secondes == 0){
            secondes = 60;
            minutes--;
        }
    }
    else{
        clearTimeout();
    }
}