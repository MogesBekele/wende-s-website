import React, { useRef } from 'react'
import './Testimonail.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/photo1.jpg'
import user_2 from '../../assets/photo2.webp'
import user_3 from '../../assets/photo3.jfif'
import user_4 from '../../assets/photo4.jfif'


const Testimonail = () => {

  const slider = useRef()
  let tx = 0;
  const slideForward = ()=>{
  if(tx>-75){
    tx-=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`

  }
  const slideBackward = ()=>{

    if(tx<0){
      tx+=25
    }
   slider.current.style.transform = `translateX(${tx}%)`

  }
  return (
    <div className='testimonails'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Hassen Yasin</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                </div>
                <p>Working with this team has made VAT filing stress-free. Their expertise and attention to detail ensure everything is handled accurately and on time!</p>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Yohanes Asegid</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                </div>
                <p>Their pension management services are outstanding. They’ve helped us stay compliant and made the whole process so much easier to understand and manage.</p>
             
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Selamawit Abebe</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                </div>
                <p>I couldn’t be happier with their services! They keep us informed on regulatory updates and handle every detail of our VAT reports with precision.</p>
            
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Dawit Solomon</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                </div>
                <p>Reliable, efficient, and knowledgeable—this company has transformed our approach to pension and VAT compliance. Highly recommended!</p>
           
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonail
