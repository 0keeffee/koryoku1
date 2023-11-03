import React from "react";
import { FilledMediumFilled } from "../../components/FilledMediumFilled";
import { TextLargeText } from "../../components/TextLargeText";
import { PauseFill1 } from "../../icons/PauseFill1";
import { PersonCircle } from "../../icons/PersonCircle";
import { PlayFill1 } from "../../icons/PlayFill1";
import { Selectarrow1 } from "../../icons/Selectarrow1";
import { Selectarrow2 } from "../../icons/Selectarrow2";
import { Selectarrow3 } from "../../icons/Selectarrow3";
import { Selectarrow4 } from "../../icons/Selectarrow4";
import { Stopwatch1 } from "../../icons/Stopwatch1";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background-color" />
          <div className="upcoming-tasks">
            <div className="upcoming-task">
              <div className="overlap-group">
                <div className="rectangle-bottom" />
                <div className="today">Prepare audition</div>
                <div className="text-wrapper">01/11/23</div>
                <div className="today-2">3h</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-bottom" />
                <div className="today-3">Film video</div>
                <div className="text-wrapper">05/11/23</div>
                <div className="today-2">10h</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group">
                <div className="rectangle-bottom" />
                <div className="today-3">Record song</div>
                <div className="text-wrapper">28/10/23</div>
                <div className="today-2">6h</div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="rectangle-top" />
              <div className="see-all">
                <div className="overlap-3">
                  <Selectarrow1 className="selectarrow-1" />
                  <div className="text-wrapper-2">See all</div>
                </div>
              </div>
              <div className="upcoming-text-wrapper">
                <div className="text-wrapper-3">Upcoming tasks</div>
              </div>
            </div>
          </div>
          <div className="current-tasks">
            <div className="overlap-4">
              <div className="rectangle-current" />
              <div className="rectangle-current-2" />
              <div className="rectangle-current-3" />
              <div className="time-spent">
                <div className="element">5min</div>
                <div className="element-2">1h</div>
                <div className="element-3">20min</div>
              </div>
              <div className="date">
                <div className="element">01/10/23</div>
                <div className="element-2">30/09/23</div>
                <div className="element-3">25/09/23</div>
              </div>
              <div className="tasks-name">
                <div className="element-4">Post on my blog</div>
                <div className="element-5">Complete math exercises</div>
                <p className="p">Upload birthday pictures to drive</p>
              </div>
            </div>
            <div className="indications">
              <div className="text-wrapper-4">Name</div>
              <div className="text-wrapper-5">Date</div>
              <div className="text-wrapper-6">Time spent</div>
            </div>
            <div className="current-tasks-title">
              <div className="overlap-5">
                <div className="rectangle-top-2" />
                <div className="see-all-2">
                  <div className="overlap-group-2">
                    <Selectarrow2 className="selectarrow-2" />
                    <div className="text-wrapper-7">See all</div>
                  </div>
                </div>
                <div className="arrows">
                  <Selectarrow3 className="selectarrow-3" />
                  <Selectarrow4 className="selectarrow-4" />
                </div>
                <div className="text-wrapper-8">Today</div>
                <div className="current-tasks-2">Current Tasks (8)</div>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="time-spent-2">
              <div className="overlap-group-3">
                <div className="whole-card" />
                <p className="element-6">
                  <span className="span">5</span>
                  <span className="text-wrapper-9">h&nbsp;&nbsp;</span>
                  <span className="text-wrapper-10">30</span>
                  <span className="text-wrapper-9">m</span>
                </p>
                <div className="in-progress-wrapper">
                  <div className="text-wrapper-3">Time spent</div>
                </div>
              </div>
            </div>
            <div className="completed-tasks">
              <div className="overlap-6">
                <div className="overlap-group-4">
                  <div className="element-7">4</div>
                  <div className="spinner">
                    <div className="spinner-secondary">
                      <img
                        className="spinner-atom"
                        alt="Spinner atom"
                        src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/6544bfce7f31bd0307107fb7/img/spinner-atom-9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="completed-task">Completed Tasks</div>
              </div>
            </div>
            <div className="in-progress-tasks">
              <div className="overlap-7">
                <div className="overlap-group-5">
                  <div className="spinner">
                    <div className="spinner-secondary">
                      <img
                        className="spinner-atom"
                        alt="Spinner atom"
                        src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/6544bfce7f31bd0307107fb7/img/spinner-atom-10.svg"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper-11">6</div>
                </div>
                <div className="in-progress">In Progress Tasks</div>
              </div>
            </div>
          </div>
          <div className="upper">
            <div className="pomodoro-timer-card">
              <div className="overlap-group-6">
                <div className="text-wrapper-12">Les Amants, René Magritte</div>
                <div className="text-wrapper-13">25:00</div>
                <Stopwatch1 className="stopwatch-1" />
                <div className="play-stop">
                  <PlayFill1 className="play-fill" />
                  <PauseFill1 className="pause-fill" />
                </div>
                <div className="overlap-8">
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/65429680581058b13a9212a5/img/vector.svg"
                  />
                  <img
                    className="img"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/6544bfce7f31bd0307107fb7/img/vector-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="best-results">
              <div className="overlap-9">
                <div className="overlap-10">
                  <div className="uprectangle-right" />
                  <div className="days">
                    <div className="text-wrapper-14">Jan</div>
                    <div className="text-wrapper-15">Feb</div>
                    <div className="text-wrapper-16">Mar</div>
                    <div className="text-wrapper-17">Apr</div>
                    <div className="text-wrapper-18">May</div>
                    <div className="text-wrapper-19">Jun</div>
                    <div className="text-wrapper-20">Jul</div>
                    <div className="overlap-group-7">
                      <img
                        className="vector-2"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/65424d8194591929122195ac/img/vector-1.svg"
                      />
                      <div className="points">
                        <div className="ellipse" />
                        <div className="ellipse-2" />
                        <div className="ellipse-3" />
                        <div className="ellipse-4" />
                        <div className="ellipse-5" />
                        <div className="ellipse-6" />
                        <div className="ellipse-7" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-21">Best Results</div>
              </div>
            </div>
            <div className="working-hours">
              <div className="overlap-11">
                <div className="overlap-group-8">
                  <div className="uprectangle-right-2" />
                  <div className="rsc">
                    <img
                      className="charts-working-hours"
                      alt="Charts working hours"
                      src="https://cdn.animaapp.com/projects/653bf5d18b06d89c1e557f8d/releases/65424d8194591929122195ac/img/charts-working-hours@2x.png"
                    />
                    <div className="days-2">
                      <div className="text-wrapper-22">M</div>
                      <div className="text-wrapper-23">T</div>
                      <div className="text-wrapper-24">W</div>
                      <div className="text-wrapper-25">T</div>
                      <div className="text-wrapper-26">F</div>
                      <div className="text-wrapper-27">S</div>
                      <div className="text-wrapper-28">S</div>
                    </div>
                    <div className="hours-graphic">
                      <div className="text-wrapper-29">10h</div>
                      <div className="text-wrapper-30">5h</div>
                      <div className="text-wrapper-31">1h</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-32">Working Hours</div>
              </div>
            </div>
            <div className="text-wrapper-33">My Weekly Activity</div>
          </div>
          <footer className="FOOTER">
            <div className="overlap-12">
              <div className="rectangle" />
              <div className="desktop-footer">
                <p className="item-item-item">
                  <span className="text-wrapper-34">Item 1</span>
                  <span className="text-wrapper-35"> | </span>
                  <span className="text-wrapper-34">Item 2</span>
                  <span className="text-wrapper-35"> | </span>
                  <span className="text-wrapper-34"> Item 3</span>
                </p>
              </div>
              <div className="row">
                <div className="col-md">
                  <p className="text-wrapper-36">© 2000 - Company, Inc. All rights reserved. Address Address</p>
                </div>
              </div>
            </div>
          </footer>
          <div className="navbar">
            <div className="overlap-13">
              <div className="rectangle-2" />
              <div className="desktop-top-navbar">
                <div className="logo">
                  <div className="logo-2">
                    <div className="text-wrapper-37">KorYoku</div>
                  </div>
                </div>
                <FilledMediumFilled
                  className="filled-medium-filled-button"
                  divClassName="filled-medium-filled-instance"
                  states="default"
                  text="Sign out"
                />
                <div className="text-large-text-2">
                  <div className="text-wrapper-38">DASHBOARD</div>
                </div>
                <TextLargeText
                  className="text-large-text-button"
                  divClassName="text-large-text-instance"
                  states="default"
                  text="Goals"
                />
                <TextLargeText
                  className="text-large-text-button-instance"
                  divClassName="design-component-instance-node"
                  states="default"
                  text="About us"
                />
                <div className="overlap-group-9">
                  <div className="ellipse-8" />
                  <PersonCircle className="person-circle" color="#2C412C" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
