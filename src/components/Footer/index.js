import './style.scss';

const Footer = () => {
    return(
        <footer className='gradient-bg-footer'>
            <div className='footer-main'>
                <div className='footer-content'>
                    <div className='footer-link-group'>
                        <div className='column'>
                            <h2>Developers</h2>
                            <div className='footer-links'>
                                <a href='/'>Guide</a>
                                <a href='/'>Github</a>
                                <a href='/'>Technical Riot Chat</a>
                                <a href='/'>Web3 Foundation Grants</a>
                                <a href='/'>Governance Chat</a>
                                <a href='/'>Validator Chat</a>
                            </div>
                        </div>

                        <div className='column'>
                            <h2>Community</h2>
                            <div className='footer-links'>
                                <a href='/'>Community Hub</a>
                                <a href='/'>Ambassador Program</a>
                                <a href='/'>Meetup Hub</a>
                                <a href='/'>Find a Local Meetup</a>
                                <a href='/'>Blog</a>
                                <a href='/'>Brand Assets</a>
                            </div>
                        </div>

                        <div className='column'>
                            <h2>Social</h2>
                            <div className='footer-links'>
                                <a href='/'>Discord</a>
                                <a href='/'>Watercooler Riot Chat</a>
                                <a href='/'>Twitter</a>
                                <a href='/'>Reddit</a>
                                <a href='/'>YouTube</a>
                                <a href='/'>Crowdcast Webinars</a>
                            </div>
                        </div>

                        <div className='column'>
                            <h2>Info</h2>
                            <div className='footer-links'>
                                <a href='/'>Support</a>
                                <a href='/'>Polkadot</a>
                                <a href='/'>Substrate</a>
                                <a href='/'>Careers</a>
                                <a href='/'>Web3 Foundation</a>
                                <a href='/'>Parity Technologies</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p>© 2022 Kinergy</p>
                        
                        <ul>
                            <li><a href='/'>Privacy Policy</a></li>
                            <li><a href='/'>Terms and Conditions</a></li>
                            <li><a href='/'>Cookie Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
