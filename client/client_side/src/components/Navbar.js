import React, {useContext} from 'react';
import {Context} from "../index";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import s from "../modules/styles.module.css"
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

// set observer to identify the state
const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (

        <Navbar className={s.navigation}>
            <Container>
                <NavLink className={s.logo} to ={MAIN_ROUTE}>SPORT_FINDER</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{maxHeight: '100px'}} navbarScroll>
                                     <Button variant={"outline-dark"}>Профіль</Button>
                                    <Button variant={"outline-dark"} onClick={() => navigate(LOGIN_ROUTE)} className={s.button}>Вийти</Button>
                                 </Nav>
                                 : <Nav className="ml-auto"  style={{maxHeight: '100px'}} navbarScroll>
                                    <Button variant={"outline-dark"}  onClick={() => user.setIsAuth(true)}>Авторизація</Button>
                                 </Nav>
                }
            </Container>
        </Navbar>


    );
})

export default NavBar;