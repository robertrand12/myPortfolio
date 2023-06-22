import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMobile from "../components/HeaderMobile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageConfirm, setMessageConfirm] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setMessageConfirm(true);
      })
      .catch(() => {
        alert("erreur dans l'envoi du message");
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  if (!messageConfirm) {
    return (
      <div className="md:ml-[392px] md:mt-[92px] ">
        <HeaderMobile />
        <p className="text-white text-2xl p-2 ">Me contacter</p>
        <form
          onSubmit={handleSubmit}
          className="text-white/80 flex flex-col bg-[#1D1D1D] w-11/12 rounded-lg mx-auto shadow-lg py-3 my-3  items-center"
        >
          <label htmlFor="name" className="p-5 w-10/12 md:w-8/12 leading-loose">
            Nom :
            <input
              className=" rounded-md w-full text-black px-2 focus:ring focus:ring-[#08FDD8]/80 focus:outline-none focus:scale-105 duration-300"
              type="text"
              id="name"
              required
              value={name}
              onChange={handleChangeName}
            />
          </label>
          <label
            htmlFor="email"
            className="p-5 w-10/12 md:w-8/12 leading-loose"
          >
            Email :
            <input
              className="w-full rounded-md text-black px-2 focus:ring focus:ring-[#08FDD8]/80 focus:outline-none focus:scale-105 duration-300"
              type="email"
              id="email"
              required
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label
            htmlFor="message"
            className="p-5 w-10/12 md:w-8/12 leading-loose"
          >
            Message :
            <textarea
              className="w-full rounded-md text-black px-2 h-28 focus:ring focus:ring-[#08FDD8]/80 focus:outline-none focus:scale-105 duration-300"
              id="message"
              required
              value={message}
              onChange={handleChangeMessage}
            />
          </label>
          <button
            className="block mx-auto mt-5 border-solid border-2 text-[#08FDD8]/80 border-[#08FDD8]/80 px-5 py-3 hover:bg-[#08FDD8]/80 hover:text-[#1D1D1D] rounded-full duration-300 hover:scale-105"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="md:ml-[392px] md:mt-[92px] min-h-screen">
      <HeaderMobile />
      <section className="text-center mt-20">
        <p className="text-white text-2xl p-2 ">
          Votre message a bien été envoyé
        </p>
        <Link to="/">
          <button
            className="block mx-auto mt-5 border-solid border-2 text-[#08FDD8]/80 border-[#08FDD8]/80 px-5 py-3 hover:bg-[#08FDD8]/80 hover:text-[#1D1D1D] rounded-full duration-300 hover:scale-105"
            type="button"
          >
            Revenir à la page d'accueil
          </button>
        </Link>
      </section>
    </div>
  );
}
