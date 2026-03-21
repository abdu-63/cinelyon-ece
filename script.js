let burger = document.getElementById('burger-menu');
let nav = document.getElementById('menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Logique pour le calendrier fictif
const calendarSections = document.querySelectorAll('.calendar-section');

calendarSections.forEach(section => {
    const datePills = section.querySelectorAll('.date-pill');
    const showingsContainer = section.querySelector('.showings-container');
    
    datePills.forEach(pill => {
        pill.addEventListener('click', () => {
            const isActive = pill.classList.contains('active');
            
            // Enlève la classe active de tous les boutons de cette section
            datePills.forEach(p => p.classList.remove('active'));
            
            if (isActive) {
                // Si c'était déjà actif, on désactive (on cache)
                if (showingsContainer) showingsContainer.classList.remove('active');
            } else {
                // Sinon, on active le bouton cliqué et on affiche le conteneur
                pill.classList.add('active');
                if (showingsContainer) showingsContainer.classList.add('active');
            }
        });
    });
});