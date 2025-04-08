import React from 'react';
import './contact.css'; // your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faMobileScreen,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='container-contact mx-auto p-4 mt-24 grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Left Section - Contact Info */}
      <div className='contact-card-info'>
        <h1 className='contact-card-title text-3xl font-bold mb-4'>Get in touch</h1>
        <p className='contact-card-subhead mb-6'>
          Our support team will review your query to respond within 24 hours.
          Feel free to reach us, we happily assist you.
        </p>
        <ul className='space-y-4 mb-4'>
          <li className='contact-card-con'><FontAwesomeIcon icon={faLocationDot} className='contact-card-icon text-gray-700 h-4 w-4' /> Churchill Way, Dallas, TX</li>
          <li className='contact-card-con'><FontAwesomeIcon icon={faPhone} className='contact-card-icon text-gray-700 h-4 w-4' /> +1 234 567 89</li>
          <li className='contact-card-con'><FontAwesomeIcon icon={faMobileScreen} className='contact-card-icon text-gray-700 h-4 w-4' /> +1 234 567 88</li>
          <li className='contact-card-con'><FontAwesomeIcon icon={faEnvelope} className='contact-card-icon text-gray-700 h-4 w-4' /> contact@youroceanwpsite.com</li>
        </ul>

        <h2 className=' contact-card-social-head mt-8 mb-2 font-semibold text-xl'>Social Networks</h2>
        <div className='flex space-x-4 mt-2'>
          <a href="#"><FontAwesomeIcon icon={faFacebook} className='text-2xl hover:text-blue-600 h-8 w-8 m-10' /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} className='text-2xl hover:text-sky-400 h-8 w-8 m-2' /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} className='text-2xl hover:text-red-600 h-8 w-8 m-2' /></a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className='contact-card-form'>
        <form className='space-y-4 '>
          <div>
            <label htmlFor='name' className='block font-bold'>Name <span className='text-red-500'>*</span></label>
            <input type='text' id='name' name='name' className='conatct-name w-full border px-3 py-2 rounded-md' required />
          </div>

          <div>
            <label htmlFor='email' className='block font-bold'>Email <span className='text-red-500'>*</span></label>
            <input type='email' id='email' name='email' className='contact-email w-full border px-3 py-2 rounded-md' required />
          </div>

          <div>
            <label htmlFor='message' className='block font-bold'>Comment or Message</label>
            <textarea id='message' name='message' rows='5' className='contact-msg w-full border px-3 py-2 rounded-md'></textarea>
          </div>

          <button type='submit' className='contact-btn bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800'>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
