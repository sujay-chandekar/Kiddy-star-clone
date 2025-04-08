import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="container-about mx-auto p-4 mt-24">
            <div className='about-nature'>
                    <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kindergarten.png'/>
                    <div className='about-nature-info'>
                        <h3>Nature</h3>
                        <p>Launch your kindergarten's website with ease using the Kiddy Star template by OceanWP.</p>
                    </div>
            </div>
            <div className='about-playtime'>
                    <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/bear-toy.png'/>
                    <div className='about-nature-info'>
                        <h3>Play Time</h3>
                        <p>Launch your kindergarten's website with ease using the Kiddy Star template by OceanWP.</p>
                    </div>
            </div>
            <div className='about-activities'>
                    <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/pencil-2.png'/>
                    <div className='about-nature-info'>
                        <h3>Activities</h3>
                        <p>Launch your kindergarten's website with ease using the Kiddy Star template by OceanWP.</p>
                    </div>
            </div>
        </div>
    );
};

export default About;