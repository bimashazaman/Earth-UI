import React from 'react'
import styles from '../../styles/HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      {/* <video src='../../public/video.mp4' autoplay loop muted></video> */}
      <video src={require('../../public/video.mp4')} autoPlay loop muted />
      <div className={styles.heroInner}>
        <h1 className=' text-4xl font-bold text-white shadow-inner md:text-6xl'>
          Developers Media
        </h1>
        <div className=' text-gray-400 text-xl'>
          Where Developers Meet, Where talent lives
        </div>
      </div>
    </div>
  )
}

export default HeroSection
