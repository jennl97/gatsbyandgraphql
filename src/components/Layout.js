import React from 'react';
import "../styles/layout.css";
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import useSiteMetaData from '../hooks/use-sitemetadata';

const Main = styled.main`padding: 0.5rem calc((100vw - 1000px) / 2);`


const Layout = ({ children }) => {
   const { title, description } = useSiteMetaData();
   return( <>
   <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
   </Helmet>
    <Header></Header>
    <Main>{children}</Main>
    
    </>
   )
}

export default Layout;