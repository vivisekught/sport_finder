import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import s from '../modules/styles.module.css';
import SidebarTrainings from "./SidebarTrainings";
const SearchTraining = () => {
    return (
        <Container>
        <div className="d-flex justify-content-end mt-5">
            <input type="text" placeholder="Введіть код тренування" className={s.inputCode}/>
            <Button variant="outline-dark" className={s.button_plus}>+</Button>
        </div>
            <div>
                <Row className="mt-5">
                <Col md = {3}><SidebarTrainings/></Col>
                <Col md = {9}>yess</Col>
                </Row>
            </div>
        </Container>

    );
};

export default SearchTraining;