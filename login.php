<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php include 'menu.php'; ?>

    <main>
        <div>
            <div>
                <h1>Connexion</h1>
                <p>Accédez à votre espace personnel</p>

                <?php
                // affiche le message d'erreur si transmis par verif_login.php
                if (isset($_GET['erreur']) && $_GET['erreur'] === '1') {
                    echo '<p class="erreur">Identifiant ou mot de passe incorrect</p>';
                }
                ?>

                <form action="verif_login.php" method="post">
                    <div>
                        <label for="identifiant">Identifiant</label>
                        <input type="text" id="identifiant" name="identifiant" required>
                    </div>

                    <div>
                        <label for="mot_de_passe">Mot de passe</label>
                        <input type="mot_de_passe" id="mot_de_passe" name="mot_de_passe" required>
                    </div>

                    <button type="verifier">Vérifier</button>
                </form>
            </div>
        </div>
    </main>
</body>

</html>