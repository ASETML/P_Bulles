//Constante du jeu
export const box = 20; //La taille d'une case
export const gameSpeed = 200; //L'interval entre chaques ticks du jeu (La vitesse du jeu)

//Constante d'affichage
export const snakeColor = "limeGreen"; //La couleur du serpent
export const snakeHeadColor = "darkGreen"; //La couleur de la tête du serpent
export const snakeStrokeColor = "darkGreen"; //La couleur du contour du serpent
export const foodColor = "red"; //La couleur de la nouriture
export const textColor = "black"; //La couleur du texte
export const textSize = "20px"; //La taille du texte
export const biggerTextSize = "32px"; //La taille d'un texte plus grand
export const titleSize = "52px"; //La taille des titres
export const textFont = "Arial"; //La police des textes
export const topMargin = 20; //Le décalage du texte situé en haut de l'écran

//Touches
export const upKey = "ArrowUp"; //La touche qui fait monter le serpent
export const downKey = "ArrowDown"; //La touche qui fait descendre le serpent
export const leftKey = "ArrowLeft"; //La touche qui dirige le serpent vers la gauche
export const rightKey = "ArrowRight"; //La touche qui dirige le serpent vers la droite
export const pauseKey = " "; //La touche qui met le jeu en pause

//Enums
export const GameStates = {
    Play: "Play",
    Pause: "Pause",
    GameOver: "GameOver"
};