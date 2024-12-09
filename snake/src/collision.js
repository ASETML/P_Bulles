/**
 * Vérifie si la tête du serpent entre en collision avec son propre corps.
 *
 * Cette fonction détermine si la tête du serpent occupe la même position que
 * n'importe quel autre segment de son corps. Si la tête du serpent se trouve
 * aux mêmes coordonnées `x` et `y` qu'un autre segment, la fonction retourne `true`,
 * indiquant une collision avec le corps du serpent (c'est-à-dire que le serpent se mord la queue).
 *
 * @param {Array<{x: number, y: number}>} snake- Un tableau d'objets représentant les segments du serpent, où chaque objet contient des coordonnées `x` et `y`.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un segment de son corps, sinon `false`.
 */
export function checkCollision(snake) {
  //On supprimme la tête
  let head = snake.shift();

  //On parcours le serpent
  for(let segment of snake) {
    if (head.x === segment.x && head.y === segment.y) {
      snake.unshift(head); //Les objets sont passés par référence
      return true;
    }
  }
  snake.unshift(head); //Les objets sont passés par référence
  return false;
}

/**
 * Vérifie si la tête du serpent entre en collision avec les murs du canvas.
 *
 * Cette fonction détermine si la tête du serpent a dépassé les limites du canvas,
 * ce qui signifierait une collision avec un mur. Si la tête du serpent sort du canvas
 * (c'est-à-dire si ses coordonnées `x` ou `y` sont en dehors des limites définies par
 * la largeur et la hauteur du canvas), la fonction retourne `true`, indiquant une collision.
 *
 * @param {{x: number, y: number}} head - Un objet représentant les coordonnées `x` et `y` de la tête du serpent.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {boolean} - Retourne `true` si la tête du serpent entre en collision avec un mur, sinon `false`.
 */
export function checkWallCollision(head, canvas) {
  //Collisions horizontales
  if (head.x >= canvas.width || head.x < 0) {
    return true;
  }

  //Collisions verticales
  if (head.y >= canvas.height || head.y < 0) {
    return true;
  }
}
