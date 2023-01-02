import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const SidebarTrainings = observer(() => {
    const {training} = useContext(Context)
    return (
            <ListGroup>
                {training.kinds.map(kind =>
                    <ListGroupItem key={kind.id} onClick={ () => training.setSelectedKind(kind)}
                    active={kind.id === training.selectedKinds.id}
                    style={{cursor: "pointer"}}
                    >
                        {kind.name}
                    </ListGroupItem>
                    )}

            </ListGroup>
    );
});

export default SidebarTrainings;