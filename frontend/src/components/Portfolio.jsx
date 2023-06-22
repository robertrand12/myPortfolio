import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Portfolio({ src, siteTitle, id }) {
  return (
    <Link to={`/my-works/${id}`}>
      <figure className=" md:grayscale hover:grayscale-0 bg-[#3F3F3F] hover:bg-[#08FDD8]/60 w-7/12 mx-auto rounded-md shadow-xl relative pt-4 px-4 hover:scale-110 duration-500">
        <img src={src} alt={siteTitle} />
        <figcaption>
          <h2 className="text-white text-center py-3">{siteTitle}</h2>
        </figcaption>
      </figure>
    </Link>
  );
}

Portfolio.propTypes = {
  src: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
