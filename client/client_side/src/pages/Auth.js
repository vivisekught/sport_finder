import React from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight -54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Авторизація' : 'Реєстрація'} </h2>
                <Form className="d-flex flex-column">
                    { isLogin ?
                        <div><Form.Control type="email" className="mt-3" placeholder="Введіть ваш email" />
                        <Form.Control type="password" className="mt-3" placeholder="Введіть ваш пароль" />
                        </div> :
                        <div><Form.Control type="email" className="mt-3" placeholder="Введіть ваш email" />
                            <Form.Control type="password" className="mt-3" placeholder="Введіть ваш пароль" />
                            <Form.Control type="password" className="mt-3" placeholder="Повторіть ваш пароль" />
                        </div>
                    }
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ? <div>
                                Немає акаунту? <NavLink to = {REGISTRATION_ROUTE}>Реєструйся за посиланням</NavLink>
                            </div> :
                            <div>
                            Є акаунт? <NavLink to = {LOGIN_ROUTE}>Увійти в акаунт</NavLink>
                            </div>}
                        <Button variant={"outline-success"}>{isLogin ? "Увійти" : "Зареєструватись"}</Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;