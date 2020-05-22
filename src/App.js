import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <HeaderMenu>
          <a className="App-link" href="https://blog.lineleader.io">
            Blog
          </a>
          <a className="App-link" href="https://dvcsearch.lineleader.io">
            DVC points search
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
    </AppContainer>
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
  margin-bottom: 3rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  width: 100%;
  max-width: 600px;
`;

const AppContainer = styled.div`
  width: 100vw;
`;
