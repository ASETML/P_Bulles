import { foodColor } from "./config.js";

/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */
export function generateFood(box, canvas, snake) {
  let positionNotOK = true;
  let foodPos;

  //Tant que la position n'est pas bonne, on en génère une autre
  while (positionNotOK) {
    foodPos = {x: generateCoordinate(box, canvas), y: generateCoordinate(box, canvas)}; //On génère une nouvelle position
    positionNotOK = false; //Par défaut, la position est OK
    //Pour chaque segment du snake
    for (let segment of snake) {
      //Si la nouriture se génère sur le serpent
      if (foodPos.x === segment.x && foodPos.y === segment.y) {
        positionNotOK = true; //La position n'est pas bonne
      }
    }
  }
  return foodPos; //On retourne la nouriture
}

/**
 * Cette fonction génère une coordinée alignée sur la grille
 * @param {*} box - La taille d'une case
 * @param {*} canvas - Le caneva
 * @returns 
 */
function generateCoordinate(box, canvas) {
  let pos;
  // On génère un nombre aléatoire
  let random = Math.floor(Math.random() * (canvas.width / box)); //Genere un nombre rond https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // On le multiplie par la taille d'une case: il sera forcément sur la grille
  pos = random * box;
  return pos;
}

/**
 * Dessine la nourriture sur le canvas à la position spécifiée.
 *
 * Cette fonction utilise le contexte de rendu 2D pour dessiner un rectangle représentant
 * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
 * est déterminée par la taille d'une case (box) sur la grille.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {{x: number, y: number}} food - Un objet contenant les coordonnées `x` et `y` où la nourriture doit être dessinée.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
 */
export function drawFood(ctx, food, box) {
  ctx.fillStyle = foodColor;
  ctx.fillRect(food.x, food.y, box, box);
}
