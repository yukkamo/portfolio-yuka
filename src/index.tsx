import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Author from "./Author";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fbc429;
  height: 64px;
  padding-right: 24px;

  & > div {
    display: flex;
    justify-content: flex-end;
    column-gap: 12px;
    width: 100%;

    .navItem {
      display: inline-flex;
      font-size: 24px;
      color: #fff;

      &:hover,
      &:active {
        color: lightgray;
      }
    }
  }

  .navToggle {
    display: block;
    position: relative;
    z-index: 9999;
    width: 28px;
    height: 24px;
  }

  .navToggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    position: absolute;
    transition: transform 0.5s, opacity 0.5s;
  }

  .navToggle span:nth-child(1) {
    top: 0;
  }

  .navToggle span:nth-child(2) {
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .navToggle span:nth-child(3) {
    bottom: 0;
  }

  @media screen and (min-width: 767px) {
    .navToggle {
      display: none;
    }
  }
`;

const FooterCredits = styled.div`
  padding: 24px;
  min-height: 64px;
  background-color: #fbc429;
  color: #fff;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="App-header">
        <NavigationBar>
          <div>
            <span className="navItem">
              <Link to={"/"}> ホーム ▼</Link>
            </span>
            <span className="navItem">
              <Link to={"/author"}>作者について ▼</Link>
            </span>
          </div>
        </NavigationBar>
      </header>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/author" Component={Author} />
      </Routes>
      <footer>
        <FooterCredits>
          GitHub
          <a href="https://github.com/yukkamo">@yukkamo</a>
        </FooterCredits>
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
