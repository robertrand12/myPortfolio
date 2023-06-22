import openClassroomCertificates from "../assets/CV/certificatsOpenClassroom.pdf";
import udemyCertificates from "../assets/CV/certificatsUdemy.pdf";

const formations = [
  {
    id: 1,
    title: "Wild Code School",
    detail: [
      "Campus de la Loupe (28) - formation pour le passage de titre de développeur web / web mobile (bac +2)",
    ],
  },
  {
    id: 2,
    title: "Openclassroom - cours en ligne",
    detail: [
      "Découvrez le fonctionnement des algorithmes",
      "Apprenez à programmer en Java",
      "Débutez avec React",
      "Découvrez l'univers de la cybersécurité",
      "Gérez du code avec Git et Github",
      "Créez votre site web avec HTML5 et CSS3",
      "Ecrivez du JavaScript pour le web",
      "Apprenez à programmer avec JavaScript",
      "Devenez développeur Agile",
      "Concevez votre site web avec PHP et mySql",
      "Apprenez les bases du langage Python",
    ],
    pdf: openClassroomCertificates,
  },
  {
    id: 3,
    title: "Udemy - cours en ligne",
    detail: [
      "Bases indispensables de JavaScript, NodeJS et algorithmie",
      "Les fondamentaux de JavaScript et NodeJs sans framework",
      "Maitrisez le JavaScript en 30 exercices pratiques",
      "Maitrisez JavaScript de ES6 à ES9 : cours + 28 exercices pratiques",
    ],
    pdf: udemyCertificates,
  },
];

export default formations;
