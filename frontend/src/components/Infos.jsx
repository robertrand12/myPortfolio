import { useState } from "react";
import SocialNetworkIcon from "./SocialNetworkIcon";
import ContactIconList from "./ContactIconList";
import Button from "./Button";
import ProfilePicture from "./ProfilePicture";
import githubIcon from "../assets/icons/github.png";
import hoverGithubIcon from "../assets/icons/hoverGithub.png";
import linkedInIcon from "../assets/icons/linkedIn.png";
import hoverLinkedInIcon from "../assets/icons/hoverLinkedIn.png";
import mailIcon from "../assets/icons/mail.png";
import hoverMailIcon from "../assets/icons/hoverMail.png";
import myCV from "../assets/CV/CV_Bertrand_Robert.pdf";

export default function Infos() {
  const [github, setGithub] = useState(false);
  const [mail, setMail] = useState(false);
  const [linkedin, setLinkedin] = useState(false);

  return (
    <section className=" w-11/12 mx-auto bg-[#1D1D1D] rounded-xl relative shadow-stone-900 shadow-lg pb-5 md:w-80 md:fixed md:left-10 top-32">
      <ProfilePicture />
      <ul className="flex justify-evenly my-5">
        <li
          onMouseEnter={() => setGithub(true)}
          onMouseLeave={() => setGithub(false)}
        >
          <SocialNetworkIcon
            src={github ? hoverGithubIcon : githubIcon}
            name="Icon Github"
            url="https://github.com/robertrand12"
          />
        </li>
        <li
          onMouseEnter={() => setMail(true)}
          onMouseLeave={() => setMail(false)}
        >
          <SocialNetworkIcon
            src={mail ? hoverMailIcon : mailIcon}
            name="Icon Mail"
            url="mailto:brobert.bertrand@wanadoo.fr"
          />
        </li>
        <li
          onMouseEnter={() => setLinkedin(true)}
          onMouseLeave={() => setLinkedin(false)}
        >
          <SocialNetworkIcon
            src={linkedin ? hoverLinkedInIcon : linkedInIcon}
            name="Icon LinkedIn"
            url="https://www.linkedin.com/in/bertrand-robert-dev/"
          />
        </li>
      </ul>
      <ContactIconList />
      <Button title="Télécharger mon CV" url={myCV} buttonType="button" />
    </section>
  );
}
