let burger = document.getElementById('burger-menu');
let nav = document.getElementById('menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});



// récupère toutes les sections calendrier
let SectionCalendrier = document.querySelectorAll('.calendrier');

SectionCalendrier.forEach(section => {
  let date = section.querySelectorAll('.date');
  let ConteneurInfos = section.querySelector('.conteneur-infos');

  date.forEach(pill => {
    pill.addEventListener('click', () => {
      let siActive = pill.classList.contains('active'); // verifie si la classe "active" existe

      date.forEach(p => p.classList.remove('active')); // suprime la classe "active"

      if (siActive) {
        if (ConteneurInfos) ConteneurInfos.classList.remove('active'); // cache en recliquant
      } else {
        pill.classList.add('active'); // ajoute la classe "active"
        if (ConteneurInfos) ConteneurInfos.classList.add('active'); // affiche en cliquant
      }
    });
  });
});



window.addEventListener('load', () => {
  let synopsis = document.querySelectorAll('.synopsis');

  synopsis.forEach(synopsis => {
    synopsis.classList.add('compresser'); // cache le synopsis au chargement

    if (synopsis.scrollHeight > synopsis.clientHeight) { // si synopsis trop long
      let btn = document.createElement('button'); // crée bouton
      btn.classList.add('lire-plus-btn');
      btn.textContent = 'Lire plus';

      synopsis.parentNode.insertBefore(btn, synopsis.nextSibling); // insère bouton après synopsis

      btn.addEventListener('click', () => {
        if (synopsis.classList.contains('compresser')) {
          synopsis.classList.remove('compresser');
          btn.textContent = 'Réduire';
        } else {
          synopsis.classList.add('compresser');
          btn.textContent = 'Lire plus';
        }
      });
    } else {
      synopsis.classList.remove('compresser');
    }
  });
});