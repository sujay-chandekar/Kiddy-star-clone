import 'react';
import './creatvity.css';
import { Geist, Geist_Mono } from "next/font/google";

const Creativity = ()=>{
    return(
        <div className='container-creatvity mx-auto p-4 mt-24'>
            <div className='container-creatvity-box'>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-hero-img-002.jpg'/>
                <div className='container-creatvity-box-info'>
                    <h1>Check if we're the right choice for your child.
                    Take the online quiz now</h1>
                    <p>
                    Share your educational philosophy, core values, and the passionate educators who nurture young minds. Highlight your unique offerings, such as extracurricular activities, play-based learning, or specialized programs.
                    </p>
                    <button>＞CONTACT US</button>
                </div>
            </div>
            <div className='container-creatvity-info'>
                    <div className='container-creatvity-info-title'>
                    Traditional in -person classroom encourages students to
                    </div>
                    <div className='container-creatvity-info-list'>
                       <ul>
                        <li>
                        Grow patience and ability to focus over a longer period of times.
                        </li>
                        <li>
                            Engage with their peers.
                        </li>
                        <li>
                            Learn in a safe and inclusive environment.
                        </li>
                       </ul>
                    </div>
            </div>
            <div className='container-creatvity-stud'>
                <div className='container-creatvity-stud-title'>Our March's Superstars</div>
                <div className='container-creatvity-stud-card'>
                    <div className='container-creatvity-stud-card-info'>
                        <img src="https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-kid-001.jpg"/>
                        <div className='container-creatvity-stud-card-details'>
                        <ul>
                            <li><h1>Jaydn Niles</h1></li>
                            <li>Age 5</li>
                            <li>From Ethiopia</li>
                        </ul>
                        </div>
                    </div>
                    <div className='container-creatvity-stud-card-info'>
                        <img src="https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-kid-002.jpg"/>
                        <div className='container-creatvity-stud-card-details'>
                        <ul>
                            <li><h1>Lisa Ava</h1></li>
                            <li>Age 6</li>
                            <li>From Columbia</li>
                        </ul>
                        </div>
                    </div>
                    <div className='container-creatvity-stud-card-info'>
                        <img src="https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-kid-003.jpg"/>
                        <div className='container-creatvity-stud-card-details'>
                        <ul>
                            <li><h1>Sophia Mia</h1></li>
                            <li>Age 8</li>
                            <li>From Ireland</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Creativity;