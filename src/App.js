import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

import GlobalStyles from "./globalStyles";

import DVCSearch from "./DVCSearch";
import Heights from "./Heights";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" />
          <HeaderMenu>
            <a className="App-link" href="https://blog.lineleader.io">
              Blog
            </a>
            <a
              className="App-link"
              href="https://twitter.com/lineleaderpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </HeaderMenu>
        </Header>
        <DVCSearch index={0} />
        <Heights index={1} />
      </AppContainer>
    </>
  );
}

export default App;

const Header = styled.div`
  margin: 2rem auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 241px;
  margin-bottom: 1rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  width: 100%;
  max-width: 600px;
`;

const AppContainer = styled.div``;
