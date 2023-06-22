import PropTypes from "prop-types";

export default function SocialNetworkIcon({ src, name, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        className="w-7 hover:scale-105 hover:rotate-12 duration-200"
        src={src}
        alt={name}
      />
    </a>
  );
}

SocialNetworkIcon.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
