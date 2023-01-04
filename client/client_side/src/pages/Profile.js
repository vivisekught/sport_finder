import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";

const Profile = () => {
    const {user} = useContext(Context)
    return (
        <Container>
            <Row>
                <Col md={12} className="mt-5"><h2>Мій профіль</h2></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваше ім'я: {user.getUserPorfolioField("name")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваш вік: {user.getUserPorfolioField("age")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваш зріст: {user.getUserPorfolioField("height")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваша вага: {user.getUserPorfolioField("weight")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваша стать: {user.getUserPorfolioField("gender")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваша статус: {user.getUserPorfolioField("status")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваша країна: {user.getUserPorfolioField("country")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваше місто: {user.getUserPorfolioField("city")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваш номер телефону: {user.getUserPorfolioField("phoneNumber")}</h3></Col>
                <Col md={12} className="mb-3 mt-3"><h3>Ваш улюблений вид спорту: {user.getUserPorfolioField("FavouriteSport")}</h3></Col>
            </Row>
        </Container>
    );
};

// this._user_porfolio = {
//     name : " ",
//     country : " ",
//     city : " ",
//     status : " ",
//     age : " ",
//     gender : " ",
//     weight : " ",
//     height : " ",
//     phoneNumber : " ",
//     FavouriteSport : " ",
// }

export default Profile;