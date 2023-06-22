import Carrousel from "./Carousel";

export default function Skills() {
  return (
    <section>
      <h2 className="px-4 text-[#08FDD8]/80 text-lg">Mes compétences</h2>
      <div className=" bg-[#1D1D1D] w-11/12 lg:w-6/12 rounded-lg mx-auto mt-4 shadow-lg py-3 mb-4">
        <Carrousel />
      </div>
    </section>
  );
}
