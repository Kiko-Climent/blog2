import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'
import Header from "../../components/careers/Header"
import Testimonial from "../../components/careers/Testimonial"
import Features from "../../components/careers/Features"
import PositionsList from "../../components/careers/PositionsList"

function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>Boomslag | Careers</title>
            <meta name="description" content="Sofware development agency and digital marketing solutions."/>
            <meta name="keywors" content="sofware agency, marketing agency, web development"/>
            <meta name="robots" content="all"/>
            <meta name="author" content="Boomslag"/>
            <meta name="publisher" content="Boomslag"/>
            <link rel="canonical" href="www.boomslag.com"/>

            {/* Social Media Tags */}
            <meta property="og:title" content='Boomslag | Careers' />
            <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
            <meta property="og:url" content="https://www.boomslag.com/" />
            <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

            <meta name="twitter:title" content='Boomslag | Careers' />
            <meta
                name="twitter:description"
                content='Sofware development agency and digital marketing solutions.'
            />
            <meta name="twitter:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Testimonial/>
                <div className="bg-gray-50">
                <div className="mx-12 pt-24 pb-12">
                    <h3 className="text-5xl font-bold leading-6">Work with top notch Companyes</h3>
                </div>
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                        />
                    </div>
                    </div>
                </div>
                </div>
                <Features/>
                <PositionsList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Careers
