import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--lightText);
  height: 3.75em;
`
const FooterSpan = styled.span`
  font-size: 0.9em;
  font-weight: lighter;
`

const Footer = () => {
  return (
    <FooterBlock>
      <FooterSpan>@Case Beauty Salon. All rights reserved.</FooterSpan>
    </FooterBlock>
  )
}

export default Footer;