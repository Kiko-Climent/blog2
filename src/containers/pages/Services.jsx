import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/services/Header"
import ServicesList from "../../components/services/ServicesList"
import browser_img from "../../assets/img/services/browser.png"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async'


const posts_software = [
    {
      title: 'Boost your conversion rate',
      img: browser_img,
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      img: browser_img,
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      img: browser_img,
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

function Services(){
  useEffect(()=>{
      window.scrollTo(0,0)
  },[])
    return(
        <Layout>
          <Helmet>
          <title>Boomslag | Services</title>
          <meta name="description" content="Sofware development agency and digital marketing solutions."/>
          <meta name="keywors" content="sofware agency, marketing agency, web development"/>
          <meta name="robots" content="all"/>
          <meta name="author" content="Boomslag"/>
          <meta name="publisher" content="Boomslag"/>
          <link rel="canonical" href="www.boomslag.com"/>

          {/* Social Media Tags */}
          <meta property="og:title" content='Boomslag | Services' />
          <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
          <meta property="og:url" content="https://www.boomslag.com/" />
          <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

          <meta name="twitter:title" content='Boomslag | Services' />
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
                <ServicesList posts={posts_software} section_title={'Sofware and Product Development'}/>
            </div>
                <Footer/>
        </Layout>
    )
}

export default Services
