"use strict";

/**
 * Classe Ressource
 */
class Ressource
{
	/**
	 * Constructeur
	 * @param nom {string} Nom de la ressource
	 * @param quantite {integer} Quantité initiale de ressource disponible
	 */
	constructor(nom, quantite)
	{
		this._nom = nom;
		this._quantite = quantite;
	}

	/**
	 * Accesseurs en lecture
	 */
	getNom() { return this._nom; }
	getQuantite() { return this._quantite; }

	/**
	 * Ajoute une certaine quantité de ressource
	 * @param {integer} Quantité de ressource à ajouter
	 */
	ajouter(quantite)
	{
		this._quantite += quantite;
	}

	/**
	 * Retire une certaine quantité de ressource
	 * @param {integer} Quantité de ressource à retirer
	 * @throws Lève une exception si la quantité de ressource à retirer est supérieure à la quantité disponible.
	 */
	retirer(quantite)
	{
		if (this._quantite < quantite)
			throw "Ressource::retirer - Pas assez de " + this.getNom() + " disponible.";

		this._quantite -= quantite;
	}
}