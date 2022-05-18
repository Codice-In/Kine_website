const GroupLinks = ({ links }) => {
    return (
        <div className="flex flex-col">
            {links.map(({ name, url }) => (
                <a
                    href={url}
                    key={name}
                    className="md:text-lg text-base text-[#BBB] mb-4 hover:text-[#ECECEC] duration-500 ease-in"
                >
                    {name}
                </a>
            ))}
        </div>
    );
};

const Footer = () => {
   return(
        <footer className='gradient-bg-footer flex items-center justify-center py-16 w-full h-auto relative left-0 right-0 bottom-0'>
            <div className='w-full h-full flex flex-col items-center'>
                <div className='w-4/5 lg:px-12 md:px-0 flex md:flex-row flex-wrap items-start justify-between'>
                    <div className='h-full lg:w-auto w-36 flex flex-col'>
                        <h2 className='md:text-2xl text-xl font-bold mb-12'>Developers</h2>
                        <GroupLinks
                            links={[
                                { name: 'Guide', url:'/' },
                                { name: 'Github', url:'/' },
                                { name: 'Technical', url:'/' },
                                { name: 'Web3 Foundation Grants', url:'/' },
                                { name: 'Governance Chat', url:'/' },
                                { name: 'Validator Chat', url: '/' }
                            ]}
                        />
                    </div>

                    <div className='h-full lg:w-auto w-36 flex flex-col'>
                        <h2 className='md:text-2xl text-xl font-bold mb-12'>Community</h2>
                        <GroupLinks
                            links={[
                                { name: 'Community Hub', url:'/' },
                                { name: 'Ambassador Program', url:'/' },
                                { name: 'Meetup Hub', url:'/' },
                                { name: 'Find a Local Meetup', url:'/' },
                                { name: 'Blog', url:'/' },
                                { name: 'Brand Assets', url: '/' }
                            ]}
                        />
                    </div>

                    <div className='h-full lg:w-auto w-36 flex flex-col'>
                        <h2 className='md:text-2xl text-xl font-bold mb-12'>Social</h2>
                        <GroupLinks
                            links={[
                                { name: 'Discord', url:'/' },
                                { name: 'Watercooler Riot Chat', url:'/' },
                                { name: 'Twitter', url:'/' },
                                { name: 'Reddit', url:'/' },
                                { name: 'YouTube', url:'/' },
                                { name: 'Crowdcast Webinars', url: '/' }
                            ]}
                        />
                    </div>

                    <div className='h-full lg:w-auto w-36 flex flex-col'>
                        <h2 className='md:text-2xl text-xl font-bold mb-12'>Info</h2>
                        <GroupLinks
                            links={[
                                { name: 'Support', url:'/' },
                                { name: 'Polkadot', url:'/' },
                                { name: 'Substrate', url:'/' },
                                { name: 'Careers', url:'/' },
                                { name: 'Web3 Foundation', url:'/' },
                                { name: 'Parity Technologies', url: '/' }
                            ]}
                        />
                    </div>
                </div>
                
                <div className='w-full mt-7 flex md:flex-row flex-col justify-center items-center'>
                    <p className='text-xs text-[#ADADAD] md:mr-12'>© 2022 Kinergy</p>
                    
                    <ul className='w-[330px] flex justify-between list-disc'>
                        <li><a href='/' className='text-xs text-[#DDD]'>Privacy Policy</a></li>
                        <li><a href='/' className='text-xs text-[#DDD]'>Terms and Conditions</a></li>
                        <li><a href='/' className='text-xs text-[#DDD]'>Cookie Settings</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
