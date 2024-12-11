function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


function validateForm() {
    var nom = document.getElementById("nom").value;
    
    
    if (nom.length < 3) {
        alert("Le nom doit contenir au moins 3 caractères.");
        return false;
    }

    var personnes = document.getElementById("personnes").value;
    
    // Vérifier que le nombre de personnes est un entier positif
    if (personnes <= 0 || !Number.isInteger(parseFloat(personnes))) {
        alert("Le nombre de personnes doit être un entier positif.");
        return false;
    }

    return true; 
}



        function validateForm() {
            var nom = document.getElementById("nom").value;
            if (nom.length < 3) {
                alert("le nom doit contenir 3 caracteres minimum.")}
                return false;
            }
            var personnes = document.getElementById("personnes").value
            if (personnes <= 0  || ! Number.isInteger(parseFloat(personnes))) {
            alerte ("le nombre doit etre entier.")};
            return false;
            } 
  