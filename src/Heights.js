import React from "react";
import styled from "styled-components";

const Heights = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <Desc>
          <h2>Walt Disney World Height Requirements</h2>
          <p>
            <strong>The easiest way to see what you can ride.</strong>Simply
            enter your height and browse all attractions with height
            requirements instantly with their status clearly makred.
          </p>
          <CTA href="https://heights.lineleader.io?utm_source=home">
            See what you can ride &rarr;
          </CTA>
        </Desc>
        <Shot></Shot>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Heights;

const ProductWrapper = styled.h1`
  background-image: linear-gradient(135deg, #45484d 0%, #000000 100%);
  color: ghostwhite;
  padding: 3rem 1rem;
`;

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const Desc = styled.div`
  p {
    font-size: 1.2rem;
  }
`;

const Shot = styled.div``;

const CTA = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background-color: white;
  color: #45484d;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 2px 16px 0 rgba(255, 255, 255, 0.5);
  }
`;
