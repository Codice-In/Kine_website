import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

import './style.scss'

export default function TeamCard({ name, image, role, twitter, github, linkedin }) {
    return (
        <div className='card-box white-glassmorphism'>
            <img
                className='card-box-img'
                src={image}
                alt='team'
            />
            
            <div className='card-info'>
                <h2 className='card-box-name'>{name}</h2>

                <hr />
                
                <p className='card-box-title'>{role}</p>
                
                <div className='card-box-social'>
                    <a href={twitter}>
                        <BsTwitter size={22} />
                    </a>
                    <a href={linkedin}>
                        <BsLinkedin size={22} />
                    </a>
                    <a href={github}>
                        <BsGithub size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
}
