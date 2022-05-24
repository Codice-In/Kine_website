import './style.scss'

export default function HeadSection({ title, subtitle }) {
    return (
        <div className='w-full h-auto flex flex-col p-2.5 justify-start'>
            <div className='w-full flex md:flex-row flex-col justify-start items-center text-[#BBB]'>
                <p className='md:mb-0 mb-5'>{title}</p>
                <hr className='ml-4 sm:w-1/2 w-full' />
            </div>
            <h1 className='flex text-[#B026FF] text-lg font-bold mt-10 md:justify-start justify-center'>{subtitle}</h1>
        </div>
    );
}
