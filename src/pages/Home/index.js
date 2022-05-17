import { useEffect, useState } from 'react';
import { BsStars, BsShieldFillCheck, BsTv } from 'react-icons/bs';
import { GiRank3, GiDirectorChair } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';
import { IoIosArrowUp } from 'react-icons/io';
import { Controller, Scene } from 'react-scrollmagic';
import Aos from 'aos';
import 'aos/dist/aos.css';

import AppMainBox from '../../components/AppMainBox';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './style.scss';
import gif from '../../assets/imgs/world.gif';
import TeamCard from '../../components/TeamCard';
import HeadSection from '../../components/HeadSection';
import FaqItem from '../../components/FaqItem';
import Welcome from '../../components/Welcome';

function Home() {
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	useEffect(() => {
        const onScroll = () => setScrollValue(window.scrollY);

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [scrollValue]);

	const goUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<>
			<Header />

			<button
				className='
					flex justify-center items-center fixed w-[50px] h-[50px]
					right-6 md:bottom-12 bottom-5 hover:bg-white hover:-translate-y-2
					hover:text-[#B026FF] curso-pointer bg-[#B026FF]
				'
				onClick={goUp}
				style={{
					display: window.scrollY <= 250 ? 'none' : '',
					transition: 'all .4s ease',
				}}
			>
				<IoIosArrowUp className='text-center mx-3 w-[20px] h-[20px]' />
			</button>

			<a href='/'>
				<label
					className='
						md:flex hidden fixed right-6 bottom-0 px-3 text-white
						text-lg curso-pointer bg-[#B026FF] font-bold
					'
				>
					Feedback
				</label>
			</a>

			<div className="w-full pt-[70px]">
				
				<Welcome gif={gif} />

				<div className="gradient-bg-welcome">
					<div className='w-full h-screen flex lg:justify-start lg:px-32 justify-center'>
						<AppMainBox
							myFade='fade-right'
							title='Kinergy'
							subtitle='Kinergy is a network for cinema and moving pictures curation with a substrate-based blockchain infrastructure that will be interoperable within the Kusama network. Kine is the house where curators propose online public-driven film festivals and rankings that are used to create truthful information about their tastes, values, and their beliefs, and encourage awards distribution through a system of tokenized incentives and curation markets.'
						/>
					</div>

					<div className='w-full h-screen flex lg:justify-end lg:px-32 justify-center'>
						<AppMainBox
							myFade='fade-left'
							title='Kinergy'
							subtitle='We propose a fast, scalable decentralized audiovisual platform with a curation layer that comprehends cinema and television production, and exhibition. We want to assemble a broad community of nonconformist people, professionals, algorithms, and users, and co-create a curated ecosystem. This platform will be the base to show and rank art and non-artistic and audiovisual materials, and that can be used to produce new content.'
						/>
					</div>

					<div className='w-full h-screen flex flex-col justify-center items-center' data-aos='fade-up'>
						<h1 className='text-gradient text-4xl'>Backed by Kine Foundation</h1>
						
						<div className='w-2/5 flex md:justify-between justify-center my-20'>
							<div className='flex flex-col justify-center items-center md:mx-0 mx-3'>
								<div className='rounded-full blue-glassmorphism border-2 flex justify-center items-center mb-3 p-2'>
									<BsShieldFillCheck className='text-[#73eda0] text-4xl' />
								</div>
								<p>Secure</p>
							</div>

							<div className='flex flex-col justify-center items-center md:mx-0 mx-3'>
								<div className='rounded-full blue-glassmorphism border-2 flex justify-center items-center mb-3 p-2'>
									<SiHiveBlockchain className='text-[#73a0ed] text-4xl' />
								</div>
								<p>Decentralized</p>
							</div>

							<div className='flex flex-col justify-center items-center md:mx-0 mx-3'>
								<div className='rounded-full blue-glassmorphism border-2 flex justify-center items-center mb-3 p-2'>
									<BsTv className='text-[#ed73a0] text-4xl' />
								</div>
								<p>Audiovisual</p>
							</div>
						</div>
						
						<div className='flex flex-col justify-center items-center'>
							<p className='w-2/5'>
								Our mission is to build a fast, scalable decentralized audiovisual ecosystem that comprehends cinema and television production, curation and exhibition.
								<br />
								We want to assemble a broad community of nonconformist people, professionals, algorithms and users and co-create a community framework for curated channels of information.
							</p>
						</div>
					</div>
				</div>
				
				<div className='w-full gradient-bg-services'>
					<div className='w-full flex'>
						<Controller>
							<Scene duration={2000} offset={50} triggerElement=".info-title2" triggerHook={0} pin>
								<div
									className='
										info-title2 w-1/2 h-screen flex flex-col justify-center items-center
									'
								>
									<h1 className='lg:text-4xl text-2xl font-bold text-white'>
										Kinergy structure
									</h1>
								</div>
							</Scene>

							<Scene enabled={false}>
								<div className='info-content w-1/2 flex flex-col justify-center'>
									<div className='w-full flex justify-center'>
										<div className='info-1 w-ffull h-screen pb-[220px] flex flex-col justify-center items-center'>
											<h1 className='flex text-2xl font-bold flex-row justify-start items-center'>
												<GiRank3 className='mr-[10px]' color='#B026FF' />
												Rankings
											</h1>
											
											<p className='mt-[40px] w-4/5'>Rankings are lists proposed to be voted by token holders and a staking mechanism at the same time. Stakers earn rewards for leaving their tokens assigned to the lists they like and not moving those tokens.</p>
										</div>
									</div>

									<div className='w-full flex justify-center'>
										<div className='info-1 w-ffull h-screen pb-[220px] flex flex-col justify-center items-center'>
											<h1 className='flex text-2xl font-bold flex-row justify-start items-center'>
												<BsStars className='mr-[10px]' color='#B026FF' />
												Constellation
											</h1>
											
											<p className='mt-[40px] w-4/5'>Constellations are a second layer for curation inside Kinergy. In this competition arena, curators can name and represent their choices, propose and test their voices and visions, and reveal each one's truth.</p>
										</div>
									</div>

									<div className='w-full flex justify-center'>
										<div className='info-1 w-ffull h-screen pb-[220px] flex flex-col justify-center items-center'>
											<h1 className='flex text-2xl font-bold flex-row justify-start items-center'>
												<BsTv className='mr-[10px]' color='#B026FF' />
												TVChain SEE
											</h1>
											
											<p className='mt-[40px] w-4/5'>SEE TVchain is the place where curated material from Kinergy meets real-time television creation but not only that.</p>
										</div>
									</div>

									<div className='w-full flex justify-center'>
										<div className='info-1 w-ffull h-screen pb-[220px] flex flex-col justify-center items-center'>
											<h1 className='flex text-2xl font-bold flex-row justify-start items-center'>
												<GiDirectorChair className='mr-[10px]' color='#B026FF' />
												Producers Network
											</h1>
											
											<p className='mt-[40px] w-4/5'>It is an app built like a crowdfunding platform for moving pictures where donors buy tokens that represent film rights and are rewarded every time the film has revenue.</p>
										</div>
									</div>
								</div>
							</Scene>
						</Controller>
					</div>
				</div>

				<div className='w-full h-auto flex flex-col pb-[50px] px-[50px] mx-0 gradient-bg-transactions'>
					<HeadSection
						title='F.A.Q'
						subtitle='Frequently Asked Questions'
					/>

					<div>
						<FaqItem
							question='What is Kinergy?'
							answer='Kinergy is a network for cinema and moving pictures curation with a substrate-based blockchain infrastructure that will be interoperable within the Kusama network. Kine is the house where curators propose online public-driven film festivals and rankings that are used to create truthful information about their tastes, values, and their beliefs, and encourage awards distribution through a system of tokenized incentives and curation markets.'
						/>

						<FaqItem
							question='What is Kusama?'
							answer='Kusama is a network for the Kusama cryptocurrency. It is a decentralized blockchain that is designed to be a secure, scalable, and interoperable platform for the creation of decentralized applications. Kusama is a fork of the Ethereum blockchain, and is designed to be a secure, scalable, and interoperable platform for the creation of decentralized applications.'
						/>

						<FaqItem
							question='How can I join the Kinergy?'
							answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.'
						/>

						<FaqItem
							question='How became a ambassador?'
							answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.'
						/>

						<FaqItem
							question='How works the economy?'
							answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.'
						/>

						<FaqItem
							question='How can I finance my film?'
							answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.'
						/>

						<FaqItem
							question='How can I creat a Ranking?'
							answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.'
						/>
					</div>
				</div>

				<div className='w-full flex flex-col h-auto pb-[50px] px-[50px] mx-0 gradient-bg-welcome'>
					<HeadSection
						title='Team'
						subtitle='Our Great Team'
					/>

					<div className='w-full flex flex-wrap overflow-hidden md:justify-start justify-center p-[10px] h-auto'>
						<TeamCard
							name='Miguel Marques'
							image='https://upload.wikimedia.org/wikipedia/commons/2/26/Slightly_opened_silver_Macbook.jpg'
							role='CEO'
							twitter='https://twitter.com/miguelmarques'
							linkedin='https://www.linkedin.com/in/miguel-marques-a8a9b9b4/'
							github='https://github.com'
						/>
						<TeamCard
							name='Rita Capucho'
							image='https://upload.wikimedia.org/wikipedia/commons/2/26/Slightly_opened_silver_Macbook.jpg'
							role='Consultant'
							twitter='https://twitter.com/ritacapucho'
							linkedin='https://www.linkedin.com/in/rita-capucho-a8a9b9b4/'
							github='https://github.com'
						/>
						<TeamCard
							name='Eliude Vemba'
							image='https://upload.wikimedia.org/wikipedia/commons/2/26/Slightly_opened_silver_Macbook.jpg'
							role='Blockchain Frontend Developer'
							twitter='https://twitter.com/eludevemba'
							linkedin='https://www.linkedin.com/in/eludevemba/'
							github='https://github.com/HelioPC'
						/>
						<TeamCard
							name='Jhoni Vieceli'
							image='https://upload.wikimedia.org/wikipedia/commons/2/26/Slightly_opened_silver_Macbook.jpg'
							role='Software Manager'
							twitter='https://twitter.com/jhonivieceli'
							linkedin='https://www.linkedin.com/in/jhonivieceli/'
							github='https://github.com'
						/>
					</div>
				</div>


				<div className='w-full flex flex-col justify-center items-center h-[80vh] pt-[20px] gradient-bg-welcome' data-aos='fade-down'>
					<h1 className='text-3xl mb-10'>Subscribe to our newsletter</h1>
					<input className='w-[45%] h-10 rounded-[10px] border-none py-0 px-2.5 placeholder:text-[#777] mt-[20px] text-xl text-black bg-white' type='email' placeholder='Enter your email' />
					<button className='w-[45%] h-10 text-white rounded-[10px] border-none py-0 px-2.5 mt-[20px] text-xl bg-[#B026FF] hover:bg-[#47C7FA] hover:scale-105 duration-500 hover:duration-500 transition-all'>Subscribe</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
