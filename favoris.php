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

    <?php include('menu.php')?>

    <div class="box">
        <a href="images/talking_red.gif">
            <img class="poster" src="images/talking_red.gif" alt="Affiche du film Talking Red">
        </a>
        <div class="info-film">
            <h2 class="titre-film-heading"><a class="titre-film" href="https://talking-red.pages.dev/">Talking
                    Red (2023)</a></h2>
            <p class="description-film">Réalisateur : Rovio Mobile<br>
                Genre : Horreur<br>
                Durée : 47h 63min<br>
            </p>
            <p class="synopsis">Une application d'enfance oubliée devient un cauchemar numérique. Face à un
                avatar défaillant qui refuse de se taire, le joueur assiste à la mutation d'un simple jouet en
                un témoin du vide. Une horreur minimaliste sur l'obsolescence et la décomposition du code.</p>
        </div>
    </div>
    <div class="calendrier">
        <div class="horaire">
            <button class="date active">
                <p>Sam 32 Mars</p>
            </button>
            <button class="date">
                <p>Dim -4 Mars</p>
            </button>
        </div>

        <div class="conteneur-infos">
            <div class="infos-card">
                <div class="cinema">
                    <p>Maison</p>
                </div>
                <div class="infos-date">
                    <span class="langue">
                        <p>VO</p>
                    </span>
                    <span class="duree">
                        <p>03:60</p>
                    </span>
                </div>
            </div>
            <div class="infos-card">
                <div class="cinema">
                    <p>UGC Monluc</p>
                </div>
                <div class="infos-date">
                    <span class="langue">
                        <p>VO</p>
                    </span>
                    <span class="duree">
                        <p>00:38</p>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>Fait avec amour par Abdu</p>
    </footer>
</body>

</html>