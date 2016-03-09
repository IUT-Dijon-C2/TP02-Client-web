"use strict";
/**
 * Gestion de la vue principale de l'application
 */
class Vue
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		document.addEventListener("click", function (event) {
			controleur.gererClick(event);
		});
		controleur.ajouterEvenementClick('btn-commander-matieres-premieres', function () {
			controleur.commanderMatieresPremieres();
		});
		controleur.ajouterEvenementClick('btn-recruter', function () {
			controleur.recruter();
		});
		controleur.ajouterEvenementClick('btn-licencier', function () {
			controleur.licencier();
		});
	}

	/**
	 * Actualise l'affichage de la page
	 * @param entreprise {Entreprise} Informations sur l'entreprise
	 * @param consommateurs {Consommateurs} Informations sur les consommateurs
	 */
	actualiser(entreprise, consommateurs)
	{
		//Actualisation des ressources
		this.actualiserRessources(entreprise);

		//Actualisation de la production
		this.actualiserProduction(entreprise);

		//Actualisation du stock
		this.actualiserStock(entreprise);

		//Actualisation du stock
		this.actualiserDemandes(consommateurs);
	}

	/**
	 * Actualise le niveau des ressources
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées les ressources
	 */
	actualiserRessources(entreprise)
	{
		var element = document.getElementById('stock').childNodes[1];
		element.innerHTML = entreprise.getEspaceStockageOccupe() + ' / ' + entreprise.getEspaceStockageTotal();
		var element = document.getElementById('matieres-premieres').childNodes[1];
		element.innerHTML = entreprise.getMatieresPremieres();
		var element = document.getElementById('ressources-humaines').childNodes[1];
		element.innerHTML = entreprise.getRessourcesHumainesOccupees() + ' / ' + entreprise.getRessourcesHumainesTotal();
		var element = document.getElementById('tresorerie').childNodes[1];
		element.innerHTML = entreprise.getTresorerie();
	}

	/**
	 * Actualise la production en cours
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées informations de production
	 */
	actualiserProduction(entreprise)
	{
		var element = document.getElementById('info-production-velo');
		element.innerHTML = entreprise.getQuantiteProduction('velo');
		var element = document.getElementById('info-production-scooter');
		element.innerHTML = entreprise.getQuantiteProduction('scooter');
		var element = document.getElementById('info-production-voiture');
		element.innerHTML = entreprise.getQuantiteProduction('voiture');
	}

	/**
	 * Actualise le stock
	 * @param entreprise {Entreprise} Entreprise pour laquelle est affiché l'état du stock
	 */
	actualiserStock(entreprise)
	{
		var element = document.getElementById('info-stock-velo');
		element.innerHTML = entreprise.getQuantiteStock('velo');
		var element = document.getElementById('info-stock-scooter');
		element.innerHTML = entreprise.getQuantiteStock('scooter');
		var element = document.getElementById('info-stock-voiture');
		element.innerHTML = entreprise.getQuantiteStock('voiture');
	}

	/**
	 * Actualise la demande des consommateurs
	 * @param consommateurs {Consommateurs} Consommateurs pour lesquels sont affichées les demandes en produits
	 */
	actualiserDemandes(consommateurs)
	{
		var element = document.getElementById('info-demandes-velo');
		element.innerHTML = consommateurs.getDemandeVelo();
		var element = document.getElementById('info-demandes-scooter');
		element.innerHTML = consommateurs.getDemandeScooter();
		var element = document.getElementById('info-demandes-voiture');
		element.innerHTML = consommateurs.getDemandeVoiture();
	}

	//#region Gestion des alertes
	/**
	 * Affiche une erreur
	 * @param erreur {string} Erreur à afficher
	 */
	afficherErreur(erreur)
	{
		this.afficherAlerte(erreur, 'erreur');
	}

	/**
	 * Affiche une actualité
	 * @param actualite {string} Titre de l'actualité à afficher
	 */
	afficherActualite(actualite)
	{
		this.afficherAlerte(actualite, 'actualite');
	}

	/**
	 * Affiche l'écran de fin de partie
	 */
	afficherFinPartie()
	{
		document.getElementById('ecran-fin-partie').classList.add('visible');
	}

	/**
	 * Affiche une alerte
	 * @param titre {string} Texte de l'alerte
	 * @param type {string} Type d'alerte (erreur ou actualite)
	 */
	afficherAlerte(titre, type)
	{
		var alerte = document.createElement('p');
		alerte.classList.add(type);

		alerte.innerHTML = titre;

		var alertes = document.getElementById('alertes');
		alertes.appendChild(alerte);

		//Efface l'alerte après 5 secondes
		setTimeout(function () { controleur.retirerAlerte(); }, 5000);
	}

	/**
	 * Efface la première alerte de la page
	 */
	retirerAlerte()
	{
		var alerte = document.querySelector('#alertes p');
		alerte.parentNode.removeChild(alerte);
	}

	//#endregion
}
