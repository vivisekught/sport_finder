import React from 'react';
import {Card, Col} from "react-bootstrap";
import s from '../modules/styles.module.css'

const TrainingItem = ({kind}) => {
    return (
        <Col md={12}>
            <Card className={s.training} border={"dark"}>item</Card>
        </Col>
    );
};

export default TrainingItem;