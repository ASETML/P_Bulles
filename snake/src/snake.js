import { snakeColor, snakeHeadColor, snakeStrokeColor } from "./config.js";

/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export function initSnake(box, canvas) {
  return [{x: canvas.width / 2, y: canvas.height / 2}];
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
export function moveSnake(snake, direction, box, shouldGrow) {
  let head = {x: snake.at(0).x, y: snake.at(0).y} // La tête du serpent est toujours le premier élément du tableau

  // Calcule la nouvelle position de la tête
  switch (direction) {
    case "LEFT":
      head.x -= box;
      break;
    case "UP":
      head.y -= box;
      break;
    case "RIGHT":
      head.x += box;
      break;
    case "DOWN":
      head.y += box;
      break;
  }

  //Ajoute la nouvelle tete au début du serpent
  snake.unshift(head);
  //Supprime le dernier élement du serpent si le serpent doit grandir
  if (!shouldGrow) {
    snake.pop();
  }
}

/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
export function drawSnake(ctx, snake, box) {
  let isHead = true;
  ctx.strokeStyle = snakeStrokeColor; //Contour du serpent
  //On affiche chaque segment du serpent
  for (let segment of snake) {
    //La tête est affichée dans une couleur différente
    if (isHead) {
      ctx.fillStyle = snakeHeadColor;
      isHead = false;
    }
    else {
      ctx.fillStyle = snakeColor;
    }

    //Contour du serpent
    ctx.fillRect(segment.x, segment.y, box, box);
    ctx.strokeRect(segment.x, segment.y, box, box);
  }
}

/**
 * Fonction qui indique si le serpent est sur une nouriture
 * @param {*} snake - Le serpent
 * @param {*} food - La nouriture
 * @returns 
 */
export function isFoodEaten(snake, food) {
  //Vérifie si la nouriture doit être mangée
  if (snake.at(0).x === food.x && snake.at(0).y === food.y) {
    return true
  }
  else {
    return false;
  }
}