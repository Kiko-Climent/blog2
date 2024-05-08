import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";

import AnimatedRoutes from "./Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Boomslag | Software Agency</title>
        <meta name="description" content="Sofware development agency and digital marketing solutions."/>
        <meta name="keywors" content="sofware agency, marketing agency, web development"/>
        <meta name="robots" content="all"/>
        <meta name="author" content="Boomslag"/>
        <meta name="publisher" content="Boomslag"/>
        <link rel="canonical" href="www.boomslag.com"/>

        {/* Social Media Tags */}
        <meta property="og:title" content='Boomslag | Software Agency' />
        <meta property="og:description" content='Sofware development agency and digital marketing solutions.' />
        <meta property="og:url" content="https://www.boomslag.com/" />
        <meta property="og:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>

        <meta name="twitter:title" content='Boomslag | Software Agency' />
        <meta
            name="twitter:description"
            content='Sofware development agency and digital marketing solutions.'
        />
        <meta name="twitter:image" content='https://dilmads.com/wp-content/uploads/2023/11/desarrollo-web-1.png'/>
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <Provider store={store}>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
