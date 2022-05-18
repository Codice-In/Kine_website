import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const iconSize = 22;

    return(
        <header className='fixed z-50 top-0 left-0 right-0 w-full h-[70px] header-glassmorphism'>
            <div className='h-full w-full py-2.5 px-16 flex flex-row items-center justify-between'>
                <h1
                    className='w-auto h-full flex items-center'
                    style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontFamily: '"Times New Roman", Times, serif',
                    }}
                >
                    KINERGY
                </h1>

                <div className='w-1/2 h-full flex items-center justify-end'>
                    <div className='w-3/4 xl:flex hidden justify-between mr-6'>
                        <a href='/' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'>Home</a>
                        <a href='/festivals' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'>Festivals</a>
                        <a href='/community' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'>Community</a>
                        <a href='/' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'>Whitepaper</a>
                        <a href='/' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'><BsDiscord size={iconSize} /></a>
                        <a href='/' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'><BsGithub size={iconSize} /></a>
                        <a href='/' className='text-[#BDBDBD] hover:text-white ease-in-out duration-200'><BsTwitter size={iconSize} /></a>
                    </div>

                    <a className='my-btn xl:flex hidden' href='/'>Get Started</a>

                    <FiMenu className='ml-6 xl:hidden flex' size={iconSize} />
                </div>
            </div>
        </header>
    );
}

export default Header;
