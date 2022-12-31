import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import TrainingItem from "./TrainingItem";
import {Context} from "../index";

const TrainingList = observer(() => {
    const {training} = useContext(Context)
    return (
        <Row className="d-flex">
            {training.kinds.map(kind =>
                <TrainingItem key={kind.id} kind={kind}/>
            )}

        </Row>
    );
});

export default TrainingList;