import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import SecondsCounter from "./SecondsCounter";
import reportWebVitals from "./reportWebVitals";

let count = 0;

function mainRender() {
  let mainThing = setInterval(function () {
    const four = Math.floor(count / 1000);
    const three = Math.floor(count / 100);
    const two = Math.floor(count / 10);
    const one = Math.floor(count / 1);

    count++;
    ReactDOM.render(
      <React.StrictMode>
        <SecondsCounter first={one} second={two} third={three} fourth={four} />
        <div className="row">
          <div className="col" id="play" onClick={resumeInt}>
            <span className='texts'>Play</span>
            <a className="btn btn-info btn-lg m-4">
              <i class="fas fa-play"></i>
            </a>
          </div>
          <div className="col" id="pause" onClick={stopInt}>
          <span className='texts'>Stop</span>
            <a className="btn btn-danger btn-lg m-4">
              <i class="fas fa-pause-circle"></i>
            </a>
          </div>
          <div className="col" id="refresh" onClick={resetInt}>
          <span className='texts'>Reset</span>
            <a className="btn btn-success btn-lg m-4">
              <i class="fas fa-redo-alt"></i>
            </a>
          </div>
        </div>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }, 1000);

  function stopInt() {
    clearInterval(mainThing);
  }

  function resumeInt() {
    mainRender();
  }

  function resetInt() {
    mainRender();
    count = 0;
  }

  reportWebVitals();
}

mainRender();
