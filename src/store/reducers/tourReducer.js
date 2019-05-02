const initState = {
    tours: [
        {id: '1', title: 'EUA 2019'},
        {id: '2', title: 'Carnaval 2019'},
        {id: '3', title: 'França, Espanha 2019'},
        {id: '4', title: 'São Paulo 2019'}
    ]
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