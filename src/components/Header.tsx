import React from 'react';
import "./Header.css"

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className='header'>
            <img className='header-img' src="https://5.imimg.com/data5/SELLER/Default/2020/12/AP/QI/NQ/14784178/groot1.jpg" alt="avartar" />
            <h1 className='header-info'>Bùi Chí Thanh - Todo App</h1>
        </header>
    );
};

export default Header;