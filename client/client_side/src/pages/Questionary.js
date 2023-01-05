import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import s from "../modules/styles.module.css"
import {Context} from "../index";
import {json, useNavigate} from "react-router-dom";
import {QUESTIONARY_ROUTE, QUESTIONARY_ROUTE_SECOND} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {createUserData} from "../http/user_dataAPI";

const Questionary = ({show, onHide}) => {

    const navigate = useNavigate()
    const {user} = useContext(Context)


    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [role, setRole] = useState("")

    const add_user_data = () => {
        console.log(user.getUserPortfolio())
        createUserData({title: name, city: city, country: country, role: role}).then(data => {
            setName('')
            setCountry('')
            setCity('')
            setRole('')
        })
        navigate(QUESTIONARY_ROUTE_SECOND)
    }

    return (
            <Container>

            <Row className="d-flex">
                <Col md={12} className="d-flex justify-content-center mt-5"><h2 className={s.main_header}>Tell us about you</h2></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Ім'я</p><Form.Control placeholder="Введіть ваше ім'я" value={name} onChange={e => setName(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Країна</p><Form.Control placeholder="Введіть вашу країну" value={country} onChange={e => setCountry(e.target.value)} ></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Місто</p><Form.Control placeholder="Введіть ваше місто" value={city} onChange={e => setCity(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Тренер чи студент (coach or student in english)</p><Form.Control placeholder="Введіть ваш статус" value={role} onChange={e => setRole(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><Button variant={"outline-primary" } className={s.input_size}
                                                                                    onClick={add_user_data
                }>Продовжити</Button></Col>
            </Row>

            </Container>
    );
};

export default Questionary;