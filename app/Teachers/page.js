import 'react';
import './teacher.css';
import { Geist, Geist_Mono } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Main = ()=>{
    return(
        <div>
         <div className='container-teacher-heading'>Our<span>Teachers</span></div>
        <div className='container-teacher mx-auto p-4 mt-24'>
            <div className='container-teacher-info'>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-teacher-001.jpg'/>
                <h1>Emma Johnson</h1>
                <div className='container-teacher-social-icon'>
                    <span className="flex space-x-4">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl hover:text-blue-800" />
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl hover:text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl hover:text-pink-700" />
                    </span>
                </div>
            </div>
            <div className='container-teacher-info'>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-teacher-002.jpg'/>
                <h1>Isabella Davis</h1>
                <div className='container-teacher-social-icon'>
                    <span className="flex space-x-4">
                        <FontAwesomeIcon icon={faFacebook} className="m-2 text-blue-600 text-xl hover:text-blue-800" />
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl hover:text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl hover:text-pink-700" />
                    </span>
                </div>
            </div>
            <div className='container-teacher-info'>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-teacher-003.jpg'/>
                <h1>Olivia Rodriguez</h1>
                <div className='container-teacher-social-icon'>
                    <span className="flex space-x-4">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl hover:text-blue-800" />
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl hover:text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl hover:text-pink-700" />
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Main;