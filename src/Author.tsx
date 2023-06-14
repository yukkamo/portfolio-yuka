// import React from 'react';

import { styled } from "styled-components";
// import { Link } from "react-router-dom";

function Author() {
  return (
    <div className="Author">
      <main>
        <AuthorText>
          <h2>ABOUT ME</h2>
        </AuthorText>

        <AboutWrap>
          <div className="aboutWrap">
            <img
              className="aboutImg"
              src="./static/images/yukkamo.jpg"
              alt="作者の写真"
            />
            <ul className="aboutText">
              <li>Name:yukkamo</li>
              <li>
                カメラ:一眼レフを使用し、風景や人の些細な変化や仕草を捉え写真として切り取るのが楽しみのひとつ
              </li>
              <li>
                イラスト:独特な発想を活かし、万人受けしなくても誰かがクスッと笑ってくれるようなイラストを目指し描いている
              </li>
              <li>
                Web:幼いころからPCが身近にあったものの、両親はカラオケの機械として使っていた。
                <br />
                ある日、慣れないキーボードで文字を打つ概念も知らなかった当時の私が、精一杯頭をひねって初めて画面に文字が登場し検索という行為をしたとき、
                <span>"呪文を唱えて魔法を放った”</span>そんな感動がありました。
              </li>
            </ul>
          </div>
        </AboutWrap>
      </main>
    </div>
  );
}

export default Author;

const AuthorText = styled.div`
  h2 {
    display: block;
    text-align: center;
  }
`;

const AboutWrap = styled.div`
  img {
    width: 100%;
  }

  .aboutWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .aboutText li {
    list-style-type: square;
  }

  @media screen and (min-width: 767px) {
    img {
      width: 40%;
      height: auto;
      display: block;
      margin: 20px;
      border-radius: 10px;
    }

    .aboutWrap {
      width: 80%;
      max-width: 1240px;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
    }
  }
`;
