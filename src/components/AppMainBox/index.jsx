import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const AppBox = styled.div`
		min-height: 200px;
		width: 400px;
		padding: 20px 60px;
		position: relative;
		border: 1px solid #B026FF;
		transition: transform .5s;
		margin-top: 50px;

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
			transform: translate(-5%, -5%);
		}
`;

const AppMainBox = ({ title, subtitle, className, myFade }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	
	return (
		<div className={className} data-aos={myFade}>
			<AppBox>
				<h1 className='text-3xl mb-5 font-bold'>{title}</h1>

				<p>{subtitle}</p>
			</AppBox>
		</div>
	);
}

export default AppMainBox;
