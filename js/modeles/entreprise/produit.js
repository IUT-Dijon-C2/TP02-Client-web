"use strict";
/**
 * Classe Produit
 */
class Produit
{
	/**
	 * Constructeur
	 * @param type {string} Type du produit (vélo, scooter ou voiture)
	 * @param coutStockage {integer} Volume nécessaire au stocakge du produit fini
	 * @param coutMatieresPremieres {integer} Quantité de matière premières nécessaire à la fabrication du produit
	 * @param coutRessourcesHumaines {integer} Nombre de peronnes nécessaire à la fabrication du produit
	 * @param tempsFabrication {integer} Temps nécessaire à la fabrication du produit
	 * @param prixVente {integer} Prix de vente du produit
	 */
	constructor(type, coutStockage, coutMatieresPremieres, coutRessourcesHumaines, tempsFabrication, prixVente)
	{
		this._type = type;
		this._coutStockage = coutStockage;
		this._coutMatierePremiere = coutMatieresPremieres;
		this._coutRessourcesHumaines = coutRessourcesHumaines;
		this._tempFabrication = tempsFabrication;
		this._prixVente = prixVente;
	}

	/*
	 * Accesseurs en lecture
	 */
	getType() { return this._type; }
	getCoutStockage() { return this._coutStockage; }
	getCoutMatieresPremieres() { return this._coutMatierePremiere; }
	getCoutRessourcesHumaines() { return this._coutRessourcesHumaines; }
	getTempsFabrication() { return this._tempFabrication; }
	getPrixVente() { return this._prixVente; }
}