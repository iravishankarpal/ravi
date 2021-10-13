import React from "react";

function Project() {
  return (
    <div className="projects">

      <div className="container">
          <div className="col">
              <div className="title">
              Presonal projects
              </div>

          </div>
        <div class="card border-0">
          <div class="card-body">
            <h5 class="card-title">RewDigital</h5>
            <p class="card-text">
             video editing protfolio website 
            </p>
            <p class="card-text">
              <small class="text-muted"> &copy; zezo softwere solutions developer ravishankar</small>
            </p>
          </div>
          <iframe className='embed'
            src="https://iravishankarpal.github.io/rewdigital/#/"
            title="rewdigital"
            frameborder="0"
          ></iframe>
        </div>
      </div>



      <div className="container">
        <div class="card border-0">
          <div class="card-body">
            <h5 class="card-title">Covid traker</h5>
            <p class="card-text">
                real time covid traker with map developed in reactjs
            </p>
            <p class="card-text">
              <small class="text-muted"> &copy;  ravishankar</small>
            </p>
          </div>
          <iframe className='embed'
            src="https://iravishankarpal.github.io/react-covid-tracker/"
            title="covid traker"
            frameborder="0"
          ></iframe>
        </div>
      </div>


      <div className="container">
        <div class="card border-0">
          <div class="card-body">
            <h5 class="card-title">Project Delta resource</h5>
            <p class="card-text">
               

Project Delta Resource is a centralization of all important study material and resources, necessary for the Mumbai University Engineering Students to qualify their Semester Examinations with ease. 
            </p>
            <p class="card-text">
              <small class="text-muted"> &copy;  ravishankar</small>
            </p>
          </div>
          <iframe className='embed'
            src="https://projectdeltaresource.home.blog"
            title="Dti"
            frameborder="0"
          ></iframe>
        </div>
      </div>


<div className="container ">


  <div class="card text-center border-0">
  <div class="card-header">
    See all the project and work  on
  </div>
  <div class="card-body">

    <a href="https://github.com/iravishankarpal" class="btn btn-primary">GitHub</a>
  </div>
  </div>
  


</div>


    </div>
  );
}

export default Project;
