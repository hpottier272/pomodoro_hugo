var chm_min_tr = document.getElementById("min_tr");
var chm_sec_tr = document.getElementById("sec_tr");
var chm_min_rp = document.getElementById("min_rp");
var chm_sec_rp = document.getElementById("sec_rp");
var rep_cycle = document.getElementById("repeti");
let bouton = document.getElementById("action");
let affiche_chrono = document.getElementById("affichage");
let para_repeti = document.getElementById("affichage_repetition");
let temps_de = document.getElementById("temps");
let mode = "TRAVAIL";
var secondes = 0;
var secondes_rp = 0;
var minutes_rp = 5;
var minutes = 25;
var cycle = 4;
var secondes_depart_repos = secondes_rp;
var minutes_depart_repos = minutes_rp;
var minutes_depart = minutes;
var secondes_depart = secondes;
var cycle_depart = cycle;
var minutes_repos;
var secondes_repos;
var minutes_travail;
var secondes_travail;
let play = false;
let travail = 1;
let para_sec = secondes;
let para_min = minutes;
affiche_chrono.innerHTML = para_min + " : " + para_sec;
para_repeti.innerHTML = "<p>Nombre de cycle(s) restant(s) : " + cycle + "</p>";
temps_de.innerHTML = "Temps de : " + mode;

/**
 * La fonction valid est lancée dés que le bouton 'valider' est appuyé (celui pour changer les paramètres du chronomètre)
 * Elle regarde si les champs on était remplis, si oui elle change par la nouvelle valeur, si non elle garde le paramètres par défault
 * Puis elle affiche les changements  
 */
function valid(){
    if(chm_min_rp.value != 0 && chm_min_rp.value <=120){
        minutes_repos = chm_min_rp.value;
        minutes_depart_repos = minutes_repos;
    }
    if(chm_sec_rp.value != 0 && chm_sec_rp.value <= 59){
        secondes_repos = chm_sec_rp.value;
        secondes_depart_repos = secondes_repos;
    }
    if(chm_min_tr.value != 0 && chm_min_tr.value <= 120 ){
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
    para_min = minutes;
    para_sec = secondes;
    affiche_chrono.innerHTML = para_min + " : " + para_sec;
    para_repeti.innerHTML = "<p>Nombre de cycle(s) restant(s) : " + cycle + "</p>";

}


/**
 * La fonction lance est lancée dés que le bouton 'Démarrer' est appuyé (celui pour actionner le chronomètre)
 * Elle s'occupe de faire la première seconde, change le texte du bouton de départ,
 * et s'occupe de réinitailizer le chrono et les cycles. 
 * Elle appelle aussi la fonction 'lancement_temps' qui permet de faire tourner le chrono
*/
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
        para_sec = secondes;
        para_min = minutes;
        affiche_chrono.innerHTML = para_min + " : " + para_sec;
        para_repeti.innerHTML = "<p>Nombre de cycle(s) restant(s) : " + cycle + "</p>";
        bouton.textContent = "Démarer";
    };
    lancement_temps();
}



/**
 * permet d'appeler la fonction 'lancement_temps' toutes les secondes 
 */
setInterval(lancement_temps, 1000);



/**
 * La fonction 'lancement_temps' est lancée par la fonction 'lance' (celle qui réagit avec le bouton 'demarrer' du chrono)
 * Elle s'occupe de faire tourner le chrono, les cycles, les changements de mode (travail et repos)
 */
function lancement_temps() {
    if (play == true){
        secondes--;
        para_sec = secondes;
        para_min = minutes;
        affiche_chrono.innerHTML = para_min + " : " + para_sec;
        para_repeti.innerHTML = "<p>Nombre de cycle(s) restant(s) : " + cycle + "</p>";

        if(minutes == 0 && secondes <= 10){//faire clignoter le chrono
            if (affiche_chrono.style.color == "rgb(194, 164, 17)"){
                affiche_chrono.style.color = "rgb(0,0,0)";
            }
            else{
                affiche_chrono.style.color = "rgb(194, 164, 17)";
            }
        }

        if (secondes == 0 && minutes == 0) {//fin d'un mode
            travail ++;
            if (travail % 2 == 0){//repos
                mode = "REPOS";
                document.body.style.background = "linear-gradient(to bottom right,rgb(24, 2, 189),85%, rgb(153, 142, 234)";
                secondes = secondes_depart_repos;
                minutes = minutes_depart_repos;
                para_sec = secondes;
                para_min = minutes;
                affiche_chrono.innerHTML = para_min + " : " + para_sec;
                temps_de.innerHTML = "Temps de : " + mode;
                affiche_chrono.style.color = "rgb(194, 164, 17)";
                affiche_chrono.style.color = "rgb(194, 164, 17)";
            }
            if (travail % 2 != 0){//travail
                mode = "TRAVAIL";
                document.body.style.background = "linear-gradient(to bottom right,rgb(189, 2, 2),85%, rgb(254, 99, 99)";
                secondes = secondes_depart;
                minutes = minutes_depart;
                cycle --;
                para_sec = secondes;
                para_min = minutes;
                affiche_chrono.innerHTML = para_min + " : " + para_sec;
                temps_de.innerHTML = "Temps de : " + mode;
                affiche_chrono.style.color = "rgb(194, 164, 17)";
                affiche_chrono.style.color = "rgb(194, 164, 17)";
                if (cycle >= 0){
                    para_repeti.innerHTML = "<p>Nombre de cycle(s) restant(s) : " + cycle + "</p>";
                }
            }
            
            if (cycle < 0){//fin des cycles
                play = false;
                bouton.textContent = "Démarer";
            }
        }
        if (secondes == 0){//fin d'une minute
            secondes = 60;
            minutes--;
        }
    }
    else{// fin du chrono
        clearTimeout();
    }
}