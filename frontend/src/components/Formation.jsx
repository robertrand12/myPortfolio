import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";
import formations from "../services/formations";

export default function Formation() {
  return (
    <section>
      <h2 className="px-4 text-[#08FDD8]/80 text-lg">Ma formation</h2>
      <ul className=" bg-[#1D1D1D] w-11/12 rounded-lg mx-auto mt-4 shadow-lg py-3 lg:flex ">
        {formations.map((formation) => (
          <li key={`formation - ${formation.id}`} className="py-4 lg:w-4/12">
            <h3 className=" text-base mb-4 text-white underline text-center">
              {formation.title}
            </h3>
            <ul className="mb-4">
              <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
              >
                {formation.detail.map((detail) => (
                  <p
                    key={`key - ${detail}`}
                    className=" h-16 px-10 text-white/80 text-sm"
                  >
                    {detail}
                  </p>
                ))}
              </Carousel>
            </ul>
            {formation.pdf ? (
              <Button
                title="Voir les certificats"
                url={formation.pdf}
                buttonType="button"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
