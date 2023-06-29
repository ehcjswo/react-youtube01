import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillYoutube } from 'react-icons/ai';
import {SearchBar} from './';

const HeaderCont = () => {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    <AiFillYoutube className="icon" />
                    <span>DH</span>'s Youtube
                </Link>
            </h1>
            <SearchBar />
        </header>
    );
};

export default HeaderCont;
