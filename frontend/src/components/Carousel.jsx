import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import skills from "../services/skills";

export default function Carrousel() {
  return (
    <div className="z-0">
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        interval={5000}
      >
        {skills.map((skill) => (
          <div
            key={`skills - ${skill.id}`}
            className="flex flex-col justify-evenly"
          >
            <h2 className=" text-md mb-3 text-white underline">
              {skill.title}
            </h2>
            <ul>
              {skill.stack.map((e) => (
                <li key={`stack - ${e}`} className="text-white/80 text-sm">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
