<?php
// vérification que les variables POST existent
if (isset($_POST['identifiant'], $_POST['mot_de_passe'])) {

    // sécurisation des variables
    $identifiant = htmlspecialchars($_POST['identifiant']);
    $mot_de_passe = htmlspecialchars($_POST['mot_de_passe']);

    // vérification des identifiants
    if ($identifiant === '&lt;strong&gt;Dupont&lt;/strong&gt;' && $mot_de_passe === 'alibaba') {
        // si identifiants corrects alors affiche la page de bienvenue
        ?>
        <!DOCTYPE html>
        <html lang="fr">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenue</title>
            <link rel="stylesheet" href="style.css">
        </head>

        <body>

            <?php include 'menu.php'; ?>

            <main>
                <div>
                    <div>
                        <p>Connexion réussie</p>
                        <h2>Bonjour, <span><?= $identifiant ?></span> !</h2>

                        <p>Vous êtes bien connecté à votre espace personnel Cinélyon</p>
                        <a href="index.php">Aller à l'accueil</a>
                    </div>
                </div>
            </main>

        </body>

        </html>
        <?php

    } else {
        // identifiants incorrects redirection vers login.php avec message d'erreur
        header('Location: login.php?erreur=1');
        exit();
    }

} else {
    // accès direct à verif_login.php sans passer par le formulaire
    header('Location: login.php');
    exit();
}
?>