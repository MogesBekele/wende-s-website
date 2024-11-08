import React, { useEffect } from 'react'
import './Programs.css'
import { GiSuspensionBridge } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdRecommend } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Programs = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <section className="service section programs">
    <div className="comtainers">

      <div className="row">     
        <div className="service-item" data-aos="fade-down">
          <div className="service-item-inner">
            <div className="icon">
            <GiSuspensionBridge />
            </div>
            <h4>Pension Management</h4>
            <p>
            We offer comprehensive pension management services, ensuring your business stays compliant with all pension regulations while effectively managing contributions and reporting.
            </p>
          </div>
        </div>
      
        <div className="service-item"  data-aos="fade-up">
          <div className="service-item-inner">
            <div className="icon">
            <HiDocumentReport />
            </div>
            <h4>VAT Reporting & Filing</h4>
            <p>
            Our VAT reporting and filing services help you meet all tax obligations with ease, ensuring accurate and timely submissions while minimizing the risk of penalties.
            </p>
          </div>
        </div>
 
        <div className="service-item" data-aos="fade-down">
          <div className="service-item-inner">
            <div className="icon">
            <FaMoneyBillTrendUp />
            </div>
            <h4>Financial Reporting & Analysis</h4>
            <p>
            We provide detailed financial reporting and analysis, offering insights that help you optimize your VAT and pension strategies while maintaining regulatory compliance.
            </p>
          </div>
        </div>
        <div className="service-item" data-aos="fade-up">
          <div className="service-item-inner">
            <div className="icon">
            <MdRecommend />
            </div>
            <h4>Compliance Advisory</h4>
            <p>
            Stay ahead of changing regulations with our expert compliance advisory services, providing guidance and support to ensure your business remains fully compliant with pension and VAT laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
      
  
  )
}

export default Programs
