import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderMobile from "../components/HeaderMobile";
import works from "../services/works";
import Button from "../components/Button";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function SiteDetails() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  const { id } = useParams();
  return (
    <div className="md:ml-[392px] relative ">
      <HeaderMobile />
      <section>
        <h1 className="text-white text-2xl p-2 md:mt-[92px]">
          {works[id - 1].siteTitle}
        </h1>

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          // eslint-disable-next-line no-unneeded-ternary
          showArrows={window.innerWidth < 640 ? false : true}
          className="w-11/12 md:w-6/12 mx-auto mb-4"
        >
          {window.innerWidth >= 640
            ? works[id - 1].imgPC.map((detail) => (
                <img
                  key={`photo - ${works[id - 1]} - ${detail}`}
                  className="rounded-md"
                  src={detail}
                  alt={detail.img}
                />
              ))
            : works[id - 1].imgMobile.map((detail) => (
                <img
                  key={`photo - ${works[id - 1]} - ${detail}`}
                  className="rounded-md"
                  src={detail}
                  alt={detail.img}
                />
              ))}
        </Carousel>

        <article className=" w-11/12 mx-auto bg-[#1D1D1D] rounded-xl  shadow-stone-900 shadow-lg p-5 ">
          <h2 className="text-[#08FDD8]/80">{works[id - 1].time}</h2>
          <ul className="text-white/80 my-4">
            {works[id - 1].descriptions.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
          <h3 className="text-[#08FDD8]/80">Technologies utilisées :</h3>
          <div className="flex flex-row flex-wrap justify-between">
            {works[id - 1].stacks.map((stack) => (
              <button
                className="cursor-default w-28 block mx-1 mt-2 border-solid border-2 text-white/80 border-white/80 px-1 py-2 hover:bg-white/80 hover:text-[#1D1D1D] rounded-md duration-300 hover:scale-105"
                type="button"
              >
                {stack}
              </button>
            ))}
          </div>
        </article>
        <div className="sm:flex">
          <Button
            title="Voir le code sur github"
            url={works[id - 1].github}
            buttonType="button"
          />
          {works[id - 1].url ? (
            <Button
              title="Visiter le site"
              url={works[id - 1].url}
              buttonType="button"
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}
