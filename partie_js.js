

let secondes = 60;

  // élément où afficher le décompte
  let para = document.getElementById("affichage");

  // lance l'exécution de la fonction à toutes les secondes
  let chrono = window.setInterval(tictictic, 1000);

  // ---------------------------------------------------------
  // Incrément le nombre de secondes, affiche cette quantité
  // et arrête automatiquement après une minute.
  // ---------------------------------------------------------
  function tictictic() {
    secondes--;
    para.innerHTML = secondes;
    if (secondes == 00) {
      // arrête l'exécution lancée par setInterval()
      window.clearTimeout(chrono);
    }
  }
