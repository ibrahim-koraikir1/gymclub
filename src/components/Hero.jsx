import React from 'react'
import styles from '../styles/hero.module.css'
import Navbar from './Navbar'
export default function Hero() {
  return (
    <div className={styles.Hero}
    >
        <Navbar/>
        <div className={styles.title}>
          <h2 className={styles.h2}>Fitness Club</h2>
           <h1 className={styles.hading}>
           Sweat, Smile <br />
            And Repeat
           </h1>
           <div className={styles.dis}>
           Check out the most effective exercises personalized to you
           </div>
           <button className={styles.btn}>
           Explore Exercises
           </button>
        </div> 
    </div>
  )
}
