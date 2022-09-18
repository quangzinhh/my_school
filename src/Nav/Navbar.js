import HomePage from '../Page/Home'
import AboutPage from '../Page/About'
import UniformPage from '../Page/Uniform'
import BlogPage from '../Page/Blog'
import ContactPage from '../Page/Contact'
import clsx from 'clsx'
import styles from './Navbar.module.css'
import {Routes, Route, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { FiMenu } from "react-icons/fi";

function ColorSchemesExample() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <>
      <div className={styles.nav}>
              <li className={styles.nhc_logo}>
                  <img name='img1' src={require("../img/logo_nhc.png")} />
              </li>
              <li className={styles.schoolname}>
                        TRƯỜNG THPT NGUYỄN HỮU CẢNH
              </li>
      {(toggleMenu || screenWidth > 500) && (
            <ul className={styles.list}> 
              <li className={styles.items}>
                <Link to="/" className={styles.item} onClick={toggleNav}>
                      Home
                </Link>
              </li>
              <li className={styles.items}>
                <Link to="/About" className={styles.item} onClick={toggleNav}>
                    About
                </Link>
              </li>
              <li className={styles.items}>
                <Link to="/Uniform" className={styles.item} onClick={toggleNav}>
                      Uniform
                </Link>
              </li>
              <li className={styles.items}>
                <Link to="/Blog" className={styles.item} onClick={toggleNav}>
                    Blog
                </Link>
              </li>
              <li className={styles.items}>
                <Link to="/Contact" className={styles.item} onClick={toggleNav}>
                    Contact
                </Link>
              </li>
            </ul>
      )}

  <button onClick={toggleNav} className={styles.btn}><FiMenu/></button>
          
      </div>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/Uniform' element={<UniformPage/>}/>
          <Route path='/Blog' element={<BlogPage/>}/>
          <Route path='/Contact' element={<ContactPage/>}/>
        </Routes>
    </>
  );
}

export default ColorSchemesExample;
