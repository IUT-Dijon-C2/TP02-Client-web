"use strict";

/**
 * Classe Entreprise
 */
class Entreprise extends Sujet
{
	/**
	 * Constructeur
	 * @param controleur {Controler} Controleur qui devra être notifié des changements subis par l'entreprise
	 */
	constructor(controleur)
	{
		super();
		this.ajouterObservateur(controleur);

		this._stock = new Stock(100);
		this._matieresPremieres = new Ressource('Matieres Premieres', 0);
		this._ressourcesHumaines = new Ressource('Ressources humaines', 0);
		this._tresorerie = new Ressource('Trésorerie', 300000);

		this._productionEnCours = new Produits();
	}

	/**
	 * Retourne l'espace de stockage total de l'entreprise
	 */
	getEspaceStockageTotal()
	{
		return this._stock.getEspaceTotal();
	}

	/**
	 * Retourne l'espace de stockage occupé de l'entreprise
	 */
	getEspaceStockageOccupe()
	{
		return this._stock.getEspaceOccupe();
	}

	/**
	 * Retourne la quantité de matières premières disponibles
	 */
	getMatieresPremieres()
	{
		return this._matieresPremieres.getQuantite();
	}

	/**
	 * Retourne le nombre d'employés occupés
	 */
	getRessourcesHumainesOccupees()
	{
		return this._productionEnCours.getCoutRessourcesHumaines();
	}

	/**
	 * Retourne le nombre d'employés total
	 */
	getRessourcesHumainesTotal()
	{
		return this._ressourcesHumaines.getQuantite() + this.getRessourcesHumainesOccupees();
	}

	/**
	 * Retourne la trésorerie disponible
	 */
	getTresorerie()
	{
		return this._tresorerie.getQuantite();
	}

	/**
	 * Retourne la quantité de produit en production pour un type donné
	 */
	getQuantiteProduction(typeProduit)
	{
		return this._productionEnCours.getQuantiteTypeProduit(typeProduit)
	}

	/**
	 * Retourne la quantité de produit stocké pour un type donné
	 */
	getQuantiteStock(typeProduit)
	{
		return this._stock.getQuantiteTypeProduit(typeProduit)
	}

	/**
	 * Effectue une commande de matières premières
	 */
	commanderMatieresPremieres()
	{
		//if (this._tresorerie._quantite >= 40000) {
			this._tresorerie._quantite -= 40000;
			this._matieresPremieres._quantite += 100;
		//}
	}

	/**
	 * Recrute un nouveau salarié
	 */
	recruter()
	{
		this._ressourcesHumaines._quantite += 1;
	}

	/**
	 * Licencie un salarié
	 */
	licencier()
	{
		if (this._ressourcesHumaines._quantite > 0) {
			this._tresorerie._quantite -= 10000;
			this._ressourcesHumaines._quantite -= 1;
		}
		else {
			this.notifier({erreur: "Aucun employé a licencier"});
		}
	}

	/**
	 * Vend une certaine quantité de produit
	 * @param typeProduit {string} Type de produit à vendre
	 * @param quantité {integer] Quantité de produit à vendre
	 */
	vendre(typeProduit, quantite)
	{
		//A faire
	}

	/**
	 * Paie les salaires des salariés
	 */
	payerSalaires()
	{
		//A faire
	}

	/**
	 * Donne l'ordre de produire un vélo
	 */
	produireVelo()
	{
		demarrerProduction('velo');
	}

	/**
	 * Donne l'ordre de produire un scooter
	 */
	produireScooter()
	{
		//A faire
	}

	/**
	 * Donne l'ordre de produire une voiture
	 */
	produireVoiture()
	{
		//A faire
	}

	/**
	 * Donne l'ordre de produire un produit
	 * @param produit {Produit} Produit à produire
	 * @throws Lève une exception si les ressources disponibles ne sont pas suffisantes pour produire le produit demandé
	 */
	produire(produit)
	{
		try
		{
			this.testerProductionPossible(produit);
			this.demarrerProduction(produit);
		}
		catch(exception)
		{
			this.notifier({ erreur: exception });
		}
	}

	/**
	 * Démarre la production d'un produit (attribution des ressources humaines, consommation des matière première, mise en production du produit)
	 * @param produit {Produit} Produit à produire
	 */
	demarrerProduction(produit)
	{
		//A faire
	}

	/**
	 * Indique que la production du produit est terminée et place le produit fini dans le stock
	 * @param produit {Produit} Produit fini à ajouter au stock
	 */
	acheverProduction(produit)
	{
		//A faire
	}

	/**
	 * Vérifie que la production d'un produit est possible
	 * @param produit {Produit} Produit pour lequel on souhaite vérifier que la fabrication est possible
	 * @throws Lève une exception si une contrainte de fabrication n'est pas respectée
	 */
	testerProductionPossible(produit)
	{
		if(this._matieresPremieres.getQuantite() < produit.getCoutMatieresPremieres())
			throw "Pas assez de matières premières !";

		if(!this._stock.peutStocker(produit))
			throw "Pas assez de place dans le stock !";

		if (this._ressourcesHumaines.getQuantite() < produit.getCoutRessourcesHumaines())
			throw "Pas assez de main d'oeuvre disponible !";
	}
}
