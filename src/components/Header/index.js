import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs';

import './style.scss';

const Header = () => {
    const iconSize = 22;

    return(
        <header>
            <div className='header-main'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <h1>KINERGY</h1>
                    </div>

                    <div className='header-content'>
                        <div className='header-links'>
                            <a href='/'>Home</a>
                            <a href='/festivals'>Festivals</a>
                            <a href='/community'>Community</a>
                            <a href='/'>Whitepaper</a>
                            <a href='/'><BsDiscord size={iconSize} /></a>
                            <a href='/'><BsGithub size={iconSize} /></a>
                            <a href='/'><BsTwitter size={iconSize} /></a>
                        </div>

                        <a className='header-btn' href='/'>Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
