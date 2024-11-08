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