import { useState, useEffect } from "react";
import HeaderMobile from "../components/HeaderMobile";
import Portfolio from "../components/Portfolio";
import works from "../services/works";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function MyWorks() {
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
  return (
    <section className="md:ml-[392px] relative ">
      <HeaderMobile />
      <h1 className="text-white text-2xl p-2 md:mt-[92px]">Mes réalisations</h1>
      <ul className="bg-[#1D1D1D] w-11/12 rounded-lg mx-auto shadow-lg py-6 my-4 grid grid-cols-1 lg:grid-cols-2  ">
        {works.map((work) => (
          <li key={`projects - ${work.id}`} className="mb-4">
            <Portfolio
              src={window.innerWidth >= 640 ? work.imgPC[0] : work.imgMobile[0]}
              siteTitle={work.siteTitle}
              id={work.id}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
