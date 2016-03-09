"use strict";
/**
 * Extension du produit afin d'en gérer la quantité
 */
class ProduitQuantifiable extends Produit
{
	/**
	 * Constructeur
	 * @param produit {Produit} Produit pour lequel on souhaite gérer la quantité
	 * @param quantite {integer} Quantité initiale du produit
	 */
	constructor(produit, quantite)
	{
		super(produit.getType(), produit.getCoutStockage(), produit.getCoutMatieresPremieres(), produit.getCoutRessourcesHumaines(), produit.getTempsFabrication(), produit.getPrixVente());

		this._quantite = quantite;
	}

	/**
	 * Retourne la quantité de produit
	 */
	getQuantite()
	{
		return this._quantite;
	}

	/**
	 * Ajoute une certaine quantité de produit
	 * @param quantite {integer} Quantité de produit à ajouter.
	 */
	ajouter(quantite)
	{
		this._quantite += quantite;
	}

	/**
	 * Retire une certaine quantité de produit
	 * @param quantite {integer} Quantité de produit à retirer
	 * @return La quantité réellement retirée (en fonction de la quantité disponible)
	 */
	retirer(quantite)
	{
		var quantiteRetiree = 0;

		if (this._quantite < quantite)
			quantiteRetiree = this._quantite;
		else
			quantiteRetiree = quantite;

		this._quantite -= quantiteRetiree;

		return quantiteRetiree;
	}
}