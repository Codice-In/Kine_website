import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './style.scss';
import gif from '../../assets/imgs/world.gif';
import sub01 from '../../assets/imgs/substrate01.png';
import sub02 from '../../assets/imgs/substrate02.png';
import sub04 from '../../assets/imgs/substrate04.png';

const AppBox = styled.div`
		min-height: 200px;
		width: 400px;
		padding: 20px 60px;
		position: relative;
		border: 1px solid #B026FF;
		transition: transform .5s;

		&:hover {
			border: 1px solid #47C7FA;
			transform: scale(1.08);


			&::before {
				border: 1px solid #47C7FA;
			}
		}

		p {
			line-height: 30px;
			color: rgba(255, 255, 255, .8);
		}

		&::before {
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			border: 1px solid #B026FF;
			transition: all .5s;
			transform: translate(-${props => props.value}%, -${props => props.value}%);
		}
`;

function Home() {
	const [boxTranslate, setBoxTranslate] = useState(-1);
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	useEffect(() => {
        const onScroll = () => {
			if(window.scrollY > 40 && window.scrollY < 1130) {
				if(scrollValue > window.scrollY) {
					if(boxTranslate > 1) {
						setBoxTranslate(boxTranslate - .1);
					}
					setScrollValue(window.scrollY);
				}else{
					if(boxTranslate < 8) {
						setBoxTranslate(boxTranslate + .1);
					}
					setScrollValue(window.scrollY);
				}
			}
		}

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [boxTranslate, scrollValue]);

	const press = () => {
		console.log(boxTranslate);
	}

	const goUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className="home">
			<div className='first' data-aos='fade-up'>
				<div
					className='home-gif'
					style={{
						backgroundImage: `url(${gif})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<h1 className='intro'>WEB 3.0 ARE HERE</h1>
					<a href='/' className='btn'>Learn more about Kinergy</a>
				</div>
			</div>

			<button
				className='btn-goUp'
				onClick={goUp}
				style={{
					display: window.scrollY <= 250 ? 'none' : '',
				}}
			>
				<IoIosArrowUp />
			</button>

			<a href='/'><label className='feedback'>Feedback</label></a>

			<div className='home-content'>
				<AppBox className='box' onClick={press} value={boxTranslate} data-aos='fade-right'>
					<h1>Origin of Kine</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
					</p>
				</AppBox>
				<AppBox className='box' value={boxTranslate} style={{alignSelf: 'flex-end'}} data-aos='fade-left'>
					<h1>What is Kine?</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
					</p>
				</AppBox>
				<AppBox className='box' value={boxTranslate} data-aos='fade-right'>
					<h1>About Festivals</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
					</p>
				</AppBox>

				<div className='home-info'>
					<div className='info'>
						<Controller>
							<Scene duration={2000} offset={50} triggerElement=".info-title" triggerHook={0} pin>
								<div className='info-title'>
									<h1>
										Built with Substrate
									</h1>
								</div>
							</Scene>
							<Scene enabled={false}>
								<div className='info-content'>
									<div className='info-1'>
										<img width={500} height={300} src='https://kusama.network/assets/img/substrate-playground.png' alt='substrate' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
										<div className='btns'>
											<a href='/' className='btn1'>Learn More</a>
											<a href='/' className='btn2'>Substrate PlayGround</a>
										</div>
									</div>

									<div className='info-1'>
										<img width={500} height={300} src={sub01} alt='substrate' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
										<div className='btns'>
											<a href='/' className='btn1'>Learn More</a>
											<a href='/' className='btn2'>Substrate PlayGround</a>
										</div>
									</div>

									<div className='info-1'>
										<img width={500} height={300} src={sub04} alt='substrate' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
										<div className='btns'>
											<a href='/' className='btn1'>Learn More</a>
											<a href='/' className='btn2'>Substrate PlayGround</a>
										</div>
									</div>

									<div className='info-1'>
										<img width={500} height={300} src={sub02} alt='substrate' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
										<div className='btns'>
											<a href='/' className='btn1'>Learn More</a>
											<a href='/' className='btn2'>Substrate PlayGround</a>
										</div>
									</div>
								</div>
							</Scene>
						</Controller>
					</div>

					<div className='info-newsletter' data-aos='fade-down'>
						<h1>Subscribe to our newsletter</h1>
						<input type='email' placeholder='Enter your email' />
						<button>Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
