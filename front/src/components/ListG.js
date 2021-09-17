import React, { useContext, useEffect } from 'react';
import Store from '../Store/Store';
import Form from './Form';

import List from './List';


const HOST_API = "http://localhost:8080/api/";

const ListG = () => {

    // const formRef = useRef(null);
    const { dispatch, state: { listF, todo } } = useContext(Store);
    const currentList = listF.list;

    console.log("Este es el log:" + todo)
    //const item = todo.item;
    // const [state, setState] = useState(item);

    useEffect(() => {
        fetch(HOST_API + "/ListF")
            .then(response => response.json())
            .then(() => {
                dispatch({ type: "list-master-list",})
            })
    }, [dispatch]);

    /*const onAdd = (event) => {
        event.preventDefault();

        const request = {
            name: state.name,
            id: null
        };


        fetch(HOST_API + "/grouplist/save", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((todo) => {
                dispatch({ type: "add-grouplist", item: todo });
                setState({ name: "" });
                formRef.current.reset();
            });
    }*/

    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/ListF", {
            method: "DELETE"
        }).then(() => {
            dispatch({ type: "delete-master-list", id })
        })
    };

    /*const onEdit = (todo) => {
        dispatch({ type: "edit-item", item: todo })
    };*/

    /*const onChange = (event, todo) => {
        const request = {
            name: todo.name,
            id: todo.id,
            completed: event.target.checked
        };
        fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "update-item", item: todo });
            });
    };

    const decorationDone = {
        textDecoration: 'line-through'
    }*/

    return (
        <div>
            {
                currentList ? currentList.map((category) => {
                    return (
                        <div className="master-container" key={category.id}>
                            <div className="master-header">
                                <h2 className="master-title">{category.name}</h2>
                                <button className="button" onClick={() => onDelete(category.id)}>Eliminar</button>
                            </div>
                            <Form categoryId={category.id} />
                            <List categoryId={category.id} todo={category.TodoDto} />
      
                        </div>
                    )

                }) : < p > Lista Vacia</p >
                

            }
        </div>
    )

}

export default ListG;