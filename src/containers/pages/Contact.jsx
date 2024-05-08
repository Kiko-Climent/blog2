import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'

function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>Boomslag | Contact</title>
            <meta name="description" content="Sofware development agency and digital marketing solutions."/>
            <meta name="keywors" content="sofware agency, marketing agency, web development"/>
            <meta name="robots" content="all"/>
            <meta name="author" content="Boomslag"/>
            <meta name="publisher" content="Boomslag"/>
            <link rel="canonical" href="www.boomslag.com"/>

            {/* Social Media Tags */}
            <meta property="og:title" content='Boomslag | Contact' />
            <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
            <meta property="og:url" content="https://www.boomslag.com/" />
            <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

            <meta name="twitter:title" content='Boomslag | Contact' />
            <meta
                name="twitter:description"
                content='Sofware development agency and digital marketing solutions.'
            />
            <meta name="twitter:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                Contact
            </div>
            <Footer/>
        </Layout>
    )
}
export default Contact
