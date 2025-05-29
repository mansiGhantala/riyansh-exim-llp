import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const[isProductHover,setIsProductHover] = useState(false)
  return (<>  
  <section className='url_section'>
  <div className='url_logo'>
    {/* <img src='/icon.png' alt='Riyansh Logo'  /> */}
    <p>Riyansh Exim LLP</p>
  </div>
  <div className='url_link'>
    <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <div className='product_menu' onMouseEnter={()=>setIsProductHover(true)} onMouseLeave={()=>setIsProductHover(false)}>
<NavLink>Product</NavLink>       
    {isProductHover && (
            <div className='dropdown'>
            <NavLink to='/product/ghee'>Ghee</NavLink>
            <NavLink to='/product/honey'>Honey</NavLink>
            <NavLink to='/product/grains'>Grains</NavLink>
            <NavLink to='/product/pulses'>Pulses</NavLink>
            <NavLink to='/product/spices'>Spices</NavLink>
            <NavLink to='/product/hair-washPowder'>Hairwash Powder</NavLink>
            <NavLink to='/product/ground-spices'>Ground Spices</NavLink>
            <NavLink to='/product/dry-fruits'>Dry Fruits</NavLink>
            <NavLink to='/product/oil-seeds'>Oil Seeds</NavLink>
            <NavLink to='/product/cotton-bales'>Cotton Bales</NavLink>
            </div>
           )}
        </div>
        <NavLink to='/contact-us'>Contact Us</NavLink>

        </div>
        </section>
  </>
  )
}

export default Navbar