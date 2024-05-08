import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/home/Header"
import Incentives from "../../components/home/Incentives"
import UseCases from "../../components/home/UseCases"
import Features from "../../components/home/Features"
import CTA from "../../components/home/CTA"
import LogoCloud from "../../components/home/LogoCloud"
import BlogList from "../../components/home/BlogList"

import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'


function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>Boomslag | Home</title>
            <meta name="description" content="Sofware development agency and digital marketing solutions."/>
            <meta name="keywors" content="sofware agency, marketing agency, web development"/>
            <meta name="robots" content="all"/>
            <meta name="author" content="Boomslag"/>
            <meta name="publisher" content="Boomslag"/>
            <link rel="canonical" href="www.boomslag.com"/>

            {/* Social Media Tags */}
            <meta property="og:title" content='Boomslag | Home' />
            <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
            <meta property="og:url" content="https://www.boomslag.com/" />
            <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

            <meta name="twitter:title" content='Boomslag | Home' />
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
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Home
