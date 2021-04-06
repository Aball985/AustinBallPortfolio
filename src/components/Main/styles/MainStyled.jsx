import styled from "styled-components";
export const MainContainer = styled.main`
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;
export const MainHeader = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;
export const MainIntroText = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  width: 35rem;
  margin-top: 3rem;
  text-align: center;
  .fancytext {
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 0.35rem;
    text-decoration: underline 3px solid black;
  }
`;

export const MainWrapper = styled.div`
  position: relative;
  /* 5 Rem Container seperation each */
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 3.5rem solid black;
  padding: 3rem 0;
  background: white;
  clip-path: polygon(
    0 0,
    calc(100% - 3.5rem) 0,
    100% 3.5rem,
    100% 100%,
    3.5rem 100%,
    0 calc(100% - 3.5rem)
  );
`;

export const MainGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const MainGridContainerItem = styled.div`
  padding: 1rem;
  flex: 1 10%;
  background: #fffefe;
  border-radius: 0.45rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: 30rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const MainGridContainerItemTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const MainGridContainerItemImg = styled.div`
  padding: 1rem 0;
  font-size: 8rem;
`;

export const MainGridContainerItemDescription = styled.div`
  font-size: 0.8rem;
`;
