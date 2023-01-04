import React, {useContext, useReducer, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useLocation} from 'react-router-dom';
import {Image} from "react-bootstrap";
import s from "../modules/styles.module.css"
import {Context} from "../index";

const FullTraining = () => {
    const location = useLocation()
    const {user} = useContext(Context)
    const [Attend, setAttend] = useState(user.getUserAttendedKind("attended"))
    const [ignored, forceUpdate] = useReducer(x => x+1, 0)

    return (
        <Container>
            <Row className="mt-5 d-flex justify-content-between">
                <Col md={8}>
                    <h2 className="mb-3 mt-3">Назва клубу: {location.state.sportClub}</h2>
                    <h2 className="mb-3 mt-3">Назва спорту: {location.state.name}</h2>
                    <h2 className="mb-3 mt-3">Опис заняття: {location.state.desc}</h2>
                    <h2 className="mb-3 mt-3">Тренер: {location.state.coach}</h2>
                    <h2 className="mb-3 mt-3">Дата та час проведення заняття: {location.state.time}</h2>
                </Col>
                <Col md={4}><Image src={location.state.img} className={s.big_image}></Image></Col>
            </Row>
            { Attend ? <Row><Col md={12}><Button variant="primary" onClick={() =>
                {   setAttend(false)
                    user.setUserAttendedKind(location.state.name, Attend)
                    console.log(user.getUserAttendedKind("name"))
                    console.log(user.getUserAttendedKind("attended"))
                    // forceUpdate()

                }}>Записатись на тренування</Button></Col></Row> :
                <Row><Col md={12}><Button variant="danger" onClick={() =>{
                    setAttend(true)
                    user.setUserAttendedKind(location.state.name, Attend)
                    console.log(user.getUserAttendedKind("name"))
                    console.log(user.getUserAttendedKind("attended"))
                    // forceUpdate()
                }
                }>Відписатись від тренування</Button></Col></Row>
            }
        </Container>
    );
};

export default FullTraining;