import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import s from "../modules/styles.module.css";

const QuestionarySecond = () => {
    const {user} = useContext(Context)
    const updateUserData = () =>{
         user.setUserPortfolioSecondPage(age, gender, weight, height, PhoneNumber, FavouriteSport)
        console.log(user.getUserPortfolio())
    }

    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [FavouriteSport, setFavouriteSport] = useState("")
    return (
        <Container>

            <Row className="d-flex">
                <Col md={12} className="d-flex justify-content-center mt-5"><h2 className={s.main_header}>Tell us about you</h2></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Вік</p><Form.Control placeholder="Введіть ваш вік" value={age} onChange={e => setAge(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Стать</p><Form.Control placeholder="Введіть вашу стать" value={gender} onChange={e => setGender(e.target.value)} ></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Зріст</p><Form.Control placeholder="Введіть ваш зріст" value={height} onChange={e => setHeight(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Вага</p><Form.Control placeholder="Введіть вашу вагу" value={weight} onChange={e => setWeight(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Номер телефону</p><Form.Control placeholder="Введіть ваш номер телефону" value={PhoneNumber} onChange={e => setPhoneNumber(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><div className={s.input_size}><p>Улюблений вид спорту</p><Form.Control placeholder="Введіть ваш улюблений вид спорту" value={FavouriteSport} onChange={e => setPhoneNumber(e.target.value)}></Form.Control></div></Col>
                <Col md={12} className="d-flex justify-content-center mt-5"><Button variant={"outline-primary" } className={s.input_size}
                                                                                    onClick={() =>{
                                                                                        updateUserData()
                                                                                    }
                                                                                    }>Продовжити</Button></Col>
            </Row>

        </Container>
    );
};

export default QuestionarySecond;