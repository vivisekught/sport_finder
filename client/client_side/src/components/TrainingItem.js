import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import s from '../modules/styles.module.css'
import {Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {FULLTRAINING_ROUTE} from "../utils/consts";
const TrainingItem = ({kind}) => {
    const navigate = useNavigate() // use this hook to get to the needed page
    return (
        <Col md={12}>
            <Card className={s.training} border={"dark"} onClick={() => navigate(FULLTRAINING_ROUTE + '/', {state: {id:kind.id,name:kind.name, desc:kind.desc, coach: kind.coach, sportClub: kind.sportClub, img: kind.img, time: kind.time}})}>
                <Row className="d-flex mb-1">
                <Col md={4}>{kind.sportClub}</Col>
                <Col md={4} className='mb-3'>22.10.2022 16:00-18:00</Col>
                    <Col md={4}><Image src={kind.img} className={s.image_training}></Image></Col>
                </Row>

                <Row className="d-flex">
                    <Col md={12} className="mb-2">Вид заняття: {kind.name}</Col>
                    <Col md={12} className="mb-2">Опис заняття: {kind.desc}</Col>
                    <Col md={12} className="mb-2">Тренер: {kind.coach}</Col>
                    <Col md={12} className="mb-2">Складність: {kind.difficulty}</Col>
                </Row>
            </Card>
        </Col>
    );
};

export default TrainingItem;