"use strict";
/**
 * Collection de produits regroupés par type
 */
class Produits
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		this._produits = {};
	}

	/**
	 * Ajoute une quantité d'un produit à la collection
	 * @param produit {Produit} Produit à ajouter
	 * @param quantite {integer} Quantité de produit à ajouter
	 */
	ajouter(produit, quantite)
	{
		//Si le type de produit est déjà connu de la collection, on modifie la quantité de produit, sinon on crée un nouveau ProduitQuantifiable
		if (this._produits[produit.getType()])
			this._produits[produit.getType()].ajouter(quantite);
		else
			this._produits[produit.getType()] = new ProduitQuantifiable(produit, quantite);
	}

	/**
	 * Retire une certaine quantité d'un type de produit donné
	 * @param typeProduit {string} Type de produit à retirer
	 * @param quantite {integer} Quantité de produit à retirer
	 * @return La quantité réellement retirer en fonction de la quantité disponible de produit.
	 */
	retirer(typeProduit, quantite)
	{
		var quantiteRetiree = 0;

		if (this._produits[typeProduit])
			quantiteRetiree = this._produits[typeProduit].retirer(quantite);

		return quantiteRetiree;
	}

	/**
	 * Retourne la quantité de produits disponible pour pour une type donné
	 * @param typeProduit {string} Type de produit pour lequel on souhaite connaître la quantité disponible
	 */
	getQuantiteTypeProduit(typeProduit)
	{
		var quantite = 0;

		if (this._produits[typeProduit])
			quantite = this._produits[typeProduit].getQuantite();

		return quantite;
	}

	/**
	 * Retourne le cout de stockage total représenté par l'ensemble des produits contenus dans la collection
	 */
	getCoutStockage()
	{
		var coutStockage = 0;

		for (var nomProduit in this._produits)
		{
			var produit = this._produits[nomProduit];

			coutStockage += produit.getQuantite() * produit.getCoutStockage();
		}

		return coutStockage;
	}

	/**
	 * Retourne le cout total en ressources humaines représenté par l'ensemble des produits contenus dans la collection
	 */
	getCoutRessourcesHumaines()
	{
		var coutRessourcesHumaines = 0;

		for (var nomProduit in this._produits)
		{
			var produit = this._produits[nomProduit];

			coutRessourcesHumaines += produit.getQuantite() * produit.getCoutRessourcesHumaines();
		}

		return coutRessourcesHumaines;
	}
}