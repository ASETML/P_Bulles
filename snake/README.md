# Jeu du Serpent

## Description

Ce projet implémente un jeu classique du serpent en utilisant **JavaScript**. Le jeu est dessiné sur un canevas HTML (`<canvas>`) et utilise la syntaxe des modules ES (ECMAScript Modules, ESM) pour organiser le code en plusieurs fichiers avec des responsabilités distinctes. Le serveur de développement est géré par **Vite**, un outil moderne qui permet un rechargement rapide et une configuration minimale.

## Objectif du Jeu

Le but du jeu est simple : contrôler un serpent qui se déplace sur une grille, manger de la nourriture pour grandir, et éviter de se heurter aux murs ou à son propre corps. Le score augmente à chaque fois que le serpent mange de la nourriture.

## Fonctionnalités

- **Déplacement du serpent** : Le serpent peut être contrôlé à l'aide des touches directionnelles (haut, bas, gauche, droite).
- **Gestion des collisions** : Si le serpent touche un mur ou son propre corps, la partie est terminée.
- **Score** : Un système de score affiche le nombre de fois où le serpent a mangé de la nourriture.
- **Architecture modulaire** : Le code est organisé en modules séparés pour une meilleure maintenabilité.

## Technologies Utilisées

### Vite

Le projet utilise **Vite** comme serveur de développement. Vite est un outil moderne qui offre une expérience de développement rapide et fluide. Il permet de servir le projet avec un rechargement automatique à chaque modification du code.

### ECMAScript Modules (ESM)

Le projet est structuré en utilisant la syntaxe ESM, permettant d'importer et d'exporter des fonctions et des variables entre les différents fichiers JavaScript. Cela permet de séparer les différentes responsabilités du code et de maintenir une structure propre et modulable.

### JSDoc

Le code est documenté avec **JSDoc**, un standard de documentation pour JavaScript. JSDoc permet de générer automatiquement une documentation à partir des commentaires du code, ce qui améliore la lisibilité et la maintenabilité du projet.

## Structure du Projet

Le code source est organisé dans un répertoire `src/` pour séparer les fichiers de code des autres fichiers de configuration.

### Arborescence

```
└── node_modules/
    ├── ...
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── main.js
    ├── snake.js
    ├── food.js
    ├── controls.js
    ├── collision.js
    └── score.js
```

### Fichiers et Responsabilités

- **`main.js`** : Point d'entrée principal du jeu. Il initialise le jeu, configure les paramètres, et contrôle le cycle de rendu.
- **`snake.js`** : Contient les fonctions pour initialiser le serpent, le déplacer, et le dessiner sur le canevas.
- **`food.js`** : Gère la génération et le dessin de la nourriture sur la grille.
- **`controls.js`** : Gère les entrées utilisateur pour contrôler la direction du serpent.
- **`collision.js`** : Contient les fonctions pour vérifier les collisions du serpent avec les murs ou avec lui-même.
- **`score.js`** : Gère l'affichage du score sur le canevas.

## Installation et Exécution

### Prérequis

- **Node.js** : Assurez-vous que Node.js est installé sur votre machine.

### Installation

Récupérer le code de départ du snake puis :

```bash
cd snake
npm install
```

## Lancer le serveur de développement

Pour démarrer le serveur de développement avec Vite, exécutez :

```bash
npm run dev
```

Le projet sera servi localement à l'adresse `http://localhost:3000`.
