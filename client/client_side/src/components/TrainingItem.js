import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import s from '../modules/styles.module.css'
import {Image} from "react-bootstrap";

const TrainingItem = ({kind}) => {
    return (
        <Col md={12}>
            <Card className={s.training} border={"dark"}>
                <Row className="d-flex mb-5">
                <Col md={4}>{kind.name}</Col>
                <Col md={4}>22.10.2022 16:00-18:00</Col>
                <Col md={4}><Image src={kind.img} className={s.image_training}></Image></Col>
                </Row>

                <Row className="d-flex">
                    <Col md={6}>{kind.desc}</Col>
                    <Col md={6}>{kind.coach}</Col>
                </Row>
            </Card>
        </Col>
    );
};

export default TrainingItem;