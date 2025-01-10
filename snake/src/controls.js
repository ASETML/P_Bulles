import { GameStates } from "./config.js";

/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event, currentDirection) {
  let key = event.key; //La touche pressée par l'utilisateur
  //Determine la nouvelle direction du serpent
  //Quand l'utilisateur presse une touche : 
  //Si c'est une des touches de direction :
  //Si la direction n'est pas opposée à celle actuelle :
  //On retourne la nouvelle direction
  //Sinon, on retourne la direction actuelle
  //Si l'utilisateur n'a pas pressé une touche de direction, on retourne la direction actuelle
  switch (key) {
    case "ArrowLeft":
      if (currentDirection != "RIGHT") {
        return "LEFT";
      }
      else {
        return currentDirection;
      }
    case "ArrowRight":
      if (currentDirection != "LEFT") {
        return "RIGHT";
      }
      else {
        return currentDirection;
      }
    case "ArrowDown":
      if (currentDirection != "UP") {
        return "DOWN";
      }
      else {
        return currentDirection;
      }
    case "ArrowUp":
      if (currentDirection != "DOWN") {
        return "UP";
      }
      else {
        return currentDirection;
      }
    default:
      return currentDirection;
  }
}

/**
 * Met le jeu en pause / Met fin à la pause, quand on appuie sur espace
 * @param {*} event 
 * @param {*} gameState 
 * @returns 
 */
export function handlePause(event, gameState) {
  if (event.key === " ") {
    //Si le jeu est en pause, on le relance, sinon on le met en pause
    if (gameState === GameStates.Pause) {
      return GameStates.Play;
    }
    else {
      return GameStates.Pause;
    }
  }
  else {
    return gameState;
  }
}