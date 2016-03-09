"use strict";

/**
 * Classe Actualité - représente une actualité médiatique qui a un impact sur les consommateurs et leurs demandes
 */
class Actualite
{
	/**
	 * Constructeur
	 * @param titre {string} Titre de l'actualité
	 * @param impactVelo {integer} Impact de l'atualité sur la demande de vélos des consommateurs
	 * @param impactScooter {integer} Impact de l'atualité sur la demande de scooters des consommateurs
	 * @param impactVoiture {integer} Impact de l'atualité sur la demande de voitures des consommateurs
	 */
	constructor(titre, impactVelo, impactScooter, impactVoiture)
	{
		this._titre = titre;
		this._impactVelo = impactVelo;
		this._impactScooter = impactScooter;
		this._impactVoiture = impactVoiture;
	}

	/**
	 * Accesseurs en lecture
	 */
	getTitre() { return this._titre; }
	getImpactVelo() { return this._impactVelo; }
	getImpactScooter() { return this._impactScooter; }
	getImpactVoiture() { return this._impactVoiture; }
}