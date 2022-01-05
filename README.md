<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="https://cdn.discordapp.com/attachments/758780924833169418/900105439071576184/logo.png" alt="Logo" width="200" height="200">
  </a>

  <h1 align="center"><b>SBDJS Project</b></h1>

  <p align="center">
    <br />
    <a href="https://github.com/sbdjs/website"><strong>Découvrir »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sbdjs/website">Accueil</a>
    ·
    <a href="https://github.com/sbdjs/website/issues">Signaler un Bug</a>
    ·
    <a href="https://github.com/sbdjs/website/issues">Suggestion</a>
  </p>
</p>

<!-- GETTING STARTED -->
## Getting Started

Ce projet est à un but éducatif et donc potentiellement instable merci de ne pas tenter de le déployer en public.

### Prérequis

Ceci est une liste des étapes à suivre pour l'installation et le bon fonctionnement du site.

* Créer un dossier (le choix de l'emplacement vous reviens)
  ```sh
  mkdir sdbjs
  ```
 
### Installation

1. Ouvrir le dossier créé
   ```sh
   cd ./sdbjs
   ```

2. Cloner le repos
   ```sh
   git clone https://github.com/sbdjs/website.git
   ```
3. Installer les extensions de chaques instances
   ```sh
   cd ./client
   npm install

   &&

   cd ./server
   npm install
   ```
En cas d'erreur d'installation pensez à supprimer les dossiers node_modules et à recommencer depuis l'étape 1
4. Créer un fichier .ENV
   ```sh
   cd ./server
   touch .env
   ```
   ```json
   PORT='port'
   DB_HOST='adresse ip
   DB_DATABASE='nom de la bdd'
   DB_USERNAME='utilisateur'
   DB_PASSWORD='mot de passe'
   ```

<!-- USAGE EXAMPLES -->
## Usage

Ce site va pouvoir permettre aux personnes qui le souhaitent d'y stocker et publier leur bot Discord.
Ils peuvent renseigner le nom, une image ainsi que le lien de leur bot.

1. Lancer le serveur (front-end)
   ```sh
   cd ./client
   npm start
   ```
2. Lancer le serveur (back-end)
   ```sh
   cd ./server
   npm run dev
   ```
