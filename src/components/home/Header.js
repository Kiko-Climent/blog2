import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

function Header() {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                                Agency for <span> </span>
                                <Typewriter
                                    words={['Dreamers', 'Creators', 'You!']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={120}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                //onLoopDone={handleDone}
                                //onType={handleType}
                                />
                            </h1>
                            <ul className='flex gap-8 mt-16'>
                                <li className='inline-flex border-b-2 border-transparent hover:border-indigo-button transition duration-300 ease-in-out'>
                                    <Link to='services/algo aqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                                        Web
                                    </Link>
                                </li>
                                <li className='inline-flex border-b-2 border-transparent hover:border-indigo-button transition duration-300 ease-in-out'>
                                    <Link to='services/algo aqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                                        Apps
                                    </Link>
                                </li>
                                <li className='inline-flex border-b-2 border-transparent hover:border-indigo-button transition duration-300 ease-in-out'>
                                    <Link to='services/algo aqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                                        Video Games
                                    </Link>
                                </li>
                                <li className='inline-flex border-b-2 border-transparent hover:border-indigo-button transition duration-300 ease-in-out'>
                                    <Link to='services/algo aqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                                        Marketing
                                    </Link>
                                </li>
                                <li className='inline-flex border-b-2 border-transparent hover:border-indigo-button transition duration-300 ease-in-out'>
                                    <Link to='services/algo aqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                                        Design
                                    </Link>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="absolute mb-40 inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]">
                            <img src='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png' className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header