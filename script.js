let burger = document.getElementById('burger-menu');
let nav = document.getElementById('menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// détecte la page courante et active le bon onglet du menu
let pageCourante = window.location.pathname.split('/').pop(); // ex: "favoris.php"
if (pageCourante === '') pageCourante = 'index.php'; // si accès via "/" → index.php
let liensMenu = document.querySelectorAll('.menu .choix a');

liensMenu.forEach(lien => {
  if (lien.getAttribute('href') === pageCourante) {
    lien.parentElement.classList.add('active'); // ajoute "active" sur le bon <li>
  }
});



// récupère toutes les classes "calendrier"
let SectionCalendrier = document.querySelectorAll('.calendrier');

SectionCalendrier.forEach(section => {
  let date = section.querySelectorAll('.date'); // tous
  let ConteneurInfos = section.querySelector('.conteneur-infos'); // le 1er

  date.forEach(pilule => { // boucle sur chaque pilule
    pilule.addEventListener('click', () => {
      let siActive = pilule.classList.contains('active'); // verifie d'abord si la classe "active" existe

      date.forEach(p => p.classList.remove('active')); // suprime la classe "active" pour en activer que 1

      if (siActive) { // si pillule = active alors
        if (ConteneurInfos) ConteneurInfos.classList.remove('active'); // cache en recliquant
      } else {
        pilule.classList.add('active'); // ajoute la classe "active"
        if (ConteneurInfos) ConteneurInfos.classList.add('active'); // affiche en cliquant
      }
    });
  });
});



window.addEventListener('load', () => { // attendre le chargement de la page
  let tousLesSynopsis = document.querySelectorAll('.synopsis');

  tousLesSynopsis.forEach(synopsis => {
    synopsis.classList.add('compresser'); // cache les synopsis au chargement

          // hauteur totale du txt      hauteur visible
    if (synopsis.scrollHeight > synopsis.clientHeight) {
      let btn = document.createElement('button'); // crée bouton
      btn.classList.add('lire-plus-btn');
      btn.textContent = 'Lire plus';
      // parentNode = div avec classe "info-film"
      synopsis.parentNode.insertBefore(btn, synopsis.nextSibling); // insère bouton après synopsis

      btn.addEventListener('click', () => {
        synopsis.classList.toggle('compresser');
        btn.textContent = synopsis.classList.contains('compresser') ? 'Lire plus' : 'Réduire'; // si fermé on peut l'ouvrir et si ouvert on peut le fermer
      });

    } else { // si le synopsis est + ptit que la hauteur visible on le laisse
      synopsis.classList.remove('compresser');
    }
  });
});