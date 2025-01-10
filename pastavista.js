const button = document.getElementById('darkModeToggle');

button.addEventListener('click', () => {
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('text-white');
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-black');

  if (document.body.classList.contains('bg-gray-900')) {
    button.textContent = 'Light Mode';
  } else {
    button.textContent = 'Dark Mode';
  }
});



// Fonction pour zoomer l'image au clic
function zoomImage(imgElement) {
  const zoomOverlay = document.getElementById('zoom-overlay');
  const zoomedImg = document.getElementById('zoomed-img');
  
  zoomedImg.src = imgElement.src;  // Met à jour l'URL de l'image agrandie
  zoomOverlay.classList.remove('hidden');
}

// Fermer l'overlay de zoom au clic
document.getElementById('zoom-overlay').addEventListener('click', function() {
  this.classList.add('hidden');  // Cacher l'overlay de zoom
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
      items.forEach((item, i) => {
          item.classList.add('hidden');
          if (i === index) {
              item.classList.remove('hidden');
          }
      });
  }

  document.getElementById('prevButton').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
  });

  document.getElementById('nextButton').addEventListener('click', () => {
      currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
  });

  // Initial display
  showSlide(currentIndex);
});




// Fonction de validation du formulaire
function validateForm() {
  // Vérifier la longueur du nom
  var nom = document.getElementById("nom").value;
  if (nom.length < 3) {
    alert("Le nom doit contenir au moins 3 caractères.");
    return false; // Empêcher l'envoi du formulaire
  }

  // Vérifier le nombre de personnes
  var personnes = document.getElementById("personnes").value;
  if (personnes <= 0 || !Number.isInteger(parseFloat(personnes))) {
    alert("Le nombre de personnes doit être un entier positif.");
    return false; // Empêcher l'envoi du formulaire
  }

  // Si tout est correct, soumettre le formulaire
  return true;
}

