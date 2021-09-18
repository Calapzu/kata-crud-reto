import React, { useContext, useEffect } from 'react';
import Store from '../Store/Store';
import Form from './Form';



import List from './List';


const HOST_API = "http://localhost:8080/api/";

const ListG = () => {

    const { dispatch, state: { listF, todo } } = useContext(Store);
    const currentList = listF.list;

    console.log("Este es el log:" + todo)

    useEffect(() => {
        fetch(HOST_API + "/ListF")
            .then(response => response.json())
            .then(() => {
                dispatch({ type: "list-master-list",})
            })
    }, [dispatch]);

    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/ListF", {
            method: "DELETE"
        }).then(() => {
            dispatch({ type: "delete-master-list", id })
        })
    };
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