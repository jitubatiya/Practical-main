
const initalState = {
    people: [],
    data: null
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "data_change":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
export default reducer;
