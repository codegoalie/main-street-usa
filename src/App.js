import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import ScheduleContainer from "./containers/ScheduleContainer.js";

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <HeaderMenu>
          <a
            className="App-link"
            href="https://blog.lineleader.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </HeaderMenu>
      </Header>
      <ScheduleContainer />
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
