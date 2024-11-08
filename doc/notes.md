# P_Bulles
## 08.11.2024
### Kickoff
- Pas de rapport / gestion de projet. Quand même des livrables
- ~~Pause toilette~~ Je revient dans X minutes
- Projet pour apprendre, donc **PAS D'IA**
- Fichier notes.md dans /doc pour pouvoir reprendre facilement
- Focus sur les bonnes pratiques donc : 
    - Nomages correct des commits :
        - nom ```type(scope): name```
        - description ```[temps][WIP/DONE] commentaires```
    - Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- donner accès au repo à XCL
- Explication de groupe planifié un peu à l'avance

### CdC
- Créer un snake en js
- Déplacement avec les flèches
- Pause avec espace
- On ne peut pas utiliser la flèche à l'opposé de la direction de déplacement
- Collisions avec les murs et son corps
- Configuration dans config.json. Chargement asynchrone
- Gestion des scores
    - Utiliser l'API jsonbin.io
    - Favoriser le joueur qui à terminer le jeu le plus vite
- Utilisation de :
    - ```Node.js``` et ```npm```
    - ```Vite``` comme serveur de développement
    - ```JSDoc``` pour la documentation
    - API ```jsonbin.io``` pour les scores
- Structure : 
    - ```main.js``` Point d'entrée principal, configure les paramètres, cycle de rendu
    - ```snake.js``` Déplacement et rendu du serpent
    - ```food.js``` Génération et rendu de la nouriture
    - ```controls.js``` Gère les touches
    - ```collision.js``` Détecte les collision
    - ```score.js``` Gestion et affichage des scores

### Staged and Stashed files
- ```Staged``` les fichiers préparés pour le commit
- ```Stashed``` littéralement "planqués" : les changements mis de coté temporairement

### Installation des outils
- Node.js v22.11.0
- ```npm install``` à la racine du snake pour installer les dépendances
- ```npm run dev``` pour lancer le serveur

### ECMAScript Modules (ESM)
- [Mdn Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Delicious Insights](https://delicious-insights.com/fr/articles-et-tutos/js-es-modules/)
- Un fichier, un module
- Les fonctions, variables, classes, etc de chaque modules sont privés, on les exposent avec des export et import
- Export et Import
    - Export
        - Elements individuels à la racine du fichier : ```export const name = "square";```
        ```
        export function draw(ctx, length, x, y, color) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, length, length);
                return { length, x, y, color };
            }
        ```
        - Export global à la fin d'un fichier ```export { name, draw, reportArea, reportPerimeter };```
    - Import
        - Au tout début du script ```import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";```
        - Possibilité de les renommer ```import { name as squareName, draw } from "./shapes/square.js";```
### Structure repo
- Un dossier doc : la documentation
- Un dossier snake : le code

### Canvas
- [Mdn Web Docs](https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial/)
- Grille : [0;0] en haut à gauche
- Contexte
    - ```
        function draw() {
            const canvas = document.getElementById("canvas");
            if (canvas.getContext) {
            const ctx = canvas.getContext("2d");
            }
        }
        ```
- Trajets et rectangles
    - Rectangles
        - ```
            function draw() {
                const canvas = document.getElementById("canvas");
                if (canvas.getContext) {
                    const ctx = canvas.getContext("2d");

                    ctx.fillRect(25, 25, 100, 100); //Rempli un rectangle
                    ctx.clearRect(45, 45, 60, 60); //Efface un rectangle
                    ctx.strokeRect(50, 50, 50, 50); //Dessine le contour d'un rectangle
                }
            }
            ```
    - Trajets
        - Suite de points
        - Fermé ou pas
        - Exemple : dessin d'un triangle
        - ```
            function draw() {
                const canvas = document.getElementById("canvas");
                if (canvas.getContext) {
                    const ctx = canvas.getContext("2d");

                    ctx.beginPath(); //On crée un nouveau trajet
                    ctx.moveTo(75, 50); //On se déplace
                    ctx.lineTo(100, 75); //On trace une ligne
                    ctx.lineTo(100, 25); //On trace une ligne
                    ctx.fill(); //On rempli l'espace entre les lignes
                }
            }
            ```
        - moveTo() : Déplace le stylo, sans tracer de lignes
        - Arcs
            - ```arc(x, y, rayon, angleInitial, angleFinal, antihoraire)```
                Dessine un arc de cercle qui est centré à la position (x, y), de rayon r, commençant à angleInitial et finissant à angleFinal en allant dans le sens indiqué par antihoraire (par défaut, horaire).

            - ```arcTo(x1, y1, x2, y2, rayon)```
                Dessine un arc avec les points de contrôle et l'angle donnés, relié au point précédent par une ligne droite.
## 15.11.2024
### Planif
- Affichage du snake
- Apparition de la nouriture