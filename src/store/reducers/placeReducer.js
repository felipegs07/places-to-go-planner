const initState = {
    places: []
}

const placeReducer = (state = initState, action) => {
    if (action.type === 'CREATE_PLACE'){
        console.log('created tour on reducer', action.payload);
        return {
            ...state,
            place: {
                title: action.payload.title,
                adress: action.payload.adress,
                date: action.payload.date
            }
        };
    }
    if (action.type === 'CREATE_PLACE_ERROR'){
        console.log('Create tour error', action.err);
        return state;
    }

    return state;
}

export default placeReducer;