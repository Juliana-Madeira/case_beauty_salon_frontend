import React from "react";
import styled from "styled-components";
import img from "../Header/backgroundOf.jpg";
import bigImg from "../Header/backgroundOfMaiores.png";


const HeaderBlock = styled.header`
  @media (max-width: 426px) {
    display: flex;
    width: 100%;
    height: 15em;
    background-size: cover;
    background-image: url(${img});
    background-color: red;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    display: flex;
    width: 100%;
    height: 15em;
    background-size: cover;
    background-image: url(${bigImg});
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    display: flex;
    background-image: url(${bigImg});
    width: 100%;
    height: 20em;
    background-size: cover;
  }
  @media (min-width: 1025px) {
    display: flex;
    background-image: url(${bigImg});
    width: 100%;
    height: 20em;
    background-size: cover;
  }
`;

const HeaderTextBlock = styled.div`
  @media (max-width: 426px) {
    color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10em 1em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10em 2em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10em 2em;
    text-align: center;
  }
  @media (min-width: 1025px) {
    color: var(--white);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10em 2em;
    text-align: center;
  }
`;

const HeaderTitle = styled.h1`
  @media (max-width: 426px) {
    font-size: 1.5em;
    font-weight: normal;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    font-size: 1.8em;
    font-weight: normal;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    font-size: 2.5em;
    font-weight: normal;
  }
  @media (min-width: 1025px) {
    font-size: 2.8em;
    font-weight: normal;
  }
`;

const HeaderSmallText = styled.small`
@media (max-width: 426px) {
  margin-top: 0.2em;
        font-size: 1em;
        color: #a8a7a7;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    margin-top: 0.2em;
        font-size: 1.2em;
        color: #a8a7a7;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    margin-top: 0.2em;
        font-size: 1.5em;
        color: #a8a7a7;
  }
  @media (min-width: 1025px) {
    margin-top: 0.2em;
        font-size: 1.5em;
        color: #a8a7a7;
  }
`

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTextBlock>
        <HeaderTitle>Case Beauty Salon</HeaderTitle>
        <HeaderSmallText>Mooca &#8226; 2.1kms</HeaderSmallText>
      </HeaderTextBlock>
    </HeaderBlock>
  );
};

export default Header;
