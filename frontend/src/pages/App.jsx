import { Fragment, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/sidebar/sidebar';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";
import store from '../redux/store';
import Switcher from '../components/common/switcher/switcher';
import TabToTop from '../components/common/tabtotop/tabtotop';
import Pageheader from '../components/pageheader/pageheader';

function App() {

  const [lateLoad, setlateLoad] = useState(false);
	useEffect(() => {
		setlateLoad(true);
	  });

  return (
    <Fragment>
      <Provider store={store}>
      <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
        <HelmetProvider>
          <Helmet
            htmlAttributes={{
              lang: "en",
              dir: "ltr",
              "data-menu-styles": "dark",
              "data-theme-mode": "light",
              "data-nav-layout": "vertical",
              "data-header-styles": "light",
              "data-vertical-style": "overlay",
              "data-loader": "disable",
              
            }}
          />
          <Switcher />
          <div className='page'>
            <Header />
            <Sidebar />
            <Pageheader />
            <div className='main-content app-content' 
            >
              <div className='container-fluid'>
                <Outlet />
              </div>
            </div>
          
          <Footer />
          </div>
          <TabToTop />

        </HelmetProvider>
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
