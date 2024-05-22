import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import CategoriesHeader from "../../components/blog/CategoriesHeader"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'
import { get_categories } from "../../redux/actions/categories/categories"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "../../redux/actions/blog/blog"
import { useParams } from "react-router-dom"


function Search({
    posts,
    count,
    next,
    previous,
    search_blog
}){

    const params = useParams()
    const term = params.term

    useEffect(() => {
        console.log("Search component mounted");
        console.log("Search term:", term);

        window.scrollTo(0,0)
        search_blog(term)
    },[term])

    console.log("Rendering Search component");

    return(
        <Layout>
            <Helmet>
            <title>Boomslag | Blog</title>
            <meta name="description" content="Sofware development agency and digital marketing solutions."/>
            <meta name="keywors" content="sofware agency, marketing agency, web development"/>
            <meta name="robots" content="all"/>
            <meta name="author" content="Boomslag"/>
            <meta name="publisher" content="Boomslag"/>
            <link rel="canonical" href="www.boomslag.com"/>

            {/* Social Media Tags */}
            <meta property="og:title" content='Boomslag | Blog' />
            <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
            <meta property="og:url" content="https://www.boomslag.com/" />
            <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

            <meta name="twitter:title" content='Boomslag | Blog' />
            <meta
                name="twitter:description"
                content='Sofware development agency and digital marketing solutions.'
            />
            <meta name="twitter:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                SEARCH POSTS
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps,{
    search_blog
}) (Search)
