"use strict";

/**
 * Classe Consommateurs - représente les consommateurs du marché
 */
class Consommateurs extends Sujet
{
	/**
	 * Constructeur
	 * @param controleur {Controleur} Observateur à notifier en cas de changement
	 */
	constructor(controleur)
	{
		super();
		this.ajouterObservateur(controleur);

		//Initialisation des taux de demandes des consommateurs en fonction du produit
		this._demandes = {
			'Vélo': 50,
			'Scooter': 40,
			'Voiture': 30
		};
	}

	/**
	 * Le consommateur est mis au courant d'une actualité qui a un impacte sur sa façon de consommer
	 * @param actualite {Actualite} Actualité dont le consommateur prend connaissance
	 */
	apprendreActualite(actualite)
	{
		this.impacterDemande('Vélo', actualite.getImpactVelo());
		this.impacterDemande('Scooter', actualite.getImpactScooter());
		this.impacterDemande('Voiture', actualite.getImpactVoiture());

		this.notifier();
	}

	/**
	 * Evolution de la demande du consommateur en fonction de l'impact de l'actualité 
	 * @param typeProduit {string} Type de produit impacté
	 * @param impact {integer} Evolution de la demande du consommateur
	 */
	impacterDemande(typeProduit, impact)
	{
		this._demandes[typeProduit] += impact;

		if (this._demandes[typeProduit] > 100)
			this._demandes[typeProduit] = 100;
		else if (this._demandes[typeProduit] < 0)
			this._demandes[typeProduit] = 0;
	}

	/**
	 * Retourne la demande des consommateurs en matière de vélo
	 */
	getDemandeVelo()
	{
		return this._demandes['Vélo'];
	}

	/**
	 * Retourne la demande des consommateurs en matière de scooter
	 */
	getDemandeScooter()
	{
		return this._demandes['Scooter'];
	}

	/**
	 * Retourne la demande des consommateurs en matière de voiture
	 */
	getDemandeVoiture()
	{
		return this._demandes['Voiture'];
	}

	/**
	 * Achat des consommateurs en fonction de leurs demandes
	 * @param entreprise {Entreprise} Entreprise à laquelle les consommateurs achètent leurs biens
	 */
	acheter(entreprise)
	{
		for (var typeProduit in this._demandes)
		{
			entreprise.vendre(typeProduit, Math.ceil(this._demandes[typeProduit] / 100 * 10));
		}		
	}
}