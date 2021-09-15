import React from 'react';

const TablePrincipal = () => {
    return (
        <form ref={formRef}>
            <input
                type="text"
                name="name"
                placeholder="¿Qué piensas hacer hoy?"
                defaultValue={item.name}
                onChange={(event) => {
                    setState({ ...state, name: event.target.value })
                }}  ></input>
            {item.id && <button id="btn" onClick={onEdit}>Actualizar</button>}
            {!item.id && <button id="btn" onClick={onAdd}>Crear</button>}
        </form>
    );
}

export default TablePrincipal;