import { v4 } from "uuid";

const ACTIONS = {
    ADD_TODO: "add-todo",
    EDIT_TODO: "edit-todo",
    DELETE_TODO: "delete-todo",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                { id: v4(), task: action.task, completed: false },
            ];
            break;
        case ACTIONS.EDIT_TODO:
            break;
        case ACTIONS.DELETE_TODO:
            break;
        default:
            return state;
    }

    return state;
};

export default reducer;
