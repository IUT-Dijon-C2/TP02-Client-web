"use strict";
/**
 * Classe Actualités - Gère les actualités du moment
 */
class Actualites extends Collection
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		super(Actualite);

		this.initialiser();
	}

	/**
	 * Retourne une actualité au hasard parmis celles disponibles dans la collection
	 */
	getActualite()
	{
		var iActualite = Math.floor(Math.random() * this.length());

		return this.get(iActualite);
	}

	/**
	 * Intègre un certain nombre d'actualités dans la collection
	 */
	initialiser()
	{
		this.add(new Actualite('Scandale pollution - Les constructeurs automobiles ne respectent pas les normes anti-pollution !', 10, -20, -50));
		this.add(new Actualite('Bordeaux - Ils tendent une corde en travers d\'une piste cyclable.', -30, -5, 10));
		this.add(new Actualite('Prime à la casse - C\'est le moment de changer de voiture !', -10, -20, 50));
		this.add(new Actualite('Indemnité kilométrique : pédaler pour aller travailler !', 50, 0, -5));
		this.add(new Actualite('Vélo - Toujours pas de décret pour l\'indemnité kilométrique...', -20, 10, 20));
		this.add(new Actualite('Collision entre une voiture et un scooter !', -10, -30, 30));
		this.add(new Actualite('Un homme a roulé à 173 km/h avec un scooter pour handicapés !', 0, 20, 0));
		this.add(new Actualite('Star Wars illuminera le salon international de l’auto de Québec', 0, 0, 25));
		this.add(new Actualite('Florent Icard : « Sans vélo, je serais malheureux »', 20, 5, 0));
		this.add(new Actualite('Pau : une pétition pour sauver le vélo en libre service', 20, 5, -15));
		this.add(new Actualite('Cyclo-cross: un "moteur caché" dans un vélo aux Mondiaux, premier cas jamais observé', -40, 30, 0));
		this.add(new Actualite('Le Prix Nobel de la Paix attribué... au vélo ?', 15, -5, -10));
		this.add(new Actualite('Une voiture tombe sur la voie du RER B à Gentilly', 30, 20, -15));
		this.add(new Actualite('Des rappels par millions dans le monde : recherche une voiture fiable désespérément', 50, 50, -50));
		this.add(new Actualite('La voiture de "Retour vers le futur" sera produite à 300 exemplaires', 0, 0, 30));
		this.add(new Actualite('32 millions d’Euros ! Une Ferrari de 1957 devient la voiture la plus chère du monde', 10, 10, 40));
		this.add(new Actualite('Chine : une vraie 2e chance pour la voiture électrique', 20, 20, 40));
		this.add(new Actualite('Yamaha rappelle son scooter X-Max 400 pour un problème de frein', 10, -30, 15));
		this.add(new Actualite('Pour voler un scooter il en vandalise cinq !', 15, -20, 10));
		this.add(new Actualite('Le scooter électrique en libre-service débarque à Paris', 15, 30, -15));
	}
}