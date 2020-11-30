import React from "react";
import { Link } from "gatsby";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { css } from 'gatsby-plugin-emotion';
import Image from 'gatsby-image';


export default () => (
    <>
    <Hero></Hero>
    <Layout>
        <h1>Contact Me</h1>
        
        <Link to="/">&larr; Back To Home</Link>
    </Layout>
    </> 
)