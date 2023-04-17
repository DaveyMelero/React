import React from 'react';
import '../assets/css/Projects.css';
import project1 from '../assets/css/images/NoteTaker.png'
import project2 from '../assets/css/images/QuizGame.png'
import project3 from '../assets/css/images/Coming-Soon.jpeg'
import project4 from '../assets/css/images/Coming-Soon.jpeg'


export default function Projects() {
  return (
    <div>
      <section className="content-section" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h1 className="mb-0">Projects</h1>
            <p className="mb-">Take a look at some of my  Projects:</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-6">
          <a className="portfolio-item" href="file:///Users/daveymelero/bootcamp/Web-ApIs/Assets/index.html">
              <div className="caption">
                <div className="caption-content">
              
                  <p className="mb-4">This application is a quiz game.</p>
                </div>
              </div>
              <a className="img-fluid" href=""><img className="project1" style={{ width: "100%"}} src={project1} alt="..." /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="https://notetaker-2.herokuapp.com/">
              <div className="caption">
                <div className="caption-content">
                 
                  <p className="mb-4">This application is NoteTaker</p>
                </div>
              </div>
              <a className="img-fluid"  href=""><img className="project2" src={project2} style={{ width: "100%"}} alt="..." /></a>
            </a>
          </div>
          <div className="col-md-6">
          <a className="portfolio-item" href="">
              <div className="caption">
                <div className="caption-content">
                  
                 
                </div>
              </div>
              <a className="img-fluid" href=""><img className="project3 " style={{ width: "100%"}} src={project3} alt="..." /></a>
            </a>
          </div>
           <div className="col-md-6">
          <a className="portfolio-item" href="">
              <div className="caption">
                <div className="caption-content">
                
                  
                </div>
              </div>
              <a className="img-fluid" href="https://github.com/DaveyMelero"><img className="project4" src={project4} style={{ width: "100%"}} alt="..." /></a>
            </a>
          </div> 


          </div>

        </div>
        </div>
      </section>
    </div>
  );
}