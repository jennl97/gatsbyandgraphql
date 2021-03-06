import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
    color: #222;
    font-size: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;
    text-decoration: none
`

const Header1 = styled.header`
    background-color: #eee;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);

    &.current-page {
        border-bottom: 2px solid #222;
    }
    `
const Nav = styled.nav`
    margin-top: 0;
`

const Header = () => {
    return(
    <Header1>
        <Nav>
        <NavLink to='https://www.linkedin.com/in/jennifer-hott-leitsch/' fontWeight='bold'>LinkedIn</NavLink>
        <NavLink to="https://github.com/jennl97" fontWeight='bold'>GitHub</NavLink>
        </Nav>
        <Nav>
        <NavLink to='/' activeClass='current-page'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </Nav>

    </Header1>
    )
}

export default Header;