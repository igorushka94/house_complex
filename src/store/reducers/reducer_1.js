

function reducer_1(state, action) {

    switch(action.type) {
        case "ACTION_1": return { value: action.value };
        case "ACTION_2": return { value: action.value };

        default:
            return state;
    }
}
