import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import Form from "react-bootstrap/Form";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MakeNormalDophin() {
  NormalDophinContainer = [];
  for (let i = 0; i < 10; i++) {
    var second = i + 100;
    var top = getRandom(150, 250);
    if (i % 2) {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-right-top ${second}s,
          slide-slow-img-normal-right-top ${second}s;
        animation-iteration-count: infinite;

        @keyframes slide-slow-normal-right-top {
          0% {
            left: 120%;
          }

          50% {
            left: -20%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes slide-slow-img-normal-right-top {
          0% {
            transform: scaleX(1);
          }
          48% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(-1);
          }
          98% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrTopMedium[getRandom(0, 10)]} />
      );
    } else {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-left-top ${second}s,
          slide-slow-img-normal-left-top ${second}s;
        animation-iteration-count: infinite;
        transform: scaleX(-1) scaleY(-1);

        @keyframes slide-slow-normal-left-top {
          0% {
            left: -20%;
          }

          50% {
            left: 120%;
          }

          100% {
            left: -20%;
          }
        }

        @keyframes slide-slow-img-normal-left-top {
          0% {
            transform: scaleX(-1);
          }
          48% {
            transform: scaleX(-1);
          }
          50% {
            transform: scaleX(1);
          }
          98% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(-1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrTopMedium[getRandom(0, 10)]} />
      );
    }
  }
  for (let i = 0; i < 10; i++) {
    var second = i + 100;
    var top = getRandom(200, 230);
    if (i % 2) {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-right-medium ${second}s,
          slide-slow-img-normal-right-medium ${second}s;
        animation-iteration-count: infinite;

        @keyframes slide-slow-normal-right-medium {
          0% {
            left: 120%;
          }

          50% {
            left: -20%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes slide-slow-img-normal-right-medium {
          0% {
            transform: scaleX(1);
          }
          48% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(-1);
          }
          98% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrTopMedium[getRandom(0, 10)]} />
      );
    } else {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-left-medium ${second}s,
          slide-slow-img-normal-left-medium ${second}s;
        animation-iteration-count: infinite;
        transform: scaleX(-1) scaleY(-1);

        @keyframes slide-slow-normal-left-medium {
          0% {
            left: -20%;
          }

          50% {
            left: 120%;
          }

          100% {
            left: -20%;
          }
        }

        @keyframes slide-slow-img-normal-left-medium {
          0% {
            transform: scaleX(-1);
          }
          48% {
            transform: scaleX(-1);
          }
          50% {
            transform: scaleX(1);
          }
          98% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(-1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrTopMedium[getRandom(0, 10)]} />
      );
    }
  }
  for (let i = 0; i < 10; i++) {
    var second = i + 100;
    var top = getRandom(650, 800);
    if (i % 2) {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-right-bottom ${second}s,
          slide-slow-img-normal-right-bottom ${second}s;
        animation-iteration-count: infinite;

        @keyframes slide-slow-normal-right-bottom {
          0% {
            left: 120%;
          }

          50% {
            left: -20%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes slide-slow-img-normal-right-bottom {
          0% {
            transform: scaleX(1);
          }
          48% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(-1);
          }
          98% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrBottom[getRandom(0, 10)]} />
      );
    } else {
      const Tmpone = styled.img`
        position: absolute;
        width: 350px;
        margin-left: ${getRandom(500, 1000)}px;
        top: ${top}px;
        animation: slide-slow-normal-left-bottom ${second}s,
          slide-slow-img-normal-left-bottom ${second}s;
        animation-iteration-count: infinite;
        transform: scaleX(-1) scaleY(-1);

        @keyframes slide-slow-normal-left-bottom {
          0% {
            left: -20%;
          }

          50% {
            left: 120%;
          }

          100% {
            left: -20%;
          }
        }

        @keyframes slide-slow-img-normal-left-bottom {
          0% {
            transform: scaleX(-1);
          }
          48% {
            transform: scaleX(-1);
          }
          50% {
            transform: scaleX(1);
          }
          98% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(-1);
          }
        }
      `;
      NormalDophinContainer.push(
        <Tmpone src={dolphinArrBottom[getRandom(0, 10)]} />
      );
    }
  }
  return { NormalDophinContainer };
}

function MakeSmallNormalDophin() {
  backgroundDopinContainer = [];
  for (let i = 0; i < 5; i++) {
    var second = i + 45;
    var leftorright = getRandom(1, 2);
    if (leftorright % 2) {
      const Tmpthree = styled.img`
        position: absolute;
        width: 300px;
        overflow: hidden;
        top: ${getRandom(0, 600)}px;
        animation: slide-slow-normal-small-left ${second}s,
          slide-slow-img-normal-small-left ${second}s;
        animation-iteration-count: infinite;
        filter: opacity(0.5);

        @keyframes slide-slow-normal-small-left {
          0% {
            left: 120%;
          }

          50% {
            left: -20%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes slide-slow-img-normal-small-left {
          0% {
            transform: scaleX(1);
          }
          48% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(-1);
          }
          98% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `;
      backgroundDopinContainer.push(<Tmpthree src="./IMG/fish1.gif" />);
    } else {
      const Tmpthree = styled.img`
        position: absolute;
        width: 300px;
        overflow: hidden;
        top: ${getRandom(0, 600)}px;
        animation: slide-slow-normal-small-right ${second}s,
          slide-slow-img-normal-small-right ${second}s;
        animation-iteration-count: infinite;
        filter: opacity(0.5);
        transform: scaleX(-1) scaleY(-1);

        @keyframes slide-slow-normal-small-right {
          0% {
            left: -20%;
          }

          50% {
            left: 120%;
          }

          100% {
            left: -20%;
          }
        }

        @keyframes slide-slow-img-normal-small-right {
          0% {
            transform: scaleX(-1);
          }
          48% {
            transform: scaleX(-1);
          }
          50% {
            transform: scaleX(1);
          }
          98% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(-1);
          }
        }
      `;
      backgroundDopinContainer.push(<Tmpthree src="./IMG/fish1.gif" />);
    }
  }
  return { backgroundDopinContainer };
}

function AdjustUnnormalDprphinOpacity(
  opacityUnnormalArr,
  CountOpacityUnnormal
) {
  var tmp = setInterval(function ShowRipper() {
    opacityUnnormalArr = 0;
    CountOpacityUnnormal--;
    clearInterval(tmp);
    console.log("show " + opacityUnnormalArr);
    console.log("count " + CountOpacityUnnormal);
  }, 11000);
}

var voiceOne = 70;
var voiceTwo = 70;
var voiceThree = 70;
var showvoiceOne = 70;
var showvoiceTwo = 70;
var showvoiceThree = 70;
var NormalDophinContainer = [];
var backgroundDopinContainer = [];
var dolphinArrTopMedium = [
  "./IMG/中華1.gif",
  "./IMG/中華2.gif",
  "./IMG/中華3.gif",
  "./IMG/瓶鼻1.gif",
  "./IMG/瓶鼻2.gif",
  "./IMG/瓶鼻3.gif",
  "./IMG/瓶鼻4.gif",
  "./IMG/露脊1.gif",
  "./IMG/露脊2.gif",
  "./IMG/露脊3.gif",
  "./IMG/露脊4.gif",
];
var dolphinArrBottom = [
  "./IMG/中華下層1.gif",
  "./IMG/中華下層2.gif",
  "./IMG/中華下層3.gif",
  "./IMG/瓶鼻下層1.gif",
  "./IMG/瓶鼻下層2.gif",
  "./IMG/瓶鼻下層3.gif",
  "./IMG/瓶鼻下層4.gif",
  "./IMG/露脊下層1.gif",
  "./IMG/露脊下層2.gif",
  "./IMG/露脊下層3.gif",
  "./IMG/露脊下層4.gif",
];
var opacityNormal = "1";
var opacityUnnormalOneBig = [0, 0, 0, 0, 0];
var CountOpacityUnnormalOneBig = 0;
var opacityUnnormalOneSmall = [0, 0, 0, 0, 0];
var CountOpacityUnnormalOneSmall = 0;
var opacityUnnormalTwoBig = [0, 0, 0, 0, 0];
var CountOpacityUnnormalTwoBig = 0;
var opacityUnnormalTwoSmall = [0, 0, 0, 0, 0];
var CountOpacityUnnormalTwoSmall = 0;
var opacityUnnormalThreeBig = [0, 0, 0, 0, 0];
var CountOpacityUnnormalThreeBig = 0;
var opacityUnnormalThreeSmall = [0, 0, 0, 0, 0];
var CountOpacityUnnormalThreeSmall = 0;
var music1 = document.getElementsByClassName("music1")[0];
var music2 = document.getElementsByClassName("music2")[0];
var music3 = document.getElementsByClassName("music3")[0];
var music4 = document.getElementsByClassName("music4")[0];
var music5 = document.getElementsByClassName("music5")[0];
var music6 = document.getElementsByClassName("music6")[0];
var firstadjustvalue = 0;
var secondadjustvalue = 0;
var thirdadjustvalue = 0;

MakeNormalDophin();
MakeSmallNormalDophin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io("http://localhost:3000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    this.socket.on("serialdata", (data) => {
      if (data.data[0] == 1) {
        if (data.data[1] == 0 && data.data[2] == 0) {
          voiceOne = 0;
          showvoiceOne = 0;
        } else if (data.data[1] == 9 && data.data[2] == 9) {
          showvoiceOne = 0;
        } else {
          // voiceOne = data.data[1] + data.data[2] - firstadjustvalue;
          // showvoiceOne = data.data[1] + data.data[2] - firstadjustvalue;
          voiceOne = data.data[1] + data.data[2];
          showvoiceOne = data.data[1] + data.data[2];
        }
      } else if (data.data[0] == 2) {
        if (data.data[1] == 0 && data.data[2] == 0) {
          voiceTwo = 0;
          showvoiceTwo = 0;
        } else if (data.data[1] == 9 && data.data[2] == 9) {
          showvoiceTwo = 0;
        } else {
          // voiceTwo = data.data[1] + data.data[2] - secondadjustvalue;
          // showvoiceTwo = data.data[1] + data.data[2] - secondadjustvalue;
          voiceTwo = data.data[1] + data.data[2];
          showvoiceTwo = data.data[1] + data.data[2];
        }
      } else if (data.data[0] == 3) {
        if (data.data[1] == 0 && data.data[2] == 0) {
          voiceThree = 0;
          showvoiceThree = 0;
        } else if (data.data[1] == 9 && data.data[2] == 9) {
          showvoiceThree = 0;
        } else {
          // voiceThree = data.data[1] + data.data[2] - thirdadjustvalue;
          // showvoiceThree = data.data[1] + data.data[2] - thirdadjustvalue;
          voiceThree = data.data[1] + data.data[2];
          showvoiceThree = data.data[1] + data.data[2];
        }
      } else {
        voiceOne = 0;
        voiceTwo = 0;
        voiceThree = 0;
      }
      this.setState({
        settings: data,
      });
    });
  }

  render() {
    music1 = document.getElementsByClassName("music1")[0];
    music2 = document.getElementsByClassName("music2")[0];
    music3 = document.getElementsByClassName("music3")[0];
    music4 = document.getElementsByClassName("music4")[0];
    music5 = document.getElementsByClassName("music5")[0];
    music6 = document.getElementsByClassName("music6")[0];

    //Normal
    if (voiceOne > 60 || voiceTwo > 60 || voiceThree > 60) {
      if (opacityNormal) {
        opacityNormal = 0;
      }
    }

    //Top
    if (voiceOne > 60) {
      if (voiceOne > 80) {
        if (music1 != null) {
          music1.volume = 1;
        }
        if (CountOpacityUnnormalOneBig < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalOneBig[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalOneBig[turnon] = 1;
          CountOpacityUnnormalOneBig++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalOneBig[turnon],
            CountOpacityUnnormalOneBig
          );
        }
      } else {
        if (music2 != null) {
          music2.volume = 1;
        }
        if (CountOpacityUnnormalOneSmall < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalOneSmall[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalOneSmall[turnon] = 1;
          CountOpacityUnnormalOneSmall++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalOneSmall[turnon],
            CountOpacityUnnormalOneSmall
          );
        }
      }
    } else {
      if (music1 != null && music2 != null) {
        music1.volume = 0;
        music2.volume = 0;
      }
    }
    //Medium
    if (voiceTwo > 60) {
      if (voiceTwo > 80) {
        if (music3 != null) {
          music3.volume = 1;
        }
        if (CountOpacityUnnormalTwoBig < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalTwoBig[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalTwoBig[turnon] = 1;
          CountOpacityUnnormalTwoBig++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalTwoBig[turnon],
            CountOpacityUnnormalTwoBig
          );
        }
      } else {
        if (music4 != null) {
          music4.volume = 1;
        }
        if (CountOpacityUnnormalTwoSmall < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalTwoSmall[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalTwoSmall[turnon] = 1;
          CountOpacityUnnormalTwoSmall++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalTwoSmall[turnon],
            CountOpacityUnnormalTwoSmall
          );
        }
      }
    } else {
      if (music3 != null && music4 != null) {
        music3.volume = 0;
        music4.volume = 0;
      }
    }
    //Bottom
    if (voiceThree > 60) {
      if (voiceThree > 80) {
        if (music5 != null) {
          music5.volume = 1;
        }
        if (CountOpacityUnnormalThreeBig < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalThreeBig[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalThreeBig[turnon] = 1;
          CountOpacityUnnormalThreeBig++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalThreeBig[turnon],
            CountOpacityUnnormalThreeBig
          );
        }
      } else {
        if (music6 != null) {
          music6.volume = 1;
        }
        if (CountOpacityUnnormalThreeSmall < 5) {
          var turnon = getRandom(0, 4);
          while (opacityUnnormalThreeSmall[turnon]) {
            turnon = getRandom(0, 4);
          }
          opacityUnnormalThreeSmall[turnon] = 1;
          CountOpacityUnnormalThreeSmall++;
          AdjustUnnormalDprphinOpacity(
            opacityUnnormalThreeSmall[turnon],
            CountOpacityUnnormalThreeSmall
          );
        }
      }
    } else {
      if (music5 != null && music6 != null) {
        music5.volume = 0;
        music6.volume = 0;
      }
    }

    //not in the distance
    if (voiceOne <= 60 && voiceTwo <= 60 && voiceThree <= 60) {
      if (
        music1 != null &&
        music2 != null &&
        music3 != null &&
        music4 != null &&
        music5 != null &&
        music6 != null
      ) {
        music1.volume = 0;
        music2.volume = 0;
        music3.volume = 0;
        music4.volume = 0;
        music5.volume = 0;
        music6.volume = 0;
      }
      opacityNormal = 1;
    }

    return (
      <div className="container">
        <div className="watercontainer">
          <div className="lightcontainer"></div>

          <div className="progress-bar-container">
            <div className="bar-item firstbar">
              <div className="icon-bg">
                <img src="./IMG/打樁.png" className="barimg-one barimg" />
              </div>

              <ProgressBar
                completed={showvoiceOne}
                maxCompleted={100}
                padding="10px"
                width="500px"
                height="50px"
                labelSize="50px"
                barContainerClassName="barContainer"
                className="progress-bar-item"
                customLabel={showvoiceOne + "db"}
                // completedClassName="barCompleted"
                labelClassName="lable"
              />

              <div className="bar-max-line-1"></div>
              <div className="bar-max-line-2"></div>
            </div>
            <img src="./IMG/barbg.png" className="barbgone" />
            <div className="bar-item secondbar">
              <div className="icon-bg">
                <img src="./IMG/風力.png" className="barimg-two barimg" />
              </div>
              <ProgressBar
                completed={showvoiceTwo}
                maxCompleted={100}
                padding="10px"
                width="500px"
                height="50px"
                labelSize="50px"
                barContainerClassName="barContainer"
                className="progress-bar-item"
                customLabel={showvoiceTwo + "db"}
                labelClassName="lable"
                // completedClassName="barCompleted"
              />

              <div className="bar-max-line-1"></div>
              <div className="bar-max-line-2"></div>
            </div>
            <div className="bar-item thirdbar">
              <div className="icon-bg">
                <img src="./IMG/船.png" className="barimg-three barimg" />
              </div>
              <ProgressBar
                completed={showvoiceThree}
                maxCompleted={100}
                padding="10px"
                width="500px"
                height="50px"
                labelSize="50px"
                barContainerClassName="barContainer"
                className="progress-bar-item"
                customLabel={showvoiceThree + "db"}
                labelClassName="lable"
                // completedClassName="barCompleted"
              />

              <div className="bar-max-line-1"></div>
              <div className="bar-max-line-2"></div>
            </div>
          </div>

          <div className="dolphin">{backgroundDopinContainer}</div>
          <div
            className="dolphin normalDophin"
            style={{ opacity: `${opacityNormal}` }}
          >
            {NormalDophinContainer}
          </div>

          <div className="dolphin">
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneBig[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneBig[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneBig[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneBig[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneBig[4]}` }}
            />

            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneSmall[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneSmall[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneSmall[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneSmall[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalOneSmall[4]}` }}
            />

            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoBig[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoBig[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoBig[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoBig[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoBig[4]}` }}
            />

            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoSmall[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoSmall[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoSmall[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoSmall[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalTwoSmall[4]}` }}
            />

            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeBig[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeBig[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeBig[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeBig[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeBig[4]}` }}
            />

            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeSmall[0]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeSmall[1]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeSmall[2]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeSmall[3]}` }}
            />
            <img
              className="unnormalDorphin"
              src=""
              style={{ opacity: `${opacityUnnormalThreeSmall[4]}` }}
            />
          </div>
        </div>
        <div className="music">
          <div>
            <audio className="music1 themusic" autoPlay loop controls>
              <source src="./MUSIC/海事工程＿大.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <video className="music2 themusic" autoPlay loop controls>
              <source src="./MUSIC/海事工程＿小.mp3" type="audio/mpeg" />
            </video>
          </div>
          <div>
            <video className="music3 themusic" autoPlay loop controls>
              <source src="./MUSIC/離岸風電＿大.mp3" type="audio/mpeg" />
            </video>
          </div>
          <div>
            <video className="music4 themusic" autoPlay loop controls>
              <source src="./MUSIC/離岸風電＿小.mp3" type="audio/mpeg" />
            </video>
          </div>
          <div>
            <video className="music5 themusic" autoPlay loop controls>
              <source src="./MUSIC/航運漁事＿大.mp3" type="audio/mpeg" />
            </video>
          </div>
          <div>
            <video className="music6 themusic" autoPlay loop controls>
              <source src="./MUSIC/航運漁事＿小.mp3" type="audio/mpeg" />
            </video>
          </div>
          <div>
            <video className="music7 themusic" autoPlay loop controls>
              <source src="./MUSIC/海洋聲海豚.mp3" type="audio/mpeg" />
            </video>
          </div>
        </div>
        <div className="thecontroller">
          <Form.Label>第一話筒</Form.Label>
          <Form.Range
            min="0"
            max="30"
            onChange={(event) => {
              firstadjustvalue = event.target.value;
              console.log(firstadjustvalue);
            }}
          />
          <Form.Label>第二話筒</Form.Label>
          <Form.Range
            min="0"
            max="30"
            onChange={(event) => {
              secondadjustvalue = event.target.value;
              console.log(secondadjustvalue);
            }}
          />
          <Form.Label>第三話筒</Form.Label>
          <Form.Range
            min="0"
            max="30"
            onChange={(event) => {
              thirdadjustvalue = event.target.value;
              console.log(thirdadjustvalue);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
