function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction pour valider le formulaire
function validateForm() {
    var nom = document.getElementById("nom").value;
    
    // Vérifier que le nom a au moins 3 caractères
    if (nom.length < 3) {
        alert("Le nom doit contenir au moins 3 caractères.");
        return false; // Empêche la soumission du formulaire
    }

    var personnes = document.getElementById("personnes").value;
    
    // Vérifier que le nombre de personnes est un entier positif
    if (personnes <= 0 || !Number.isInteger(parseFloat(personnes))) {
        alert("Le nombre de personnes doit être un entier positif.");
        return false; // Empêche la soumission du formulaire
    }

    return true; // Si toutes les conditions sont remplies, le formulaire peut être soumis
}
