import React, { Fragment } from 'react'
import '../../style/Reusable/footer.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
// import SM from '/images/SM.png'

function Footer() {
    return (
        <Fragment>
            <div className='bg-dark'>
                <div className='footer container-xl'>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            {/* <img src={SM} alt="Image Not Found" /> */}
                            <p className='text-justify'>Our Products Are Highly Demanded In The Market By Various Industries. Modern Accessories Manufacture Our Products, And The Materials Used By Our Team Are Qualitative.</p>
                            <div className='footer_social_icon'>
                                <FaFacebookSquare className='fsi' />
                                <FaInstagram className='fsi' />
                                <FaTwitterSquare className='fsi' />
                                <FaLinkedin className='fsi' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <h4 className='text-primary'>Products</h4>
                            <div className='row'>
                                <div className="col-6">
                                    <li><NavLink className='link'>SHEEST,PLATES & COILS</NavLink></li>
                                    <li><NavLink className='link'>PIPES AND TUBES</NavLink></li>
                                    <li><NavLink className='link'>INDUSTRIAL VALVES</NavLink></li>
                                    <li><NavLink className='link'>INDUSTRIAL FLANGES</NavLink></li>
                                </div>
                                <div className="col-6">
                                    <li><NavLink className='link'>SS FASTENERS</NavLink></li>
                                    <li><NavLink className='link'>DAIRY VALVES</NavLink></li>
                                    <li><NavLink className='link'>ANGLE, CHANNEL & FLATS</NavLink></li>
                                    <li><NavLink className='link'>BARS, WIRES & RODS</NavLink></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                            <h4 className='text-primary'>Company</h4>
                            <li><NavLink className='link'>Company Overview</NavLink></li>
                            <li><NavLink className='link'>Our Goals</NavLink></li>
                            <li><NavLink className='link'>Certificates</NavLink></li>
                        </div>
                        
                    </div>
                </div>
                <hr />
                <div className='footer_second container-xl'>
                    <p>Copyright © {new Date().getFullYear()}, All rights reserved. Powered by Krishna Metal .</p>
                    <p>Design & Developed by <Link to='https://www.linkedin.com/in/ayush-namdhar-8ba009216/' target='_blank' className='text-danger'>Ayush Namdhar</Link> </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer