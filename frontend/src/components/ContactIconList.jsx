import ContactIcon from "./ContactIcon";
import telIcon from "../assets/icons/telephone.png";
import mobilityIcon from "../assets/icons/mobility.png";

const icons = [
  {
    id: 1,
    src: telIcon,
    text: "06.24.61.26.35",
  },
  {
    id: 3,
    src: mobilityIcon,
    text: "Chartres (28) - Mobilité 28/45/IDF",
  },
];

export default function ContactIconList() {
  return (
    <ul className="bg-[#3F3F3F] w-9/12 mx-auto rounded-xl shadow-xl relative">
      {icons.map((icon) => (
        <li key={icon.id}>
          <ContactIcon logoSrc={icon.src} text={icon.text} />
        </li>
      ))}
      <div className="border-t-[0.5px] w-6/12 absolute top-16 left-1/4 border-white/50" />
    </ul>
  );
}
