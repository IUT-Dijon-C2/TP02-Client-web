/**
 * Démarrage de l'application
 */
var controleur = null;
function main()
{
	controleur = new Controleur();
	controleur.initialiser();
}
window.onload = main;