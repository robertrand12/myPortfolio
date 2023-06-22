import PropTypes from "prop-types";

export default function Button({ title, url }) {
  return (
    <button
      className="block mx-auto mt-5 border-solid border-2 text-[#08FDD8]/80 border-[#08FDD8]/80 px-5 py-3 hover:bg-[#08FDD8]/80 hover:text-[#1D1D1D] rounded-full duration-300 hover:scale-105"
      type="button"
    >
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
