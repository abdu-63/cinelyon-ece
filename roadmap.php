<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="images/favicon_talking_red.gif" type="image/gif">
    <title>CinéLyon</title>
    <script src="./script.js" defer></script>
</head>

<body>
    <header>
        <h1 class="titre-principale">CinéLyon</h1>
        <p class="description">Les films à l'affiche chez CinéLyon</p>
    </header>

    <button class="burger" id="burger-menu">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav class="menu" id="menu">
        <ul>
            <li class="choix"><a href="index.php">A l'affiche</a></li>
            <li class="choix"><a href="favoris.php">Favoris</a></li>
            <li class="choix"><a href="calendrier.php">Calendrier</a></li>
            <li class="choix active"><a href="roadmap.php">Roadmap</a></li>
        </ul>
    </nav>

    <div>
        <h2>Roadmap des futurs ajout potentiels</h2>
        <ul>
            <li>bouton pour ajouter un film aux favoris</li>
            <li>enregister les films dans un calendrier ?</li>
        </ul>
    </div>

    <footer>
        <p>Fait avec amour par Abdu</p>
    </footer>
</body>

</html>