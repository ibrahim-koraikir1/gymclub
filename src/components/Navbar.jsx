import React, {useState} from 'react'

import {Link }  from 'react-router-dom'
import  logo from '../assets/logo-nav.png'
import styles from '../styles/navbar.module.css'

export default function  () {
    const [active , setActive]= useState("home")
    
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt='ig' />
          <span>exercises</span>
        </div>
        <div className={styles.list}>
            <Link to='/'>
                <a className={active === 'home' ? 'underline' : ''} onClick={()=> setActive('home')}>HOME</a>
            </Link>
            <Link to='/exercise'>
                <a className={active === 'exercise' ? 'underline' : ''}  onClick={()=> setActive('exercise')}> exercise </a>
            </Link>
        </div>

    </div>
  )
}
