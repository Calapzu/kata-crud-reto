import React, { useRef, useState, useContext } from 'react';
import Store from '../Store/Store';

const HOST_API = "http://localhost:8080/api";

const ListF = () => {
    const formRef = useRef(null);
    const { dispatch, state: { listF, todo } } = useContext(Store);
    const item = listF.item;
    const [state, setState] = useState(item);

    console.log("Estate name: " + state)
    console.log("Estate Todo: " + todo)

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            name: state,
            id: null
        };


        fetch(HOST_API + "/ListF/save", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((listF) => {
                dispatch({ type: "add-master-list", item: listF });
                setState({ name: "" });
                formRef.current.reset();
            });
    }

    return (
        <div>
            <form ref={formRef}>
                <input
                    type="text"
                    name="name"
                    placeholder="Lista de TO-DO"
                    onChange={(event) => {
                        setState({ ...state, name: event.target.value })
                    }}
                ></input>
                <button onClick={onAdd}>Nueva Lista</button>
            </form>
        </div >
    );
}

export default ListF;