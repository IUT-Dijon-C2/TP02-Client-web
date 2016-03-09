"use strict";

/**
 * Constroleur de l'application
 */
class Controleur extends Observateur
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		super();

		//Evénément click à gérer
		this._evenementsClick = {};

		//Vue principale de l'application
		this._vue = null;

		//Modèles de données
		this._entreprise = new Entreprise(this);
		this._consommateurs = new Consommateurs(this);
		this._actualites = new Actualites();

		//Timer en cours de fonctionnement
		this._timerSalaires = null;
		this._timerActualites = null;
		this._timerAchats = null;
	}

	/**
	 * Inistialisation du controleur
	 */
	initialiser()
	{
		this._vue = new Vue();
		this.notifier();
	}

	//#region Gestion des événements
	/**
	 * Associe un élément de la page avec une fonction à appeler si l'utilisateur clique sur le dit élément
	 */
	ajouterEvenementClick(bouton, fonction)
	{
		this._evenementsClick[bouton] = fonction;
	}

	/**
	 * Gestionnaire des événéments click
	 */
	gererClick(evenement)
	{
		var targetId = evenement.target.id;

		if(this._evenementsClick[targetId])
		{
			this._evenementsClick[targetId](evenement);
		}
	}
	//#endregion

	/**
	 * Fonction de notification du controleur appelée lorsqu'un de ses sujets subit une modification
	 */
	notifier(data)
	{
		if (data)
		{
			//Si une donnée est transmise et qu'il s'agit d'une erreur, on l'affiche
			if (data.erreur)
				this._vue.afficherErreur(data.erreur);
		}

		//Actualisation de la vue
		this._vue.actualiser(this._entreprise, this._consommateurs);
	}

	/**
	 * Retire l'alerte la plus ancienne de la vue
	 */
	retirerAlerte()
	{
		this._vue.retirerAlerte();
	}

	commanderMatieresPremieres() {
		this._entreprise.commanderMatieresPremieres();
		this.notifier();
	}

	recruter() {
		this._entreprise.recruter();
		this.notifier();
	}

	licencier() {
		this._entreprise.licencier();
		this.notifier();
	}
}
