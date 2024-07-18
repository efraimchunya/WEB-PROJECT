import React from 'react'
import IMG4 from '../../assets/hostel.jpeg'
import IMG1 from '../../assets/simplecalc.png'
import IMG2 from '../../assets/todoapp.png'
import './myprojects.css'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Simple Calculator App</h3>
            <small className='text-light'>HTML| CSS | JS | ReactJs | MySQL</small>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>To-Do-App</h3>
            <small className='text-light'>HTML | CSS | JS | MySQL</small>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>HOSTEL MANAGEMENT SYSTEM</h3>
            <small className='text-light'>HTML | CSS | JS </small>
        </article>
      </div>
    </section>
  )
}

export default Myprojects