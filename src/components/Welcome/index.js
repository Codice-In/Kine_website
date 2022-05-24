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
                w-full flex justify-center pb-4 bg-black
            '
            style={{
                height: '100vh',
            }}
            data-aos='fade-up'
        >
				<div
					className='w-full flex flex-col justify-center items-center'
					style={{
						backgroundImage: `url(${gif})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
						backgroundPosition: 'center',
					}}
				>
					<h1 className='text-gradient md:text-5xl text-3xl'>WEB 3.0 ARE HERE</h1>
					<a href='/' className='my-btn mt-[200px]'>Learn more about Kinergy</a>
				</div>
			</div>
    );
}

export default Welcome;
