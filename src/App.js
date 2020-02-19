import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <HeaderMenu>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </HeaderMenu>
        <AppLinks>
          <a href="/">Sign in</a>
          <a href="/">Register</a>
        </AppLinks>
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
`;

const Logo = styled.img`
  width: 241px;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const AppContainer = styled.div`
  width: 100vw;
`;

const AppLinks = styled.div`
  position: absolute;
  right: 2rem;

  a {
    margin-left: 1rem;
  }
`;
