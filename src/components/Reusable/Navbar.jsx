import React, { Fragment, useState } from 'react'
import '../../style/Reusable/navbar.css'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [open, setOpen] = useState();


    const media_full_width = document.getElementById('media_full_width');
    media_full_width && media_full_width.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() == 'a') {
            if (e.target.className.split(' ').includes('link')) {
                setOpen(false);
            }
        }
    })



    return (
        <Fragment>
            <div className="custom_navbar">
                <div className="navbar_content">
                    <div className="navbar_logo">
                        <h4>logo</h4>
                    </div>
                    <div className="navbar_element">
                        <div>
                            <li>
                                <NavLink className='link' to='/'>Home</NavLink>
                            </li>
                        </div>
                        <div>
                            <li className='navbar_dropdown'>
                                <div className='link' style={{ display: 'flex', alignItems: 'center' }}>About Company <IoIosArrowDown className='ms-2' /></div>
                                <div className='dropdown_menu'>
                                    <NavLink className='link' to="/company-profile">Company Overview</NavLink>
                                    <NavLink className='link' to="/our-goals">Our Goals</NavLink>
                                    <NavLink className='link' to="/certificates">Certificates</NavLink>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li className='navbar_dropdown'>
                                <div className='link' style={{ display: 'flex', alignItems: 'center' }}>Our Products <IoIosArrowDown className='ms-2' /></div>
                                <div className='dropdown_menu'>
                                    <NavLink className='link' to="/sheet-plates-coils">Sheets,Plates & Coils</NavLink>
                                    <NavLink className='link' to="/pipes-tubes">Pipes & Tubes</NavLink>
                                    <NavLink className='link' to="/ind-valves">Industrial Valves</NavLink>
                                    <NavLink className='link' to="/ind-flanges">Industrial Flanges</NavLink>
                                    <NavLink className='link' to="/ss-fasteners">SS Fasteners</NavLink>
                                    <NavLink className='link' to="/dairy-valves">Dairy Valves</NavLink>
                                    <NavLink className='link' to="/angle-channel-flats">Angle, Channel & Flats</NavLink>
                                    <NavLink className='link' to="/bar-rods">Bars, Wires & Rods</NavLink>
                                </div>
                            </li>
                        </div>
                        <div>
                            <li><NavLink className='link' to='/application'>Applications</NavLink></li>
                        </div>
                        <div>
                            <li><NavLink className='link' to='/contact'>Contact Us</NavLink></li>
                        </div>
                    </div>
                    <div className='need_help'>
                        <FaPhone className='me-3' style={{ fontSize: '30px' }} />
                        <a href="tel:+91 95744 45869"> Need Help?<br />95744 45869</a>
                    </div>
                </div>
            </div>
            <div className='media_custom_navbar'>
                <div className='flex_item_navbar'>
                    <div className='media_bg'>
                        {/* <img src={A} alt="Image Not Found" /> */}
                        <h4>Logo</h4>
                    </div>
                    <div className='media_menubar'>
                        <CgMenuRightAlt onClick={() => setOpen(true)} className='menu_icon' />
                    </div>
                </div>
            </div>
            <div className={`${open && 'background_overlay'}`}></div>
            <div id='media_full_width' className={`media_full_width ${open && 'media_close_full_width'}`}>
                <div className='close_button c'>
                    <IoMdClose className='close_icon' onClick={() => setOpen(false)} />
                </div>
                <div className="media_close_text">
                    <NavLink className='link'>Home</NavLink>
                    <div className="dropdown">
                        <input type="checkbox" id="dropdown" />
                        <label htmlFor="dropdown" className="dropdown-btn">
                            <span style={{ padding: '10px 30px' }}>About Company</span>
                            <span className="arrow"></span>
                        </label>

                        <div className="dropdown-content" role="menu">
                            <NavLink className='link drop_link' to="/company-profile">Company Overview</NavLink>
                            <NavLink className='link drop_link' to="/our-goals">Our Goals</NavLink>
                            <NavLink className='link drop_link' to="/certificates">Certificates</NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <input type="checkbox" id="dropdown-one" />
                        <label htmlFor="dropdown-one" className="dropdown-btn">
                            <span style={{ padding: '10px 30px' }}>Our Products</span>
                            <span className="arrow"></span>
                        </label>

                        <div className="dropdown-content" role="menu">
                            <NavLink className='link drop_link' to="/sheet-plates-coils">Sheets,Plates & Coils</NavLink>
                            <NavLink className='link drop_link' to="/pipes-tubes">Pipes & Tubes</NavLink>
                            <NavLink className='link drop_link' to="/ind-valves">Industrial Valves</NavLink>
                            <NavLink className='link drop_link' to="/ind-flanges">Industrial Flanges</NavLink>
                            <NavLink className='link drop_link' to="/ss-fasteners">SS Fasteners</NavLink>
                            <NavLink className='link drop_link' to="/dairy-valves">Dairy Valves</NavLink>
                            <NavLink className='link drop_link' to="/angle-channel-flats">Angle, Channel & Flats</NavLink>
                            <NavLink className='link drop_link' to="/bar-rods">Bars, Wires & Rods</NavLink>
                        </div>
                    </div>
                    <NavLink className='link' to='/application'>Applications</NavLink>
                    <NavLink className='link' to='/contact'>Contact Us</NavLink>
                    <div className='need_help'>
                        <FaPhone className='me-3' style={{ fontSize: '30px' }} />
                        <a href="tel:+91 97250 14573"> Need Help?<br />97250 14573</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar