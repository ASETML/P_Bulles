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
  let positionOk = false;
  let position;
  while (!positionOk) {
    position = {x: generateCoordinate(box, canvas), y: generateCoordinate(box, canvas)};

    //Vérifie que la nouriture ne se génère pas sur le serpent
    for (let segment of snake) {
      if (position.x != segment.x && position.y != segment.y) {
        positionOk = true;
        console.log("Position testée OK")
      }
      else {
        positionOk = false;
        console.log("Position testée NOK")
      }
    }
    console.log(positionOk);
  }
  return position // On retourne la position de la nouriture
}

function generateCoordinate(box, canvas) {
  let pos;
  // On génère un nombre aléatoire
  let random = Math.floor(Math.random() * (canvas.width / box)); //Genere un nombre rond https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // On le multiplie par la taille d'une case: il sera forcèment sur la grille
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
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
}
