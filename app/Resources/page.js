import 'react';
import './resources.css';

const Resources = ()=>{
    return(
        <div className='container-resources mx-auto p-4 mt-24'>
            <div className='container-resources-titles'>
                <h1>Our Resources</h1>
                <p>This solution showcases your curriculum and facilities and connects with parents seeking the best education for their children.</p>
            </div>
            <div className='container-resources-cards'>
                <img src="https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-banner-img-003.jpg"/>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-banner-img-002.jpg'/>
                <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-banner-img-001.jpg'/>
            </div>
            <div className='container-resources-admission'>
                <div>
                    <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-img-001.jpg'/>
                </div>
                <div className='container-resources-admission-info'>
                    <h1>Help your kids discover and unleash Creativity</h1>
                    <p>
                    Welcome to the Kiddy Star website template!
                    Built with the user-friendly Elementor drag-and-drop editor, this template offers complete customization freedom. Easily personalize the content, images, and color scheme to perfectly reflect your kindergarten’s atmosphere and connect with parents and children alike.

                    </p>
                    <button>＞ADMISSION</button>
                </div>
            </div>
        </div>
    );
}
export default Resources;