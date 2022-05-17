import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Welcome = ({ gif }) => {
    useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

    return (
        <div
            className='
                w-full flex justify-center pb-10 bg-black
            '
            style={{
                height: '100vh',
            }}
            data-aos='fade-up'
        >
				<div
					className='home-gif'
					style={{
						backgroundImage: `url(${gif})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<h1 className='text-gradient'>WEB 3.0 ARE HERE</h1>
					<a href='/' className='btn'>Learn more about Kinergy</a>
				</div>
			</div>
    );
}

export default Welcome;
