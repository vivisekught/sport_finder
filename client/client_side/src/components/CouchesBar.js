import React, {useContext, useReducer} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const CouchesBar = () => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    const {training} = useContext(Context)
    return (
       <div className="d-flex justify-content-between flex-wrap">
           {training.coaches.map(coach =>
           <Card
               style={{cursor:"pointer"}}
           key={coach.id}
           className="p-3 m-2"
           onClick={() => {
               training.setSelectedCoach(coach)
               forceUpdate()
           }}
               border={coach.id === training.selectedCoach.id ? "danger" : "primary"}
           >
               {coach.name}
           </Card>
           )}
       </div>
    );
};

export default CouchesBar;