import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/john-doe-image2.png";
import ProfilePic3 from "../Assets/jane-doe-image.png";
import ProfilePic4 from "../Assets/jane-doe-image2.png";


const Speakers = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Speakers</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="speakers-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        
        <h2>John Doe</h2>
        <img src={ProfilePic2} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        
        <h2>Brian Gomez</h2>
         <img src={ProfilePic3} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        
        <h2>Jane Hill</h2>
         <img src={ProfilePic4} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        
        <h2>Tasha Sanders</h2>
      </div>
    </div>
  );
};

export default Speakers;
