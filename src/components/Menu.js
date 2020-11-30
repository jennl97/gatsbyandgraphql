import React from 'react';
import { Link } from 'gatsby';

const Menu =({}) => {
    return(
    <>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to="/blog">Blog</Link>
    </>
)
}

export default Menu;