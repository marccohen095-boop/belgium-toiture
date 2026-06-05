# Belgium Toiture sur iPhone

## Option 1 - Installation simple sur l'ecran d'accueil

Utilise le paquet :
`belgium-toiture-webapp.zip`

Etapes :
1. Dezipper `belgium-toiture-webapp.zip`.
2. Mettre le dossier `belgium-toiture-webapp` sur un hebergement web ou GitHub Pages.
3. Ouvrir l'adresse du site dans Safari sur l'iPhone.
4. Appuyer sur Partager.
5. Choisir `Ajouter a l'ecran d'accueil`.
6. Garder le nom `Belgium Toiture`.

Resultat : icone verte B, lancement depuis l'ecran d'accueil, affichage plein ecran.

## Hebergement gratuit avec GitHub Pages

1. Creer un depot public GitHub.
2. Envoyer le contenu du dossier `belgium-toiture-webapp` dans le depot.
3. Dans GitHub : `Settings` > `Pages`.
4. Source : branche `main`, dossier `/root`.
5. Ouvrir le lien donne par GitHub.

## Option 2 - Vraie app iOS native

Utilise le paquet :
`belgium-toiture-ios-project.zip`

Etapes :
1. Installer Xcode complet depuis l'App Store.
2. Dezipper `belgium-toiture-ios-project.zip`.
3. Ouvrir `ios/App/App.xcworkspace`.
4. Brancher l'iPhone au Mac.
5. Dans Xcode, choisir l'iPhone comme appareil.
6. Dans `Signing & Capabilities`, choisir ton Apple ID.
7. Cliquer sur `Run`.

Important : je ne peux pas generer une IPA signee directement sur ce Mac, car il n'a que les Command Line Tools actifs (`/Library/Developer/CommandLineTools`) et iOS exige une signature Apple.
