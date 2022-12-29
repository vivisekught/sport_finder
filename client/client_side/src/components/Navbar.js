import React, {useContext} from 'react';
import {Context} from "../index";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import s from "../modules/styles.module.css"
const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar className={s.navigation} expand="lg">
            <Container fluid >
                <NavLink  to={MAIN_ROUTE} className={s.logo}>SPORT_FINDER</NavLink>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;