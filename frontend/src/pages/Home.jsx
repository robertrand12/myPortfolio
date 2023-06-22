import { useEffect } from "react";
import Infos from "../components/Infos";
import HeaderMobile from "../components/HeaderMobile";
import Button from "../components/Button";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="md:ml-[392px] ">
      <HeaderMobile />

      <Infos />

      <p className=" mt-40 md:mt-[92px] text-4xl md:text-6xl text-[#08FDD8]/80 py-10 px-5">
        Bonjour et bienvenue sur mon portfolio !
      </p>
      <section className="w-11/12 mx-auto bg-[#1D1D1D] rounded-xl relative shadow-stone-900 shadow-lg p-5 text-white/80">
        <h2 className="text-xl mb-4">
          Je suis à la recherche d'une alternance en développement web pour
          <span className="text-[#08FDD8]/80"> septembre 2023</span> et
          j'aimerais vous montrer pourquoi je suis{" "}
          <span className="text-[#08FDD8]/80">l'alternant idéal.</span>
        </h2>

        <p>
          N'hésitez pas à parcourir mon portfolio pour découvrir mes projets et
          en apprendre davantage sur ma personnalité et mes compétences en
          développement web.
        </p>
        <h1 className="text-3xl text-[#08FDD8]/80 py-10">Bonne visite !</h1>
        <Button
          title="Voir le code sur github"
          url="https://github.com/robertrand12/myPortfolio"
          buttonType="button"
        />
      </section>
    </div>
  );
}
