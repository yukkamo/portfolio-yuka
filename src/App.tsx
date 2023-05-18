// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { styled, keyframes } from 'styled-components';

const WORKS_LIST = [
  {
    name: 'ビンゴマシン',
    description: 'JavaScriptの学習のためランダムで数字が選ばれるビンゴマシンを作成しました。',
    linkUrl: './static/works/bingogame/index.html',
    imageUrl: './static/images/bingo.jpg',
  },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar>
          <div>
            <span className="navItem">
              ホーム ▼
            </span>
            <span className="navItem">
              制作物一覧 ▼
            </span>
            <span className="navItem">
              作者について ▼
            </span>
          </div>
        </NavigationBar>

        <HeroImage>
          <h1 className="heroText">
            Portfolio
          </h1>
        </HeroImage>
      </header>

      <main>
        <WorksContainer>
          {
            WORKS_LIST.map((workData, index) => {
              console.log(`WORKS_LISTの${ index }番目の中身です`, workData);

              return (
                <div className="workCard" key={index}>
                  <div className="left">
                    <h2>{ workData.name }</h2>

                    <a href={ workData.linkUrl } rel='noopener noreferrer'>
                      作品ページはこちら
                    </a>

                    <div>{ workData.description }</div>
                  </div>

                  <div className="right">
                    <img src={ workData.imageUrl } />
                  </div>
                </div>
              );
            })
          }
        </WorksContainer>
      </main>


      <footer>
        <FooterCredits>
        GitHub 
        <a href="https://github.com/yukkamo">@yukkamo</a>
        </FooterCredits>
      </footer>
    </div>
  );
}

export default App;

const NavigationBar = styled.div`
display: flex;
align-items: center;
background-color: #ffcccc;
height: 64px;
padding-right: 24px;

&> div {
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
  width: 100%;
  
  .navItem {
    display: inline-flex;
    font-size: 24px;
    color: #331414;

    &:hover, &:active {
      color: lightgray;
    }
  }
}

`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%); 
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroImage = styled.div`
width: 100%;
height: 700px;

background-color: black;
background-image: url(./static/images/hero.jpg);
background-position: center;
background-repeat: no-repeat;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;

.heroText {
  font-size: 48px;
  font-weight: bold;
  font-family: sans-serif;
  color: white;
  text-shadow: #000 1px 0 10px;
  
  // アニメーション
  animation: ${fadeIn} 1s ease-in-out;
}
`;

const WorksContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 24px;
padding: 24px;


.workCard {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 12px;
  border: solid 2px #1a2b3b;
  border-radius: 8px;
  height: auto;
  padding: 24px;
  
  .left {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    height: 100%;
    margin-bottom:30px;

    &> h2 {
      margin: 0;
      color: #1a2b3b;
    }

    &> a {
      text-decoration: none;
    }

    &> div {
      color: dimgray;
    }
  }
  
  .right {
    width:400px;
    height: 100%;
    
    &> img {
      width: 400px;
      max-width: 100%;
      max-height: 100%;
    }
  }
}

`;



const FooterCredits = styled.div`
padding: 24px;
min-height: 64px;
background-color: #ffcccc;
color: #331414;
`;
