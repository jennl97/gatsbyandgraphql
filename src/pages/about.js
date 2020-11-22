import React from "react";
import { Link } from "gatsby";
import Layout from '../components/Layout';


export default () => (
    <Layout>
        <h1>About Me</h1>
        <p>My Personal Website</p>
        <Link to="/">&larr; Back To Home</Link>
    </Layout>
)