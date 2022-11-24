import * as Styled from "./styles";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/gabriel-lucas-539a28234/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    link: "https://github.com/kiondartel",
    icon: <FaGithub />,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/gbiellukas/",
    icon: <FaInstagram />,
  },
];

const SocialNetwork = () => {
  return (
    <Styled.Container>
      <Styled.Title>Medias Sociais:</Styled.Title>
      <Styled.SocialDiv>
        {socialNetworks.map((network) => (
          <Styled.A href={network.link} id={network.name} key={network.name}>
            {network.icon}
          </Styled.A>
        ))}
      </Styled.SocialDiv>
    </Styled.Container>
  );
};

export default SocialNetwork;
