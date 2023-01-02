import React from 'react';
import {Button, Container} from "react-bootstrap";
import s from '../modules/styles.module.css';
const SearchTraining = () => {
    return (
        <Container>
        <div className="d-flex justify-content-end mt-5">
            <input type="text" placeholder="Введіть код тренування" className={s.inputCode}/>
            <Button variant="outline-dark" className={s.button_plus}>+</Button>
        </div>
        </Container>

    );
};

export default SearchTraining;