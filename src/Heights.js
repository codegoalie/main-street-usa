import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { getTheme } from "./themes";

import {
  ProductWrapper,
  ProductContainer,
  Desc,
  Shot,
  CTA,
} from "./product-rows";

const Heights = ({ index }) => {
  return (
    <ThemeProvider theme={getTheme(index)}>
      <ProductWrapper>
        <ProductContainer flipped={index % 2 !== 0}>
          <Desc>
            <h2>Walt Disney World Height Requirements</h2>
            <p>
              <strong>The easiest way to see what you can ride.</strong> Simply
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
    </ThemeProvider>
  );
};

Heights.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Heights;
