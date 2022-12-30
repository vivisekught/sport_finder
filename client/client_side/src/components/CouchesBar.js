import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const CouchesBar = () => {
    const {training} = useContext(Context)
    return (
       <div className="d-flex">
           {training.coaches.map(coach =>
           <Card
               style={{cursor:"pointer"}}
           key={coach.id}
           className="p-3"
           onClick={() => training.setSelectedCoach(coach)}
               border={coach.id === training.selectedCoach.id ? "danger" : "primary"}
           >
               {coach.name}
           </Card>
           )}
       </div>
    );
};

export default CouchesBar;