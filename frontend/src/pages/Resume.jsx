import { useEffect } from "react";
import Skills from "../components/Skills";
import HeaderMobile from "../components/HeaderMobile";
import Formation from "../components/Formation";

export default function Resume() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="md:ml-[392px] relative ">
      <HeaderMobile />
      <h1 className="text-white text-2xl p-2 md:mt-[92px]">Mon parcours</h1>
      <Skills />
      <Formation />
    </div>
  );
}
