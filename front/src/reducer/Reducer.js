
export function reducer(state, action) {
    switch (action.type) {
        case 'update-item':
            const todoUpItem = state.todo;
            const listUpdateEdit = todoUpItem.list.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                }
                return item;
            });
            todoUpItem.list = listUpdateEdit;
            todoUpItem.item = {};
            return { ...state, todo: todoUpItem }
        case 'delete-item':
            const todoUpDelete = state.todo;
            const listUpdate = todoUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            todoUpDelete.list = listUpdate;
            return { ...state, todo: todoUpDelete }
        case 'delete-master-list':
            const masterListUpDelete = state.listF;
            const masterListUpdated = masterListUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            masterListUpDelete.list = masterListUpdated;
            return { ...state, listF: masterListUpDelete }
        case 'update-list':
            const todoUpList = state.todo;
            todoUpList.list = action.list;
            return { ...state, todo: todoUpList }
        case 'list-master-list':
            const masterUpList = state.listF;
            masterUpList.list = action.list;
            return { ...state, listF: masterUpList }
        case 'edit-item':
            const todoUpEdit = state.todo;
            todoUpEdit.item = action.item;
            return { ...state, todo: todoUpEdit }
        case 'add-item':
            const todoUp = state.todo.list;
            todoUp.push(action.item);
            return { ...state, todo: { list: todoUp, item: {} } }
        case 'add-master-list':
            const masterListUp = state.listF.list;
            masterListUp.push(action.item);
            return { ...state, listF: { list: masterListUp, item: {} } }

        default:
            return state;
    }
}




