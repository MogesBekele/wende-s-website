import React from "react";
import "./About.css";
import about_img from "../../assets/photo.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT THE COMPANY</h3>
        <h2>Wende Pension and VAT Report Company</h2>
        <p>
          We provide expert pension and VAT reporting services tailored to meet
          regulatory requirements with precision and ease. Our team ensures that
          your VAT filings are accurate, timely, and compliant, minimizing the
          risk of penalties and streamlining your tax processes.
        </p>
        <p>
          With our pension management services, we handle everything from
          contributions to compliance reporting, ensuring that your obligations
          are met efficiently and effectively. We stay updated on regulatory
          changes, so you don’t have to.
        </p>
        <p>
          Partner with us to simplify the complexities of VAT and pension
          reporting. Our goal is to deliver reliable, professional support,
          allowing you to focus on your business's growth and success.
        </p>
      </div>
    </div>
  );
};

export default About;
