import React from "react";
import { Link as NavbarLink } from "react-router-dom";
import { MdAccountCircle, MdShare, MdRoom } from "react-icons/md";
import styled from "styled-components";

const NavbarBlock = styled.nav`
  @media (max-width: 426px) {
    background-color: var(--primary);
    height: 5em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    background-color: var(--primary);
    height: 5em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    background-color: var(--primary);
    height: 5em;
  }
  @media (min-width: 1025px) {
    background-color: var(--primary);
    height: 5em;
  }
`;

const NavbarMenu = styled.ul`
  @media (max-width: 426px) {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (min-width: 1025px) {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Link = styled(NavbarLink)`
  @media (max-width: 426px) {
    text-decoration: none;
    color: var(--black);
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    text-decoration: none;
    color: var(--black);
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    text-decoration: none;
    color: var(--black);
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
  }
  @media (min-width: 1025px) {
    text-decoration: none;
    color: var(--black);
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
  }
`;

const NavbarText = styled.p`
  @media (max-width: 426px) {
    color: var(--lightText);
    font-weight: lighter;
    font-size: 0.9em;
    margin-top: 0.3em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    color: var(--lightText);
    font-weight: lighter;
    font-size: 0.9em;
    margin-top: 0.3em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    color: var(--lightText);
    font-weight: lighter;
    font-size: 0.9em;
    margin-top: 0.3em;
  }
  @media (min-width: 1025px) {
    color: var(--lightText);
    font-weight: lighter;
    font-size: 0.9em;
    margin-top: 0.3em;
  }
`;

const NavbarButton = styled.button`
  @media (max-width: 426px) {
    padding: 0.5em;
    width: 6em;
    background-color: var(--gold);
    border-radius: 12px;
    border: none;
    margin-top: 0.2em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    padding: 0.5em;
    width: 6em;
    background-color: var(--gold);
    border-radius: 12px;
    border: none;
    margin-top: 0.2em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    padding: 0.5em;
    width: 6em;
    background-color: var(--gold);
    border-radius: 12px;
    border: none;
    margin-top: 0.2em;
  }
  @media (min-width: 1025px) {
    padding: 0.5em;
    width: 6em;
    background-color: var(--gold);
    border-radius: 12px;
    border: none;
    margin-top: 0.2em;
  }
`;
const NavbarOpenClosed = styled.p`
  @media (max-width: 426px) {
    font-size: 0.7em;
    color: var(--lightText);
    margin-top: 0.5em;
  }
  @media (min-width: 426px) and (max-width: 769px) {
    font-size: 0.7em;
    color: var(--lightText);
    margin-top: 0.5em;
  }
  @media (min-width: 769px) and (max-width: 1025px) {
    font-size: 0.7em;
    color: var(--lightText);
    margin-top: 0.5em;
  }
  @media (min-width: 1025px) {
    font-size: 0.7em;
    color: var(--lightText);
    margin-top: 0.5em;
  }
`;

const Navbar = () => {
  return (
    <NavbarBlock>
      <NavbarMenu>
        <Link to="/">
          <MdShare size={40} />
          <NavbarText>Share</NavbarText>
        </Link>
        <Link to="/">
          <MdRoom size={40} />
          <NavbarText>Visit</NavbarText>
        </Link>
        <Link to="/login">
          <NavbarButton type="button">OPEN</NavbarButton>
          <NavbarOpenClosed>Close at 20:00</NavbarOpenClosed>
        </Link>
        <Link to="/login">
          <MdAccountCircle size={40} />
          <NavbarText>Login</NavbarText>
        </Link>
      </NavbarMenu>
    </NavbarBlock>
  );
};

export default Navbar;
