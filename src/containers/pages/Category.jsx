import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import CategoriesHeader from "../../components/blog/CategoriesHeader"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'
import { get_categories } from "../../redux/actions/categories/categories"
import { connect } from "react-redux"
import { get_blog_list_category, get_blog_list_category_page } from "../../redux/actions/blog/blog"
import { useParams } from "react-router-dom"
import BlogList from "../../components/home/BlogList"


function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_category_page,
    posts,
    count,
    next,
    previous,
}){

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        window.scrollTo(0,0)
        get_categories()
        get_blog_list_category(slug)
    },[])

    return(
        <Layout>
            <Helmet>
            <title>Boomslag | Category: {slug}</title>
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
                <CategoriesHeader categories={categories&&categories}/>
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page,
}) (Category)

