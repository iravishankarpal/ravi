import React from "react";
import {
  SiC,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
// import {Link} from 'react-router-dom'
function Work() {
  return (
    <div id="Works">
      <div className="row row-intro">
        <div className="col-12">
          <div className="intro">work experience</div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 work">
        <div class="col">
          <div class="card h-70 border-0">
            <img
              src="https://zezo.in/img/logo/header-light.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Zezo</h5>
              <p class="card-text">Jr backend developer</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">currnetly</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-70 border-0">
            <img
              src="https://projectdeltaresourcehome.files.wordpress.com/2019/04/deltastamp-1.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">delta the innovaters</h5>
              <p class="card-text">fornt end developer</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">2019-2020</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-70 border-0">
            <img
              src="https://projectdeltaresourcehome.files.wordpress.com/2019/04/deltastamp-1.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Delta the innovaters</h5>
              <p class="card-text">CPO</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">2019-2020</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-intro">

        <div className="col-md-6">
          <div className="intro">Programing Language</div>
          <div className="row m-5">
            <div className="col">
              <div className="language-icons">
                <SiHtml5 />
              </div>
              <div className="language-name">html</div>
            </div>

            <div className="col">
              <div className="language-icons">
                <SiCss3 />
              </div>
              <div className="language-name">css</div>
            </div>

            <div className="col">
              <div className="language-icons">
                <SiJavascript />
              </div>
              <div className="language-name">js</div>
            </div>
          </div>
          <div className="row m-5">
            <div className="col">
              <div className="language-icons">
                <SiNodedotjs />
              </div>
              <div className="language-name">Nodejs</div>
            </div>
            <div className="col">
              <div className="language-icons">
                <SiPython />
              </div>
              <div className="language-name">python</div>
            </div>

            <div className="col">
              <div className="language-icons">
                <SiC />
              </div>
              <div className="language-name">c</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="intro">Framework</div>

          <div className="row m-5">
            <div className="col">
              <div className="language-icons">
                <SiLaravel />
              </div>
              <div className="language-name">Laravel</div>
            </div>
            <div className="col">
              <div className="language-icons">
                <SiReact />
              </div>
              <div className="language-name">Reactjs</div>
            </div>
          </div>
          <div className="row m-5">
            <div className="col">
              <div className="language-icons">
                <SiMysql />
              </div>
              <div className="language-name">Mysql</div>
            </div>
            <div className="col">
              <div className="language-icons">
                <SiMongodb />
              </div>
              <div className="language-name">

              Mongodb
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="container ">
  <div className="col">
    <div className="title">
      Working on Development
    </div>
  </div>


      <div class="card working-card mb-3 border-0">
  <img class="card-img-top"  src="https://iravishankarpal.github.io/dhoomx/images/logo.png" alt="Cardcap"/>
  <div class="card-body">
    <h3 class="card-title"><a href="https://iravishankarpal.github.io/dhoomx/#/dhoomx/" > Dhoomx </a> </h3>
    <p class="card-text">Dhoomx is streming website developed in react js </p>
    <p class="card-text"><small class="text-muted"> &copy; zezo softwere solutions developer ravishanakr</small></p>
  </div>
</div>
      <hr />
</div>
      <br />
    </div>

    
  );
}

export default Work;
