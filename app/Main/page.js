import 'react';
import './Main.css';

const Main = ()=>{
    return(
        <main className='container-main mx-auto p-4 mt-24'>
            <div className='main-content'>
                <h1 className='main-content-title'>Secure a
                    Better Future
                    For Your <span className='main-content-title-key'>Kids</span></h1>
                <p className='main-content-para-1'>Spark a love of learning in your child's world.</p>
                <p className='main-content-para-2'>Welcome to Kiddy Star, a playful and engaging website template designed to showcase your kindergarten, prep school, tutoring or any other services that come to your mind. Explore our classrooms, meet our educators, and discover the enriching experiences that await your little learners.</p>
                <button className='main-content-button'>＞Learn More</button>
            </div>
            <div className='main-content-img'>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-hero-img-001.jpg' alt='img1' className='main-content-img-1'/> 
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-hero-img-002.jpg' alt='img2' className='main-content-img-2'/> 
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-hero-img-003.jpg' alt='img3' className='main-content-img-3'/> 
            </div>
        </main>
        
    );
}
export default Main;