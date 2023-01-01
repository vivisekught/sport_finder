import React, {useState} from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async () => {
        if(isLogin){
            const response = await login()

        }
        else{
            const response = await registration(email, password)
            console.log(response)
        }


    }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight -54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Авторизація' : 'Реєстрація'} </h2>
                <Form className="d-flex flex-column">
                    { isLogin ?
                        <div>
                            <Form.Control type="email" className="mt-3" placeholder="Введіть ваш email"
                            value={email} onChange={e => setEmail(e.target.value)}
                            />

                        <Form.Control type="password" className="mt-3" placeholder="Введіть ваш пароль"
                        value={password} onChange={e => setPassword(e.target.value)} typeof={password}
                        />
                        </div> :
                        <div><Form.Control type="email" className="mt-3" placeholder="Введіть ваш email" />
                            <Form.Control type="password" className="mt-3" placeholder="Введіть ваш пароль" />
                        </div>
                    }
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ? <div>
                                Немає акаунту? <NavLink to = {REGISTRATION_ROUTE}>Реєструйся за посиланням</NavLink>
                            </div> :
                            <div>
                            Є акаунт? <NavLink to = {LOGIN_ROUTE}>Увійти в акаунт</NavLink>
                            </div>}
                        <Button variant={"outline-success"} onClick={click}>{isLogin ? "Увійти" : "Зареєструватись"}</Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;