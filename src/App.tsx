import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { styled } from 'styled-components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          寺川さんのポートフォリオ予定地
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FooterCredits>
          製作者の情報
        </FooterCredits>
      </header>
    </div>
  );
}

export default App;


const FooterCredits = styled.div`
padding: 24px;
min-height: 64px;
background-color: #1a2b3b;
color: white;
`;
