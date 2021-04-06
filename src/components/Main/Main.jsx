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
                  I use HTML5 on the daily and really have mastered layouts and
                  strong concepts of building elements and using tags and other
                  best practices.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>CSS3</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaCss3 />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  I really enjoy styling it offers me the capability to show off
                  my own creativity in terms of styling and layouts.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>SCSS</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaSass />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  I felt like there was a better way to write CSS and once I
                  learned SCSS, what a game changer it was for me; I learned to
                  love styling with SCSS, and use it on every project now.
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
                  Javascript is important to learn it connects all of these
                  Softwares together, my goal is to constantly be learning and
                  have a strong grasp on JS fundamentals and concepts.
                </MainGridContainerItemDescription>
              </MainGridContainerItem>
              <MainGridContainerItem>
                <MainGridContainerItemTitle>React</MainGridContainerItemTitle>
                <MainGridContainerItemImg>
                  <FaReact />
                </MainGridContainerItemImg>
                <MainGridContainerItemDescription>
                  I absolutly love coding in React it just makes sense to me in
                  terms of building and deploying modern web applications and
                  PWA's. I thought React looked really cool and I decided to
                  learn it and put in the hard work to master it.
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
                  As I was learning ways to styled React components and looking
                  for best practices I came across a library known as Styled
                  Components and it blew my mind, I really enjoy the benifts it
                  offers and it makes styling React components an Ease!
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
                  I think to be a good developer you also have to master your
                  Dev tools and I can now confidently say that chrome dev tools
                  in an integral tool in my toolbox
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
