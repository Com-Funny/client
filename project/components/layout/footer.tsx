import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TextSection>
          <h2>Footer Text</h2>
          <p>
            Footer Text Footer Text Footer Text Footer Text Footer Text Footer
            Text
          </p>
          <p>
            Footer Text Footer Text Footer Text Footer Text Footer Text Footer
            Text
          </p>
          <p>
            Footer Text Footer Text Footer Text Footer Text Footer Text Footer
            Text
          </p>
        </TextSection>
        <RightText>
          Footer Text Footer Text Footer Text Footer Text Footer Text
        </RightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border-top: 1px solid var(--border);
  background-color: var(--background);
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 1440px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextSection = styled.div`
  text-align: left;
  padding-top: 10px;

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }
`;

const RightText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px;
  align-self: flex-end;
`;
