function Header() {
    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-16 sm:text-7xl">
                                Sofware Development Services
                            </h1>
                                <p className="mt-16 text-2xl leading-8 text-black">
                                We love to shake established thought-patterns and create what has never been attempted before. We take seeds and grow jungles
                                </p>
                            
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]">
                            <img src='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png' className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header