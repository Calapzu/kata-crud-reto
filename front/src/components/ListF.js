import React, { useRef, useState, useContext } from 'react';
import Store from '../Store/Store';

import { useForm } from "react-hook-form";


const HOST_API = "http://localhost:8080/api";

const ListF = ({ category }) => {
    const formRef = useRef(null);
    const { dispatch, state: { listF, todo } } = useContext(Store);
    const item = listF.item;
    const [state, setState] = useState(item);

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log("Estate name: " + state)
    console.log("Estate Todo: " + todo)

    const onSubmit = (event) => {
        event.target.reset()
    }


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
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="name"
                    placeholder="Lista de TO-DO ListF"
                    {
                    ...register("name", {
                        required: {
                            value: true,
                            message: 'Campo obligatorio',

                        },
                        minLength: {
                            value: 2,
                            message: 'Minimo dos letras'
                        }
                    })
                    }
                    onChange={(event) => {
                        setState({ ...state, name: event.target.value })
                    }}
                ></input>
                {errors.name?.type === 'required' && "Campo obligatorio"}
                <button id="btn" onClick={onAdd}>Nueva Lista F</button>
            </form>
        </div >
    );
}

export default ListF;