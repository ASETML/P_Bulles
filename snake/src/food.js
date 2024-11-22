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
export function generateFood(box, canvas) {
  let isSmallerThanCanva = false; // Si la position est dans le canevas
  let foodPosX; // La position de la nouriture sur l'axe X
  let foodPosY; // La position de la nouriture sur l'axe Y

  while (!isSmallerThanCanva) {
    // On génère un nombre aléatoire
    let random = Math.floor(Math.random() * (canvas.width / box - 0 + 1)) + 0;
    // On le multiplie par la taille d'une case: il sera forcèment sur la grille
    random *= box;

    // Si il est plus grand que le canevas, on en génère un autre
    // Sinon le nombre obtenu est la position sur l'axe X de notre nouriture
    if (random < canvas.width) {
      foodPosX = random;
      isSmallerThanCanva = true;
    }
  }
  
  
  // On répète l'opération pour l'axe Y
  isSmallerThanCanva = false;
  while (!isSmallerThanCanva) {
    // On génère un nombre aléatoire
    let random = Math.floor(Math.random() * (canvas.width / box - 0 + 1)) + 0; //Genere un nombre rond https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // On le multiplie par la taille d'une case: il sera forcèment sur la grille
    random *= box;
    // Si il est plus grand que le canevas, on en génère un autre
    if (random < canvas.height && random % box == 0) {
      foodPosY = random;
      isSmallerThanCanva = true;
    }
  }

  return {x: foodPosX, y: foodPosY}; // On retourne la position de la nouriture
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
