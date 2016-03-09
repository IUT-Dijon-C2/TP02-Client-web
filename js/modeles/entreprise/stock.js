"use strict";

/**
 * Classe Stock - représente le stock de produits de l'entreprise
 */
class Stock
{
	/**
	 * Constructeur
	 * @param espaceTotal {integer} Espace total de stockage (en unité de volume)
	 */
	constructor(espaceTotal)
	{
		this._produitsStockes = new Produits();

		this._espaceDeStockage = espaceTotal;
	}

	/**
	 * @return L'espace total de stockage du stock
	 */
	getEspaceTotal()
	{
		return this._espaceDeStockage;
	}

	/**
	 * @return Le volume d'espace libre du stock
	 */
	getEspaceLibre()
	{
		var espaceLibre = this._espaceDeStockage - this._produitsStockes.getCoutStockage();

		return espaceLibre;
	}

	/**
	 * @return Le volume d'espace occupé du stock
	 */
	getEspaceOccupe()
	{
		return this.getEspaceTotal() - this.getEspaceLibre();
	}

	/**
	 * Indique si un produit peut être stocké dans le stock
	 * @param produit {Produit} Produit à stocker
	 * @return true si l'espace disponible est suffisant pour accueillir le produit, false sinon
	 */
	peutStocker(produit)
	{
		return this.getEspaceOccupe() + produit.getCoutStockage() <= this.getEspaceTotal();
	}

	/**
	 * Retourne la quantité de produit stocké pour un type donné
	 * @param typeProduit {string} Type de produit pour lequel on souhaite connaître l'état du stock
	 * @return La quantité stockée du produit donné
	 */
	getQuantiteTypeProduit(typeProduit)
	{
		return this._produitsStockes.getQuantiteTypeProduit(typeProduit);
	}

	/**
	 * Stock le produit donné
	 * @param produit {Produit} Produit à stocker
	 * @throws Lève une exception s'il n'y a pas assez de place dans le stock
	 */
	stocker(produit)
	{
		if (!this.peutStocker(produit))
			throw "Pas assez de place dans le stock ! Produit détruit !";

		this._produitsStockes.ajouter(produit, 1);
	}

	/**
	 * Destock une certaine quantité de produit
	 * @param typeProduit {string} Type de produit à destocker
	 * @param quantite {integer} Quantité de produit à destocker
	 * @return La quantité réellement destockée en fonction de la quantité de produits disponible
	 */
	destocker(typeProduit, quantite)
	{
		return this._produitsStockes.retirer(typeProduit, quantite);
	}
}