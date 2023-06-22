import wildDeClicker1 from "../assets/wild-dev-clicker/mobile/wildDevClicker1.png";
import wildDeClicker3 from "../assets/wild-dev-clicker/mobile/wildDevClicker3.png";
import wildDeClicker2 from "../assets/wild-dev-clicker/mobile/wildDevClicker2.png";
import wildDeClickerPC1 from "../assets/wild-dev-clicker/PC/wildDevClickerPC1.png";
import wildDeClickerPC2 from "../assets/wild-dev-clicker/PC/wildDevClickerPC2.png";
import wildDeClickerPC3 from "../assets/wild-dev-clicker/PC/wildDevClickerPC3.png";
import universe1 from "../assets/uniVerse/mobile/universe1.jpg";
import universe2 from "../assets/uniVerse/mobile/universe2.jpg";
import universe3 from "../assets/uniVerse/mobile/universe3.jpg";
import universe4 from "../assets/uniVerse/mobile/universe4.jpg";
import universe5 from "../assets/uniVerse/mobile/universe5.jpg";
import universe6 from "../assets/uniVerse/mobile/universe6.jpg";
import universePC1 from "../assets/uniVerse/PC/universePC1.png";
import universePC2 from "../assets/uniVerse/PC/universePC2.png";
import universePC3 from "../assets/uniVerse/PC/universePC3.png";
import universePC4 from "../assets/uniVerse/PC/universePC4.png";
import universePC5 from "../assets/uniVerse/PC/universePC5.png";
import universePC6 from "../assets/uniVerse/PC/universePC6.png";
import oukondor1 from "../assets/oukondor/mobile/oukondor1.png";
import oukondor2 from "../assets/oukondor/mobile/oukondor2.png";
import oukondor3 from "../assets/oukondor/mobile/oukondor3.png";
import oukondor4 from "../assets/oukondor/mobile/oukondor4.png";
import oukondorPC1 from "../assets/oukondor/PC/oukondorPC1.png";
import oukondorPC2 from "../assets/oukondor/PC/oukondorPC2.png";
import oukondorPC3 from "../assets/oukondor/PC/oukondorPC3.png";
import oukondorPC4 from "../assets/oukondor/PC/oukondorPC4.png";
import serenity1 from "../assets/serenity/mobile/serenity1.png";
import serenity2 from "../assets/serenity/mobile/serenity2.png";
import serenity3 from "../assets/serenity/mobile/serenity3.png";
import serenity4 from "../assets/serenity/mobile/serenity4.png";
import serenity5 from "../assets/serenity/mobile/serenity5.png";
import serenityPC1 from "../assets/serenity/PC/serenityPC1.png";
import serenityPC2 from "../assets/serenity/PC/serenityPC2.png";
import serenityPC3 from "../assets/serenity/PC/serenityPC3.png";
import serenityPC4 from "../assets/serenity/PC/serenityPC4.png";

const works = [
  {
    id: 1,
    siteTitle: "Wild-dev-clicker",
    stacks: ["HTML5", "CSS3", "JavaScript Vanilla"],
    descriptions: [
      "Variante du célèbre jeu cookie-clicker, où le joueur peut charger une image et cliquer dessus pour gagner de l'expérience et acquérir les stacks nécessaires à son apprentissage",
    ],
    time: "Projet Wild-dev-clicker / 2 semaines",
    imgMobile: [wildDeClicker1, wildDeClicker2, wildDeClicker3],
    imgPC: [wildDeClickerPC1, wildDeClickerPC2, wildDeClickerPC3],
    url: "https://adevonne.github.io/projet-1/",
    github: "https://github.com/robertrand12/wild-dev-clicker",
  },
  {
    id: 2,
    siteTitle: "uniVerse",
    stacks: ["React", "API rest", "NodeJS", "Tailwind"],
    descriptions: [
      "Moteur de recherche musicale et d'écoute de radios du monde entier, utilisation des APIs Spotify et RadioBrowser",
    ],
    time: "Projet uniVerse / 4 semaines",
    imgMobile: [
      universe1,
      universe2,
      universe3,
      universe4,
      universe5,
      universe6,
    ],
    imgPC: [
      universePC1,
      universePC2,
      universePC3,
      universePC4,
      universePC5,
      universePC6,
    ],
    url: "https://universe.laloupe-1.wilders.dev/",
    github: "https://github.com/robertrand12/UniVerse",
  },
  {
    id: 3,
    siteTitle: "oukondor",
    stacks: ["React", "Leaflet", "API rest", "NodeJS", "Tailwind"],
    descriptions: [
      "Moteur de recherche d'hôtels avec carte interactive et filtres de recherches selon notation de l'hôtel, utilisation de l'API amadeus",
    ],
    time: "Hackathon oukondor / 24 heures",
    imgMobile: [oukondor1, oukondor2, oukondor3, oukondor4],
    imgPC: [oukondorPC1, oukondorPC2, oukondorPC3, oukondorPC4],

    github: "https://github.com/robertrand12/oukondor",
  },
  {
    id: 4,
    siteTitle: "serenity",
    stacks: ["React", "Express", "MySql", "Leaflet", "NodeJS", "Tailwind"],
    descriptions: [
      "Application permettant à un patient de préparer son intervention en suivant une procédure établie par le praticien.",
      "Connexion sécurisée pour tous les utilisateurs.",
      "Interface patient : accés à une procédure médicale sur-mesure (formulaires de santé, vidéos et articles en lien avec l'intervention, prises de rendez-vous post-opératoire, check-list pour préparer son admission).",
      "Interface praticien : gestion du parcours santé du patient, préparation des protocoles d'intervention, et assignation de ceux-ci au patient.",
      "Interface admin : administration des profils des praticiens.",
    ],
    time: "Projet serenity / 10 semaines - projet en cours",
    imgMobile: [serenity1, serenity2, serenity3, serenity4, serenity5],
    imgPC: [serenityPC1, serenityPC2, serenityPC3, serenityPC4],
    github: "https://github.com/WildCodeSchool/2023-02-JS-LaLoupe-Serenity",
  },
];

export default works;
