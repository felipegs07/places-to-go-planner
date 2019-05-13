const initState = {
    tours: []
}

const tourReducer = (state = initState, action) => {
    if (action.type === 'CREATE_TOUR'){
        console.log('created tour on reducer', action.payload);
        return state;
    }
    if (action.type === 'CREATE_TOUR_ERROR'){
        console.log('Create tour error', action.err);
        return state;
    }

    return state;
}

export default tourReducer;