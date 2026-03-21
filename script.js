let burger = document.getElementById('burger-menu');
let nav = document.getElementById('menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

let SectionCalendrier = document.querySelectorAll('.calendrier');

SectionCalendrier.forEach(section => {
    let date = section.querySelectorAll('.date');
    let ConteneurInfos = section.querySelector('.conteneur-infos');
    
    date.forEach(pill => {
        pill.addEventListener('click', () => {
            let isActive = pill.classList.contains('active');
            
            date.forEach(p => p.classList.remove('active'));
            
            if (isActive) {
                if (ConteneurInfos) ConteneurInfos.classList.remove('active');
            } else {
                pill.classList.add('active');
                if (ConteneurInfos) ConteneurInfos.classList.add('active');
            }
        });
    });
});