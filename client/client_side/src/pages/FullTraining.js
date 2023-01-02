import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from 'react-router-dom';
const FullTraining = () => {
    const location = useLocation()
    return (
        <Container>
            <Row>
                <Col md={6}>{location.state.id}</Col>
                <Col md={6}>{location.state.name}</Col>
            </Row>
        </Container>
    );
};

export default FullTraining;