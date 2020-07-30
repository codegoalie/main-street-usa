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

const DVCSearch = ({ index }) => {
  return (
    <ThemeProvider theme={getTheme(index)}>
      <ProductWrapper>
        <ProductContainer flipped={index % 2 !== 0}>
          <Desc>
            <h2>Disney Vacation Club Reverse Points Search</h2>
            <p>
              <strong>
                Tired of spreadsheets and endlessley scouring points charts?
              </strong>{" "}
              Get every possible reservation across all 16 DVC resorts for your
              dates and point budget instantly. See room upgrades or resorts you
              never thought you could afford.
            </p>
            <CTA href="https://dvcsearch.lineleader.io?utm_source=home">
              Find a better stay now &rarr;
            </CTA>
          </Desc>
          <Shot></Shot>
        </ProductContainer>
      </ProductWrapper>
    </ThemeProvider>
  );
};

DVCSearch.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DVCSearch;
