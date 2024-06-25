import React, { Fragment, useEffect, useState } from 'react'
import '../../style/Reusable/productCategories.css'
import { NavLink } from 'react-router-dom'

function ProductCategories() {

    
    return (
        <Fragment>
            <div className="reusable_product" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                <h4 className='h4'>Product Categories</h4>
                <div className='product_link'>
                    <NavLink className='link' exact="true" to="/sheet-plates-coils">SHEETS, PLATES & COILS</NavLink>
                    <NavLink className='link' exact="true" to="/pipes-tubes">PIPES AND TUBES</NavLink>
                    <NavLink className='link' exact="true" to="/ind-valves">INDUSTRIAL VALVES</NavLink>
                    <NavLink className='link' exact="true" to='/ind-flanges'>INDUSTRIAL FLANGES</NavLink>
                    <NavLink className='link' exact="true" to="/ss-fasteners">SS FASTENERS</NavLink>
                    <NavLink className='link' exact="true" to="/dairy-valves">DAIRY VALVES</NavLink>
                    <NavLink className='link' exact="true" to="/angle-channel-flats">ANGLE, CHANNEL & FLATS</NavLink>
                    <NavLink className='link' exact="true" to="/bar-rods">BARS, WIRES & RODS</NavLink>
                </div>
            </div>
        </Fragment>
    )
}


export default ProductCategories
