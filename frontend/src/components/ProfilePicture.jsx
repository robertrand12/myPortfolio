import myPicture from "../assets/images/bertrand.jpg";

export default function ProfilePicture() {
  return (
    <figure className="text-center">
      <img
        className=" rounded-xl h-44 w-44 absolute -top-20 left-1/2 -translate-x-1/2 shadow-xl"
        src={myPicture}
        alt="Bertrand Robert"
      />
      <figcaption>
        <h1 className=" text-2xl text-white pt-28">Bertrand Robert</h1>
        <div className="rounded-lg bg-[#3F3F3F] w-10/12 mx-auto px-4 py-2 mt-2 shadow-xl">
          <h3 className="text-md text-white">Développeur Web</h3>
          <h2 className="text-2xl text-[#08FDD8]/80">React / NodeJS</h2>
        </div>
      </figcaption>
    </figure>
  );
}
