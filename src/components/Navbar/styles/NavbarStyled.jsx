import styled from "styled-components";
import { colors } from "../../GlobalStyles";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  color: ${colors.black};
  border-left: 3.5rem solid black;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: 20rem;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4rem;
  padding: 2rem 2rem;
`;

export const NavbarLogoText = styled.span`
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0.35rem;
`;

export const NavbarDescriptionText = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${colors.black};
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .dev {
    text-decoration: underline;
  }
  .text {
    opacity: 0.5;
    font-weight: 400;
  }
`;

export const NavbarImage = styled.div`
  margin-left: 10rem;
`;
