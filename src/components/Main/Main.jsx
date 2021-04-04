import {
  FaCss3,
  FaHtml5,
  FaSass,
  DiJavascript1,
  FaReact,
  SiStyledComponents,
  FaChrome,
  SiRedux,
  SiMongodb,
} from "react-icons/all";
import {
  MainContainer,
  MainGridContainer,
  MainGridContainerItem,
  MainGridContainerItemDescription,
  MainGridContainerItemImg,
  MainGridContainerItemTitle,
  MainHeader,
  MainIntroText,
  MainWrapper,
} from "./styles/MainStyled";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <MainHeader>Welcome to my Website!</MainHeader>
          <MainIntroText>
            I am a 21-year-old Software Developer, graduated from The University
            of Akron majored in Computer information Systems:
            <br />
            <br />
            <strong className="fancytext">Software Development</strong>
          </MainIntroText>
        </MainWrapper>
      </MainContainer>
      <MainContainer>
        <MainWrapper>
          <MainHeader>Skills I've collected along the way!</MainHeader>
          <MainIntroText>
            <MainGridContainer>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>HTML5</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaHtml5 />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>CSS3</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaCss3 />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>

              <MainGridContainerItem>
                <MainGridContainerItemTitle>SCSS</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaSass />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>
                  Javascript
                </MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <DiJavascript1 />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>React</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaReact />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>
                  Styled Components
                </MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <SiStyledComponents />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>
                  Chrome Developer Tools
                </MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaChrome />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>Redux</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <SiRedux />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>MongoDB</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <SiMongodb />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  sequi praesentium recusandae odit commodi excepturi.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
            </MainGridContainer>
          </MainIntroText>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Main;
