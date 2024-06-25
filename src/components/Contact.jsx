import React, { Fragment, useEffect, useRef } from 'react'
import { MdEmail, MdAddCall } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";
import '../style/contact.css'

function Contact() {
    const form = useRef();

  useEffect(() => {
    document.title = 'Contact-Us'
  }, [])
  return (
    <Fragment>
      <div className='contact'>
        <div className="row">
          <div className="col-lg-6 col-12">
            <h6>CONTACT US</h6>
            <h2>Get In Touch</h2>
            <div className='group'>
              <MdEmail className='con_icon' />
              <div>
                <h5>Email Address</h5>
                <h6>info@Surajmetal.com</h6>
                <h6>surajmetal505@gmail.com</h6>
              </div>
            </div>
            <div className='group'>
              <MdAddCall className='con_icon' />
              <div>
                <h5>Phone Number</h5>
                <h6>+91-97250 14573</h6>
              </div>
            </div>
            <div className='group'>
              <FaMapMarked className='con_icon' />
              <div className='h6'>
                <h5>Office address</h5>
                <p>A-1,FF Shri Ram Estate opp.,Jagannath Estate GujaratBottling Road Rakhial,Ahmedabad-380023(Gujarat)</p>
              </div>
            </div>
          </div>
          <div className='contact_form col-lg-6 col-12'>
            <h2>INQUIRY</h2>
            <form action="" ref={form} >
              <input type="text" required name="name" id="name" placeholder='Name' />
              <input type="email" required name="email" id="email" placeholder='Email' />
              <input type="text" required name="company_name" id="company_name" placeholder='Company Name' />
              <input type="text" required name="contact_details" id="contact_details" placeholder='Contact Details' />
              <textarea name="message" required id="message" rows="5" placeholder='Message' />
              <button type='submit'>SUBMIT MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact