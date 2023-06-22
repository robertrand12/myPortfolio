import PropTypes from "prop-types";

export default function ContactIcon({ logoSrc, text }) {
  return (
    <div className="flex items-center p-4 ">
      <img className="w-7 h-7 mr-4" src={logoSrc} alt={text} />
      <p className="text-white/70">{text}</p>
    </div>
  );
}

ContactIcon.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
