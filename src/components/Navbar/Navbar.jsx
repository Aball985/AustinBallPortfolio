import TextLoop from "react-text-loop";
import AvatarLogo from "../../assets/avatarr.svg";

import {
  NavbarContainer,
  NavbarLogo,
  NavbarLogoText,
  NavbarDescriptionText,
  NavbarImage,
} from "./styles/NavbarStyled";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  GiPencilBrush,
} from "react-icons/all";

const Navbar = () => {
  const textArray = () => {
    return [
      <p>
        <span>🚀</span>Software Developer
      </p>,
      <p>
        <span>🔧</span>Software Engineer
      </p>,
      <p>
        <span>💻</span>Web Developer
      </p>,
      <p>
        <span>🧙</span>Fullstack Developer
      </p>,
      <p>
        <span>🐱‍👤</span>Flexbox Ninja
      </p>,
      <p>
        <span>🕵</span>Problem Solver
      </p>,
      <p>
        <span>🎤</span>Raphead
      </p>,
      <p>
        <span>☕</span>Coffee Connoisseur
      </p>,
    ];
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo>
          <IoIosArrowBack style={{ fontSize: "3.5rem" }} />
          <GiPencilBrush style={{ fontSize: "6.5rem" }} />
          <IoIosArrowForward style={{ fontSize: "3.5rem" }} />
        </NavbarLogo>
        <NavbarLogoText>Austin Ball</NavbarLogoText>
        <NavbarImage>
          <img src={AvatarLogo} alt="" />
        </NavbarImage>
      </NavbarContainer>
      <NavbarDescriptionText>
        <p>
          <span className="text">Hello, I am a</span>
          <TextLoop
            className="textloop"
            interval={4550}
            fade={true}
            children={textArray()}
          />
        </p>
      </NavbarDescriptionText>
    </>
  );
};

export default Navbar;
