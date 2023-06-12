import React, { Component } from 'react';
import "./About.css";
import profile_image from '../assets/profile_pic_name.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {profile_image}
                alt="Profile Pic"
                ></img>
            </div>
          </div>

          <div className="split right">
            <div className="centered">
              <div className="name_title"> Luis Alvarado-Labarca </div>
              <div className="brief_description">
                <para> Hi, I'm Luis! I'm currently a third year student at the University of Utah
                      studying Computer Science. Some of my interests in the CS space at the moment are
                      AI, data science, and software development. Outside of school I enjoy watching anime,
                      rollerskating, reading, and gaming.  </para>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}